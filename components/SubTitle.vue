<template>
    <p :style="{textAlign: align}" class="sub-title">{{ text }}</p>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: 'default sub title'
        },
        align: {
        	default: 'center'
        }
    }
}
</script>