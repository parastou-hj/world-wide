 document.getElementById("viewMoreBtn").addEventListener("click", function() {
          const hiddenRows = document.querySelectorAll(".trip-row.hidden");
          hiddenRows.forEach(row => row.classList.remove("hidden"));
          this.style.display = "none"; // hide button after showing
        });

        
$(document).ready(function() {
    // Wishlist functionality for Africa trips section
    $('.afr-wishlist-btn').on('click', function(e) {
        e.preventDefault();
        const $wishlistBtn = $(this);
        
        // Toggle wishlist state
        if ($wishlistBtn.hasClass('added')) {
            // Remove from wishlist
            $wishlistBtn.removeClass('added');
            $wishlistBtn.find('span').text('Add to my wishlist');
            
            // Show brief notification
            showAfricaNotification('Trip removed from wishlist', 'remove');
        } else {
            // Add to wishlist
            $wishlistBtn.addClass('added');
            $wishlistBtn.find('span').text('Added to wishlist');
            
            // Show brief notification
            showAfricaNotification('Trip added to wishlist', 'add');
        }
    })
})


$(document).ready(function() {
    // Wishlist functionality for Africa trips section
    $('.afr-wishlist-btn').on('click', function(e) {
        e.preventDefault();
        const $wishlistBtn = $(this);
        
        // Toggle wishlist state
        if ($wishlistBtn.hasClass('added')) {
            // Remove from wishlist
            $wishlistBtn.removeClass('added');
            $wishlistBtn.find('span').text('Add to my wishlist');
            
            // Show brief notification
            showAfricaNotification('Trip removed from wishlist', 'remove');
        } else {
            // Add to wishlist
            $wishlistBtn.addClass('added');
            $wishlistBtn.find('span').text('Added to wishlist');
            
            // Show brief notification
            showAfricaNotification('Trip added to wishlist', 'add');
        }
    });
    
    // Function to show notifications specific to Africa section
    function showAfricaNotification(message, type) {
        // Remove existing notification if present
        $('.afr-notification').remove();
        
        // Create notification element
        const $notification = $(`
            <div class="afr-notification ${type}">
                <div class="afr-notification-content">
                    <span>${message}</span>
                    <button class="afr-notification-close">×</button>
                </div>
            </div>
        `);
        
        // Append to body
        $('body').append($notification);
        
        // Show with animation
        setTimeout(function() {
            $notification.addClass('show');
        }, 10);
        
        // Auto hide after 3 seconds
        setTimeout(function() {
            $notification.removeClass('show');
            setTimeout(function() {
                $notification.remove();
            }, 300);
        }, 3000);
        
        // Close button functionality
        $notification.find('.afr-notification-close').on('click', function() {
            $notification.removeClass('show');
            setTimeout(function() {
                $notification.remove();
            }, 300);
        });
    }
    
   
});

$(function () {
    var $carousel = $('#top-ten');

    $carousel.owlCarousel({
        ltr: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 2 },
        }
    });

    function updateNavButtons(event) {
        var currentIndex = event.item.index;
        var totalItems = event.item.count;
        var itemsShown = event.page.size;

        // اگر در اولین آیتم هستیم => ten-prev غیرفعال
        if (currentIndex === 0) {
            $('.ten-prev').addClass('disabled');
        } else {
            $('.ten-prev').removeClass('disabled');
        }

        // اگر به آخر رسیدیم => ten-next غیرفعال
        if (currentIndex + itemsShown >= totalItems) {
            $('.ten-next').addClass('disabled');
        } else {
            $('.ten-next').removeClass('disabled');
        }
    }

    $carousel.on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel', function (e) {
        updateNavButtons(e);
    });

    // دکمه‌های بعد و قبل
    $('.ten-prev').click(function () {
        $carousel.trigger('prev.owl.carousel');
    });

    $('.ten-next').click(function () {
        $carousel.trigger('next.owl.carousel');
    });
});

$(document).ready(function() {
    // Tab functionality for Africa reviews section
    $('.afr-rev-tab').on('click', function() {
        const rating = $(this).data('rating');
        
        // Update active tab
        $('.afr-rev-tab').removeClass('active');
        $(this).addClass('active');
        
        // Update visible content
        $('.afr-rev-content').removeClass('active');
        $(`.afr-rev-content[data-content="${rating}"]`).addClass('active');
        
        // Scroll to top of content area
        $('.afr-rev-content-wrapper').scrollTop(0);
    });
    
    // Read more functionality
    $('.afr-rev-item-more').on('click', function(e) {
        e.preventDefault();
        
        const $reviewText = $(this).prev('.afr-rev-item-text');
        const $readMoreLink = $(this);
        
        if ($reviewText.hasClass('expanded')) {
            // Collapse the review
            $reviewText.removeClass('expanded');
            $reviewText.css('max-height', '100px');
            $readMoreLink.text('Read more');
        } else {
            // Expand the review
            $reviewText.addClass('expanded');
            $reviewText.css('max-height', 'none');
            $readMoreLink.text('Read less');
        }
    });
    
    // Initialize - set max height on longer reviews
    $('.afr-rev-item-text').each(function() {
        const $text = $(this);
        const $readMore = $text.next('.afr-rev-item-more');
        
        // Only add the read more functionality if the text is actually long
        if ($text.height() > 100 && $readMore.length) {
            $text.css({
                'max-height': '100px',
                'overflow': 'hidden',
                'transition': 'max-height 0.3s ease'
            });
        } else if ($readMore.length) {
            // Hide the read more link if not needed
            $readMore.hide();
        }
    });
    
    // Info icon tooltip
    $('.afr-rev-info-icon').on('click', function() {
        alert('Reviews are collected from verified travelers who booked through our platform. All reviews are moderated to ensure they comply with our review guidelines.');
    });
    
    // Automatically show content for first tab on mobile
    if (window.innerWidth <= 768) {
        $('.afr-rev-tab[data-rating="all"]').click();
    }
});

$(document).ready(function() {
    // Tab functionality for Africa reviews section
    $('.afr-rev-tab').on('click', function() {
        const rating = $(this).data('rating');
        
        // Update active tab
        $('.afr-rev-tab').removeClass('active');
        $(this).addClass('active');
        
        // Update visible content
        $('.afr-rev-content').removeClass('active');
        $(`.afr-rev-content[data-content="${rating}"]`).addClass('active');
        
        // Scroll to top of content area
        $('.afr-rev-content-wrapper').scrollTop(0);
    });
    
    // Read more functionality
    $('.afr-rev-item-more').on('click', function(e) {
        e.preventDefault();
        
        const $reviewText = $(this).prev('.afr-rev-item-text');
        const $readMoreLink = $(this);
        
        if ($reviewText.hasClass('expanded')) {
            // Collapse the review
            $reviewText.removeClass('expanded');
            $reviewText.css('max-height', '100px');
            $readMoreLink.text('Read more');
        } else {
            // Expand the review
            $reviewText.addClass('expanded');
            $reviewText.css('max-height', 'none');
            $readMoreLink.text('Read less');
        }
    });
    
    // Initialize - set max height on longer reviews
    $('.afr-rev-item-text').each(function() {
        const $text = $(this);
        const $readMore = $text.next('.afr-rev-item-more');
        
        // Only add the read more functionality if the text is actually long
        if ($text.height() > 100 && $readMore.length) {
            $text.css({
                'max-height': '100px',
                'overflow': 'hidden',
                'transition': 'max-height 0.3s ease'
            });
        } else if ($readMore.length) {
            // Hide the read more link if not needed
            $readMore.hide();
        }
    });
    
    // Info icon tooltip
    $('.afr-rev-info-icon').on('click', function() {
        alert('Reviews are collected from verified travelers who booked through our platform. All reviews are moderated to ensure they comply with our review guidelines.');
    });
    
    // Automatically show content for first tab on mobile
    if (window.innerWidth <= 768) {
        $('.afr-rev-tab[data-rating="all"]').click();
    }
});

// Tab functionality for Africa reviews section
$('.afr-rev-tab').on('click', function() {
    const rating = $(this).data('rating');
    
    // Update active tab and checkbox states
    $('.afr-rev-tab').removeClass('active');
    $('.afr-rev-checkbox').prop('checked', false);
    
    $(this).addClass('active');
    $(this).find('.afr-rev-checkbox').prop('checked', true);
    
    // Update visible content
    $('.afr-rev-content').removeClass('active');
    $(`.afr-rev-content[data-content="${rating}"]`).addClass('active');
    
    // No need to scroll content wrapper since it's not independently scrollable anymore
    // Instead, scroll to the top of the content section if needed
    $('html, body').animate({
        scrollTop: $('.afr-rev-content-wrapper').offset().top - 100
    }, 300);
});

// Also handle direct checkbox clicks (prevent propagation issues)
$('.afr-rev-checkbox').on('click', function(e) {
    e.stopPropagation();
    const $tab = $(this).closest('.afr-rev-tab');
    
    // If this is already the active tab, don't do anything
    if ($tab.hasClass('active')) {
        $(this).prop('checked', true); // Ensure it stays checked
        return;
    }
    
    // Otherwise trigger the tab click
    $tab.trigger('click');
});

// Initialize - ensure only the active tab has a checked checkbox
$(document).ready(function() {
    $('.afr-rev-checkbox').prop('checked', false);
    $('.afr-rev-tab.active .afr-rev-checkbox').prop('checked', true);
});


$(document).ready(function() {
    var $browseDestCarousel = $('.carousel-track');
    
    $browseDestCarousel.owlCarousel({
        ltr: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: false,
        loop: false,
        responsive: {
            0: { items: 1.2 },
            480: { items: 1.5 },
            576: { items: 2 },
            768: { items: 3 },
            992: { items: 4 },
            1200: { items: 4 }
        }
    });
    
    
    function updateNavButtons(event) {
        var currentIndex = event.item.index;
        var totalItems = event.item.count;
        var itemsShown = event.page.size;
        
        
        if (currentIndex === 0) {
            $('.ten-prev').addClass('disabled');
        } else {
            $('.ten-prev').removeClass('disabled');
        }
        
       
        if (currentIndex + itemsShown >= totalItems) {
            $('.ten-next').addClass('disabled');
        } else {
            $('.ten-next').removeClass('disabled');
        }
    }
    
    // Update nav buttons on carousel events
    $browseDestCarousel.on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel', function(e) {
        updateNavButtons(e);
    });
    
    // Navigation button handlers
    $('.ten-prev').click(function() {
        $browseDestCarousel.trigger('prev.owl.carousel');
    });
    
    $('.ten-next').click(function() {
        $browseDestCarousel.trigger('next.owl.carousel');
    });
});
$(document).ready(function() {
    var $browseDestCarousel = $('#browse-destination-carousel');
    
    $browseDestCarousel.owlCarousel({
        ltr: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: false,
        loop: false,
        responsive: {
            0: { items: 1.2 },
            480: { items: 1.5 },
            576: { items: 2 },
            768: { items: 3 },
            992: { items: 4 },
            1200: { items: 4 }
        }
    });
    
    // Function to update navigation buttons (reused from top-ten-sec)
    function updateNavButtons(event) {
        var currentIndex = event.item.index;
        var totalItems = event.item.count;
        var itemsShown = event.page.size;
        
        // If at first item => disable prev button
        if (currentIndex === 0) {
            $('.ten-prev').addClass('disabled');
        } else {
            $('.ten-prev').removeClass('disabled');
        }
        
        // If at last item => disable next button
        if (currentIndex + itemsShown >= totalItems) {
            $('.ten-next').addClass('disabled');
        } else {
            $('.ten-next').removeClass('disabled');
        }
    }
    
    // Update nav buttons on carousel events
    $browseDestCarousel.on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel', function(e) {
        updateNavButtons(e);
    });
    
    // Navigation button handlers
    $('.ten-prev').click(function() {
        $browseDestCarousel.trigger('prev.owl.carousel');
    });
    
    $('.ten-next').click(function() {
        $browseDestCarousel.trigger('next.owl.carousel');
    });
});

//----------------------video-modal
$(document).ready(function () {
  const modal = $(".video-modal");
  const video = $("#myVideo")[0];

  $(".video-sec").click(function () {
    modal.fadeIn();
    video.play();
  });

  $(".close-modal, .modal-overlay").click(function () {
    modal.fadeOut();
    video.pause();
    video.currentTime = 0;
  });

  $(".modal-content video").click(function (e) {
    e.stopPropagation();
  });
});
  document.getElementById("viewMoreBtn").addEventListener("click", function() {
          const hiddenRows = document.querySelectorAll(".trip-row.hidden");
          hiddenRows.forEach(row => row.classList.remove("hidden"));
          this.style.display = "none"; // hide button after showing
        });

 document.getElementById("afr-loadmore-btn").addEventListener("click", function() {
          const hiddenTrip = document.querySelectorAll(".afr-trip-item.hidden");
          hiddenTrip.forEach(row => row.classList.remove("hidden"));
        //   this.style.display = "none"; 
        });