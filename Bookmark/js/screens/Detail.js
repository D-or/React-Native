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
 *     Initial: 2018/01/16      Lin Hao
 */

import React, { Component } from 'react';
import { Button, Image, View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Left, Body, Title, Right, Content, Icon, Text } from 'native-base';
import { NavigationActions } from 'react-navigation';

import { Styles } from '../styles/styles';
import RealmFunc from '../model/realm';
import Toast from "../component/Toast";
import { MarkAdding } from '../actions';

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showToast: false
    }
  }

  render() {
    const { index, title, desc, created, images } = this.props.navigation.state.params;

    return (
      <Container>
        <Header>
          <Left>
            <Button title="Done" onPress={this.onBack.bind(this)} color="#333333"></Button>
          </Left>
          <Body>
            <Title>{title}</Title>
          </Body>
          <Right>
            <Button title="Delete" onPress={this.onDelete.bind(this)} color="#ff1111"></Button>
          </Right>
        </Header>
        <Content style={Styles.Content}>
          <Text>{desc}</Text>
          <View style={styles.imagesContent}>
            {
              images.map((item, index) => {
                return (
                  <Image
                    key={index}
                    source={{ uri: item }}
                    style={styles.image}
                  />
                );
              })
            }
          </View>
        </Content>
        {
          this.state.showToast ? <Toast /> : null
        }
      </Container>
    );
  }

  onBack() {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  onDelete() {
    const { images, created } = this.props.navigation.state.params;

    this.props.dispatch(MarkAdding({ images }))

    RealmFunc.Delete(created)

    this.setState({
      showToast: true
    });

    setTimeout(() => {
      this.onBack()
    }, 500);
  }
}

const styles = {
  imagesContent: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },

  image: {
    height: 108,
    width: 108,
    margin: 5,
    borderRadius: 6
  }
}

export default connect()(Detail);
