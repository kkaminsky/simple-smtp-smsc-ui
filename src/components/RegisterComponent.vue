<template>
  <v-container fluid>
    <v-flex xs12 sm8 md4 offset-md4><form>
      <v-text-field
        v-model="name"

        :counter="10"
        label="Name"
        data-vv-name="name"
        required
      ></v-text-field>
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
      <v-text-field
        v-if=flag
        v-model="code"
        label="Code"
        data-vv-name="code"
        required
      ></v-text-field>


      <v-btn @click="submit">submit</v-btn>

    </form></v-flex>
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
