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
 *     Initial: 2018/01/12      Lin Hao
 */

import { StackNavigator } from 'react-navigation';
import Home from './screens/Home';
import QRCode from './screens/QRCode';
import AMap from './screens/AMap';
import Lottie from './screens/Lottie';
import Chart from './screens/Chart';
import Images from './screens/Images';
import Pdf from './screens/Pdf';
import Swiper from './screens/Swiper';
import Sound from './screens/Sound';
import Permission from './screens/Permission';
import Contact from './screens/Contact';
import Masonry from './screens/Masonry';
import FileUploading from './screens/FileUploading';
import Video from './screens/Video';
import Chat from './screens/Chat';

const RootNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  QRCode: {
    screen: QRCode,
    navigationOptions: {
      header: null
    }
  },
  AMap: {
    screen: AMap,
    navigationOptions: {
      header: null
    }
  },
  Lottie: {
    screen: Lottie,
    navigationOptions: {
      header: null
    }
  },
  Chart: {
    screen: Chart,
    navigationOptions: {
      header: null
    }
  },
  Images: {
    screen: Images,
    navigationOptions: {
      header: null
    }
  },
  Pdf: {
    screen: Pdf,
    navigationOptions: {
      header: null
    }
  },
  Swiper: {
    screen: Swiper,
    navigationOptions: {
      header: null
    }
  },
  Sound: {
    screen: Sound,
    navigationOptions: {
      header: null
    }
  },
  Permission: {
    screen: Permission,
    navigationOptions: {
      header: null
    }
  },
  Contact: {
    screen: Contact,
    navigationOptions: {
      header: null
    }
  },
  Masonry: {
    screen: Masonry,
    navigationOptions: {
      header: null
    }
  },
  FileUploading: {
    screen: FileUploading,
    navigationOptions: {
      header: null
    }
  },
  Video: {
    screen: Video,
    navigationOptions: {
      header: null
    }
  },
  Chat: {
    screen: Chat,
    navigationOptions: {
      header: null
    }
  }
});

export default RootNavigator;
