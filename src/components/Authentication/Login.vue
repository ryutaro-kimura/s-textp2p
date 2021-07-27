<template>
    <div :style="styleVariable" class="main-container">
        <form>
            <div class="box-container">
                <h2 class="heading">
                Login Your Account
                </h2>
                <div class="email-field">
                <input id="email" name="email" v-model="email" type="text" :placeholder=this.p_email>
                </div>
                <div class="password-field">
                <input id="password" name="password" v-model="password" type="text" :placeholder=this.p_password>
                </div>
                <div>
                    <v-btn @click="login" color="primary">
                        Login your account
                    </v-btn>
                </div>
            </div>
        </form>
        <div class="footer">
            <p>Create your account? <a href="/signup"> Sign Up</a></p>
        </div>
    </div>
</template>

<script>
import Authentication from '@/lib/auth.js'
export default{
    data() {
        return {
            email: '',
            password: '',
            p_email: 'Email Address',
            p_password: 'Password',
            p_email_color: '#666666',
            p_password_color: '#666666'
        };
    },
    computed: {
        styleVariable() {
            return {
                '--p_email_color': this.p_email_color,
                '--p_password_color': this.p_password_color 
            }
        }
    },
    methods: {
        login: function(){
            console.log("click");
            let auth = new Authentication();
            auth.setSigninInfo(this.email, this.password);
            auth.sendSignin().then(res => {
                if (res == "auth/invalid-email") {
                    console.log(res)
                    this.password = ''
                    this.p_email = 'user not found'
                    this.p_password = 'Password'
                    this.p_email_color = '#FF0000'
                    this.p_password_color = '#666666'                    
                }
                else if (res == "auth/user-not-found") {
                    console.log(res)
                    this.email = ''
                    this.password = ''
                    this.p_email = 'user not found'
                    this.p_password = 'Password'
                    this.p_email_color = '#FF0000'
                    this.p_password_color = '#666666'
                }
                else if (res == "auth/wrong-password") {
                    console.log(res)
                    this.password = ''
                    this.p_email = 'Email Address'
                    this.p_password = 'wrong password'
                    this.p_email_color = '#666666'
                    this.p_password_color = '#FF0000'
                }
                else {
                    let login = {
                        login: true,
                        token: res
                    }
                    this.$store.commit("setLogin", login)
                    console.log(this.$store.getters.getLogin)
                    this.$router.push('/search')
                }
            });
        }
    }
}
        
</script>

<style scoped>
.main-container {
    margin-top: 10%;
}
.box-container {
    padding: 20px;
    margin: 0 auto;
    width: 400px;
    box-shadow: beige;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #fff;
}
.heading {
    text-align: center;
    font-weight: 300;
    color: #444;
    margin: 0 auto 45px;
    font-size: 35px;
    line-height: 38px;
    text-transform: none;
    letter-spacing: 0;
}
.email-field, .password-field, .form-fields button {
    width: 100%;
    margin: 5px 0;
    line-height: 28px;
    border-radius: 5px;
}
.email-field, .password-field input {
    width: 100%;
    line-height: 40px;
    border-radius: 5px;
    border-radius: 5px;
    border: 1px solid #f1f1f1;
    background: #fff;
    padding: 0 5px;
    font-size: 14px;
}
.email-field ::placeholder {
    color: var(--p_email_color);
}
.password-field ::placeholder {
    color: var(--p_password_color);
}
.footer, .footer a {
    text-align: center;
    color: #0069ff;
}
</style>