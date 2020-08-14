<template>
    <p :style="{textAlign: align}"	 class="main-title">{{ text }}</p>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: 'default title'
        },
        align: {
        	default: 'center'
        }
    }
}
</script>
