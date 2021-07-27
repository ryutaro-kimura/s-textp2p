<template>
    <div class="main-container">
        <form>
            <div class="box-container">
                <h2 class="heading">
                Login Your Account
                </h2>
                <div class="form-fields">
                <input id="email" name="email" v-model="email" type="text" placeholder="Email Address">
                </div>
                <div class="form-fields">
                <input id="password" name="password" v-model="password" type="text" placeholder="Password">
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
        };
    },
    methods: {
        login: function(){
            console.log("click");
            let auth = new Authentication();
            auth.setSigninInfo(this.email, this.password);
            auth.sendSignin().then(res => {
                console.log(res)
                let login = {
                    login: true,
                    token: res
                }
                this.$store.commit("setLogin", login)
                console.log(this.$store.getters.getLogin)
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