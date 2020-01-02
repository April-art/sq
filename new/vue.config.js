
const webpack = require("webpack")
module.exports = {
  // 额外拓展
  configureWebpack:{
    devServer:{
      //mock接口编写的地方
      // before(app){
      //   app.get('请求地址',(req,res)=>{
      //     res.json({
   
      //     })
      //   })
      // },
      host: 'localhost',
      //改端口
       port: 8080, 
       
       // 引入jq
      },
      plugins:[
        new webpack.ProvidePlugin({
          $:'jquery',
          jQuery:'jquery',
          "windows.jQuery":"jquery"
        })
      ]
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
 

}
