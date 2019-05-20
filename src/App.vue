<template>
  <v-app>
    <v-toolbar app>
      <router-link to="/" class="toolbar-title rainbow">
        <v-toolbar-title class="headline text-uppercase" to="/">
          <span>SIMPLE</span>
          <span class="font-weight-light">SITE</span>
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-img v-if=isLoading src="https://ui-ex.com/images/transparent-background-loading.gif" height="50px">
      </v-img>
      <v-spacer></v-spacer>
      <v-btn v-if=!enable to="/signin" color="success"
        flat>
        Sign In
      </v-btn>
      <v-btn v-if=!enable flat color="primary" to="/register">
        Sign Up
      </v-btn>
      <v-btn v-if=enable flat color="error" to="/" @click="clear">
        Sign Out
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    let vm = this
    this.$http.interceptors.request.use((config) => {
      vm.setLoading(true)
      return config;
    }, (error) => {
      vm.setLoading(false)
      return Promise.reject(error);
    });

    this.$http.interceptors.response.use((response) => {
      vm.setLoading(false)
      return response;
    }, (error) => {
      vm.setLoading(false)
      return Promise.reject(error);
    });
  },
  data () {
    return {
      refCount: 0,
      isLoading: false,

      //
    }
  },
  computed:{
    enable(){
      return localStorage.getItem("enable")!=null
    }

  },
  methods: {
    setLoading(isLoading) {
      if (isLoading) {
        this.refCount++;
        this.isLoading = true;
      } else if (this.refCount > 0) {
        this.refCount--;
        this.isLoading = (this.refCount > 0);
      }
    },
    clear(){
      localStorage.clear()
     location.reload()
    }
  }
}
</script>
<style>
  .toolbar-title {
    color: inherit;
    text-decoration: inherit;
  }


  .rainbow {
    background-image: -webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );
    background-image: gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );
    color:transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
</style>
