## 仿网易云音乐

### 后台启动
$ PORT=4000 node app.js

### 项目启动
yarn start

### 目录结构
├── node_modules              // 项目依赖<br>
├── dist               		 // 项目build目录<br>
├── index.html          	     // 项目入口文件<br>
├── package.json      		 // 项目配置文件<br>
├── src                		 // 生产目录<br>
│   ├── api       			 // api请求<br>
│   ├── images               // 图片资源<br>
│   ├── components         	 // 公共的组件<br>
│   ├── containers     		 // 各种组件<br>
│   ├── store                //redux<br>
│   └── index.js       	     // 项目入口文件<br>

### 技术栈
前端：react+react-router-dom+axios+es6+webpack<br>
后端：感谢网络提供的网易官方后台

### 实现的功能
- 音乐播放：包括播放动画、歌曲切换
- 登录注册：登录、注册
- 首页效果及跳转
- 歌单及歌单详情
- 获取最近播放记录

### 关于样式加载不出来的问题
用react的create-react-app 安装项目之后，发现不能编译less文件，所以经过大家的探讨和上网所搜，改变了两个webpack文件的配置，在node_modules文件下的React-scripts中找到webpack.config.dev.js和webpack.config.prod.js文件进行替换即可。<br>
注：在替换之前必须保证所有的模块都已经安装，然后再替换文件。如果替换文件之后再安装模块，会导致新替换的文件失效
