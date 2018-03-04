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
 *     Initial: 2018/01/17      Lin Hao
 */

import React, { Component } from 'react';
import { Button, Image, TouchableOpacity, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Left, Body, Title, Right, Content, Icon, Item, Spinner } from 'native-base';
import { NavigationActions } from 'react-navigation';
import ImagePicker from 'react-native-image-picker';
import moment from 'moment';

import { Styles } from '../styles/styles';
import RealmFunc from '../model/realm';
import Toast from '../component/Toast';
import { MarkAdding } from '../actions';

class MarkAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      desc: "",
      images: [],
      visible: false,
      showToast: false,
      message: ""
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button title="Done" onPress={this.onSave.bind(this)} color="#333333"></Button>
          </Left>
          <Body>
            <Title>添加</Title>
          </Body>
          <Right>
            <Button title="Cancel" onPress={this.onBack.bind(this)} color="#333333"></Button>            
          </Right>
        </Header>
        <Content style={Styles.Content}>
          <View style={styles.title}>
            <TextInput
              value={this.state.date}
              placeholder='Title'
              placeholderTextColor="#888888"
              style={styles.input}
              returnKeyType="done"
              maxLength={10}
              onChangeText={this.onInputTitle.bind(this)}
            />
          </View>
          <View style={styles.desc}>
            <TextInput
              multiline
              placeholder='Description'
              placeholderTextColor="#888888"
              style={styles.input}
              onChangeText={this.onInputDesc.bind(this)}              
            />
          </View>
          <View style={styles.imagesContent}>
            {
              this.state.images.map((item, index) => {
                return (
                  <Image
                    key={index}
                    source={{ uri: item }}
                    style={styles.image} />
                );
              })
            }
            <TouchableOpacity onPress={this.onImagePicker.bind(this)} activeOpacity={0.4}>
              <Image source={require('../images/addImg.png')} style={[styles.image, { borderRadius: 0 }]} />
            </TouchableOpacity>
          </View>
        </Content>
        {
          this.state.showToast ? <Toast message={this.state.message} /> : null
        }
      </Container>
    );
  }

  onBack() {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  async onSave() {
    const { title, desc, images } = this.state;
    const now = moment().format("llll")

    if (!title || ! desc || !images.length) {
      this.setState({
        showToast: true,
        message: "Complete information"
      })

      setTimeout(() => {
        this.setState({
          showToast: false,
          message: ""
        })
      }, 1000);

      return
    }

    this.setState({
      showToast: true
    });

    this.props.dispatch(MarkAdding({ images }))

    await RealmFunc.Write(title, desc, now, images)

    setTimeout(() => {
      this.onBack()
    }, 500);
  }

  onInputTitle(e) {
    this.setState({
      title: e
    })
  }

  onInputDesc(e) {
    this.setState({
      desc: e
    })
  }

  onImagePicker() {
    let images = this.state.images;

    ImagePicker.showImagePicker((response) => {
      if (response.didCancel) {
      } else if (response.error) {
      } else {
        // images.push('data:image/jpeg;base64,' + response.data)
        images.push(response.uri)

        this.setState({ images });
      }
    })
  }
}

const styles = {
  title: {
    backgroundColor: "#dddddd",
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    margin: 20
  },
  
  desc: {
    backgroundColor: "#dddddd",
    borderRadius: 4,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    height: 150
  },

  input: {
    fontSize: 16,
    color: "#333333"
  },
  
  imagesContent: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 20,
  },

  image: {
    height: 97,
    width: 97,
    margin: 4,
    borderRadius: 6
  },

  toastContent: {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  toast: {
    position: "relative",
    top: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    backgroundColor: "#333333",
    opacity: 0.8,
    borderRadius: 8
  }
}

export default connect()(MarkAdd);
