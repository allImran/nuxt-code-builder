<template>
    <div class="single-blog">
        <div class="blog-title mt-5">
            <p 
                class="
                text-center
                text-xl-h3
                text-md-h4
                text-xs-h5
                "
            >
                {{ item.title }}
            </p>
        </div>
        <div class="blog-meta">
            <p class="text-center">
                {{item.date}} | 
                by {{item.author}} | 
                {{ item.category }} |
                comment <span v-if="item.totalComments > 1">s</span>
                {{ item.totalComments }}
            </p>
        </div>

        <div class="blog-img mt-12">
            <img :src="item.img" alt="">
        </div>

        <div class="blog-content">
            <p class="mt-5 text-h6">
                {{item.body}}
            </p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'single-blog-component',
    props: {
        item: {required: true}
    }
}
</script>