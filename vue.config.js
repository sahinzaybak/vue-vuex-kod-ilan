const path = require('path')

//SVG'leri icon gibi alma modülümüzü tanıttık. (SVG Sprite Loader)
const SpritePlugin = require('svg-sprite-loader/plugin')

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(path.resolve(__dirname, './src/assets/icons'))
      .end()

    config.module
      .rule('sprite')
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, './src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        extract: true,
        spriteFilename: './icon/icons.svg'
      })
  },
  configureWebpack: {
    plugins: [
      new SpritePlugin({
        plainSprite: true
      })
    ]
  }
}
