import {createApp} from './vendor/vue.esm-browser.js';

const Component = {
  data: () => ({
    inputOne: 0,
    inputTwo: 0,
    operation: 'sum',
  }),
  computed: {
    result() {
      switch (this.operation) {
        case('sum'):
          return Number(this.inputOne) + Number(this.inputTwo);
        case('subtract'):
          return this.inputOne - this.inputTwo;
        case('multiply'):
          return this.inputOne * this.inputTwo;
        case('divide'):
          return this.inputOne / this.inputTwo;
      }
    }
  }
}

const app = createApp(Component);
app.mount('#app');
