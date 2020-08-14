<template>
    <v-col
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
                    size="125"
                    tile
                >
                    <v-img :src="item.src"></v-img>
                </v-avatar>
                <div>
                    <v-card-title
                    class="headline"
                    v-text="item.title"
                    ></v-card-title>

                    <v-card-subtitle v-text="item.artist"></v-card-subtitle>
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