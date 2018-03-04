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
import { Container, Header, Left, Body, Title, Right, Content } from 'native-base';
import MasonryLayout from 'react-native-masonry';

export default class Masonry extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Masonry</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.content}>
          <MasonryLayout
            sorted
            columns={3}
            bricks={[
              { uri: "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1517237658&di=d7b41c15cc3b66d72535b5340e07d93c&src=http://s7.sinaimg.cn/mw690/001I6A3Lgy6Pyt59jWmd6&690" },
              { uri: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2028674938,3385518483&fm=27&gp=0.jpg" },
              { uri: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517247493943&di=653ff0014b7935d10b86cdf3b06ceed8&imgtype=0&src=http%3A%2F%2Fwww.taopic.com%2Fuploads%2Fallimg%2F140421%2F318743-140421213T910.jpg" },
              { uri: "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1517237722&di=e6965d0e160b7399b6411a1d5d2534ba&src=http://ftp.jdcq.net/bbs/data/attachment/forum/201403/06/211707dzhpch56m7mlcj6l.jpg" },
              { uri: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517247606119&di=952ba46be24bf8f4a15f17081d44d2ce&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F010f87596f13e6a8012193a363df45.jpg%401280w_1l_2o_100sh.jpg" },
              { uri: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517247709266&di=1d1913faa5e8c654c282ad23825400b9&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2F130126%2F50%2F50-niutuku.com-3495.jpg" },
              { uri: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2828151324,1464090885&fm=27&gp=0.jpg" },
              { uri: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1689489727,319363811&fm=27&gp=0.jpg" },
              { uri: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1453867267,810067799&fm=27&gp=0.jpg" },
              { uri: "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1517237722&di=b5e408b84a6cbfeb4447b585d94479cc&src=http://img.zcool.cn/community/038965658773c65a801219c77751253.jpg" },
              { uri: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3656848237,2480790058&fm=27&gp=0.jpg" },
              { uri: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1897211572,1236994648&fm=27&gp=0.jpg" },
              { uri: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=552608077,1384904804&fm=27&gp=0.jpg" },
              { uri: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2583866720,3949910862&fm=27&gp=0.jpg" },
              { uri: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1890851724,2511741844&fm=27&gp=0.jpg" }
            ]}
          />
        </Content>
      </Container>
    );
  }
}

const styles = {
  content: {
    padding: 10
  }
}
