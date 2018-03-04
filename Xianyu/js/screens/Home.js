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
 *     Initial: 2018/01/09      Lin Hao
 */

import React, { Component } from 'react';
import { TouchableOpacity, ScrollView, RefreshControl, View } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Button, Text, List, ListItem } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

import { HomeList } from "../src/homeList";
// import wsConnect from '../chat/connection';
var socket = require('socket.io-client')('http://127.0.0.1:7001/chat');

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      isRefreshing: false
    }
  }

  componentWillMount() {
    // wsConnect.init();
    // wsConnect.connect();
    console.log("------------");
    socket.on('connect', () => {
      console.log('connect!');
      socket.emit('chat', 'hello world!');
    });
    socket.on('event', (data) => {
      console.log(data);
    });
    socket.on('disconnect', (e) => {
      console.log(e);
    });
    socket.on('res', msg => {
      console.log('res from server: %s!', msg);
    });
  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>主页</Title>
          </Body>
          <Right>
            <TouchableOpacity onPress={() => this.onReload()} style={{ padding: 5 }}>
              <Icon name="ios-refresh-outline" size={30} />
            </TouchableOpacity>
          </Right>
        </Header>
        <ScrollView
          style={{ flex: 1 }}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={() => this.onRefresh()}
              title={this.state.isRefreshing ? "正在加载..." : "^_^"}
            />
          }>
          {
            HomeList.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.75}
                  key={index}
                  onPress={() => this.onItem(item.name)}
                  style={styles.listItem}>
                  <Text>{item.name}</Text>
                  <Icon name="ios-arrow-dropright-outline" size={26} />
                </TouchableOpacity>
              );
            })
          }
        </ScrollView>
      </Container>
    );
  }

  onRefresh() {
    this.setState({
      isRefreshing: true
    })

    setTimeout(() => {
      this.setState({
        isRefreshing: false
      })
    }, 2000)
  }

  onReload() {
  }

  onItem(name) {
    this.props.navigation.navigate(name)
  }
}

const styles = {
  listItem: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    padding: 16,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#dddddd"
  }
}
