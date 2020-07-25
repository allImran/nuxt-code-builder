<template>
    <p class="sub-title">{{ text }}</p>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: 'default sub title'
        }
    }
}
</script>