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

import _ from "lodash";

let ws;
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
    url: "ws://localhost:1234/join"
  },
}

function connect(url, {onopen, onmessage, onerror, onclose}) {
  if (!onopen || !onmessage || !onerror || !onclose) {
    return undefined;
  }

  if (!_.isFunction(onopen) || !_.isFunction(onmessage) || !_.isFunction(onerror) || !_.isFunction(onclose)) {
    return undefined;
  }

  ws = new WebSocket(url);

  ws.onopen = onopen;
  ws.onmessage = onmessage;
  ws.onerror = onerror;
  ws.onclose = onclose;

  return ws;
}

function send(type, from, to, content, id) {
  let msg = {
    v : Config.Socket.version,
    t : type,
    b : {
      uid: {
        mgo_id: id,
        sql_id: Config.Socket.SqlId
      }
    }
  };

  if (type === Config.Socket.TypeUTUMsg) {
    msg = {
      v : Config.Socket.version,
      t : type,
      b : {
        fr: {
          mgo_id: from,
          sql_id: Config.Socket.SqlId
        },
        to : {
          mgo_id: to,
          sql_id: Config.Socket.SqlId
        },
        co: content
      }
    };
  }
  ws.send(JSON.stringify(msg));
}

const WS = {
  connect: connect,
  send: send
};

export default WS;
