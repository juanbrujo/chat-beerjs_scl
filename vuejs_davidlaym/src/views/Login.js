import gravatar from 'gravatar'

export default {
  components: {},
  name: 'Login',
  data () {
    return {
      email: '',
      name: ''
    }
  },
  methods: {
    login () {
      var userDataStr = window.localStorage.getItem('userData')
      var userData = {}
      if (!userDataStr) {
        Object.assign(userData, JSON.parse(userDataStr))
      }
      userData.name = this.name
      userData.image_url = gravatar.url(this.email, { s: 75, r: 'pg', d: 'retro' })
      window.localStorage.setItem('userData', JSON.stringify(userData))
      this.$router.push('/')
    }
  }
}
