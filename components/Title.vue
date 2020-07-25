<template>
    <p class="main-title">{{ text }}</p>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: 'default title'
        }
    }
}
</script>
