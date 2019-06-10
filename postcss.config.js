module.exports = () => ({
  plugins: {
    'postcss-import': {}
    , 'postcss-mixins': {}
    , 'autoprefixer': {
      grid: "autoplace"
    }
    , 'precss': {}
    , 'cssnano': {}
  }
})
