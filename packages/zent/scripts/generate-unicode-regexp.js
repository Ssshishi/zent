/**
 * RegExp `/u` is a new feature, some browsers may not support it
 * `regexpu-core` is used to convert this new syntax to old syntax.
 */
const rewritePattern = require('regexpu-core');
const fs = require('fs');
const path = require('path');

const CJK = [
  // Chinese punctuation
  0x00b7, //·
  0x00d7, //×

  // [0x2000, 0x206F] https://unicode.org/charts/PDF/U2000.pdf General Punctuation
  0x2014, //—
  0x2018, //‘
  0x2019, //’
  0x201c, //“
  0x201d, //”
  0x2026, //…

  [0x2e80, 0x2eff], // CJK Radicals Supplement
  [0x3000, 0x303f], // CJK Symbols and Punctuation
  [0x3040, 0x309f], // Hiragana
  [0x30a0, 0x30ff], // Katakana
  [0x31c0, 0x31ef], // CJK Strokes
  [0x3200, 0x32ff], // Enclosed CJK Letters and Months
  [0xff00, 0xffef], // Halfwidth and Fullwidth Forms

  [0x4e00, 0x9fff], // CJK Unified Ideographs
  [0x3400, 0x4dbf], // CJK Unified Ideographs Extension A
  [0x20000, 0x2a6df], // CJK Unified Ideographs Extension B
  [0x2a700, 0x2b73f], // CJK Unified Ideographs Extension C
  [0x2b740, 0x2b81f], // CJK Unified Ideographs Extension D
  [0x2b820, 0x2ceaf], // CJK Unified Ideographs Extension E
  [0x2ceb0, 0x2ebef], // CJK Unified Ideographs Extension F
  [0x30000, 0x3134f], // CJK Unified Ideographs Extension G
  [0xf900, 0xfaff], // CJK Compatibility Ideographs

  [0x3300, 0x33ff], // https://en.wikipedia.org/wiki/CJK_Compatibility
  [0xfe30, 0xfe4f], // https://en.wikipedia.org/wiki/CJK_Compatibility_Forms
  [0xf900, 0xfaff], // https://en.wikipedia.org/wiki/CJK_Compatibility_Ideographs
  [0x2f800, 0x2fa1f], // https://en.wikipedia.org/wiki/CJK_Compatibility_Ideographs_Supplement
];

// Don't use unicode property escapes, it's broken after piping through `regexpu`
const EMOJI_REGEXP = (function () {
  // Modified from https://github.com/lodash/lodash/blob/master/.internal/unicodeWords.js
  /**
   * The MIT License
   *
   * Copyright JS Foundation and other contributors <https://js.foundation/>
   *
   * Based on Underscore.js, copyright Jeremy Ashkenas,
   * DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/> *
   * This software consists of voluntary contributions made by many
   * individuals. For exact contribution history, see the revision history
   * available at https://github.com/lodash/lodash
   */
  /** Used to compose unicode character classes. */
  const rsAstralRange = '\\ud800-\\udfff';
  const rsComboMarksRange = '\\u0300-\\u036f';
  const reComboHalfMarksRange = '\\ufe20-\\ufe2f';
  const rsComboSymbolsRange = '\\u20d0-\\u20ff';
  const rsComboMarksExtendedRange = '\\u1ab0-\\u1aff';
  const rsComboMarksSupplementRange = '\\u1dc0-\\u1dff';
  const rsComboRange =
    rsComboMarksRange +
    reComboHalfMarksRange +
    rsComboSymbolsRange +
    rsComboMarksExtendedRange +
    rsComboMarksSupplementRange;
  const rsDingbatRange = '\\u2700-\\u27bf';
  const rsVarRange = '\\ufe0e\\ufe0f';

  /** Used to compose unicode capture groups. */
  const rsCombo = `[${rsComboRange}]`;
  const rsDingbat = `[${rsDingbatRange}]`;
  const rsFitz = '\\ud83c[\\udffb-\\udfff]';
  const rsModifier = `(?:${rsCombo}|${rsFitz})`;
  const rsNonAstral = `[^${rsAstralRange}]`;
  const rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
  const rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
  const rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  const reOptMod = `${rsModifier}?`;
  const rsOptVar = `[${rsVarRange}]?`;
  const rsOptJoin = `(?:${rsZWJ}(?:${[rsNonAstral, rsRegional, rsSurrPair].join(
    '|'
  )})${rsOptVar + reOptMod})*`;
  const rsSeq = rsOptVar + reOptMod + rsOptJoin;
  const rsEmoji = `(?:${[rsDingbat, rsRegional, rsSurrPair].join(
    '|'
  )})${rsSeq}`;

  return rsEmoji;
})();

const toUnicodePoint = x => `\\u{${x.toString(16)}}`;

function codegen(name, ranges) {
  let regexp5 = '';
  // ranges is an array of ranges or a regexp string
  if (Array.isArray(ranges)) {
    const regexp6 = ranges
      .map(x => {
        if (typeof x === 'number') {
          return toUnicodePoint(x);
        }

        return `[${x.map(toUnicodePoint).join('-')}]`;
      })
      .join('|');
    regexp5 = rewritePattern(regexp6, 'u');
  } else {
    regexp5 = ranges;
  }

  const code = `// Generated by \`scripts/generate-unicode-regexp.js\`.
// DO NOT EDIT
const ${name.toUpperCase()}_REGEXP = /${regexp5}/;

export function contains${name}(str: string): boolean {
  return ${name.toUpperCase()}_REGEXP.test(str);
}
`;

  fs.writeFileSync(
    path.resolve(__dirname, `../src/utils/unicode/is${name}.ts`),
    code
  );
}

codegen('CJK', CJK);
codegen('Emoji', EMOJI_REGEXP);
