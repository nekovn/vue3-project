<template>
  <app-header/>
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <teleport to="body">
    <LoginModal/>
  </teleport>

</template>
<script>
import AppHeader from './pages/AppHeader'
import LoginModal from "@/components/LoginModal";
import firebase from "./utilities/firebase"

export default {
  components: {LoginModal, AppHeader},
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit("setIsLoggedIn",true)
        this.$store.commit("setAuthUser",user)
      } else {
        this.$store.commit("setIsLoggedIn",false);
        this.$store.commit("setAuthUser",{});

      }
    });
  }

}
</script>
