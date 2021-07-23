<template> 
    <div>
        <account />
    </div>
</template>
// htmlベースの言語（表示）
<script>//JSベースの言語
import account from '@/components/account.vue'

export default{
  components: { 
      'account' : account 
      },
    Created(){

    },   
}

</script>