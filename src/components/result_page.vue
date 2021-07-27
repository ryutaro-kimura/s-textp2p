<template>
<!-- template の中身を変更するときは、divでかこむ -->
<div>
  <!-- {{result}} -->
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
   <!-- ダイアログをトリガーするカード⏬ -->
      <template v-slot:activator="{ on, attrs }">
        <v-container class="blue lighten-5" >
        <v-row no-gutters
              cols="12"
              sm="4"
              >
              <v-col
              v-for="content in result"
              :key="content.i"
              cols="12"
              sm="12"
              md="4"
              align-self="center"
            >
            <!-- コンテント⏬ -->
  <div
  class="pa-2">
              <v-card
                        max-width="500"
                        v-bind="attrs"
                        v-on="on"
                        class="mr-auto ml-auto"
                        @click="setContentID(content.CID)"
                      >
                        <v-img
                          class="white--text align-end"
                          height="200px"
                          :src="content.URI"
                        >
                          <v-card-title>{{content.Name}}</v-card-title>
                        </v-img>

                        <v-card-text class="text--primary">
                          <div>{{content.Detail}}</div>
                        </v-card-text>

                        <v-card-actions>
                          <v-btn
                            color="blue"
                            text
                          >
                            Contact
                          </v-btn>

                          <v-btn
                            color="pink"
                            text
                          >
                            Like
                          </v-btn>
                        </v-card-actions>
              </v-card>

  </div>
     
        </v-col>
        </v-row>
        </v-container>
      </template>

      <!-- ダイアログ⏬ -->
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Chat Room</v-toolbar-title>
        </v-toolbar>
        <chat />
      </v-card>
    </v-dialog>
 </div>   
</template>

<script>
  import Chat from "@/components/chat/chat.vue"
  export default {
    props:["result"],
    components: {
      'chat': Chat
    },
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
      }
    },
    methods: {
      setContentID(contentID) {
        console.log(contentID)
        this.$store.commit("setContentID", contentID)
      }
    }
  }
</script>


