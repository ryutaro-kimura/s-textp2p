<template >
    <div>
        <div v-if="!isEdit">
          <pview @FlipEdit="FlipEdit" />
        </div>
        <div v-else>
            <pedit @FlipEdit="FlipEdit"  />
        </div>
    </div>
</template>
<script>
import view from '@/components/profile/view.vue'
import edit from '@/components/profile/edit.vue'

export default {
    components: {
        'pview': view,
        "pedit": edit
    },
    data(){
        return{
            isEdit: false
        }
    },
    methods: {
        FlipEdit(){
            this.isEdit = !this.isEdit
        }
    }
    
}
</script>
