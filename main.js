var state = { count: 0 };
var app = new Vue({
  //オプション
  el: "#app",
  data: {
    count: 0,
    message: {
      value: "Vue.js",
    },
    list: ["りんご", "バナナ", "いちご"],
    num: 1,
  },
  methods: {
    increment: function () {
      this.count += 1;
    },
  },
});
state.count++;
