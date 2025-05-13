
$(document).ready(function() {
    
    $('.user-header').on('click', function(e) {
        if (window.matchMedia("(max-width: 992px)").matches) {
            e.preventDefault();
            e.stopPropagation();
            $('.profile-submenu').toggleClass('mobile-show');
            $('.wishlist-submenu').removeClass('mobile-show');
        }
    });

   
    $('.wish-header').on('click', function(e) {
        if (window.matchMedia("(max-width: 992px)").matches) {
            e.preventDefault();
            e.stopPropagation();
            $('.wishlist-submenu').toggleClass('mobile-show');
            $('.profile-submenu').removeClass('mobile-show');
        }
    });

   
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.user, .wish').length) {
            $('.profile-submenu, .wishlist-submenu').removeClass('mobile-show');
        }
    });

    
    $('.wishlist-actions .remove').on('click', function(e) {
        e.preventDefault();
        
        
        const $item = $(this).closest('.wishlist-item');
        
       
        $item.addClass('removing');
        
        
        setTimeout(function() {
            $item.slideUp(300, function() {
                $(this).remove();
                
                
                if ($('.wishlist-item').length === 0) {
                    $('.wishlist-items').html('<p class="empty-wishlist text-center py-3">Your wishlist is empty</p>');
                }
            });
        }, 300);
    });


    $('<style>\
        @media screen and (max-width: 992px) {\
            .submenu.mobile-show {\
                opacity: 1;\
                visibility: visible;\
                transform: translateY(0);\
            }\
            .user, .wish {\
                position: relative;\
            }\
        }\
    </style>').appendTo('head');

  
    $('<style>\
        .wishlist-item.removing {\
            opacity: 0.5;\
            transform: translateX(-10px);\
            transition: all 0.3s ease;\
        }\
    </style>').appendTo('head');
});

$(document).ready(function(){
    function resize(){   
        var calculatePadding = parseInt($('.header').css("height"));
        
            $(".body-content").css({
                "padding-top": calculatePadding + "px"
            });
        
    }

    resize(); 
    $(window).resize(function(){ 
        resize();
    });
});


//search
// JavaScript for search box functionality
$(document).ready(function() {
    // Append the search overlay to the body
    if ($('.search-overlay').length === 0) {
        $('body').append(`
            <div class="search-overlay">
                <div class="search-container">
                    <div class="search-header">
                        <h4>Search</h4>
                        <div class="close-search">
                            <i class="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div class="search-form">
                        <input type="text" placeholder="What are you looking for?" autofocus>
                        <button type="submit">
                            <img src="./images/Search.png" alt="Search">
                        </button>
                    </div>
                    <div class="search-suggestions">
                        <h5>Popular Searches</h5>
                        <div class="suggestion-tags">
                            <a href="#">Paris</a>
                            <a href="#">Beach vacation</a>
                            <a href="#">Adventure tour</a>
                            <a href="#">Europe</a>
                            <a href="#">Family trip</a>
                            <a href="#">Luxury hotels</a>
                            <a href="#">Honeymoon</a>
                            <a href="#">Safari</a>
                        </div>
                    </div>
                </div>
            </div>
        `);
    }

    // Toggle search overlay when search icon is clicked
    $('.search').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        openSearchOverlay();
    });
    
    // Function to open search overlay
    function openSearchOverlay() {
        $('.search-overlay').addClass('active');
        setTimeout(function() {
            $('.search-form input').focus();
        }, 500);
        
        // Disable scrolling on body
        $('body').css('overflow', 'hidden');
    }
    
    // Close search overlay when close button is clicked
    $(document).on('click', '.close-search', function() {
        closeSearchOverlay();
    });
    
    // Close search overlay when clicking outside the search container
    $(document).on('click', '.search-overlay', function(e) {
        if ($(e.target).closest('.search-container').length === 0) {
            closeSearchOverlay();
        }
    });
    
    // Close search overlay when ESC key is pressed
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' && $('.search-overlay').hasClass('active')) {
            closeSearchOverlay();
        }
    });
    
    // Function to close search overlay
    function closeSearchOverlay() {
        $('.search-overlay').removeClass('active');
        
        
        setTimeout(function() {
            $('body').css('overflow', '');
        }, 300);
    }
    
    // Handle search form submission
    $(document).on('submit', '.search-form', function(e) {
        e.preventDefault();
        const searchQuery = $('.search-form input').val().trim();
        
        if (searchQuery) {
        
            console.log('Search query:', searchQuery);
            
          
            $('.search-form button').addClass('searching');
            setTimeout(function() {
                $('.search-form button').removeClass('searching');
                closeSearchOverlay();
                
                // Redirect to search results page or process search
                // window.location.href = 'search-results.html?q=' + encodeURIComponent(searchQuery);
            }, 800);
        }
    });
    
    
    $(document).on('click', '.suggestion-tags a', function(e) {
        e.preventDefault();
        const tagText = $(this).text();
        
      
        $('.search-form input').val(tagText);
        
       
        $('.search-form').submit();
    });
    
   
    $('<style>\
        .search-form button.searching {\
            animation: spin 0.8s linear infinite;\
        }\
        @keyframes spin {\
            0% { transform: translateY(-50%) rotate(0deg); }\
            100% { transform: translateY(-50%) rotate(360deg); }\
        }\
    </style>').appendTo('head');
});

//lesure
$('document').ready(function(){
    var options=$('.options');
    var firstOption=options.first();
    var firstOptionContent=$('#'+firstOption.data('tab'))

    firstOption.addClass('active');
    firstOptionContent.addClass('active');
    options.on('click',function(){
        $('.options.active, .owl-container.active').removeClass('active');
        $(this).addClass('active');
        $('#'+$(this).data('tab')).addClass('active');
    })

})

//-------------lesure
$(function(){
    $('#owl-culture').owlCarousel({
                ltr: true,
                loop: true,
                margin: 10,
                nav:false,
                dots:false,
                // autoplay:true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive:{
                    0:{
                        items: 1.5
                    }, 
                    
                    480:{
                        items: 1.9
                    },
                    576:{
                        items: 2.1
                    },
                    650:{
                        items: 2.2
                    },
                    768:{
                        items: 2.8
                    },
                    992:{
                        items: 4.1
                    },
                    1200:{
                        items: 4.2
                    },
                   
                }
    })
})
$(function(){
    $('#owl-nature').owlCarousel({
                ltr: true,
                loop: true,
                margin: 10,
                nav:false,
                autoplay:true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive:{
                    0:{
                        items: 1.5
                    }, 
                    
                    480:{
                        items: 1.9
                    },
                    576:{
                        items: 2.1
                    },
                    650:{
                        items: 2.2
                    },
                    768:{
                        items: 2.8
                    },
                    992:{
                        items: 4.1
                    },
                    1200:{
                        items: 4.2
                    },
                   
                }
    })
})
$(function(){
    $('#owl-food').owlCarousel({
                ltr: true,
                loop: true,
                margin: 10,
                nav:false,
                autoplay:true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive:{
                    0:{
                        items: 1.5
                    }, 
                    
                    480:{
                        items: 1.9
                    },
                    576:{
                        items: 2.1
                    },
                    650:{
                        items: 2.2
                    },
                    768:{
                        items: 2.8
                    },
                    992:{
                        items: 4.1
                    },
                    1200:{
                        items: 4.2
                    },
                   
                }
    })
})
$(function(){
    $('#owl-sports').owlCarousel({
                ltr: true,
                loop: true,
                margin: 10,
                nav:false,
                autoplay:true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive:{
                    0:{
                        items: 1.5
                    }, 
                    
                    480:{
                        items: 1.9
                    },
                    576:{
                        items: 2.1
                    },
                    650:{
                        items: 2.2
                    },
                    768:{
                        items: 2.8
                    },
                    992:{
                        items: 4.1
                    },
                    1200:{
                        items: 4.2
                    },
                   
                }
    })
})
$(function(){
    $('#owl-rated').owlCarousel({
                ltr: true,
                loop: true,
                margin: 10,
                nav:false,
                autoplay:true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive:{
                    0:{
                        items: 1.5
                    },
                    576:{
                        items: 2.8
                    },
                    768:{
                        items: 3.2
                    },
                    992:{
                        items: 4.2
                    },
                   
                }
    })
})
$(function(){
    $('#owl-dest').owlCarousel({
                ltr: true,
                loop: true,
                margin: 10,
                nav:false,
                // autoplay:true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive:{
                    0:{
                        items: 2
                    },
                    576:{
                        items: 3
                    },
                    768:{
                        items: 4.1
                    },
                    992:{
                        items: 4.7
                    },
                    1200:{
                        items: 5
                    },
                   
                }
    })
})
$(function(){
    $('#owl-news').owlCarousel({
                ltr: true,
                loop: true,
                margin: 10,
                nav:false,
                // autoplay:true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive:{
                    0:{
                        items: 1.5
                    },
                    576:{
                        items: 3
                    },
                    768:{
                        items: 4.1
                    },
                    992:{
                        items: 4.2
                    },
                   
                }
    })
})
$('.owl-prev').click(function() {
    $('#owl-culture').trigger('prev.owl.carousel');
    $('#owl-nature').trigger('prev.owl.carousel');
    $('#owl-food').trigger('prev.owl.carousel');
    $('#owl-sports').trigger('prev.owl.carousel');
    $('#owl-rated').trigger('prev.owl.carousel');
    $('#owl-dest').trigger('prev.owl.carousel');
    $('#owl-news').trigger('prev.owl.carousel');
});

$('.owl-next').click(function() {
    $('#owl-culture').trigger('next.owl.carousel');
    $('#owl-nature').trigger('next.owl.carousel');
    $('#owl-food').trigger('next.owl.carousel');
    $('#owl-sports').trigger('next.owl.carousel');
    $('#owl-rated').trigger('next.owl.carousel');
    $('#owl-dest').trigger('next.owl.carousel');
    $('#owl-news').trigger('next.owl.carousel');

});
$(document).ready(function() {
    $('.destination-header').on('mouseover', function() {
        $('.destination-mega-menu').addClass('show');
    });

    $('.destination-header, .destination-mega-menu').on('mouseleave', function(e) {
        setTimeout(function() {
            if (!$('.destination-header').is(':hover') && !$('.destination-mega-menu').is(':hover')) {
                $('.destination-mega-menu').removeClass('show');
            }
        }, 100);
    });
    $('.ways-header').on('mouseover', function() {
        $('.ways-mega-menu').addClass('show');
    });

    $('.ways-header, .ways-mega-menu').on('mouseleave', function(e) {
        setTimeout(function() {
            if (!$('.ways-header').is(':hover') && !$('.ways-mega-menu').is(':hover')) {
                $('.ways-mega-menu').removeClass('show');
            }
        }, 100);
    });
});


//social-icons

$(document).ready(function() {
    // Add tooltip data attributes to social icons
    $('.social-icon:nth-child(1)').attr('data-tooltip', 'Facebook');
    $('.social-icon:nth-child(2)').attr('data-tooltip', 'Instagram');
    $('.social-icon:nth-child(3)').attr('data-tooltip', 'SoundCloud');
    $('.social-icon:nth-child(4)').attr('data-tooltip', 'Twitter');
    $('.social-icon:nth-child(5)').attr('data-tooltip', 'YouTube');
    
    // Add staggered hover effect for social icons group
    $('.socials').hover(
        function() {
            // Mouse enter - add class to parent
            $(this).addClass('socials-hover');
        },
        function() {
            // Mouse leave - remove class from parent
            $(this).removeClass('socials-hover');
        }
    );
    
    // Add click effect
    $('.social-icon').on('click', function() {
        // Add click class
        $(this).addClass('clicked');
        
        // Remove the class after animation completes
        setTimeout(function() {
            $('.social-icon').removeClass('clicked');
        }, 700);
    });
    
    // Add styles for staggered animations and click effect
    $('<style>\
        .socials-hover .social-icon:nth-child(1) { transition-delay: 0s; }\
        .socials-hover .social-icon:nth-child(2) { transition-delay: 0.05s; }\
        .socials-hover .social-icon:nth-child(3) { transition-delay: 0.1s; }\
        .socials-hover .social-icon:nth-child(4) { transition-delay: 0.15s; }\
        .socials-hover .social-icon:nth-child(5) { transition-delay: 0.2s; }\
        \
        .social-icon.clicked {\
            animation: clickEffect 0.7s cubic-bezier(0.19, 1, 0.22, 1);\
        }\
        \
        @keyframes clickEffect {\
            0% { transform: scale(1); }\
            40% { transform: scale(0.9); }\
            70% { transform: scale(1.1); }\
            100% { transform: scale(1); }\
        }\
    </style>').appendTo('head');
    
    // Add interactive particle effects on hover (simplified version)
    $('.social-icon').each(function(index) {
        const $icon = $(this);
        
        // Create a container for particles
        const $particleContainer = $('<div class="particle-container"></div>');
        $particleContainer.css({
            'position': 'absolute',
            'top': 0,
            'left': 0,
            'width': '100%',
            'height': '100%',
            'pointer-events': 'none',
            'z-index': -1
        });
        
        $icon.append($particleContainer);
        
        // Add hover event for particle effect
        $icon.on('mouseenter', function() {
            createParticles($particleContainer, getColorForIndex(index));
        });
    });
    
    // Function to create particles
    function createParticles($container, color) {
        // Clear existing particles
        $container.empty();
        
        // Create 5-10 particles
        const particleCount = Math.floor(Math.random() * 6) + 5;
        
        for (let i = 0; i < particleCount; i++) {
            const $particle = $('<div class="particle"></div>');
            
            // Style the particle
            $particle.css({
                'position': 'absolute',
                'width': Math.random() * 6 + 3 + 'px',
                'height': Math.random() * 6 + 3 + 'px',
                'background-color': color,
                'border-radius': '50%',
                'opacity': Math.random() * 0.5 + 0.3,
                'top': '50%',
                'left': '50%',
                'transform': 'translate(-50%, -50%)'
            });
            
            // Add to container
            $container.append($particle);
            
            // Animate the particle
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 30 + 20;
            const speed = Math.random() * 1 + 0.5;
            
            $particle.animate({
                'top': 50 - Math.sin(angle) * distance + '%',
                'left': 50 + Math.cos(angle) * distance + '%',
                'opacity': 0
            }, speed * 1000, function() {
                $(this).remove();
            });
        }
    }
    
    // Get color based on icon index
    function getColorForIndex(index) {
        const colors = ['#3b5998', '#e1306c', '#ff5500', '#1da1f2', '#ff0000'];
        return colors[index] || colors[0];
    }
});

//off-canvas
// JavaScript for Off-Canvas Menu
$(document).ready(function() {
    // Append the off-canvas menu to the body if it doesn't exist
    if ($('.off-canvas-menu').length === 0) {
        // The HTML content from the off-canvas-menu-html artifact will be 
        // added here. For now, just use the code from that file.
        $('body').append(`
            <!-- Off-Canvas Menu HTML goes here -->
            <div class="off-canvas-menu">
                <!-- Content will be added from the HTML file -->
            </div>
            <div class="off-canvas-overlay"></div>
        `);
    }
    
    // Toggle menu when menu-bar is clicked
    $('.menu-bar').on('click', function(e) {
        e.preventDefault();
        openMenu();
    });
    
    // Close menu when close button is clicked
    $(document).on('click', '.close-menu', function() {
        closeMenu();
    });
    
    // Close menu when overlay is clicked
    $(document).on('click', '.off-canvas-overlay', function() {
        closeMenu();
    });
    
    // Toggle submenu when nav item header is clicked
    $(document).on('click', '.nav-item-header', function() {
        const $parent = $(this).parent();
        
        // Check if this item is already active
        if ($parent.hasClass('active')) {
            // If active, close it
            $parent.removeClass('active');
        } else {
            // If not active, close any open items and open this one
            $('.mobile-nav-item').removeClass('active');
            $parent.addClass('active');
        }
    });
    
    // Handle search form submission in mobile menu
    $(document).on('submit', '.mobile-search', function(e) {
        e.preventDefault();
        const searchQuery = $(this).find('input').val().trim();
        
        if (searchQuery) {
            // Here you would normally perform the search
            // For demo purposes, just log and close the menu
            console.log('Mobile search query:', searchQuery);
            closeMenu();
            
            // You could redirect to a search results page
            // window.location.href = 'search-results.html?q=' + encodeURIComponent(searchQuery);
        }
    });
    
    // Function to open menu
    function openMenu() {
        $('.off-canvas-menu').addClass('active');
        $('.off-canvas-overlay').addClass('active');
        $('body').addClass('menu-open');
    }
    
    // Function to close menu
    function closeMenu() {
        $('.off-canvas-menu').removeClass('active');
        $('.off-canvas-overlay').removeClass('active');
        $('body').removeClass('menu-open');
    }
    
    // Close menu on window resize if screen becomes larger than 992px
    $(window).resize(function() {
        if ($(window).width() > 992) {
            closeMenu();
        }
    });
    
    // Close menu when ESC key is pressed
    $(document).keydown(function(e) {
        if (e.key === 'Escape' && $('.off-canvas-menu').hasClass('active')) {
            closeMenu();
        }
    });
});


$('.up').on('click',function(){
    document.documentElement.scrollTop = 0;
})

var tabs=$('.footer-tab');
    tabs.on('click', function(){
        // $(this).addClass('active');
        $('#'+$(this).data('tab')).toggleClass('active')
    })