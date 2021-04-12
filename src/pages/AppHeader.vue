<template>
  <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2">
    <template v-for="(val,i) in list" :key="i">
      <router-link class="mx-2" :to="val.link">{{ val.title }}</router-link>
    </template>
    <button  v-if="isLoggedIn" class="mx-2" @click="logout">Logout</button>
    <button  v-else class="mx-2" @click="openLogin">Login</button>

  </nav>

</template>

<script>
import firebase from "../utilities/firebase"

export default {
  name: "AppHeader",

  data() {
    return {
      list: [
        {title: "Home", link: "/"},
        {title: "Dc Heros", link: "/dc-heros"},
        {title: "Calendar", link: "/calendar"},
        {title: "Markdown", link: "/markdown"},
        {title: "Slider", link: "/slider"},
        {title: "Search", link: "/search"},
        {title: "Calculator", link: "/calculator"},
        {title: "Modal", link: "/modal"},
        {title: "Chat", link: "/chat"},
        {title: "User Crud", link: "/user-crud"},
        {title: "Tensorflow", link: "/tensorflow"},
      ],

    }
  },
  computed:{
    isLoggedIn(){
      return this.$store.state.isLoggedIn
    }
  },
  methods: {
    logout() {
      firebase.auth().signOut();
    },
    openLogin(){
      this.$store.commit('setLoginModal',true)
    }
  }
}
</script>

<style scoped>

</style>
