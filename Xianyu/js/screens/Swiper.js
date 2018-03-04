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
import { Image, View } from 'react-native';
import { Container, Header, Left, Body, Title, Right, Content, Text } from 'native-base';
import Carousel from 'react-native-snap-carousel';

import Images from '../src/images';

export default class Swiper extends Component {
  _renderItem({ item }) {
    return (
      <Image source={{ uri: item.uri }} style={styles.image} />
    );
  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Carousel</Title>
          </Body>
          <Right />
        </Header>
        <View style={styles.content}>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={Images}
            renderItem={this._renderItem}
            sliderWidth={375}
            itemWidth={270}
            hasParallaxImages
            loop
            autoplay
            enableMomentum
            autoplayDelay={500}
            autoplayInterval={2000}
          />
        </View>
      </Container>
    );
  }
}

const styles = {
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },

  image: {
    height: 150,
    width: 270,
    borderRadius: 6
  }
}
