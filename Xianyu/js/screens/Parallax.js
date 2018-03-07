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
 *     Initial: 2018/03/06      Lin Hao
 */

import React, { Component } from 'react';
import { View, Image, StatusBar } from 'react-native';
import { Container, Text } from 'native-base';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

export default class Parallax extends Component {
  render() {
    return (
      <Container>
        <StatusBar hidden={false} barStyle="light-content" />
        <ParallaxScrollView
          style={{ flex: 1 }}
          renderBackground={() => <Image source={{ uri: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2028674938,3385518483&fm=27&gp=0.jpg", height: 350 }} />}
          renderStickyHeader={() => (
            <View style={styles.stickyTitle}>
              <Text style={styles.stickyTitleText}>Sticky Title</Text>
            </View>
          )}
          parallaxHeaderHeight={ 350 }
          stickyHeaderHeight={ 64 }>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>Hello!</Text>
          </View>
        </ParallaxScrollView>
      </Container>
    );
  }
}

const styles = {
  stickyTitle: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },

  stickyTitleText: {
    color: 'white',
    fontSize: 20
  }
}
