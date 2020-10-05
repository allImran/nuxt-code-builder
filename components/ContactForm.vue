<template>
	<div>
		<v-form
		    ref="form"
		    v-model="valid"
		    lazy-validation
		  >
			<v-row>
			
				<v-col cols="12" md="12">
				 <v-text-field
				 	v-model="mailOptions.from"
		            label="Name"
		            :rules="nameRules"
		            
		          ></v-text-field>
				</v-col>
				<!-- <v-col col="12" md="6">
				 <v-text-field
		            label="First name"
		            required
		          ></v-text-field>
				</v-col> -->
			</v-row>
			<v-row>
				<v-col col="12" md="12">
				 <v-text-field
		            label="email"
		            :rules="emailRules"
		            v-model="mailOptions.to"
		          ></v-text-field>
				</v-col>
				<!-- <v-col col="12" md="6">
				 <v-text-field
		            label="First name"
		            required
		          ></v-text-field>
				</v-col> -->
			</v-row>
			<v-row>
				<v-col col="12">
				 <v-textarea
				 v-model="mailOptions.text"
			      autocomplete="Message"
			      label="Message"
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
	</div>
</template>

<script>
import rules from '@/service/rules'

	export default {
		name: 'contact-form',
		data: () => ({
			loading: false,
			valid: true,
			emailRules: rules.emailRules,
			nameRules: rules.nameRules,
			messageRules: rules.messageRules,
			mailOptions: {
			  from: 'Md. Al Emran',
			  to: 'emran@softzino.com',
			  subject: 'Default',
			  text: 'That was easy!'
			},
		}),
		methods: {
			validateAndSendMail(){
				 //this.$refs.form.validate();
				 //console.log(this.$refs.form.validate())
				 this.$emit('sendMail', this.mailOptions)
			}
		}
	}	
</script>