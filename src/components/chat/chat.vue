<template>
  <div>
    <div v-for="content in chatContents" v-bind:key="content.i">
      <chatTips
        :msg="content.Content"
        :date="content.Date"
        :isMe="content.IsMe"
        :icon="content.Icon"
      >
      </chatTips>
    </div>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="message"
              :append-outer-icon="'mdi-send'"
              filled
              clear-icon="mdi-close-circle"
              clearable
              label="Message"
              type="text"
              @click:append-outer="sendMessage"
              @click:clear="clearMessage"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>
<script>
import chatTips from "@/components/chat/chatTips.vue";
import axios from "axios";
export default {
  components: {
    chatTips: chatTips,
  },
  created() {
    let params = new URLSearchParams();
    params.append("uid", "vR1Ga2xE2MRsQbT1o8bM1HfyPXh1");
    params.append("contentID", "0DiQ-Sf2cw3lr5M0I-yeRHGpom");
    axios
      .post("https://textp2p.herokuapp.com/api/readChatDataDev", params)
      .then((res) => {
        console.log(res);
        let user = res.data.UID;
        this.chatContents = res.data.Content;
        for (let i = 0; i < res.data.Content.length; i++) {
          this.chatContents[i].IsMe = user === this.chatContents[i].UID;
        }
        console.log(this.chatContents);
      });
      this.websocketHandler();
  },
  data() {
    return {
      chatContents: [],
      ws: {},
      user: 'vR1Ga2xE2MRsQbT1o8bM1HfyPXh1',
      password: "Password",
      show: false,
      message: "",
      marker: true,
      iconIndex: 0,
      icons: [
        "mdi-emoticon",
        "mdi-emoticon-cool",
        "mdi-emoticon-dead",
        "mdi-emoticon-excited",
        "mdi-emoticon-happy",
        "mdi-emoticon-neutral",
        "mdi-emoticon-sad",
        "mdi-emoticon-tongue",
      ],
      content: '0DiQ-Sf2cw3lr5M0I-yeRHGpom'
    };
  },

  computed: {
    icon() {
      return this.icons[this.iconIndex];
    },
  },

  methods: {
    websocketHandler() {
      let uri = "wss:///textp2p.herokuapp.com/chat/" + this.content;
      let ws = new WebSocket(uri);
      this.ws = ws;
      this.ws.onmessage = (msg) => {
        let obj = JSON.parse(msg.data);
        if (obj.UID === this.user) {
          obj.IsMe = true;
        }
        this.chatContents.push(obj);
      };
      this.ws.onconnect = () => {
        let obj = {
          type: "first",
          contentID: this.content,
          uid: this.user,
        };
        this.ws.send(JSON.stringify(obj));
      };
    },

    toggleMarker() {
      this.marker = !this.marker;
    },
    sendMessage() {
      let obj = {
        type: "message",
        msg: this.message,
        chatID: this.chatRoom,
        UID: this.user,
        content: this.content,
        Icon: this.Icon,
      };
      this.ws.send(JSON.stringify(obj));
      this.resetIcon();
      this.clearMessage();
    },
    clearMessage() {
      this.message = "";
    },
    resetIcon() {
      this.iconIndex = 0;
    },
    changeIcon() {
      this.iconIndex === this.icons.length - 1
        ? (this.iconIndex = 0)
        : this.iconIndex++;
    },
  },
};
</script>

<style></style>
