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
import { Alert } from 'react-native';
import { Container, Header, Left, Body, Title, Right, Content, Button, Text } from 'native-base';
import Permissions from 'react-native-permissions';

export default class Permission extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoPermission: null
    };
  }

  componentDidMount() {
    Permissions.check('photo').then(response => {
      this.setState({ photoPermission: response })
    })
  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Permission</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.content}>
          <Button block success onPress={() => this.OnCheck()}>
            <Text>Check</Text>
          </Button>
        </Content>
      </Container>
    );
  }

  OnCheck() {
    Alert.alert(
      'Can we access your photos?',
      'We need access so you can set your profile pic',
      [
        {
          text: 'No way',
          onPress: () => console.log('Permission denied'),
          style: 'cancel',
        },
        this.state.photoPermission == 'undetermined'
          ? { text: 'OK', onPress: this.OnRequestPermission }
          : { text: 'Open Settings', onPress: Permissions.openSettings },
      ],
    )
  }

  OnRequestPermission = () => {
    Permissions.request('photo').then(response => {
      this.setState({ photoPermission: response })
    })
  }
}

const styles = {
  content: {
    padding: 10
  }
}