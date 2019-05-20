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
            v-model="email"
            label="E-mail"
            data-vv-name="email"
            required
          ></v-text-field>


          <v-text-field
            v-model="password"
            label="Password"
            data-vv-name="password"
            required
          ></v-text-field>




          <v-btn @click="submit" color="success" flat>submit</v-btn>

        </v-card-text>

      </v-card>
    </v-flex>


  </v-container>


</template>

<script>
  export default {
    name: "RegisterComponent",
    data(){
      return{
        email:"",
        name:"",
        password:"",
        flag: false
      }
    },
    methods:{
      submit2(){
        let vm = this
      },
      submit(){
        let vm = this
        this.$http.post("/api/register",{
          "email":this.email,
          "password":this.password,
          "name":this.name
        }).then(res=>{
          localStorage.setItem("username",this.name)
          vm.flag = true
          //vm.router.push("/usercabinet")
        },e=>{
          alert(e.data)
        })
      }

    }
  }
</script>

<style scoped>

</style>
