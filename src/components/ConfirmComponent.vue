<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-container fluid>

    <v-flex xs12 sm8 md4 offset-md4>
      <v-card>
        <v-img
          class="white--text"
          height="200px"
          src="https://images.alphacoders.com/881/881287.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Confirm</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>Please confirm your account</v-card-title>
        <v-card-text>


          <v-text-field
            v-model="code"


            label="Code"
            required
          ></v-text-field>

          <v-btn @click="submit" color="success" flat>confirm</v-btn>

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
        code:""
      }
    },
    methods:{
      submit2(){
        let vm = this
      },
      submit(){
        let vm = this
        this.$http.post("/api/confirm",{
          "code":this.code,
          "name":localStorage.getItem("username")
        }).then(res=>{
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
