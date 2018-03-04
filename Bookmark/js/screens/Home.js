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
import { TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Left, Body, Title, Right, Icon, Content } from 'native-base';

import MarkCard from '../component/MarkCard';
import RealmFunc from '../model/realm';
import Toast from '../component/Toast';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Marks: [],
      isRefreshing: false,
      showToast: false
    }
  }

  async componentWillMount() {
    await RealmFunc.Read((Marks) => {
      this.setState({ Marks })
    })
  }

  componentWillReceiveProps() {
    this.setState({
      showToast: true
    })

    setTimeout(() => {
      this.setState({
        showToast: false
      })
    }, 1500)
  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>主页{this.state.length}</Title>
          </Body>
          <Right>
            <TouchableOpacity onPress={this.onAdd.bind(this)}>
              <Icon name="ios-add-circle-outline" style={{ color: "#333333", fontSize: 26 }} />
            </TouchableOpacity>
          </Right>
        </Header>
        <ScrollView
          style={styles.content}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this.onRefresh.bind(this)}
              title={this.state.isRefreshing ? "正在加载..." : "^_^"}
            />
          }>
          {
            this.state.Marks.map((item, index) => {
              return (
                <MarkCard
                  key={index}
                  index={index}
                  navigation={this.props.navigation}
                  title={item.title}
                  desc={item.desc}
                  created={item.created}
                  images={item.images}
                />
              );
            })
          }
        </ScrollView>
        {
          this.state.showToast ? <Toast /> : null
        }
      </Container>
    );
  }

  onAdd() {
    this.props.navigation.navigate("MarkAdd")
  }

  async onRefresh() {
    this.setState({
      isRefreshing: true
    })

    await RealmFunc.Read((Marks) => {
      this.setState({ Marks })
    })

    setTimeout(() => {
      this.setState({
        isRefreshing: false
      })
    }, 1000)
  }
}

const styles = {
  content: {
    paddingHorizontal: 10,
    backgroundColor: "white"
  }
}

function select(store) {
  return {
    images: store.mark.images
  }
}

export default connect(select)(Home);
