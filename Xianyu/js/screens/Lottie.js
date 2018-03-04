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
 *     Initial: 2018/01/23      Lin Hao
 */

import React, { Component } from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Title, Right, Content } from 'native-base';
import LottieView from 'lottie-react-native';

export default class Lottie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0.02),
      opened: false
    };
  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Lottie</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <TouchableOpacity onPress={() => this.onChange()}>
            <LottieView
              style={{ height: 100, width: 100, backgroundColor: "#999999" }}
              source={require('../src/lottie/toggle_switch.json')}
              progress={this.state.progress}
            />
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }

  onChange() {
    if (this.state.opened) {
      Animated.timing(this.state.progress, {
        toValue: 0.76,
        duration: 1000
      }).start();
    } else {
      Animated.timing(this.state.progress, {
        toValue: 0.43,
        duration: 1000
      }).start();
    }

    this.setState({
      opened: !this.state.opened
    })
  }
}
