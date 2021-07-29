<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col v-for="content in contents" cols=12 class="col-lg-3" v-bind:key="content.id">
                    <content-card :name="content.Name" :uri="content.Uri" :detail="content.Detail" :id="content.ID" />
                </v-col>
            </v-row>
        </v-container>
        
    </div>
</template>

<script>
import contentCard from '@/components/confirm/Card'
import axios from 'axios'

export default {
    created() {
        let params = new URLSearchParams()
        params.append("token", this.$store.getters.getToken)
        axios.post("https://textp2p.herokuapp.com/api/getUploadedContents", params).then(res =>{
            console.log(res.data)
            this.contents = res.data
        })
    },
    components: {
        'content-card': contentCard
    },
    data() {
        return{
            contents: [],
        }
    }
}
</script>
