import post from "@/lib/post.js";
import firebase from "firebase";
class Authentication {
  constructor() {
    this.username = "";
    this.mail = "";
    this.password = "";
    this.phoneNumber = "";
    this.errorCode = "";
    this.token = "";
  }
  setSigninInfo(mail, password) {
    this.mail = mail;
    this.password = password;
  }
  setSignupInfo(username, mail, password, phoneNumber) {
    this.username = username;
    this.mail = mail;
    this.password = password;
    this.phoneNumber = phoneNumber;
  }
  sendSignup() {
    let link = "/api/signup";
    return this.sendReq(link);
  }
  async sendSignin() {
    return new Promise((resolve) => {
        console.log(firebase)
      firebase.auth().signInWithEmailAndPassword(this.mail, this.password).then(() => {
          resolve(
            new Promise((resolve) => {
              firebase.auth().onAuthStateChanged((user) => {
                user
                  .getIdToken(true)
                  .then((res) => {
                    this.token = res;
                    resolve(res);
                  })
                  .catch((err) => {
                    resolve(err.code);
                  });
              });
            }).catch((err) => {
              resolve(err.code);
            })
          );
        })
        .catch((err) => {
          resolve(err.code);
        });
    });
  }
  sendReq(link) {
    let params = new URLSearchParams();
    params.append("mail", this.mail);
    params.append("password", this.password);
    params.append("username", this.username);
    params.append("phoneNumber", this.phoneNumber);
    return post(link, params);
  }
  sendToken(token) {
    let params = new URLSearchParams();
    let link = "/api/storeToken";
    params.append("token", token);
    return post(link, params);
  }
  getToken() {
    return this.token;
  }
}
export default Authentication;
