import Vue from "vue";
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  VCard,
  VImg,
  VTextField,
  VDivider,
  VForm,
  VMenu,
  VSpeedDial,
  VProgressCircular,
  VTooltip
} from "vuetify";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VCard,
    VImg,
    VTextField,
    VDivider,
    VForm,
    VMenu,
    VSpeedDial,
    VProgressCircular,
    VTooltip
  },
  theme: {
    primary: "#2196F3",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#E91E63",
    success: "#4CAF50",
    warning: "#FFC107"
  }
});
