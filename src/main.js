// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import App from "./App.vue";

// CSS
import '~/assets/css/theme.css'
import '~/assets/css/prism-dracula.css'
import '~/assets/vendor/font-awesome/css/fontawesome-all.min.css'
import moment from 'moment'

// Import Layouts
import Layout from '~/layouts/Default.vue'
import KondoLayout from '~/layouts/KondoLayout.vue'

// Import the Auth0 configuration
import {domain, clientId, audience} from "../auth_config.json";

// Import the plugin here
import {Auth0Plugin} from "./auth";

export default function (Vue, {router, head, isClient}) {
  // Install the authentication plugin here
  Vue.use(Auth0Plugin, {
      domain,
      clientId,
      audience,
      onRedirectCallback: appState => {
        router.push(
          appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
        );
      },
    },
    Vue.component('Layout', Layout),
    Vue.component('KondoLayout', KondoLayout)
  );

  // Google analytics
  head.script.push({
    src: 'https://www.googletagmanager.com/gtag/js?id=UA-60115428-1',
    body: false
  })
  head.script.push({
    src: 'analytics.js',
    body: false
  })

  // Set default layout as a global component
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700'
  });
  Vue.filter('formatDate', function (value) {
    if (value) {
      return moment(new Date(String(value))).format('MMMM Do YYYY, h:mm a')
    }
  });

  // overwrite the scrollBehavior function with custom one
  router.options.scrollBehavior = function (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {selector: to.hash};
    }
    if ((from.name == 'project' && to.name == 'project') || ((from.name == 'work' && to.name == 'project'))) {
      return window.scrollHeight
    }
    return {x: 0, y: 0}
  };
  head.script.push({src: 'https://platform.twitter.com/widgets.js', body: true});
}
