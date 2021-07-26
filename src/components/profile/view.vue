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
                            size="164">
                            <v-img :src="user.icon"></v-img>
                            </v-avatar>
                        </v-col>
                        
                        <v-col cols=12 class="col-lg-3">
                            
                      <v-btn
                            color="primary"
                            elevation="2"
                            large
                            @click="test"
                            >
                            編集</v-btn>
                        </v-col>
                      </v-row>
                      <v-row>
                          <v-col cols=12>
                              <v-card-text>{{user.name}}</v-card-text>
                          </v-col>
                      </v-row>
                      <v-row>
                          <v-col cols=12>
                              <v-card-text>{{user.bio}}</v-card-text>
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
          params.append("uid",'vR1Ga2xE2MRsQbT1o8bM1HfyPXh1')
          axios.post('https://textp2p.herokuapp.com/api/readProfileDev', params).then(res => {
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
             }
        }
    },
    methods: {
        test(){
            this.$emit("FlipEdit")
        }
    }
  }
</script>

<style>

</style>