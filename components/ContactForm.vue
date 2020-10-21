<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="mailOptions.from"
            placeholder="Your Name"
            label="Name"
            :rules="nameRules"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col col="12" md="12">
          <v-text-field
            label="E-mail"
            :rules="emailRules"
            placeholder="youremail@gmail.com"
            v-model="mailOptions.to"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col col="12" md="12">
          <v-text-field
            label="Subject"
            placeholder="I need a website"
            v-model="mailOptions.subject"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col col="12">
          <v-textarea
            v-model="mailOptions.text"
            autocomplete="Message"
            label="Message"
            placeholder="your message"
            :rules="messageRules"
          ></v-textarea>

          <v-btn
            :disabled="!valid"
            :loading="loading"
            @click="validateAndSendMail"
          >
            Send Message
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <v-card > 
          <div class="text-right pt-3 white primary--text">
            <v-btn
              text
              @click="dialog = false"
              small
            >
              <v-icon  color="primary">mdi-close</v-icon>
            </v-btn>
          </div>
          <div class=" text-center pb-8 white primary--text">
            <h2 class="title"> Thank you for your mail. </h2>
            <h3 class="title">  We'll contact with you soon. </h3>
          </div>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import rules from '@/service/rules'

export default {
  name: 'contact-form',
  data: () => ({
    loading: false,
    valid: true,
    dialog:false,
    emailRules: rules.emailRules,
    nameRules: rules.nameRules,
    messageRules: rules.messageRules,
    mailOptions: {
      from: '',
      to: '',
      subject: '',
      text: '',
    },
  }),
  methods: {
    validateAndSendMail() {
      //this.$refs.form.validate();
      //console.log(this.$refs.form.validate())
      this.$emit('sendMail', this.mailOptions)
      this.$nextTick(() => {
            // will run after $emit is done
            this.dialog = true;
            this.$refs.form.reset();
        })
    },
  },
}
</script>