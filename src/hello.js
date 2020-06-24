import moment from 'moment'

export default class SayHello {
  hello (msg) {
    console.log(moment() + msg)
  }
}
