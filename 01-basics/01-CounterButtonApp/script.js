import { createApp } from './vendor/vue.esm-browser.js';

const RootComponent = {
   data() {
       return {
          counter: 0
       }
   },
   methods: {
    countUp: function(e) {
        if(this.counter >= 10){
            this.counter = 0;
        }else{
            this.counter++
        }
    }  
   },
  }
const app = createApp(RootComponent);
app.mount('#app');