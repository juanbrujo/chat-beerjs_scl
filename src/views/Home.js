import { ChatMessagebox, ChatLog } from '../components'
import gravatar from 'gravatar'
import {
  firebaseConfig,
  firebaseProvider,
  firebaseGetAllMessages,
  firebaseGetLastMessage,
  firebasePushMessage
} from '../firebase'

let firebase = firebaseProvider(firebaseConfig)

let userInfo = {
  email: 'davidlaym@gmail.com',
  name: 'David Lay'
}

let componentData = {
  fb: null,
  room: 'beer-js',
  messages: [],
  userInfo
}

export default {
  components: { ChatMessagebox, ChatLog },
  name: 'Home',
  data () {
    return componentData
  },
  created: function () {
    firebase.then(fb => {
      componentData.fb = fb
      componentData.userInfo.user_image_url = gravatar.url(componentData.userInfo.email, { s: 75, r: 'pg', d: 'retro' })
      console.log('gravatar src', componentData.userInfo.user_image_url)
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
