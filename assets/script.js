(function ($) {
  ('use strict');

  /*------------------------------------------
        = ALL ESSENTIAL FUNCTIONS
    -------------------------------------------*/

  // Toggle mobile navigation
  function toggleMobileNavigation() {
    var navbar = $('.navigation-holder');
    var openBtn = $('.mobail-menu .open-btn');
    var xbutton = $('.mobail-menu .navbar-toggler');

    openBtn.on('click', function (e) {
      e.stopImmediatePropagation();
      navbar.toggleClass('slideInn');
      xbutton.toggleClass('x-close');
      return false;
    });
  }

  toggleMobileNavigation();

  // Function for toggle class for small menu
  function toggleClassForSmallNav() {
    var windowWidth = window.innerWidth;
    var mainNav = $('#navbar > ul');

    if (windowWidth <= 991) {
      mainNav.addClass('small-nav');
    } else {
      mainNav.removeClass('small-nav');
    }
  }

  toggleClassForSmallNav();

  // Function for small menu
  function smallNavFunctionality() {
    var windowWidth = window.innerWidth;
    var mainNav = $('.navigation-holder');
    var smallNav = $('.navigation-holder > .small-nav');
    var subMenu = smallNav.find('.sub-menu');
    var megamenu = smallNav.find('.mega-menu');
    var menuItemWidthSubMenu = smallNav.find('.menu-item-has-children > a');

    if (windowWidth <= 991) {
      subMenu.hide();
      megamenu.hide();
      menuItemWidthSubMenu.on('click', function (e) {
        var $this = $(this);
        $this.siblings().slideToggle();
        e.preventDefault();
        e.stopImmediatePropagation();
        $this.toggleClass('rotate');
      });
    } else if (windowWidth > 991) {
      mainNav.find('.sub-menu').show();
      mainNav.find('.mega-menu').show();
    }
  }

  smallNavFunctionality();

  // function for active menuitem
  function activeMenuItem($links) {
    var top = $(window).scrollTop(),
      windowHeight = $(window).height(),
      documentHeight = $(document).height(),
      cur_pos = top + 2,
      sections = $('section'),
      nav = $links,
      nav_height = nav.outerHeight();

    sections.each(function () {
      var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('> ul > li > a').parent().removeClass('current-menu-item');
        nav
          .find("a[href='#" + $(this).attr('id') + "']")
          .parent()
          .addClass('current-menu-item');
      } else if (cur_pos === 2) {
        nav.find('> ul > li > a').parent().removeClass('current-menu-item');
      }
    });
  }

  // smooth-scrolling
  function smoothScrolling($scrollLinks, $topOffset) {
    var links = $scrollLinks;
    var topGap = $topOffset;

    links.on('click', function () {
      if (
        location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
        location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate(
            {
              scrollTop: target.offset().top - topGap,
            },
            1000,
            'easeInOutExpo'
          );
          return false;
        }
      }
      return false;
    });
  }

  $('body').on('click', function () {
    $('.navigation-holder').removeClass('slideInn');
  });
  $('.menu-close').on('click', function () {
    $('.navigation-holder').removeClass('slideInn');
  });
  $('.menu-close').on('click', function () {
    $('.open-btn').removeClass('x-close');
  });

  $('.menu-toggle').on('click', function () {
    $('.header-area').toggleClass('active');
  });

  // tooltips

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Hero slider background setting
  function sliderBgSetting() {
    if ($('.hero-slider .slide').length) {
      $('.hero-slider .slide').each(function () {
        var $this = $(this);
        var img = $this.find('.slider-bg').attr('src');

        $this.css({
          backgroundImage: 'url(' + img + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        });
      });
    }
  }

  //Setting hero slider
  function heroSlider() {
    if ($('.hero-slider').length) {
      $('.hero-slider').slick({
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        dots: true,
        fade: true,
        cssEase: 'linear',
      });
    }
  }

  //Active heor slider
  heroSlider();

  /*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
  function preloader() {
    if ($('.preloader').length) {
      $('.preloader')
        .delay(100)
        .fadeOut(500, function () {
          //active wow
          wow.init();
        });
    }
  }

  /*------------------------------------------
        = WOW ANIMATION SETTING
    -------------------------------------------*/
  var wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });

  /*------------------------------------------
        = ACTIVE POPUP IMAGE
    -------------------------------------------*/
  if ($('.fancybox').length) {
    $('.fancybox').fancybox({
      openEffect: 'elastic',
      closeEffect: 'elastic',
      wrapCSS: 'project-fancybox-title-style',
    });
  }

  /*------------------------------------------
        = POPUP YOUTUBE, VIMEO, GMAPS
    -------------------------------------------*/
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  // Creative-agency-testimonial-area
  if ($('.testimonial-area').length) {
    $('.testimonial-active').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.testimonial-thumbnil-active',
    });
    $('.testimonial-thumbnil-active').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.testimonial-active',
      focusOnSelect: true,
      arrows: true,

      responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  // Creative-agency-testimonial-area
  // if ($('.testimonial-area').length) {
  //   $('.testimonial-active').slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows: true,
  //     dots: true,
  //     height: true,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //           infinite: true,
  //           dots: true,
  //         },
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //           initialSlide: 1,
  //         },
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //         },
  //       },
  //     ],
  //   });
  // }

  // Testimonial brand section
  // if ($('.partner-wrap').length) {
  //   $('.partner-wrap').slick({
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     arrows: true,
  //     dots: true,
  //     height: true,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 1,
  //           infinite: true,
  //           dots: true,
  //         },
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 1,
  //           initialSlide: 1,
  //         },
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 1,
  //         },
  //       },
  //     ],
  //   });
  // }

  /*------------------------------------------
        = project-active
    -------------------------------------------*/
  if ($('.project-active').length) {
    $('.project-active').owlCarousel({
      autoplay: false,
      smartSpeed: 300,
      margin: 20,
      loop: true,
      autoplayHoverPause: true,
      navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
      dots: false,
      nav: false,
      autoWidth: true,
      responsive: {
        0: {
          items: 1,
          dots: true,
          nav: false,
          autoWidth: false,
        },

        500: {
          items: 1,
          dots: true,
          nav: false,
          autoWidth: false,
        },

        768: {
          items: 2,
          autoWidth: false,
        },
        992: {
          items: 3,
          autoWidth: false,
        },
        1200: {
          items: 3,
        },
        1400: {
          items: 3,
        },
      },
    });
  }
  /*------------------------------------------
        = blog-active
    -------------------------------------------*/
  if ($('.blog-active').length) {
    $('.blog-active').owlCarousel({
      autoplay: false,
      smartSpeed: 300,
      margin: 20,
      loop: true,
      autoplayHoverPause: true,
      dots: false,
      navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
      nav: false,
      responsive: {
        0: {
          items: 1,
          dots: true,
          nav: false,
        },

        500: {
          items: 1,
          dots: true,
          nav: false,
        },

        768: {
          items: 2,
        },
        992: {
          items: 2,
        },
        1200: {
          items: 3,
        },
        1400: {
          items: 3,
        },
      },
    });
  }

  /*------------------------------------------
       = BACK TO TOP BTN SETTING
   -------------------------------------------*/
  $('body').append("<a href='#' class='back-to-top'><i class='ti-arrow-up'></i></a>");

  function toggleBackToTopBtn() {
    var amountScrolled = 1000;
    if ($(window).scrollTop() > amountScrolled) {
      $('a.back-to-top').fadeIn('slow');
    } else {
      $('a.back-to-top').fadeOut('slow');
    }
  }

  $('.back-to-top').on('click', function () {
    $('html,body').animate(
      {
        scrollTop: 0,
      },
      700
    );
    return false;
  });

  /*------------------------------------------
        = CONTACT FORM SUBMISSION
    -------------------------------------------*/
  if ($('#contact-form-mejor').length) {
    $('#contact-form-mejor').validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },

        email: 'required',

        phone: 'required',

        subject: {
          required: true,
        },
      },

      messages: {
        name: 'Please enter your name',
        email: 'Please enter your email address',
        phone: 'Please enter your phone number',
        subject: 'Please select your contact subject',
      },

      submitHandler: function (form) {
        $.ajax({
          type: 'POST',
          url: 'mail-contact.php',
          data: $(form).serialize(),
          success: function () {
            $('#loader').hide();
            $('#success').slideDown('slow');
            setTimeout(function () {
              $('#success').slideUp('slow');
            }, 3000);
            form.reset();
          },
          error: function () {
            $('#loader').hide();
            $('#error').slideDown('slow');
            setTimeout(function () {
              $('#error').slideUp('slow');
            }, 3000);
          },
        });
        return false; // required to block normal submit since you used ajax
      },
    });
  }

  /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
  $(window).on('load', function () {
    preloader();

    toggleMobileNavigation();

    smallNavFunctionality();

    sliderBgSetting();

    smoothScrolling(
      $("#navbar > ul > li > a[href^='#'], .link-widget > ul > li > a[href^='#'] "),
      $('.site-header .navigation').innerHeight()
    );
  });

  /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
  $(window).on('scroll', function () {
    toggleBackToTopBtn();

    activeMenuItem($('.navigation-holder'));
  });

  /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
  $(window).on('resize', function () {
    toggleClassForSmallNav();
    //smallNavFunctionality();

    clearTimeout($.data(this, 'resizeTimer'));
    $.data(
      this,
      'resizeTimer',
      setTimeout(function () {
        smallNavFunctionality();
      }, 200)
    );
  });

  $(document).ready(function () {
    $('.accordion-header').click(function () {
      $(this).toggleClass('active');
      var $content = $(this).next('.accordion-content');
      $content.toggleClass('active');
      $('.accordion-header').not(this).removeClass('active');
      $('.accordion-content').not($content).removeClass('active');
    });
    $('.inner-accordion-header').click(function () {
      $(this).toggleClass('active');
      var $innerContent = $(this).next('.inner-accordion-content');
      $innerContent.toggleClass('active');
      $(this).closest('.inner-accordion').find('.inner-accordion-header').not(this).removeClass('active');
      $(this).closest('.inner-accordion').find('.inner-accordion-content').not($innerContent).removeClass('active');
    });
  });

  $(document).ready(function () {
    $(document).on('click', '.inner-inner-accordion-header', function () {
      $(this).toggleClass('active');
      var $innerContent = $(this).next('.inner-accordion-content');
      $innerContent.toggleClass('active');
      $(this).closest('.inner-accordion-item').siblings().find('.inner-inner-accordion-header').removeClass('active');
      $(this).closest('.inner-accordion-item').siblings().find('.inner-accordion-content').removeClass('active');
    });
  });
})(window.jQuery);

function formatDate(isoDate) {
  // Create a new Date object from the ISO string
  var date = new Date(isoDate);

  // Extract day, month, and year from the Date object
  var day = String(date.getDate()).padStart(2, '0'); // Add leading zero if necessary
  var month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
  var year = date.getFullYear();

  // Return the formatted date
  return `${month}/${day}/${year}`;
}
function fileType(ext) {
  console.log('Ext', ext);
  switch (ext) {
    case '.pdf':
      return 'fa-file-pdf-o';
    case '.doc':
    case '.docx':
      return 'fa-file-word-o';
    case '.xls':
    case '.xlsx':
      return 'fa-file-excel-o';
    case '.ppt':
    case '.pptx':
      return 'fa-file-powerpoint-o';
    case '.zip':
      return 'fa-file-archive-o';
    case '.jpg':
    case '.jpeg':
    case '.png':
    case '.gif':
    case '.webp':
      return 'fa-picture-o';
    case '.txt':
      return 'fa-file-text-o';
    case '.mp4':
      return 'fa-file-video-o';
    case '.mp3':
      return 'fa-music';
    default:
      return 'fa-file-o';
  }
}

$(document).ready(function () {
  // Show loading initially
  let loading = true;
  let error = null;
  let productInfo = null;
  // var baseUrl = 'https://finishsense-strapi.devrisen.com';
  var baseUrl = 'http://localhost:1337';

  const urls = [
    `${baseUrl}/api/categories?populate[resources][populate]=*`,
    `${baseUrl}/api/category-1s?populate[resources][populate]=*`,
    `${baseUrl}/api/category-2s?populate[resources][populate]=*`,
    `${baseUrl}/api/category-3s?populate[resources][populate]=*`,
    `${baseUrl}/api/category-4s?populate[resources][populate]=*`,
    `${baseUrl}/api/category-5s?populate[resources][populate]=*`,
    // Add more URLs as needed
  ];

  const requests = urls.map((url) =>
    $.ajax({
      url: url,
      method: 'GET',
    })
  );

  Promise.all(requests)
    .then((responses) => {
      const categories = responses[0]?.data || [];
      const category1s = responses[1]?.data || [];
      const category2s = responses[2]?.data || [];
      const category3s = responses[3]?.data || [];
      const category4s = responses[4]?.data || [];
      const category5s = responses[5]?.data || [];

      console.log('Categories:', categories);
      console.log('Category 1s:', category1s);
      console.log('Category 2s:', category2s);
      console.log('Category 3s:', category3s);
      console.log('Category 4s:', category4s);
      console.log('Category 5s:', category5s);

      categories?.forEach((product) => {
        const productHtml = `
               <div class="main-box">
                        <div class="accordion-header" onclick="showFolder(this)">
                           <ul>
                              <li class="product">
                                 <div class="info">
                                    <div class="icon">
                                       <i class='fa fa-folder'></i>
                                    </div>
                                    <div class="text">
                                       <p>${product?.attributes?.Name}</p>
                                    </div>
                                 </div>
                              </li>
                              <li class="date">
                                 <b>${formatDate(product?.attributes?.updatedAt)}</b>
                                 <span>Last Modified</span>
                              </li>
                              <li class="date"></li>
                           </ul>
                        </div>
                        <div class="accordion-content">

                        ${product?.attributes?.resources?.data
                          .map((resource) => {
                            return `
                           <ul>
                              <li class="product">
                                 <div class="info">
                                    <div class="icon">
                                       <i class="fa ${fileType(
                                         resource?.attributes?.File?.data?.attributes?.ext
                                       )}" aria-hidden="true"></i>
                                    </div>
                                    <div class="text">
                                       <p>${resource?.attributes?.File?.data?.attributes?.name}</p>
                                       <span>${resource?.attributes?.File?.data?.attributes?.ext}</span>
                                    </div>
                                 </div>
                              </li>
                              <li class="date">
                                 <b>${formatDate(resource?.attributes?.File?.data?.attributes?.updatedAt)}</b>
                                 <span>Last Modified</span>
                              </li>
                              <li class="download-btn">
                                 <a href="${
                                   baseUrl + resource?.attributes?.File?.data?.attributes?.url
                                 }" target="_blank">
                              <i class="fa fa-download" aria-hidden="true"></i>
                            </a>
                              </li>
                           </ul>
                           `;
                          })
                          .join('')}
                           <div class="inner-accordion">
                           ${category1s
                             .map((product) => {
                               return `
                              <div class="inner-accordion-item">
                                 <div class="inner-accordion-header" onclick="showSubFolder(this)">
                                    <ul>
                                       <li class="product">
                                          <div class="info">
                                             <div class="icon">
                                                <i class='fa fa-folder'></i>
                                             </div>
                                             <div class="text">
                                                <p>${product?.attributes?.Name}</p>
                                             </div>
                                          </div>
                                       </li>
                                       <li class="date">
                                          <b>${formatDate(product?.attributes?.updatedAt)}</b>
                                          <span>Last Modified</span>
                                       </li>
                                       <li class="date"></li>
                                    </ul>
                                 </div>
                                 <div class="inner-accordion-content">
                                 ${product?.attributes?.resources?.data
                                   .map((resource) => {
                                     return `
                                    <ul>
                                       <li class="product">
                                          <div class="info">
                                             <div class="icon">
                                                <i class="fa ${fileType(
                                                  resource?.attributes?.File?.data?.attributes?.ext
                                                )}" aria-hidden="true"></i>
                                             </div>
                                             <div class="text">
                                                <p>${resource?.attributes?.File?.data?.attributes?.name}</p>
                                                <span>${resource?.attributes?.File?.data?.attributes?.ext}</span>
                                             </div>
                                          </div>
                                       </li>
                                       <li class="date">
                                          <b>${formatDate(resource?.attributes?.File?.data?.attributes?.updatedAt)}</b>
                                          <span>Last Modified</span>
                                       </li>
                                       <li class="download-btn">
                                          <a href="${
                                            baseUrl + resource?.attributes?.File?.data?.attributes?.url
                                          }" target="_blank">
                              <i class="fa fa-download" aria-hidden="true"></i>
                            </a>
                                       </li>
                                    </ul>  `;
                                   })
                                   .join('')}
                                      ${category2s
                                        .map((product) => {
                                          return `
                                    <div class="inner-accordion-item">
                                       <div class="inner-inner-accordion-header">
                                          <ul>
                                             <li class="product">
                                                <div class="info">
                                                   <div class="icon">
                                                      <i class='fa fa-folder'></i>
                                                   </div>
                                                   <div class="text">
                                                      <p>${product?.attributes?.Name}</p>
                                                   </div>
                                                </div>
                                             </li>
                                             <li class="date">
                                                <b>${formatDate(product?.attributes?.updatedAt)}</b>
                                                <span>Last Modified</span>
                                             </li>
                                             <li class="date"></li>
                                          </ul>
                                       </div>
                                       <div class="inner-accordion-content">
                                                                        ${product?.attributes?.resources?.data
                                                                          .map((resource) => {
                                                                            return `
                                          <ul>
                                             <li class="product">
                                                <div class="info">
                                                   <div class="icon">
                                                      <i class="fa ${fileType(
                                                        resource?.attributes?.File?.data?.attributes?.ext
                                                      )}" aria-hidden="true"></i>
                                                   </div>
                                                   <div class="text">
                                                      <p>${resource?.attributes?.File?.data?.attributes?.name}</p>
                                                      <span>${resource?.attributes?.File?.data?.attributes?.ext}</span>
                                                   </div>
                                                </div>
                                             </li>
                                             <li class="date">
                                                <b>${formatDate(
                                                  resource?.attributes?.File?.data?.attributes?.updatedAt
                                                )}</b>
                                                <span>Last Modified</span>
                                             </li>
                                             <li class="download-btn">
                                                <a href="${
                                                  baseUrl + resource?.attributes?.File?.data?.attributes?.url
                                                }" target="_blank">
                              <i class="fa fa-download" aria-hidden="true"></i>
                            </a>
                                             </li>
                                          </ul>
                                         
                                          `;
                                                                          })
                                                                          .join('')}
                                                                          
                                             ${category3s
                                               .map((product) => {
                                                 return `
                                          <div class="inner-accordion-item">
                                             <div class="inner-inner-accordion-header">
                                                <ul>
                                                   <li class="product">
                                                      <div class="info">
                                                         <div class="icon">
                                                            <i class='fa fa-folder'></i>
                                                         </div>
                                                         <div class="text">
                                                            <p>${product?.attributes?.Name}</p>
                                                         </div>
                                                      </div>
                                                   </li>
                                                   <li class="date">
                                                      <b>${formatDate(product?.attributes?.updatedAt)}</b>
                                                      <span>Last Modified</span>
                                                   </li>
                                                   <li class="date"></li>
                                                </ul>
                                             </div>
                                             <div class="inner-accordion-content">
                                              ${product?.attributes?.resources?.data
                                                .map((resource) => {
                                                  return `
                                                <ul>
                                                   <li class="product">
                                                      <div class="info">
                                                         <div class="icon">
                                                            <i class="fa ${fileType(
                                                              resource?.attributes?.File?.data?.attributes?.ext
                                                            )}" aria-hidden="true"></i>
                                                         </div>
                                                         <div class="text">
                                                             <p>${
                                                               resource?.attributes?.File?.data?.attributes?.name
                                                             }</p>
                                                <span>${resource?.attributes?.File?.data?.attributes?.ext}</span>
                                                         </div>
                                                      </div>
                                                   </li>
                                                   <li class="date">
                                                      <b>${formatDate(
                                                        resource?.attributes?.File?.data?.attributes?.updatedAt
                                                      )}</b>
                                                      <span>Last Modified</span>
                                                   </li>
                                                   <li class="download-btn">
                                                     <a href="${
                                                       baseUrl + resource?.attributes?.File?.data?.attributes?.url
                                                     }" target="_blank">
                              <i class="fa fa-download" aria-hidden="true"></i>
                            </a>
                                                   </li>
                                                </ul>
                                               
                                                 `;
                                                })
                                                .join('')}
                                                
                                                    ${category4s
                                                      .map((product) => {
                                                        return `
                                                <div class="inner-accordion-item">
                                                   <div class="inner-inner-accordion-header">
                                                      <ul>
                                                         <li class="product">
                                                            <div class="info">
                                                               <div class="icon">
                                                                  <i class='fa fa-folder'></i>
                                                               </div>
                                                               <div class="text">
                                                                  <p>${product?.attributes?.Name}</p>
                                                               </div>
                                                            </div>
                                                         </li>
                                                         <li class="date">
                                                            <b>${formatDate(product?.attributes?.updatedAt)}</b>
                                                            <span>Last Modified</span>
                                                         </li>
                                                         <li class="date"></li>
                                                      </ul>
                                                   </div>
                                                   <div class="inner-accordion-content">
                                                    ${product?.attributes?.resources?.data
                                                      .map((resource) => {
                                                        return `
                                                      <ul>
                                                         <li class="product">
                                                            <div class="info">
                                                               <div class="icon">
                                                                  <i class="fa ${fileType(
                                                                    resource?.attributes?.File?.data?.attributes?.ext
                                                                  )}" aria-hidden="true"></i>
                                                               </div>
                                                               <div class="text">
                                                                                                                  <p>${
                                                                                                                    resource
                                                                                                                      ?.attributes
                                                                                                                      ?.File
                                                                                                                      ?.data
                                                                                                                      ?.attributes
                                                                                                                      ?.name
                                                                                                                  }</p>
                                                <span>${resource?.attributes?.File?.data?.attributes?.ext}</span>
                                                               </div>
                                                            </div>
                                                         </li>
                                                         <li class="date">
                                                            <b>${formatDate(
                                                              resource?.attributes?.File?.data?.attributes?.updatedAt
                                                            )}</b>
                                                            <span>Last Modified</span>
                                                         </li>
                                                         <li class="download-btn">
                                                            <a href="${
                                                              baseUrl +
                                                              resource?.attributes?.File?.data?.attributes?.url
                                                            }" target="_blank">
                              <i class="fa fa-download" aria-hidden="true"></i>
                            </a>
                                                         </li>
                                                      </ul>
                                                    
                                                      `;
                                                      })
                                                      .join('')}
                                                      
                                                                                  ${category5s
                                                                                    .map((product) => {
                                                                                      return `
                                                      <div class="inner-accordion-item">
                                                         <div class="inner-inner-accordion-header">
                                                            <ul>
                                                               <li class="product">
                                                                  <div class="info">
                                                                     <div class="icon">
                                                                        <i class='fa fa-folder'></i>
                                                                     </div>
                                                                     <div class="text">
                                                                        <p>${product?.attributes?.Name}</p>
                                                                     </div>
                                                                  </div>
                                                               </li>
                                                               <li class="date">
                                                                  <b>${formatDate(product?.attributes?.updatedAt)}</b>
                                                                  <span>Last Modified</span>
                                                               </li>
                                                               <li class="date"></li>
                                                            </ul>
                                                         </div>
                                                         <div class="inner-accordion-content">
                                                                                          ${product?.attributes?.resources?.data
                                                                                            .map((resource) => {
                                                                                              return `
                                                            <ul>
                                                               <li class="product">
                                                                  <div class="info">
                                                                     <div class="icon">
                                                                        <i class="fa ${fileType(
                                                                          resource?.attributes?.File?.data?.attributes
                                                                            ?.ext
                                                                        )}" aria-hidden="true"></i>
                                                                     </div>
                                                                     <div class="text">
                                                                        <p>${
                                                                          resource?.attributes?.File?.data?.attributes
                                                                            ?.name
                                                                        }</p>
                                                                        <span>${
                                                                          resource?.attributes?.File?.data?.attributes
                                                                            ?.ext
                                                                        }</span>
                                                                     </div>
                                                                  </div>
                                                               </li>
                                                               <li class="date">
                                                                  <b>${formatDate(
                                                                    resource?.attributes?.File?.data?.attributes
                                                                      ?.updatedAt
                                                                  )}</b>
                                                                  <span>Last Modified</span>
                                                               </li>
                                                               <li class="download-btn">
                                                                  <a href="${
                                                                    baseUrl +
                                                                    resource?.attributes?.File?.data?.attributes?.url
                                                                  }" target="_blank">
                              <i class="fa fa-download" aria-hidden="true"></i>
                            </a>
                                                               </li>
                                                            </ul>
                                                            
                                                             `;
                                                                                            })
                                                                                            .join('')}
                                                         </div>
                                                      </div>
                                                      `;
                                                                                    })
                                                                                    .join('')}
                                                   </div>
                                                </div>
                                                `;
                                                      })
                                                      .join('')}
                                             </div>
                                          </div>
                                          `;
                                               })
                                               .join('')}
                                       </div>
                                    </div>
                                    `;
                                        })
                                        .join('')}
                                 </div>
                              </div>
                              `;
                             })
                             .join('')}
                           </div>
                        </div>
                     </div>
        `;
        $('#folderContainer').append(productHtml);
      });

      console.log('All data loaded!');
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
});

function showFolder(clickedElement) {
  console.log(clickedElement, '=====');
  // Add or remove 'active' class to the clicked accordion header
  $(clickedElement).toggleClass('active');

  // Find the next accordion content relative to the clicked header
  var $content = $(clickedElement).next('.accordion-content');

  // Toggle 'active' class on the corresponding accordion content
  $content.toggleClass('active');

  // Remove 'active' class from other accordion headers and contents
  $('.accordion-header').not(clickedElement).removeClass('active');
  $('.accordion-content').not($content).removeClass('active');
}

function showSubFolder(clickedElement) {
  $(clickedElement).toggleClass('active');
  var $innerContent = $(clickedElement).next('.inner-accordion-content');
  $innerContent.toggleClass('active');
  $(clickedElement)
    .closest('.inner-accordion-item')
    .siblings()
    .find('.inner-inner-accordion-header')
    .removeClass('active');
  $(clickedElement).closest('.inner-accordion-item').siblings().find('.inner-accordion-content').removeClass('active');
}
