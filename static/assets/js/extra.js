$(window).on('load', function () {
  // initialization of HSMegaMenu component
  $('.js-mega-menu').HSMegaMenu({
    event: 'hover',
    pageContainer: $('.container'),
    breakpoint: 767.98,
    hideTimeOut: 0
  });

  // // initialization of svg injector module
  // $.HSCore.components.HSSVGIngector.init('.js-svg-injector');
});

$(document).on('ready', function () {
  // initialization of header
  $.HSCore.components.HSHeader.init($('#header'));

  // initialization of unfold component
  $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
    afterOpen: function () {
      $(this).find('input[type="search"]').focus();
    }
  });

  // initialization of malihu scrollbar
  $.HSCore.components.HSMalihuScrollBar.init($('.js-scrollbar'));

  // initialization of show animations
  $.HSCore.components.HSShowAnimation.init('.js-animation-link');

  // initialization of form validation
  $.HSCore.components.HSValidation.init('.js-validate', {
    rules: {
      confirmPassword: {
        equalTo: '#signupPassword'
      }
    }
  });

  // initialization of forms
  $.HSCore.components.HSFocusState.init();

  // initialization of sticky blocks
  $.HSCore.components.HSStickyBlock.init('.js-sticky-block');

  // initialization of go to
  $.HSCore.components.HSGoTo.init('.js-go-to');
});
