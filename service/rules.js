export default {
  // rules: {
  nameRules: [
    (v) => !!v || 'Name is required',
    (v) => (v && v.length >= 6) || 'Name must be greater than 6 characters',
  ],
  emailRules: [
    (v) => !!v || 'E-mail is required',
    (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
  ],
  messageRules: [
    (v) => !!v || 'Please write a message',
    (v) => (v && v.length >= 20) || 'Message is too short',
  ],
  // }
}
