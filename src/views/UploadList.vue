<template>
    <div>
        <Card />
        <List />
    </div>
</template>

<script>
import Card from '@/components/confirm/Card.vue'
import List from '@/components/confirm/List.vue'

export default {
    components: {
        'Card' : Card,
        'List' : List
    }
}
</script>