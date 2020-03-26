module.exports = {
  //publicPath: '/', //根路径
  outputDir: "dist", //构建输出目录
  assetsDir: "assets", //静态资源目录(js,css,img,fonts)
  lintOnSave: false, //是否开启eslint保存检测，有效值：true||false||'error'
  devServer: {
    open: true, //自动打开浏览器
    //host: 'localhost', //默认域名
    //port: '8888', //默认端口号
    https: false, //是否开启https
    hotOnly: false, //热更新
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理

    // 配置多个代理
    proxy: {
      "/api": {
        target: "https://rice.gisea.cn",
        ws: true, // 是否代理websockets
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        secure: false,
        pathRewrite: {
          "^/api": "" //这里理解成用'/api'代替target里面的地址,比如我要调用'http://40.00.100.100:3002/user/add'，直接写'/api/user/add'即可
        }
      }
    }
  },
  transpileDependencies: ["vuetify"]
};
