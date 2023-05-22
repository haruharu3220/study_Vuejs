var app = new Vue({
  //オプション
  el: "#app",
  data: {
    message: "初期メッセージ",
    age: "18",
    list: ["りんご", "バナナ", "いちご"],
    show: true,
  },
  methods: {
    handleClick: function (event) {
      alert(event.target); //[object HTMLButtonElement]
    },
  },
});

console.log(app.message);
console.log(app.age);
