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
 *     Initial: 2018/02/10      Lin Hao
 */

import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Title, Right, Content, Fab, Icon, Button, Spinner, Text } from 'native-base';
import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select Image'
};

export default class FileUploading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      img: null,
      uploaded: -1
    };
  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>File Uploading</Title>
          </Body>
          <Right />
        </Header>
        <Fab
          active={this.state.active}
          direction="up"
          style={{ backgroundColor: '#5CB0A4' }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}>
          <Icon name="share" />
          <Button style={{ backgroundColor: "black" }} onPress={() => this.onUpload()}>
            <Icon name="logo-github" />
          </Button>
          <Button style={{ backgroundColor: "black" }} onPress={() => this.onPickImage()} >
            <Icon name="logo-apple" />
          </Button>
        </Fab>
        {
          this.state.uploaded === 0 ?
          <View style={styles.spinnerContent}>
            <View style={styles.spinner}>
              <Spinner color='white' size={0} />
            </View>
          </View> : this.state.uploaded === 1 ?
            <View style={styles.spinnerContent}>
              <View style={styles.spinner}>
                <Text style={{ color: 'white', paddingBottom: 5 }}>^_^</Text>
                <Text style={{ color: 'white' }}>上传成功</Text>
              </View>
            </View> : null
        }
      </Container>
    );
  }

  onPickImage() {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        this.setState({
          img: response.uri
        });
      }
    });
  }

  onUpload() {
    let formData = new FormData();
    const file = {
      uri: this.state.img,
      type: 'multipart/form-data',
      name: "image.png"
    };

    this.setState({
      uploaded: 0
    })

    formData.append('file', file);

    fetch('http://192.168.1.104:7001/file/upload', {
      method: 'POST',
      headers: {
        'Content-Type':'multipart/form-data; charset = utf-8'
      },
      body: formData
    })
    .then((response) => {
      const res = JSON.parse(response._bodyInit);

      if (res.status === 0) {
        this.setState({
          uploaded: 1
        })

        setTimeout(() => {
          this.setState({
            uploaded: -1
          })
        }, 1000)
      }
    })
    .catch((error) => {
      console.error('error:', error)
    });
  }
}

const styles = {
  spinnerContent: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    backgroundColor: 'black',
    opacity: 0.8,
    borderRadius: 12
  }
}
