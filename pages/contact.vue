<template>
  <div>
    <Breadcrumb :title="pageTitle" :breadCrumbData="breadCrumbData" />
    <v-container mt-5 fluid>
      <Title :text="title" />
      <SectionDescription :text="sectionDescription" />
    </v-container>

    <div class="contact-image"></div>
    <div class="contact-form">
      <v-container>
        <v-row>
          <v-col cols="12" md="6" sm="12">
            <div class="contact-left pa-md-5">
              <SubTitle align="left" :text="contactSubTitle" />
              <Title align="left" :text="contactTitle" />
              <div class="contact-brief pr-md-12">
                <p>
                  Interested in Code Builder Service? Just fill up the information below and we will contact with you as soon as possible.
                </p>
              </div>
              <div class="information">
                <p><strong>Phone</strong></p>
                <p class="phone">+8801722454490</p>
                <p class="phone">+8801935923508</p>
              </div>
              <div class="information">
                <p><strong>Email</strong></p>
                <p>codebuilderit@gmail.com</p>
               
              </div>
              
            </div>
          </v-col>
          <v-col cols="12" md="6" sm="12">
            <div class="contact-right">
              <Title align="left" :text="contactFormTitle" />
              <ContactForm @sendMail="sendMail" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Title from '@/components/Title'
import SubTitle from '@/components/SubTitle'
import ContactForm from '@/components/ContactForm'
import SectionDescription from '@/components/SectionDescription'
import Breadcrumb from '@/components/Breadcrumb'
import { setMetadata } from '@/service/metaInfo'
export default {
  name: 'contact',
  components: {
    Title,
    SectionDescription,
    Breadcrumb,
    SubTitle,
    ContactForm,
  },
  created() {
    this.metaData = setMetadata(this.$route.fullPath)
  },
  head() {
    return {
      title: this.metaData.title,
      meta: [
        {
          hid: 'description',
          name: this.metaData.description,
          content: 'Home page description',
        },
      ],
    }
  },
  data() {
    return {
      title: 'GOT A QUESTION?',
      sectionDescription:
        'We’re here to help and answer any question you might have. We look forward to hearing from you ',
      pageTitle: 'Contact us',
      breadCrumbData: [
        { title: 'Home', url: '/' },
        { title: 'contact', url: '#' },
      ],
      contactSubTitle: 'get in touch',
      contactTitle: 'contact us',
      contactFormTitle: 'Feel free to send messge',
    }
  }, //end of data
  methods: {
    ...mapActions({
      send: 'contact/ACT_SEND_MAIL',
    }),
    sendMail(mailOptions) {
      console.log(mailOptions)
      this.send(mailOptions)
    },
  },
}
</script>