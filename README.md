## 仿网易云音乐

### 后台启动
$ PORT=4000 node app.js

### 项目启动
yarn start


### 目录结构
├── node_modules              // 项目依赖
├── dist               		 // 项目build目录
├── index.html          	     // 项目入口文件
├── package.json      		 // 项目配置文件
├── src                		 // 生产目录
│   ├── api       			 // api请求
│   ├── images               // 图片资源
│   ├── components         	 // 公共的组件
│   ├── containers     		 // 各种组件
│   ├── store                //redux
│   └── index.js       	     // 项目入口文件

### 技术栈
前端：react+react-router-dom+axios+es6+webpack;
后端：感谢网络提供的网易官方后台；

### 实现的功能
- 音乐播放：包括播放动画、歌曲切换
- 登录注册：登录、注册
- 首页效果及跳转
- 歌单及歌单详情
- 获取最近播放记录
