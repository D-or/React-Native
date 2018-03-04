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
 *     Initial: 2018/02/19      Lin Hao
 */

import React, { Component } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { Container, Header, Left, Body, Title, Right, Content, Button, Text, Icon } from 'native-base';
import Video from 'react-native-video';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paused: true,
      time: "0",
      duration: 0
    };

    this.onLoad = this.onLoad.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.onError = this.onError.bind(this);
  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Video</Title>
          </Body>
          <Right>
            <TouchableOpacity onPress={() => { this.player.presentFullscreenPlayer() }}>
              <Icon name="expand" />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content style={styles.content}>
          <TouchableOpacity onPress={() => this.setState({ paused: !this.state.paused })}>
            <Video
              source={require("../src/video/mi.mp4")}         // Can be a URL or a local file.
              ref={(ref) => { this.player = ref }}            // Store reference
              rate={1.0}                                      // 0 is paused, 1 is normal.
              volume={1.0}                                    // 0 is muted, 1 is normal.
              muted={true}                                    // Mutes the audio entirely.
              paused={this.state.paused}                      // Pauses playback entirely.
              resizeMode="cover"                              // Fill the whole screen at aspect ratio.*
              repeat={true}                                   // Repeat forever.
              playInBackground={false}                        // Audio continues to play when app entering background.
              playWhenInactive={false}                        // [iOS] Video continues to play when control or notification center are shown.
              ignoreSilentSwitch={"obey"}                     // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
              progressUpdateInterval={250.0}                  // [iOS] Interval to fire onProgress (default to ~250ms)
              onLoadStart={null}                              // Callback when video starts to load
              onLoad={this.onLoad}                            // Callback when video loads
              onProgress={this.onProgress}                    // Callback every ~250ms with currentTime
              onEnd={this.onEnd}                              // Callback when playback finishes
              onError={this.onError}                          // Callback when video cannot be loaded
              style={styles.video} />
          </TouchableOpacity>
          <View style={{ display: "flex", alignItems: "center", paddingTop: 6 }}>
            <Text style={{ fontSize: 20 }}>Time: {this.state.time}s / {this.state.duration}s</Text>
          </View>
        </Content>
      </Container>
    );
  }

  onLoad(data) {
    this.setState({
      duration: data.duration
    })
  }

  onProgress(data) {
    this.setState({
      time: parseFloat(data.currentTime).toFixed(0)
    })
  }

  onEnd(e) {
    this.setState({
      paused: true,
      time: "0"
    })

    Alert.alert("End!")
  }

  onError(e) {
    console.error("error: ", e)
  }
}

const styles = {
  content: {
    padding: 10,
  },

  video: {
    width: "100%",
    height: 200,
    backgroundColor: "#cccccc",
    borderRadius: 8
  }
}
