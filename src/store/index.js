import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            isLoginOpen : false,
            authUser:{},
            isLoggedIn : false,
        }
    },
    mutations:{
        setIsLoggedIn(state,data){
            state.isLoggedIn = data
        },
        setAuthUser(state,data){
            state.authUser = data
        },
        setLoginModal(state,data){
            state.isLoginOpen = data
        }
    }
})

export default store;
