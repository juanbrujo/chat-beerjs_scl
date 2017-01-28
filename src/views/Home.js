import { ChatMessagebox, ChatLog } from '../components'
import {
  firebaseConfig,
  firebaseProvider,
  firebaseGetAllMessages,
  firebaseGetLastMessage,
  firebasePushMessage
} from '../firebase'

let firebase = firebaseProvider(firebaseConfig)

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
    componentData.userInfo.user_image_url = JSON.parse(window.localStorage.getItem('userData')).image_url
    var room = JSON.parse(window.localStorage.getItem('userData')).room
    if (room) {
      componentData.room = room
    }

    firebase.then(fb => {
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
  }
}
