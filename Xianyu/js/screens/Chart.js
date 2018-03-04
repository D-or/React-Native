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
 *     Initial: 2018/01/24      Lin Hao
 */

import React, { Component } from 'react';
import { Container, Header, Left, Body, Title, Right, Content } from 'native-base';
import { Bar } from 'react-native-pathjs-charts'

const data = [
  [{
    "v": 49,
    "name": "apple"
  }, {
    "v": 42,
    "name": "apple"
  }],
  [{
    "v": 69,
    "name": "banana"
  }, {
    "v": 62,
    "name": "banana"
  }],
  [{
    "v": 29,
    "name": "grape"
  }, {
    "v": 15,
    "name": "grape"
  }]
]

const options = {
  width: 300,
  height: 300,
  margin: {
    top: 20,
    left: 25,
    bottom: 50,
    right: 20
  },
  color: '#2980B9',
  gutter: 20,
  animate: {
    type: 'oneByOne',
    duration: 200,
    fillTransition: 3
  },
  axisX: {
    showAxis: true,
    showLines: true,
    showLabels: true,
    showTicks: true,
    zeroAxis: false,
    orient: 'bottom',
    label: {
      fontFamily: 'Arial',
      fontSize: 8,
      fontWeight: true,
      fill: '#34495E',
      rotate: 45
    }
  },
  axisY: {
    showAxis: true,
    showLines: true,
    showLabels: true,
    showTicks: true,
    zeroAxis: false,
    orient: 'left',
    label: {
      fontFamily: 'Arial',
      fontSize: 8,
      fontWeight: true,
      fill: '#34495E'
    }
  }
}

export default class Chart extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Charts</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Bar data={data} options={options} accessorKey='v'/>
        </Content>
      </Container>
    );
  }
}
