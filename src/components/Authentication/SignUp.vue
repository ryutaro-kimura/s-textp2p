<template>
    <div class="main-container">
        <form>
            <div class="box-container">
                <h2 class="heading">
                Create Your Account
                </h2>
                <div class="form-fields">
                <input id="user_name" name="username" v-model="user_name" type="text" placeholder="User name">
                </div>
                <div class="form-fields">
                <input id="email" name="email" v-model="email" type="text" placeholder="Email Address">
                </div>
                <div class="form-fields">
                <input id="phone_number" name="phone_number" v-model="phone_number" type="text" placeholder="Phone number(000-0000-0000)">
                </div>
                <div class="form-fields">
                <input id="password" name="password" v-model="password" type="password" placeholder="Password(8桁以上)">
                </div>
                <div>
                    <v-btn @click="sign_up" color="primary">
                        Create your account
                    </v-btn>
                </div>
            </div>
        </form>
        <div class="footer">
            <p>Already have an account? <a href="/login"> Login</a></p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    data() {
        return {
            email: '',
            password: '',
            user_name: '',
            phone_number: ''
        };
    },
    methods: {
        sign_up: function(){
            console.log("click");
            let params = new URLSearchParams()
            params.append("mail", this.email);
            params.append("password", this.password);
            params.append("username", this.user_name);
            params.append("phoneNumber", this.phone_number);
            axios.post("https://textp2p.herokuapp.com/api/signup", params).then (res =>{
                console.log(res);
                if (res.data['error'] == null) {
                    this.$router.push('/login');
                }
            })
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
.form-fields, .form-fields button {
    width: 100%;
    margin: 5px 0;
    line-height: 28px;
    border-radius: 5px;
}
.form-fields input {
    width: 100%;
    line-height: 40px;
    border-radius: 5px;
    border-radius: 5px;
    border: 1px solid #f1f1f1;
    background: #fff;
    padding: 0 5px;
    font-size: 14px;
}
.createaccount {
    padding: 15px;
    background-color: #0069ff;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    height: 48px;
    line-height: 48px;
    padding: 0 32px;
    text-align: center;
    border-radius: 5px;
}
.footer, .footer a {
    text-align: center;
    color: #0069ff;
}
</style>