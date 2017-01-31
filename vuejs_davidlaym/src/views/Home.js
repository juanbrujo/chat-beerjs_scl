import { ChatMessagebox, ChatLog } from '../components'
import {
  firebaseConfig,
  firebaseProvider,
  firebaseGetAllMessages,
  firebaseGetLastMessage,
  firebasePushMessage,
  firebaseRemoveListener
} from '../firebase'

let firebase = firebaseProvider(firebaseConfig)
let db = null

let componentData = {
  room: 'beer-js',
  messages: [],
  userInfo: {}
}

export default {
  components: { ChatMessagebox, ChatLog },
  name: 'Home',
  data () {
    return componentData
  },
  beforeMount () {
    let storedUserData = JSON.parse(window.localStorage.getItem('userData'))
    componentData.userInfo.user_image_url = storedUserData.image_url
    componentData.userInfo.name = storedUserData.name
    var room = storedUserData.room
    if (room) {
      componentData.room = room
    }

    firebase.then(fb => {
      db = fb
      this.$root.$on('sendMessage', (args) => {
        firebasePushMessage(fb, componentData.room, {
          author: {
            name: componentData.userInfo.name,
            user_image_url: componentData.userInfo.user_image_url
          },
          text: args.text
        })
      })

      firebaseGetAllMessages(fb, componentData.room, (msg) => {
        componentData.messages.unshift(msg.val())
      })

      firebaseGetLastMessage(fb, componentData.room, (msg) => {
        componentData.messages.unshift(msg.val())
      })
    })
  },
  beforeDestroy () {
    this.$root.$off('sendMessage')
    firebaseRemoveListener(db, componentData.room)
  }
}
