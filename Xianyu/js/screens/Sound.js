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
 *     Initial: 2018/01/28      Lin Hao
 */

import React, { Component } from 'react';
import { Container, Header, Left, Body, Title, Right, Content, Button, Text } from 'native-base';
import Sounder from 'react-native-sound';

var whoosh = new Sounder('X.mp3', Sounder.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);

    return;
  }
  console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
});

export default class Sound extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Sound</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.content}>
          <Button block success onPress={() => this.OnPlay()}>
            <Text>播放</Text>
          </Button>
          <Button block info onPress={() => this.OnStop()} style={{ marginTop: 20 }}>
            <Text>停止</Text>            
          </Button>
        </Content>
      </Container>
    );
  }

  OnPlay() {
    Sounder.setCategory('Playback');
    whoosh.setNumberOfLoops(-1);

    whoosh.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
        whoosh.reset();
      }
    });
  }

  OnStop() {
    whoosh.stop(() => {
    //   whoosh.play();
    });
  }
}

const styles = {
  content: {
    padding: 10
  }
}
