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
                  <span class="headline">SignUp</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-text>

              <v-text-field
                v-model="name"

                :counter="10"
                label="Name"
                data-vv-name="name"
                required
              ></v-text-field>

              <v-combobox
                v-model="select"
                :items="items"
                chips
                label="Registration method"
              >
                <template v-slot:selection="data">
                  <v-chip
                    :key="JSON.stringify(data.item)"
                    :selected="data.selected"
                    :disabled="data.disabled"
                    class="v-chip--select-multi"
                    @click.stop="data.parent.selectedIndex = data.index"
                    @input="data.parent.selectItem(data.item)"
                  >
                    <v-avatar class="accent white--text">
                      {{ data.item.slice(0, 1).toUpperCase() }}
                    </v-avatar>
                    {{ data.item }}
                  </v-chip>
                </template>
              </v-combobox>



              <v-text-field
                v-model="login"
                :label="select"
                required
              ></v-text-field>





              <v-text-field
                type="password"
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
          login:"",
          name:"",
          password:"",
          select: 'email',
          items: [
            'email',
            'phone'
          ]
        }
      },
      methods:{
        submit2(){
          let vm = this
        },
        submit(){
          let vm = this
          this.$http.post("/api/register",{
            "login":this.login,
            "password":this.password,
            "name":this.name,
            "method":this.select
          }).then(res=>{

            localStorage.setItem("username",this.name)
            //vm.flag = true
            vm.$router.push("/confirm")
          },e=>{
            console.log(Object.keys(e.response.data))
            alert("Ошибка!" + e.response.data.message)
          })
        }

      }
    }
</script>

<style scoped>

</style>
