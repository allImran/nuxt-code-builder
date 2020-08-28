<template>
    <v-col
        class="recent-blog"
        cols="12"
    >
    <v-card
        class="hover"
        :color="item.color"
        dark
        width="100%"
        >
            <div class="d-flex flex-no-wrap justify-left">
                <v-avatar
                    class="ma-3"
                    size="50"
                    tile
                >
                    <v-img :src="item.src"></v-img>
                </v-avatar>
                <div>
                   <p 
                    class="pt-1 mb-0 date" 
                   >{{ item.date }}</p>

                    <p
                        class=" pt-2 pr-3 rtitle" 
                        v-text="item.title"
                    >
                    </p>
                </div>
            </div>
        </v-card>
    </v-col>
</template>

<script>
export default {
    name: 'service-component',
    props: {
        item: {
            required: true
        }
    }
}
</script>