<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary class="hidden-sm-and-up" app>
      <v-list>
        <v-list-item v-for="(menu, index) in menus" :key="index">
          <v-list-item-action>
            <v-icon left color="secondary">mdi-{{ menu.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="secondary--text text-capitalize" v-text="menu.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app elevation="0" color="#fff" class="pl-lg-6 pl-sm-5 pl-0" height="80">
      <v-app-bar-nav-icon
        class="hidden-sm-and-up mr-2"
        color="primary"
        @click.stop="drawer = !drawer"
      />
      <nuxt-link to="/">
        <v-img src="/logo@2x.png" max-width="40"></v-img>
      </nuxt-link>
      <nuxt-link to="/" tag="v-toolbar-title">
        <v-toolbar-title class="pl-3 pr-12 primary--text" v-text="title" />
      </nuxt-link>

      <v-btn
        @click="goToUrl(menu.url)"
        text
        v-for="(menu, index) in menus"
        :key="index"
        color="secondary"
        class="text-capitalize hidden-xs-only"
      >
        <v-icon left color="secondary">mdi-{{ menu.icon }}</v-icon>
        {{ menu.title }}
      </v-btn>
    </v-app-bar>
    <v-main>
      <!-- <v-container fluid> -->
      <nuxt />
      <!-- </v-container> -->
    </v-main>

    <v-footer padless>
      <v-card flat width="100%" tile class="blue-grey lighten-5 text-center">
        <v-card-text>
          <FooterIcon />
        </v-card-text>

        <v-divider insert light></v-divider>

        <v-card-text class="text--purple">
          {{ new Date().getFullYear() }} —
          <strong>CodeBuilder</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import FooterIcon from '@/components/footer/FooterIcon'
export default {
  components: { FooterIcon },
  data() {
    return {
      drawer: false,
      menus: [
        {
          title: 'home',
          icon: 'home',
          url: '/',
        },
        {
          title: 'contact us',
          icon: 'account-box',
          url: '/contact',
        },
        {
          title: 'blog',
          icon: 'blogger',
          url: '/blog',
        },
        {
          title: 'services',
          icon: 'briefcase',
          url: '/services',
        },
        {
          title: 'portfolio',
          icon: 'apps',
          url: '#',
        },
      ],

      title: 'Code Builder IT',
    }
  },
  methods: {
    goToUrl(url) {
      this.$router.push(url)
    },
  },
}
</script>
