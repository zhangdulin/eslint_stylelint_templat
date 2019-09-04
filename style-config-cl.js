/* eslint-disable no-undef */
module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'unit-whitelist': ['em', 'rem', '%', 's', 'px'], // 允许使用的度量单位是 em、rem、%、s、px
    'at-rule-blacklist': string | [],
    'at-rule-empty-line-before': 'always' | 'never',
    'at-rule-name-case': 'lower' | 'upper',
    'at-rule-name-newline-after': 'always' | 'always-multi-line',
    'at-rule-name-space-after': 'always' | 'always-single-line',
    'at-rule-no-unknown': true,
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'always' | 'never',
    'at-rule-whitelist': string | [],
    'block-closing-brace-empty-line-before': 'always-multi-line' | 'never',
    'block-closing-brace-newline-after':
      'always' |
      'always-single-line' |
      'never-single-line' |
      'always-multi-line' |
      'never-multi-line',
    'block-closing-brace-newline-before':
      'always' | 'always-multi-line' | 'never-multi-line',
    'block-closing-brace-space-after':
      'always' |
      'always-single-line' |
      'never-single-line' |
      'always-multi-line' |
      'never-multi-line',
    'block-closing-brace-space-before':
      'always' |
      'never' |
      'always-single-line' |
      'never-single-line' |
      'always-multi-line' |
      'never-multi-line',
    'block-no-empty': true,
    'block-opening-brace-newline-after':
      'always' | 'always-multi-line' | 'never-multi-line',
    'block-opening-brace-newline-before':
      'always' |
      'always-single-line' |
      'never-single-line' |
      'always-multi-line' |
      'never-multi-line',
    'block-opening-brace-space-after':
      'always' |
      'always-single-line' |
      'never-single-line' |
      'always-multi-line' |
      'never-multi-line',
    'block-opening-brace-space-before':
      'always' |
      'always-single-line' |
      'never-single-line' |
      'always-multi-line' |
      'never-multi-line',
    'color-hex-case': 'lower' | 'upper',
    'color-hex-length': 'short' | 'long',
    'color-named': 'always-where-possible' | 'never',
    'color-no-hex': true,
    'color-no-invalid-hex': true,
    'comment-empty-line-before': 'always' | 'never',
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always' | 'never',
    'comment-word-blacklist': string | [],
    'custom-media-pattern': string,
    'custom-property-empty-line-before': 'always' | 'never',
    'custom-property-pattern': string,
    'declaration-bang-space-after': 'always' | 'never',
    'declaration-bang-space-before': 'always' | 'never',
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after':
      'always' | 'always-multi-line' | 'never-multi-line',
    'declaration-block-semicolon-newline-before':
      'always' | 'always-multi-line' | 'never-multi-line',
    'declaration-block-semicolon-space-after':
      'always' | 'never' | 'always-single-line' | 'never-single-line',
    'declaration-block-semicolon-space-before':
      'always' | 'never' | 'always-single-line' | 'never-single-line',
    'declaration-block-single-line-max-declarations': int,
    'declaration-block-trailing-semicolon': 'always' | 'never',
    'declaration-colon-newline-after': 'always' | 'always-multi-line',
    'declaration-colon-space-after': 'always' | 'never' | 'always-single-line',
    'declaration-colon-space-before': 'always' | 'never',
    'declaration-empty-line-before': 'always' | 'never',
    'declaration-no-important': true,
    'declaration-property-unit-blacklist': {},
    'declaration-property-unit-whitelist': {},
    'declaration-property-value-blacklist': {},
    'declaration-property-value-whitelist': {},
    'font-family-name-quotes':
      'always-where-required' |
      'always-where-recommended' |
      'always-unless-keyword',
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'font-weight-notation': 'numeric' | 'named',
    'function-blacklist': string | [],
    'function-calc-no-unspaced-operator': true,
    'function-comma-newline-after':
      'always' | 'always-multi-line' | 'never-multi-line',
    'function-comma-newline-before':
      'always' | 'always-multi-line' | 'never-multi-line',
    'function-comma-space-after':
      'always' | 'never' | 'always-single-line' | 'never-single-line',
    'function-comma-space-before':
      'always' | 'never' | 'always-single-line' | 'never-single-line',
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-max-empty-lines': int,
    'function-name-case': 'lower' | 'upper',
    'function-parentheses-newline-inside':
      'always' | 'always-multi-line' | 'never-multi-line',
    'function-parentheses-space-inside':
      'always' | 'never' | 'always-single-line' | 'never-single-line',
    'function-url-no-scheme-relative': true,
    'function-url-quotes': 'always' | 'never',
    'function-url-scheme-blacklist': string | [],
    'function-url-scheme-whitelist': string | [],
    'function-whitelist': string | [],
    'function-whitespace-after': 'always' | 'never',
    indentation: int | 'tab',
    'keyframe-declaration-no-important': true,
    'keyframes-name-pattern': string,
    'length-zero-no-unit': true,
    linebreaks: 'unix' | 'windows',
    'max-empty-lines': int,
    'max-line-length': int,
    'max-nesting-depth': int,
    'media-feature-colon-space-after': 'always' | 'never',
    'media-feature-colon-space-before': 'always' | 'never',
    'media-feature-name-blacklist': string | [],
    'media-feature-name-case': 'lower' | 'upper',
    'media-feature-name-no-unknown': true,
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-name-value-whitelist': {},
    'media-feature-name-whitelist': string | [],
    'media-feature-parentheses-space-inside': 'always' | 'never',
    'media-feature-range-operator-space-after': 'always' | 'never',
    'media-feature-range-operator-space-before': 'always' | 'never',
    'media-query-list-comma-newline-after':
      'always' | 'always-multi-line' | 'never-multi-line',
    'media-query-list-comma-newline-before':
      'always' | 'always-multi-line' | 'never-multi-line',
    'media-query-list-comma-space-after':
      'always' | 'never' | 'always-single-line' | 'never-single-line',
    'media-query-list-comma-space-before':
      'always' | 'never' | 'always-single-line' | 'never-single-line',
    'no-descending-specificity': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-empty-first-line': true,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'no-missing-end-of-source-newline': true,
    'no-unknown-animations': true,
    'number-leading-zero': 'always' | 'never',
    'number-max-precision': int,
    'number-no-trailing-zeros': true,
    'property-blacklist': string | [],
    'property-case': 'lower' | 'upper',
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,
    'property-whitelist': string | [],
    'rule-empty-line-before':
      'always' | 'never' | 'always-multi-line' | 'never-multi-line',
    'selector-attribute-brackets-space-inside': 'always' | 'never',
    'selector-attribute-operator-blacklist': string | [],
    'selector-attribute-operator-space-after': 'always' | 'never',
    'selector-attribute-operator-space-before': 'always' | 'never',
    'selector-attribute-operator-whitelist': string | [],
    'selector-attribute-quotes': 'always' | 'never',
    'selector-class-pattern': string,
    'selector-combinator-blacklist': string | [],
    'selector-combinator-space-after': 'always' | 'never',
    'selector-combinator-space-before': 'always' | 'never',
    'selector-combinator-whitelist': string | [],
    'selector-descendant-combinator-no-non-space': true,
    'selector-id-pattern': string,
    'selector-list-comma-newline-after':
      'always' | 'always-multi-line' | 'never-multi-line',
    'selector-list-comma-newline-before':
      'always' | 'always-multi-line' | 'never-multi-line',
    'selector-list-comma-space-after':
      'always' | 'never' | 'always-single-line' | 'never-single-line',
    'selector-list-comma-space-before':
      'always' | 'never' | 'always-single-line' | 'never-single-line',
    'selector-max-attribute': int,
    'selector-max-class': int,
    'selector-max-combinators': int,
    'selector-max-compound-selectors': int,
    'selector-max-empty-lines': int,
    'selector-max-id': int,
    'selector-max-pseudo-class': int,
    'selector-max-specificity': string,
    'selector-max-type': int,
    'selector-max-universal': int,
    'selector-nested-pattern': string,
    'selector-no-qualifying-type': true,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-blacklist': string | [],
    'selector-pseudo-class-case': 'lower' | 'upper',
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-class-parentheses-space-inside': 'always' | 'never',
    'selector-pseudo-class-whitelist': string | [],
    'selector-pseudo-element-blacklist': string | [],
    'selector-pseudo-element-case': 'lower' | 'upper',
    'selector-pseudo-element-colon-notation': 'single' | 'double',
    'selector-pseudo-element-no-unknown': true,
    'selector-pseudo-element-whitelist': string | [],
    'selector-type-case': 'lower' | 'upper',
    'selector-type-no-unknown': true,
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': true,
    'string-quotes': 'single' | 'double',
    'time-min-milliseconds': int,
    'unit-blacklist': string | [],
    'unit-case': 'lower' | 'upper',
    'unit-no-unknown': true,
    'value-keyword-case': 'lower' | 'upper',
    'value-list-comma-newline-after':
      'always' | 'always-multi-line' | 'never-multi-line',
    'value-list-comma-newline-before':
      'always' | 'always-multi-line' | 'never-multi-line',
    'value-list-comma-space-after':
      'always' | 'never' | 'always-single-line' | 'never-single-line',
    'value-list-comma-space-before':
      'always' | 'never' | 'always-single-line' | 'never-single-line',
    'value-list-max-empty-lines': int,
    'value-no-vendor-prefix': true
  }
};
