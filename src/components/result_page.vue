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
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list
          three-line
          subheader
        >
          <v-subheader>User Controls</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Content filtering</v-list-item-title>
              <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Password</v-list-item-title>
              <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list
          three-line
          subheader
        >
          <v-subheader>General</v-subheader>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Notifications</v-list-item-title>
              <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="sound"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Sound</v-list-item-title>
              <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="widgets"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Auto-add widgets</v-list-item-title>
              <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
 </div>   
</template>

<script>

  export default {
    props:["result"],
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
      }
    },

  
  }
</script>


