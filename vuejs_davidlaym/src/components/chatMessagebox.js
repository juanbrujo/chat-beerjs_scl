export default {
  props: ['room', 'userInfo'],
  data () {
    return {
      typedMessage: ''
    }
  },
  methods: {
    sendMessage (message) {
      this.$root.$emit('sendMessage', {text: message})
    }
  }
}
