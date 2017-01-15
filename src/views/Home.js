import { Chat } from '../components'
import { firebaseConfig, firebaseProvider } from '../firebase'

let firebase = firebaseProvider(firebaseConfig)
firebase.then(fb => console.log('connected to firebase ', fb))

export default {
  components: { Chat },
  data () {
    return {
    }
  }
}
