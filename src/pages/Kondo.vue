<template>
  <div class="border-bottom w-md-75 w-lg-60 space-2 mx-md-auto">
    <div v-if="!$auth.loading">
      <!-- For logged out users -->
      <div v-if="!$auth.isAuthenticated">
        <h1>What is Kondo?</h1>
        <p>Think of Kondo.io as Github organization-level cleaner</p>
        <h3>Features</h3>
        <ul>
          <li>Stanos: Stale Branch Thanos, one snap and all stale branches are removed, and all future stale branches
            prevented across your entire organization.
          </li>
          <li>Best Bots: Enable a set of the best curated ProBot Apps across all repositories</li>
          <li>Secret Scanner: Scans your repositories (including history) for any signs of secrets, with alerting and
            remediation help.
          </li>
          <li>GPM: Github Permission Manager - Set up branch protection, CODEOWNERS, and rules across your entire
            organization easily.
          </li>
          <li>RaC: Repositories as Code - For enforcing a standardized structure across all of your applications.</li>
        </ul>
        <br/>
        <div v-if="!$auth.loading">
          <button v-if="!$auth.isAuthenticated" type="submit" @click="login"
                  class="btn btn-primary btn-wide transition-3d-hover ml-3" value="login" name="login" id="login">
            Login/Register
          </button>
        </div>
      </div>
      <!-- For logged IN users -->
      <div v-if="$auth.isAuthenticated">
        <h1>Welcome back {{ $auth.user.name }}!</h1>
        <p>First, please select an organization to configure with Kondo. Note, if you don't see your organization, you
          will need to login to Github and grant access to see it.</p>
        <div class="Box">
          <div v-for="org in apiMessage" class="Box-row">
            <img class="avatar mr-1 v-align-middle" :src="org.avatar_url"
                 width="34" height="34" alt="@Pixel-Map">
            <span class="text-bold">{{ org.login }}</span>

            <a v-if="!org.installed" class="tooltipped float-right tooltipped-multiline tooltipped-n btn btn-primary"
               aria-label="Install kondo.io on this account."
               :href="'https://github.com/apps/kondo-io/installations/new/permissions?target_id=' + org.id">
              Install
            </a>
            <div v-if="org.installed" class="float-right BtnGroup">
            <span class="tooltipped tooltipped-multiline tooltipped-n btn btn-outline BtnGroup-item disabled"
                  aria-label="kondo.io is installed on this account.">
              Installed
            </span>
              <a  class="btn btn-default BtnGroup-item" :href="'https://github.com/apps/kondo-io/installations/' + org.install_id">
                <svg aria-label="Installation settings" class="octicon octicon-gear" viewBox="0 0 14 16" version="1.1"
                     width="14" height="16" role="img">
                  <path fill-rule="evenodd"
                        d="M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <br/>
        <button type="submit" @click="logout" class="btn btn-primary btn-wide transition-3d-hover ml-3" value="logout"
                name="logout" id="logout">Logout
        </button>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "Kondo",
    data() {
      return {
        apiMessage: "",
        token: false
      };
    },
    methods: {
      // Log the user in
      login() {
        this.$auth.loginWithRedirect();
      },
      // Log the user out
      logout() {
        this.$auth.logout({
          returnTo: window.location.origin
        });
      },
      async callApi() {
        // Get the access token from the auth wrapper
        const token = await this.$auth.getTokenSilently();

        // Use Axios to make a call to the API
        const {data} = await axios.get("/api/external", {
          headers: {
            Authorization: `Bearer ${token}`    // send the access token through the 'Authorization' header
          }
        });

        this.apiMessage = data;
      }
    },
    watch: {
      '$auth.isAuthenticated': function () {
        this.callApi();
      }
    },
    mounted() {
      if (!this.$auth.loading) {
        this.callApi();
      }
    }
    //Retrieve list of organizations
    // async mounted () {
    //   await this.$auth.getTokenSilently().then(function(token, failure) {
    //     axios
    //       .get("/api/external", {
    //         headers: {
    //           Authorization: `Bearer '${this.token}'`    // send the access token through the 'Authorization' header
    //         }}).then(response => (this.apiMessage = response)).catch(error => {
    //       console.log(error)
    //     }).catch(failure); {
    //       console.log(failure);
    //     }
    //   });
    // }
    // .then(function(token, failure) {
    //   axios
    //     .get("/api/external", {
    //       headers: {
    //         Authorization: `Bearer '${this.token}'`    // send the access token through the 'Authorization' header
    //       }}).then(response => (this.apiMessage = response)).catch(error => {
    //     console.log(error)
    //   }).catch(failure); {
    //     console.log(failure);
    //   }
    // });
  };
</script>

<style scoped>
  /*! CSS Used from: https://github.githubassets.com/assets/frameworks-94d2de65a56b07e193e50e91873678b6.css ; media=all */
  .Box {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  }

  @media all {
    .octicon {
      display: inline-block;
      vertical-align: text-top;
      fill: currentColor;
    }

    a {
      background-color: initial;
    }

    a:active, a:hover {
      outline-width: 0;
    }

    img {
      border-style: none;
    }

    svg:not(:root) {
      overflow: hidden;
    }

    ::-webkit-input-placeholder {
      color: inherit;
      opacity: .54;
    }

    * {
      box-sizing: border-box;
    }

    a {
      color: #0366d6;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    p {
      margin-top: 0;
      margin-bottom: 10px;
    }

    .octicon {
      vertical-align: text-bottom;
    }

    .Box {
      background-color: #fff;
      border: 1px solid #d1d5da;
      border-radius: 3px;
    }

    .Box-row {
      padding: 16px;
      margin-top: -1px;
      list-style-type: none;
      border-top: 1px solid #e1e4e8;
    }

    .Box-row:first-of-type {
      border-top-color: transparent;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
    }

    .Box-row:last-of-type {
      border-bottom-right-radius: 2px;
      border-bottom-left-radius: 2px;
    }

    .btn {
      position: relative;
      display: inline-block;
      padding: 6px 12px;
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      white-space: nowrap;
      vertical-align: middle;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-repeat: repeat-x;
      background-position: -1px -1px;
      background-size: 110% 110%;
      border: 1px solid rgba(27, 31, 35, .2);
      border-radius: .25em;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

    .btn .octicon {
      vertical-align: text-top;
    }

    .btn:hover {
      text-decoration: none;
      background-repeat: repeat-x;
    }

    .btn:focus {
      outline: 0;
    }

    .btn.disabled, .btn:disabled {
      cursor: default;
      background-position: 0 0;
    }

    .btn:active {
      background-image: none;
    }

    .btn {
      color: #24292e;
      background-color: #eff3f6;
      background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
    }

    .btn:focus {
      box-shadow: 0 0 0 .2em rgba(3, 102, 214, .3);
    }

    .btn:hover {
      background-color: #e6ebf1;
      background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);
      background-position: -.5em;
      border-color: rgba(27, 31, 35, .35);
    }

    .btn:active {
      background-color: #e9ecef;
      background-image: none;
      border-color: rgba(27, 31, 35, .35);
      box-shadow: inset 0 .15em .3em rgba(27, 31, 35, .15);
    }

    .btn.disabled, .btn:disabled {
      color: rgba(36, 41, 46, .4);
      background-color: #eff3f6;
      background-image: none;
      border-color: rgba(27, 31, 35, .2);
      box-shadow: none;
    }

    .btn-primary {
      color: #fff;
      background-color: #28a745;
      background-image: linear-gradient(-180deg, #34d058, #28a745 90%);
    }

    .btn-primary:focus {
      box-shadow: 0 0 0 .2em rgba(52, 208, 88, .4);
    }

    .btn-primary:hover {
      background-color: #269f42;
      background-image: linear-gradient(-180deg, #2fcb53, #269f42 90%);
      background-position: -.5em;
      border-color: rgba(27, 31, 35, .5);
    }

    .btn-primary:active {
      background-color: #279f43;
      background-image: none;
      border-color: rgba(27, 31, 35, .5);
      box-shadow: inset 0 .15em .3em rgba(27, 31, 35, .15);
    }

    .btn-primary:disabled {
      color: hsla(0, 0%, 100%, .75);
      background-color: #94d3a2;
      background-image: none;
      border-color: rgba(27, 31, 35, .2);
      box-shadow: none;
    }

    .btn-outline {
      color: #0366d6;
      background-color: #fff;
      background-image: none;
    }

    .btn-outline:active, .btn-outline:hover {
      color: #fff;
      background-color: #0366d6;
      background-image: none;
      border-color: #0366d6;
    }

    .btn-outline:focus {
      border-color: #0366d6;
      box-shadow: 0 0 0 .2em rgba(3, 102, 214, .4);
    }

    .btn-outline.disabled, .btn-outline:disabled {
      color: rgba(27, 31, 35, .3);
      background-color: #fff;
      border-color: rgba(27, 31, 35, .15);
      box-shadow: none;
    }

    .BtnGroup {
      display: inline-block;
      vertical-align: middle;
    }

    .BtnGroup:after, .BtnGroup:before {
      display: table;
      content: "";
    }

    .BtnGroup:after {
      clear: both;
    }

    .BtnGroup-item {
      position: relative;
      float: left;
      border-right-width: 0;
      border-radius: 0;
    }

    .BtnGroup-item:first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }

    .BtnGroup-item:last-child {
      border-right-width: 1px;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }

    .BtnGroup-item:active, .BtnGroup-item:focus, .BtnGroup-item:hover {
      border-right-width: 1px;
    }

    .BtnGroup-item:active + .BtnGroup-item, .BtnGroup-item:focus + .BtnGroup-item, .BtnGroup-item:hover + .BtnGroup-item {
      border-left-width: 0;
    }

    .BtnGroup-item:active, .BtnGroup-item:focus {
      z-index: 1;
    }

    :-ms-input-placeholder {
      color: #6a737d;
    }

    ::-ms-input-placeholder {
      color: #6a737d;
    }

    ::placeholder {
      color: #6a737d;
    }

    .col-9 {
      width: 75%;
    }

    .gutter > [class*=col-] {
      padding-right: 16px !important;
      padding-left: 16px !important;
    }

    .tooltipped {
      position: relative;
    }

    .tooltipped:after {
      z-index: 1000000;
      padding: .5em .75em;
      font: normal normal 11px/1.5 -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
      -webkit-font-smoothing: subpixel-antialiased;
      color: #fff;
      text-align: center;
      text-decoration: none;
      text-shadow: none;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: break-word;
      white-space: pre;
      content: attr(aria-label);
      background: #1b1f23;
      border-radius: 3px;
    }

    .tooltipped:after, .tooltipped:before {
      position: absolute;
      display: none;
      pointer-events: none;
      opacity: 0;
    }

    .tooltipped:before {
      z-index: 1000001;
      width: 0;
      height: 0;
      color: #1b1f23;
      content: "";
      border: 6px solid transparent;
    }

    .tooltipped:active:after, .tooltipped:active:before, .tooltipped:focus:after, .tooltipped:focus:before, .tooltipped:hover:after, .tooltipped:hover:before {
      display: inline-block;
      text-decoration: none;
      animation-name: tooltip-appear;
      animation-duration: .1s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in;
      animation-delay: .4s;
    }

    .tooltipped-multiline:active:after, .tooltipped-multiline:focus:after, .tooltipped-multiline:hover:after {
      display: table-cell;
    }

    .tooltipped-n:after {
      right: 50%;
      bottom: 100%;
      margin-bottom: 6px;
    }

    .tooltipped-n:before {
      top: -7px;
      right: 50%;
      bottom: auto;
      margin-right: -6px;
      border-top-color: #1b1f23;
    }

    .tooltipped-n:after {
      transform: translateX(50%);
    }

    .tooltipped-multiline:after {
      width: -webkit-max-content;
      width: -moz-max-content;
      width: max-content;
      max-width: 250px;
      word-wrap: break-word;
      white-space: pre-line;
      border-collapse: initial;
    }

    .tooltipped-multiline.tooltipped-n:after {
      right: auto;
      left: 50%;
      transform: translateX(-50%);
    }

    @media screen and (min-width: 0\0
    ) {
      .tooltipped-multiline:after {
        width: 250px;
      }
    }
    .v-align-middle {
      vertical-align: middle !important;
    }

    .float-left {
      float: left !important;
    }

    .float-right {
      float: right !important;
    }

    .mr-1 {
      margin-right: 4px !important;
    }

    .mb-4 {
      margin-bottom: 24px !important;
    }

    .f3 {
      font-size: 18px !important;
    }

    @media (min-width: 768px) {
      .f3 {
        font-size: 20px !important;
      }
    }
    .text-bold {
      font-weight: 600 !important;
    }
  }

  /*! CSS Used from: https://github.githubassets.com/assets/github-3c4881237e97cb689271ee2f91e36269.css ; media=all */
  @media all {
    .avatar {
      display: inline-block;
      overflow: hidden;
      line-height: 1;
      vertical-align: middle;
      border-radius: 3px;
    }

    .Subhead {
      display: flex;
      padding-bottom: 8px;
      margin-bottom: 16px;
      border-bottom: 1px solid #e1e4e8;
      flex-flow: row wrap;
    }

    .Subhead-heading {
      font-size: 24px;
      font-weight: 400;
      flex: 1 1 auto;
    }

    @media print {
      .btn:not(.btn-outline) {
        color: #24292e !important;
        background: none;
      }

      p {
        page-break-inside: avoid;
      }
    }
    @media (hover: none) {
      .tooltipped:hover:after, .tooltipped:hover:before {
        display: none;
      }
    }
  }

  /*! CSS Used keyframes */
  @keyframes tooltip-appear {
    0% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
