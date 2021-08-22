 import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение
 const Component = {
   data: () => ({
    postID: 0,
    post: null,
   }),
   mounted() {

   },
   watch: {
     async postID() {
       this.post = await fetchMeetupById(this.postID);
     }
   }
 }

 const app = createApp(Component);
 app.mount('#app');
