<template>
  <div>
    <v-container>
      <v-row v-if="isMe">
        <v-col cols="2" class="align-right">
          <v-avatar color="indigo">
            <v-img :src="icon" />
          </v-avatar>
        </v-col>
        <v-col cols="10">
          <v-card>
            <v-card-text>
              {{ msg }}
            </v-card-text>
            <v-card-text>
              {{ date }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col cols="10">
          <v-card>
            <v-card-text>
              {{ msg }}
            </v-card-text>
            <v-card-text>
              {{ date }}
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="2">
          <v-avatar color="indigo">
            <v-img :src="icon" />
          </v-avatar>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  props: ["msg", "date", "icon", "isMe"],
};
</script>
