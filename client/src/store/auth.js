import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    isAuth: false,
    loading: false,
  }),

  actions: {
    async verifyAuthenticator(code) {
      this.loading = true;
      axios
        .post("http://localhost:5000/user/auth", { code: code })
        .then((response) => {
          this.loading = false;
          if (response.status === 200) {
            this.isAuth = true;
            router.push({ name: "home" });
          }
        })
        .catch((e) => {
          alert(e.response.data.message);
          this.loading = false;
        });
    },
  },
  persist: true,
});
