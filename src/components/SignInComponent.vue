<template>
  <v-container fluid>

    <v-flex xs12 sm8 md4 offset-md4>
      <v-card>
        <v-img
          class="white--text"
          height="200px"
          src="https://neilpatel.com/wp-content/uploads/2015/10/colors.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline " style="float: right">SignIn</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-text>

          <v-text-field
            v-model="login"
            label="E-mail or phone or name"
            data-vv-name="email"
            required
          ></v-text-field>


          <v-text-field
            type="password"
            v-model="password"
            label="Password"
            data-vv-name="password"
            required
          ></v-text-field>
          <div align="right">
            <router-link to="/resetpassword">Forgot password</router-link>
          </div>





          <v-btn @click="submit" color="success" flat>submit</v-btn>

        </v-card-text>

      </v-card>
    </v-flex>


  </v-container>


</template>

<script>
  export default {
    name: "SignInComponent",
    data(){
      return{
        login:"",
        password:"",
        flag: false
      }
    },
    methods:{
      submit(){
        let vm = this
        this.$http.post("/api/login",{
          "login":this.login,
          "password":this.password
        }).then(res=>{
          localStorage.setItem("username",res.data)
          localStorage.setItem("enable","true")
          vm.$router.push("/usercabinet")
        },e=>{
          alert("Ошибка!" + e.response.data.message)
        })
      }

    }
  }
</script>

<style scoped>

</style>
