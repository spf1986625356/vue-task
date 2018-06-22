<script>
  import vc from 'vue-cookie'
  import axios from 'axios'
  export default {
    state: {
      userInfo: vc.get('userInfo') ? JSON.parse(vc.get('userInfo')) : {}
    },
    mutations: {
      login (state, payload) {
        state.userInfo = payload.userInfo
        vc.set('userInfo', JSON.stringify(state.userInfo), 1)
      },
      logout (state) {
        vc.set('userInfo', '', 1)
        window.location.reload()
      }
    },
    actions: {
      login ({commit}, info) {
        axios.post('http://101.132.185.161:8080/myproject/index/login', info).then(res => {
          // console.log(res)
          if (res.data.content && res.data.status === 1) {
            commit('login', {userInfo: res.data.content})
          }
        })
      }
    }
  }
</script>
