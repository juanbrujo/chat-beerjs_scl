import {
  firebaseProvider,
  firebaseGetRooms,
  firebaseConfig
} from '../firebase'

let componentData = {
  rooms: []
}

export default {
  components: {
  },
  name: 'Rooms',
  data () {
    return componentData
  },
  mounted () {
    var firebase = firebaseProvider(firebaseConfig)
    firebase.then(db => {
      firebaseGetRooms(db).then(rooms => {
        componentData.rooms = rooms
      })
    })
  },
  methods: {
    changeRoom (room) {
      var userDataStr = window.localStorage.getItem('userData')
      var userData = JSON.parse(userDataStr)
      userData.room = room
      window.localStorage.setItem('userData', JSON.stringify(userData))
      this.$router.push({name: 'home'})
    }
  }
}
