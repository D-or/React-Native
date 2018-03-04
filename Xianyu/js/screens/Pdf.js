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
import PdfViewer from 'react-native-pdf';

export default class Pdf extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Pdf</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        <PdfViewer
          source={require('../src/pdf/go_rpc.pdf')}
          // onLoadProgress={(percent) => {
          //   console.log(percent)
          // }}
          // onLoadComplete={(numberOfPages, filePath)=>{
          //   console.log(`number of pages: ${numberOfPages}`);
          //   console.log(`number of pages: ${filePath}`);
          // }}
          // onPageChanged={(page, numberOfPages)=>{
          //   console.log(`current page: ${page}`);
          //   console.log(`current page: ${numberOfPages}`);
          // }}
          onError={(error)=>{
            console.log(error);
          }}
          style={styles.pdf} />
        </Content>
      </Container>
    );
  }
}

const styles = {
  pdf: {
    flex: 1,
    width: "100%",
    height: "100%"
  }
}
