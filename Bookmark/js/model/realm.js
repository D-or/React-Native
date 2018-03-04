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
 *     Initial: 2018/01/18      Lin Hao
 */

import realm from 'realm';

const MarkSchema = {
  name: "Mark",
  properties: {
    title: "string",
    desc: "string",
    created: "string",
    images: "string?[]"
  }
}

var Realm = realm.open({ schema: [ MarkSchema ] })

async function Write(title, desc, created, images) {
  Realm.then(realm => {
    realm.write(() => {
      realm.create("Mark", {
        title,
        desc,
        created,
        images
      })
    })
  })
}

async function Read(handler) {
  Realm.then(realm => {
    handler(realm.objects("Mark"))
  })
}

async function Delete(created) {
  Realm.then(realm => {
    realm.write(() => {
      let item = realm.objects('Mark');
      realm.delete(item[0])
    })
  })
}

async function DeleteAll() {
  Realm.then(realm => {
    realm.write(() => {
      realm.delete(realm.objects('Mark'))
    })
  })
}

export default RealmFunc = {
  Write,
  Read,
  Realm,
  Delete,
  DeleteAll
}
