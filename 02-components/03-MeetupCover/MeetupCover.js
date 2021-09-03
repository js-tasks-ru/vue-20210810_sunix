import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',
  props: {
    title: {
      required: false,
    },
    image: {
      required: false,
    },
  },
  computed: {
    bgStyle() {
      return this.image ? `--bg-url: url('${this.image}')` : '';
    },
  },
  template: `
    <div class="meetup-cover" :style="bgStyle">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
