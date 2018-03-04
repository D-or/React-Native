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
import { Image, View, TouchableOpacity } from 'react-native';
import { Left, Right, Body, Thumbnail, Card, CardItem, Text, Icon, Button } from 'native-base';

export default class MarkCard extends Component {
  render() {
    const { title, desc, created, images } = this.props;

    return (
      <TouchableOpacity onPress={this.onDetail.bind(this)} activeOpacity={0.5}>
        <Card>
          <CardItem bordered>
            <Left>
              <Thumbnail source={require('../images/vscode.jpg')} style={{ borderWidth: 0.5, borderColor: "#999999" }} />
              <Body>
                <Text>{title}</Text>
                <Text note>{created}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body style={styles.cardBody}>
            {
              images[0] === "" ? null : 
                <View style={styles.cardImage}>
                  <Image resizeMode="contain" source={{ uri: images[0] }} style={{ height: 150, width: 250 }} />
                </View>
            }
              <Text style={styles.desc}>{desc}</Text>
              <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                <Icon name="ios-time" style={{ fontSize: 22, color: "black", marginRight: 10 }}/>
                <Text note>{created}</Text>
              </View>
            </Body>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }

  onDetail() {
    const { index, title, desc, created, images } = this.props;

    this.props.navigation.navigate("Detail", {
      index,
      title,
      desc,
      created,
      images
    })
  }
}

const styles = {
  cardBody: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },

  cardImage: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },

  desc: {
    color: "#2e2e2e"
  }
}
