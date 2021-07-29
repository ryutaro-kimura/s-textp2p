<template>
  <v-container fluid>
    <!-- 商品名 -->
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="name"
            :rules="rules"
            counter="30"
            hint="商品名を入力してください"
            label="商品名"
          ></v-text-field>
          <p>Message : {{ name }}</p>
        </v-col>
    <!-- ファイルアップロード -->
    <v-file-input
      v-model="file"
      id="file"
      label="File input"
      filled
      prepend-icon="mdi-camera"
    ></v-file-input>
    <!-- 詳細 -->
    <v-textarea
        v-model="detail"
        id=detail
        counter
        label="詳細"
    ></v-textarea>
    <!-- アップロードボタン -->
    <div class="text-center">
      <v-btn
        :loading="loading3"
        :disabled="loading3"
        color="blue-grey"
        class="ma-2 white--text"
        @click="loader = 'loading3'"
      >
        Upload
        <v-icon
          right
          dark
        >
          mdi-cloud-upload
        </v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
  // import axios from "axios"
  export default {
    data () {
      return {
        loader: null,
        loading: false,
        loading2: false,
        loading3: false,
        loading4: false,
        loading5: false,
      }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
    methods: {
      // send () {
      //   let params = new FromData()
      //   params.append("name", {{ name }})
      //   params.append("file", {{ file }})
      //   params.append("detail", {{ detail }})
      //   params.append("token", this.$store.getters.getToken)
      //   axios.post("https://textp2p.herokuapp.com/api/upload", params)
      // },
    },
  }
</script>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>

