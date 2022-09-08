<script data-cfasync="false" src="../../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
<script src="{{ asset('assets/js/jquery-3.6.0.min.js') }}"></script>
<script src="{{ asset('assets/js/chain_fade.js') }}"></script>
<script src="{{ asset('assets/js/bootstrap.bundle.min.js') }}"></script>
<script src="{{ asset('assets/js/owl.carousel.min.js') }}"></script>
<script src="{{ asset('assets/js/swiper-bundle.min.js') }}"></script>
<script src="{{ asset('assets/js/jquery.fancybox.min.js') }}"></script>
<script src="{{ asset('assets/js/select2.min.js') }}"></script>
<script src="{{ asset('assets/js/jquery-ui.js') }}"></script>

<script src="{{ asset('assets/js/main.js') }}"></script>
<script src="{{ asset('assets/js/custom-swiper.js') }}"></script>
<!-- JS Global Compulsory -->
<script src="{{ asset('assets/vendor/jquery/dist/jquery.min.js') }}"></script>
<script src="{{ asset('assets/vendor/jquery-migrate/dist/jquery-migrate.min.js') }}"></script>
<script src="{{ asset('assets/vendor/popper.js/dist/umd/popper.min.js') }}"></script>
<script src="{{ asset('assets/vendor/bootstrap/bootstrap.min.js') }}"></script>

<!-- JS Implementing Plugins -->
<script src="{{ asset('assets/vendor/hs-megamenu/src/hs.megamenu.js') }}"></script>
<script src="{{ asset('assets/vendor/jquery-validation/dist/jquery.validate.min.js') }}"></script>
<script src="{{ asset('assets/vendor/flatpickr/dist/flatpickr.min.js') }}"></script>
<script src="{{ asset('assets/vendor/bootstrap-select/dist/js/bootstrap-select.min.js') }}"></script>
<script src="{{ asset('assets/vendor/slick-carousel/slick/slick.js') }}"></script>

<!-- JS MyTravel -->
<script src="{{ asset('assets/js/hs.core.js') }}"></script>
<script src="{{ asset('assets/js/components/hs.header.js') }}"></script>
<script src="{{ asset('assets/js/components/hs.unfold.js') }}"></script>
<script src="{{ asset('assets/js/components/hs.validation.js') }}"></script>
<script src="{{ asset('assets/js/components/hs.show-animation.js') }}"></script>
<script src="{{ asset('assets/js/components/hs.range-datepicker.js') }}"></script>
<script src="{{ asset('assets/js/components/hs.selectpicker.j') }}s"></script>
<script src="{{ asset('assets/js/components/hs.go-to.js') }}"></script>
<script src="{{ asset('assets/js/components/hs.slick-carousel.js') }}"></script>
<script src="{{ asset('assets/js/components/hs.quantity-counter.js') }}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.js



"></script>

<script>
    new WOW().init();
</script>

<!-- JS Plugins Init. -->
<script>
    $(window).on('load', function() {
        // initialization of HSMegaMenu component
        $('.js-mega-menu').HSMegaMenu({
            event: 'hover',
            pageContainer: $('.container'),
            breakpoint: 1199.98,
            hideTimeOut: 0
        });

        // Page preloader
        setTimeout(function() {
            $('#jsPreloader').fadeOut(500)
        }, 800);
    });

    $(document).on('ready', function() {
        // initialization of header
        $.HSCore.components.HSHeader.init($('#header'));

        // initialization of unfold component
        $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));

        // initialization of show animations
        $.HSCore.components.HSShowAnimation.init('.js-animation-link');

        // initialization of datepicker
        $.HSCore.components.HSRangeDatepicker.init('.js-range-datepicker');

        // initialization of select
        $.HSCore.components.HSSelectPicker.init('.js-select');

        // initialization of quantity counter
        $.HSCore.components.HSQantityCounter.init('.js-quantity');

        // initialization of slick carousel
        $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

        // initialization of go to
        $.HSCore.components.HSGoTo.init('.js-go-to');
    });
</script>
