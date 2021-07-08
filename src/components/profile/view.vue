<template>
   <div>
    <v-container >
      <v-row >
          <v-col>
              <v-card>
                  <v-container>
                      <v-row>
                        <v-col cols=12 class="col-lg-12">
                            <v-avatar
                            class="profile"
                            color="grey"
                            size="164">
                            <v-img :src="user.icon"></v-img>
                            </v-avatar>
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
  export default {
    data(){
        return{
        user: {
            name: '',
            bio: '',
            icom: ''
             }
        }
    },
  }
</script>

<style>

</style>