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

import jQuery from 'jquery'

window.jQuery = jQuery
window.$ = jQuery
// import './../node_modules/jquery/dist/jquery.min.js';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700'
  })
  head.script.push({ src: '/assets/vendor/jquery/dist/jquery.min.js', body: true })
  head.script.push({ src: '/assets/vendor/popper.js/dist/umd/popper.min.js', body: true })
  head.script.push({ src: '/assets/vendor/jquery-migrate/dist/jquery-migrate.min.js', body: true })
  head.script.push({ src: '/assets/vendor/bootstrap/bootstrap.min.js', body: true })
  head.script.push({ src: '/assets/vendor/hs-megamenu/hs.megamenu.js', body: true })
  head.script.push({ src: '/assets/vendor/svg-injector/dist/svg-injector.min.js', body: true })
  head.script.push({ src: '/assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js', body: true })
  head.script.push({ src: '/assets/vendor/jquery-validation/dist/jquery.validate.min.js', body: true })
  head.script.push({ src: '/assets/vendor/dzsparallaxer/dzsparallaxer.js', body: true })
  head.script.push({ src: '/assets/vendor/appear.js', body: true })
  head.script.push({ src: '/assets/vendor/custombox/custombox.min.js', body: true })
  head.script.push({ src: '/assets/vendor/custombox/custombox.legacy.min.js', body: true })
  head.script.push({ src: '/assets/js/hs.core.js', body: true })
  head.script.push({ src: '/assets/js/components/hs.header.js', body: true })
  head.script.push({ src: '/assets/js/components/hs.unfold.js', body: true })
  head.script.push({ src: '/assets/js/components/hs.malihu-scrollbar.js', body: true })
  head.script.push({ src: '/assets/js/components/hs.validation.js', body: true })
  head.script.push({ src: '/assets/js/components/hs.focus-state.js', body: true })
  head.script.push({ src: '/assets/js/components/hs.show-animation.js', body: true })
  head.script.push({ src: '/assets/js/components/hs.svg-injector.js', body: true })
  head.script.push({ src: '/assets/js/components/hs.sticky-block.js', body: true })
  head.script.push({ src: '/assets/js/components/hs.go-to.js', body: true })
  head.script.push({ src: '/assets/js/extra.js', body: true })
}
