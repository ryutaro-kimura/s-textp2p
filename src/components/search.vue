<template>
<div>
  
  <v-toolbar
    dark
    color="blue lighten-10"
  >
    <v-toolbar-title>Search</v-toolbar-title>
    <v-text-field
      v-model="input"
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      label="教科書名 / 著者名 / フリーワード"
      solo-inverted
    ></v-text-field>
    <v-btn icon
    @click = "search()"
    >
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-toolbar>
  
<result :result="contents" />


</div>
</template>

<script>
import axios from 'axios'//通信を行うためのライブラリ
import  result from '@/components/result_page.vue'

  export default {//コンポーネントをデータ化
    data () {
      return {
         input :'',
         contents:[]
      }
    },
    methods: {
      search(){
        console.log(this.input);
        let params = new URLSearchParams()
        params.append("keyword", this.input)
        axios.post("https://textp2p.herokuapp.com/api/search",params).then((res) => {
          this.contents = res.data
          console.log(res);
        })
      }
    },
    components: {
      result
    }
  }
</script>
