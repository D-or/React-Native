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
 *     Initial: 2018/01/25      Lin Hao
 */

import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Title, Right, Content } from 'native-base';
import ImageViewer from 'react-native-image-zoom-viewer';

const images = [
  {
    url: "https://www.baidu.com/img/bd_logo1.png"
  }, {
    url: "https://www.baidu.com/img/bd_logo1.png"
  }, {
    url: "https://www.baidu.com/img/bd_logo1.png"
  }, {
    url: "https://www.baidu.com/img/bd_logo1.png"
  }
];

export default class Images extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>ImageViewer</Title>
          </Body>
          <Right />
        </Header>
        {
          this.state.show ?
            <ImageViewer
              style={{ height: "100%" }}
              imageUrls={images}
              onClick={() => this.onClick()}
            />
            :
            <Content>
              {
                images.map((item, index) => {
                  return (
                    <TouchableOpacity key={index} onPress={() => this.onShow()}>
                      <Image source={{ uri: item.url }} style={{ height: 200, backgroundColor: "#cccccc", margin: 10, borderRadius: 4 }} />
                    </TouchableOpacity>
                  );
                })
              }
            </Content>
        }
      </Container>
    );
  }

  onShow() {
    this.setState({
      show: true
    })
  }

  onClick() {
    this.setState({
      show: false
    })
  }
}
