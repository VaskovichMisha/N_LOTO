import * as API from '../../api/index'

export default {
  state() {
    return {

    }
  },
  actions: {
    registration({ state }, data) {
      API.registration(data).then(response => {
        document.cookie = "token=" + response.token
      })
    },
    login({ state }, data) {
      API.login(data).then(response => {
        document.cookie = "token=" + response.token
      })
    }
  },
  mutations: {

  },
  getters: {
     isAuthenticated() {
       const getCookie = name => {
         const cookies = document.cookie.split('; ');
         for (const cookie of cookies) {
           const [cookieName, cookieValue] = cookie.split('=');
           if (cookieName === name) {
             return cookieValue;
           }
         }
         return null;
       }

       const token = getCookie('token');

       return !!token;
     }
  },
}
