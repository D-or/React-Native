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
 *     Initial: 2018/01/19      Lin Hao
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Spinner, Text } from 'native-base';

export default class Toast extends Component {
  render() {
    const { message } = this.props;

    const messageToast = (
      <View style={styles.message}>
        <Text style={styles.messageText}>{message}</Text>
      </View>
    );

    const spinnerToast = (
      <View style={styles.spiner}>
        <Spinner color="white" />
      </View>
    );

    return (
      <View style={styles.content}>
        { message ? messageToast : spinnerToast }
      </View>
    );
  }
}

const styles = {
  content: {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  spiner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    backgroundColor: "#333333",
    opacity: 0.8,
    borderRadius: 8
  },

  message: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    margin: 20,
    backgroundColor: "#333333",
    opacity: 0.8,
    borderRadius: 8
  },

  messageText: {
    color: "white"
  }
}
