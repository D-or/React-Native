/*
 * MIT License
 *
 * Copyright (c) 2017 Lin Hao.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the 'Software'), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*
 * Revision History:
 *     Initial: 2018/03/02      Lin Hao
 */

"use strict";

import EventEmitter from "events";

import WS from "./ws";
import { DeviceEventEmitter } from "react-native";

const INTERVAL = 10 * 1000;
const MAX = 80 * 1000;
const HEART_BEAT_INTERVAL = 40 * 1000; //心跳包间隔时间
const RANDOM = 1000;
const NUM_ADD = 1;
const Config = {
  Socket: {
    version: 1.0,
    TypeHeartbeat: 4096,
    TypeLogin: 4098,
    TypeLogout: 4099,
    TypeUTUMsg: 4100,
    SqlId: 0,
    ReceiveMsg: "ReceiveMessages",
    title: "SocketConnect",
    url: "ws://localhost:1234/chat/join"
  }
}
const Events = {
  Android: {
    HardwareBackPress: "hardwareBackPress"
  },
  WebSocket: {
    Connect: "webSocketDoConnect",
    Disconnected: "webSocketDisconnected"
  }
};

let wsEvent = new EventEmitter();
let reconnectionInterval = INTERVAL;

function sendHeartBeat(id) {
  setInterval(() => {
    //发送心跳包
    WS.send(Config.Socket.TypeHeartbeat, 0, 0, 0, id);
  }, HEART_BEAT_INTERVAL);
}

// WebSocket callback handlers
function onOpen() {
  console.log("open");
  sendHeartBeat("1");
  reconnectionInterval = INTERVAL;
}

function onError() {
  // console.log("err");
  if (reconnectionInterval < MAX)
    reconnectionInterval *= 2;

  webSocketOnDisconnected();
}

function onClose() {
  console.log("close");
}

function onMessage(msg) {
  //msg.data
  let data = JSON.parse(msg.data);
  console.log(data);
}

function initEvents() {
  // 连接事件
  wsEvent.on(Events.WebSocket.Connect, () => {
    WS.connect(Config.Socket.url, {
      onopen: onOpen, //认证
      onmessage: onMessage,
      onerror: onError,
      onclose: onClose
    });
  });

  // 连接断开事件
  wsEvent.on(Events.WebSocket.Disconnected, () => {
    setInterval(webSocketConnect, reconnectionInterval);
  });
}

// Event Emitter
function webSocketConnect() {
  wsEvent.emit(Events.WebSocket.Connect);
}

function webSocketOnDisconnected() {
  wsEvent.emit(Events.WebSocket.Disconnected);
}

const wsConnect = {
  init: initEvents,
  connect: webSocketConnect,
  disConnect: webSocketOnDisconnected
};

export default wsConnect;
