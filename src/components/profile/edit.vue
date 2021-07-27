<template>
   <div>
    <v-container >
      <v-row >
          <v-col>
              <v-card>
                  <v-container>
                      <v-row>
                        <v-col cols=12 class="col-lg-9">
                            <v-avatar
                            class="profile"
                            color="grey"
                            size="164"
                            @click="editIcon">
                            <v-img :src="tmp"></v-img>
                            </v-avatar>
                        </v-col>
                        
                        <v-col cols=12 class="col-lg-3">
                            
                      <v-btn
                            color="primary"
                            elevation="2"
                            large
                            @click="register"
                            >
                            確定</v-btn>
                        </v-col>
                      </v-row>
                      <v-row>
                          <v-col cols=12>
                              <!-- <v-card-text>{{user.name}}</v-card-text> -->
                              <v-text-field v-model="user.name" />
                          </v-col>
                      </v-row>
                      <v-row>
                          <v-col cols=12>
                              <!-- <v-card-text>{{user.bio}}</v-card-text> -->
                              <v-text-field v-model="user.bio" />
                          </v-col>
                      </v-row>
                  </v-container>
              </v-card>
          </v-col>
      </v-row>
    </v-container>
   </div>
</template>

<script>
import axios from 'axios'
  export default {
      created(){
          let params =new URLSearchParams()
          params.append("token",this.$store.getters.getToken)
          axios.post('https://textp2p.herokuapp.com/api/readProfile', params).then(res => {
              console.log(res.data.icon)
              console.log(res.data.name)
              console.log(res.data.bio)
              
               this.user.icon = res.data.icon.URI
              this.user.name = res.data.name
              this.user.bio = res.data.bio
             
          })


      },
    data(){
        return{
            user: {
                name: 'dong xiying',
                bio: '佐賀大学理工学部知能情報システム工学コース3年生',
                icon: ''
            },
            tmp: {},
        }
    },
    methods: {
        register(){
            let params=new FormData()
            params.append("name",this.user.name)
            params.append("bio",this.user.bio)
            params.append("icon",this.user.icon)
            params.append("token",this.$store.getters.getToken)
            axios.post("https://textp2p.herokuapp.com/api/updateProfile",params).then(res=>{
                console.log(res)
                this.$emit("FlipEdit")
            })

        },
        editIcon() {
            let elm = document.createElement("input")
            elm.setAttribute("type", "file")
            elm.addEventListener("change", this.setIcon)
            elm.click()
        },
        setIcon(evt) {
            let reader = new FileReader()
            reader.addEventListener("load", () => {
                this.tmp = reader.result
            })
            this.user.icon = evt.path[0].files[0]
            reader.readAsDataURL(this.user.icon)
        }
    }
  }
</script>

<style>

</style>