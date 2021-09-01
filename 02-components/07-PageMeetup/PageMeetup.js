import { defineComponent } from './vendor/vue.esm-browser.js';

import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';

import { fetchMeetupById } from './meetupService.js';
import MeetupView from '../06-MeetupView/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
    },
  },

  data() {
    return {
      meetupItem: null,
      errorFlag: false,
      errorMessage: '',
    };
  },

  computed: {
    loader() {
      return this.meetupItem === null && this.errorFlag === false;
    },
  },

  watch: {
    meetupId() {
      this.getMeetup();
    },
  },

  mounted() {
    this.getMeetup();
  },

  methods: {
    getMeetup() {
      this.meetupItem = null;
      this.errorFlag = false;
      fetchMeetupById(this.meetupId)
        .then((result) => {
          this.meetupItem = result;
        })
        .catch((error) => {
          this.errorMessage = error.message;
          this.errorFlag = true;
        });
    },
  },

  template: `
    <div class="page-meetup">
      <meetup-view :meetup='meetupItem' v-if='meetupItem'></meetup-view>
      <ui-container v-if='loader'>
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>
      <ui-container v-if='errorFlag'>
        <ui-alert>{{ errorMessage }}</ui-alert>
      </ui-container>
    </div>`,
});
