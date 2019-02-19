// custom-tab-bar/index.js
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    selected: 0,
    color: "#47505b",
    selectedColor: "#00d853",
    backgroundColor: "#FFF",
    borderStyle: "white",
    list: [{
        iconPath: "/pages/images/tabBar/shouye.png",
        selectedIconPath: "/pages/images/tabBar/shouye_i.png",
        pagePath: "/pages/index/index",
        text: "首页"
      },
      {
        iconPath: "/pages/images/tabBar/zhuanjia.png",
        selectedIconPath: "/pages/images/tabBar/zhuanjia_i.png",
        pagePath: "/pages/expert/index",
        text: "专家"
      },
      {
        iconPath: "/pages/images/tabBar/wenda.png",
        selectedIconPath: "/pages/images/tabBar/wenda_i.png",
        pagePath: "/pages/release/index",
        text: "发布"
      },
      {
        iconPath: "/pages/images/tabBar/wenda.png",
        selectedIconPath: "/pages/images/tabBar/wenda_i.png",
        pagePath: "/pages/forum/forum",
        text: "问答"
      },
      {
        iconPath: "/pages/images/tabBar/wode.png",
        selectedIconPath: "/pages/images/tabBar/wode_i.png",
        pagePath: "/pages/user/user",
        text: "我的"
      }
    ],
  },
  methods: {
    switchTab(e) {
      //console.log(e);
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url
      })
      this.setData({
        selected: data.index
      })
      //setTimeout(this._animation(e), 500)
    },
    _animation(e) {
      var anmiaton = e.currentTarget.dataset.class;
      var that = this;
      that.setData({
        animation: anmiaton
      })
      setTimeout(function () {
        that.setData({
          animation: ''
        })
      }, 1000)
    }
  }
})