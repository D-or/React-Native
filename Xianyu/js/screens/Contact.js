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
 *     Initial: 2018/01/29      Lin Hao
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Left, Body, Title, Right, Content, Button, Text } from 'native-base';
import Contacts from 'react-native-contacts';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: []
    };
  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Contact</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.content}>
          <Button block success onPress={() => this.OnGet()}>
            <Text>All</Text>
          </Button>
          <View style={styles.contacts}>
            {
              this.state.contacts.map((item, index) => {
                return (
                  <View key={index} style={styles.contact}>
                    <Text style={{ padding: 6 }}>{item.familyName + item.givenName}</Text>
                    {
                      item.phoneNumbers.map((phone, i) => {
                        return (
                          <Text note key={i} style={{ paddingVertical: 2, paddingHorizontal: 6 }}>{phone.number}</Text>
                        );
                      })
                    }
                  </View>
                );
              })
            }
          </View>
        </Content>
      </Container>
    );
  }

  OnGet() {
    Contacts.getAll((err, contacts) => {
      if (err) {
        console.log(err)
      } else {
        contacts.splice(0, 1)

        this.setState({ contacts })
      }
    })
  }
}

const styles = {
  content: {
    padding: 10
  },

  contacts: {
    padding: 6,
    margin: 6
  },
  
  contact: {
    marginVertical: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 4,
    shadowRadius: 6,
    shadowColor: "#999999",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3
  }
}
