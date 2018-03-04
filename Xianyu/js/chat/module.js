/**
 * Created by txiaozhe on 13/04/2017.
 */
let moduleServer = {
  v: 101,
  t: 102,
  b: {
    fr: 10001,
    to: "10002",
    co: "发送的消息"
  }
};

let moduleLib = {
  _id: 1,
  text: "Hello developer",
  createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
  user: {
    _id: "ling",
    name: "React Native",
    avatar: "https://facebook.github.io/react/img/logo_og.png",
  }
};

let moduleSave = {

  _id: 1,
  text: "Hello developer",
  createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
  user: {
    from: "React Native",
    to: ""
  }
};

let mo = [
  {
    name: "tang", //消息发送者
    to: "ling", //消息接收者
    messages: [
      {
        _id: 1, //消息唯一标识
        text: "Hello developer",
        createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0))
      }
    ]
  }
];