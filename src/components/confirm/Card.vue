<template>
<div>
    <v-card
    class="mx-auto"
    max-width="344"
    @click="openChat(id)"
  >
    <v-img
    :src="uri"
    ></v-img>

    <v-card-title>
      {{ name }}
    </v-card-title>

    <v-card-subtitle>
      {{ detail }}
    </v-card-subtitle>
  </v-card>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
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
import chat from '@/components/chat/chat.vue'

  export default {
    data: () => ({
      show: false,
      dialog: false
    }),
    components: {
        'chat': chat
    },
    methods: {
        openChat(id) {
            console.log(id)
            this.$store.commit("setContentID", id)
            this.dialog = true
        }
    },
    props: ['name', 'uri', 'detail', 'id']
  }
</script>