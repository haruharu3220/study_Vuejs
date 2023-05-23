var state = { count: 0 };
var sub = new Vue({
  //オプション
  el: "#sub", //ここをHTMLのidになる
  data: {
    list: [
      { id: 1, name: "スライム", hp: 100 },
      { id: 2, name: "ゴブリン", hp: 200 },
      { id: 3, name: "ドラゴン", hp: 300 },
    ],
  },
});
