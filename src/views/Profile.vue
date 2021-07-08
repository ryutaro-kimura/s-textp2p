<template >
    <div>
        <pview />
    </div>
</template>
<script>
import view from '@/components/profile/view.vue'

export default {
    components: {
        'pview': view
    },
    data(){
        return{
            isEdit: false
        }
    }
    
}
</script>
