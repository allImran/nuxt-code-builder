<template>
    <v-col>
        <SubTitle :text="subTitle" />
        <Title :text="title" />
       
        <v-row class="justify-center align-center" no-gutters>
            <template v-for="height in pricing">
                <v-col :key="height" xl="4" md="4" sm="6" xs="12" cols="12">
                    <PricingTable :height="height" />
                </v-col>
            </template>
        </v-row>
    </v-col>
</template>

<script>
import Title from '@/components/Title'
import SubTitle from '@/components/SubTitle'
import PricingTable from '@/components/pricing/PricingTable'
export default {
    data() {
        return {
            title: 'best solution for out clients',
            subTitle: 'Pricing plan',
            pricing: ['450px', '500px', '450px']
        }
    },
    components: {
        Title,
        SubTitle,
        PricingTable
    },
}
</script>