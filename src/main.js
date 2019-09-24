// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

// CSS
import '~/assets/css/theme.css'
import '~/assets/vendor/font-awesome/css/fontawesome-all.min.css'
import '~/assets/vendor/animate.css/animate.min.css'
import '~/assets/vendor/hs-megamenu/hs.megamenu.css'
import '~/assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css'
import '~/assets/vendor/dzsparallaxer/dzsparallaxer.css'
import '~/assets/vendor/custombox/dist/custombox.min.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700'
  })
}
