export default {
  pages: [
    'pages/index/index',
    'pages/wrong-question/index',
    'pages/game/index',
    'pages/my/index',
  ],
  subpackages: [
    {
      "root": "subpackage",
      "pages": [
        "pages/question-type/index",
        "pages/answer/index"
      ]
    }
  ],
  // 注意：需要在pages目录下面新建一个目录作为分包使用，不然在构建小程序的时候会报错
  subPackages: [
    {
      "root": "subpackage",
      "pages": [
        "pages/question-type/index",
        "pages/answer/index"
      ]
    }
  ],
  tabBar: {
    color: '#000000',
    selectedColor: '#ffffff',
    backgroundColor: '#F20775',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '课堂',
        iconPath: 'assets/tabbar-icon/index.png',
        selectedIconPath: 'assets/tabbar-icon/index-active.png',
      },
      {
        pagePath: 'pages/wrong-question/index',
        text: '错题',
        iconPath: 'assets/tabbar-icon/wrong-question.png',
        selectedIconPath: 'assets/tabbar-icon/wrong-question-active.png',
      },
      {
        pagePath: 'pages/game/index',
        text: '游戏',
        iconPath: 'assets/tabbar-icon/game.png',
        selectedIconPath: 'assets/tabbar-icon/game-active.png',
      },
      {
        pagePath: 'pages/my/index',
        text: '我的',
        iconPath: 'assets/tabbar-icon/my.png',
        selectedIconPath: 'assets/tabbar-icon/my-active.png',
      }
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
