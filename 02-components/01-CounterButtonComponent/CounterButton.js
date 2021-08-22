import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props: {
    count: {
      default: 0,
    },
  },
  methods: {
    onCLickHandler() {
      this.$emit("update:count", this.count + 1);
    }
  },
  template: `<button @click="onCLickHandler" type="button">{{count}}</button>`,
});
