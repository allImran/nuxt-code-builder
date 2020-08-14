<template>
    <p class="section-description">{{ text }}</p>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: 'default description'
        }
    }
}
</script>
</template>