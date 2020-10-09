const express = require('express')
const nodemailer = require('nodemailer')
const app = express()

app.use(express.json())

app.post('/', function (req, res) {
  let emailInfo = req.body.emailInfo
  let emailProvider = req.body.emailProvider
  sendMail(emailInfo, emailProvider)
  res.status(200).json({ message: 'Your mail send successfully' })
})
module.exports = {
  path: '/contact/sendmail',
  handler: app,
}
const sendMail = (emailInfo, emailProvider) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailProvider.username,
      pass: emailProvider.password,
    },
  })

  let mailOptions = {
    from: emailProvider.username,
    to: emailProvider.username,
    subject: emailInfo.subject,
    text: `name: ${emailInfo.from}, \nemail: ${emailInfo.to}, \nmessage: ${emailInfo.text}\n`,
  }
  setTimeout(() => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response)
      }
    })
  }, 100)
}
