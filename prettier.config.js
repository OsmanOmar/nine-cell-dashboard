// prettier.config.js or .prettierrc.js
module.exports = {
  singleQuote: true,
  'vue/html-self-closing': [
    'error',
    {
      html: {
        void: 'never',
        normal: 'always',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }
  ]
};
