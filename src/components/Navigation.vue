<template>
  <div>
    <v-navigation-drawer
      app
      v-model="drawer"
      @transitionend="drawerFlip"
      clipped
    >
      <v-list flat>
        <v-list-item
          v-for="item in items"
          v-bind:key="item.i"
          @click="to(item.link)"
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ item.subtitle }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  created() {
    if (this.$store.state.login['login'] == false) {
      this.items.push({
        title: "ログイン",
        subtitle: "ユーザ認証を行います",
        link: "/login",
      },
      {
        title: "アカウント作成",
        subtitle: "アカウントの作成を行います",
        link: "/SignUp"
      });
    }
    else {
      this.items.push({
        title: "プロフィール",
        subtitle: "ユーザー情報の参照を行います",
        link: "/profile",
      },
      {
        title: "検索",
        subtitle: "教科書の検索を行います",
        link: "/search"
      },
      {
        title: "ログアウト",
        subtitle: "ログアウトします",
        link: "/logout"
      });
    }
  },
  data() {
    return {
      drawer: false,
      items: [],
    };
  },
  methods: {
    to(link) {
      if (link == "/logout") {
        this.logout()
        this.$router.push('/login')
        this.$router.go({path: this.$router.currentRoute.path, force: true})
      }
      else {
        this.$router.push({ path: link });
      }
    },
    drawerFlip() {
      this.drawer = !this.drawer;
    },
    logout() {
      let logout = {
          login: false,
          token: ''
      }
      this.$store.commit("setLogin", logout)
      console.log(this.$store.getters.getLogin)
      this.drawerFlip()
    }
  },
};
</script>