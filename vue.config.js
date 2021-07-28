let path = require('path');

function resolve (dir) {
    path.join(__dirname, dir);
}
module.exports = {
    // 选项
    //  基本路径
    publicPath: "./",
    //  构建时的输出目录
    outputDir: "dist",
    //  放置静态资源的目录
    assetsDir: "static",
    //  html 的输出路径
    indexPath: "index.html",
    // 配置 webpack-dev-server 行为。
    devServer: {
        // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
        proxy: {
            '/api': {
                target: "https://api.douban.com",
                changeOrigin: true,
                // secure: false,
                pathRewrite: {
                    "^/api": ""
                }
            },
        }, 
    },
    configureWebpack: {
        resolve: {
            extensions: ['js', 'vue'],
            alias: {
                '@': resolve('src')
            }
        }
    },
    css: {
        loaderOptions: {
          css: {},
          scss: {
            // sass-loader v7+  data   之前的是prependData
            data: `@import '~@/style/variables.scss';`
          },
          postcss: {
            plugins: [
              require('postcss-px2rem')({
                remUnit: 37.5
              })
            ]
          }
        }
      },
}
