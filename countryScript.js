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
    
    // Load more functionality (simulation) for Africa trips
    $('.afr-loadmore-btn').on('click', function() {
        const $loadMoreBtn = $(this);
        
        // Show loading state
        $loadMoreBtn.addClass('loading');
        $loadMoreBtn.find('span').text('Loading more trips...');
        
        // Track the number of loads to show different content each time
        const loadCount = $loadMoreBtn.data('load-count') || 0;
        
        // Simulate AJAX loading with a delay
        setTimeout(function() {
            // Create new trip cards for the first row (this would normally come from an AJAX response)
            let newTrips = '';
            
            if (loadCount === 0) {
                newTrips = `
                    <div class="afr-trip-item">
                        <div class="afr-trip-inner">
                            <a href="#">
                                <div class="afr-trip-image">
                                    <img src="./images/trips/egypt-map.png" alt="Egypt Adventure Route">
                                </div>
                                <div class="afr-trip-content">
                                    <div class="afr-trip-meta d-flex txt-gray fw-bold">
                                        <span class="afr-days">10 DAYS •</span>
                                        <span>COMFORT</span>
                                    </div>
                                    <h3 class="afr-trip-name">Egypt Adventure</h3>
                                    <div class="afr-trip-price">
                                        <span class="afr-price-label">From</span>
                                        <span class="afr-price-value">USD $1,295</span>
                                    </div>
                                </div>
                            </a>
                            <div class="afr-wishlist-container">
                                <button class="afr-wishlist-btn">
                                    <span>Add to my wishlist</span>
                                    <img src="./images/lesure/heart.png" alt="Add to wishlist">
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="afr-trip-item">
                        <div class="afr-trip-inner">
                            <a href="#">
                                <div class="afr-trip-image">
                                    <img src="./images/trips/kenya-map.png" alt="Kenya Safari Route">
                                </div>
                                <div class="afr-trip-content">
                                    <div class="afr-trip-meta d-flex txt-gray fw-bold">
                                        <span class="afr-days">9 DAYS •</span>
                                        <span>COMFORT</span>
                                    </div>
                                    <h3 class="afr-trip-name">Kenya Safari</h3>
                                    <div class="afr-trip-price">
                                        <span class="afr-price-label">From</span>
                                        <span class="afr-price-value">USD $1,780</span>
                                    </div>
                                </div>
                            </a>
                            <div class="afr-wishlist-container">
                                <button class="afr-wishlist-btn">
                                    <span>Add to my wishlist</span>
                                    <img src="./images/lesure/heart.png" alt="Add to wishlist">
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="afr-trip-item">
                        <div class="afr-trip-inner">
                            <a href="#">
                                <div class="afr-trip-image">
                                    <img src="./images/trips/tanzania-map.png" alt="Tanzania Expedition Route">
                                </div>
                                <div class="afr-trip-content">
                                    <div class="afr-trip-meta d-flex txt-gray fw-bold">
                                        <span class="afr-days">14 DAYS •</span>
                                        <span>PREMIUM</span>
                                    </div>
                                    <h3 class="afr-trip-name">Tanzania Expedition</h3>
                                    <div class="afr-trip-price">
                                        <span class="afr-price-label">From</span>
                                        <span class="afr-price-value">USD $2,450</span>
                                    </div>
                                </div>
                            </a>
                            <div class="afr-wishlist-container">
                                <button class="afr-wishlist-btn">
                                    <span>Add to my wishlist</span>
                                    <img src="./images/lesure/heart.png" alt="Add to wishlist">
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            } else if (loadCount === 1) {
                newTrips = `
                    <div class="afr-trip-item">
                        <div class="afr-trip-inner">
                            <a href="#">
                                <div class="afr-trip-image">
                                    <img src="./images/trips/south-africa-map.png" alt="South Africa Route">
                                </div>
                                <div class="afr-trip-content">
                                    <div class="afr-trip-meta d-flex txt-gray fw-bold">
                                        <span class="afr-days">12 DAYS •</span>
                                        <span>ORIGINAL</span>
                                    </div>
                                    <h3 class="afr-trip-name">South Africa Explorer</h3>
                                    <div class="afr-trip-price">
                                        <span class="afr-price-label">From</span>
                                        <span class="afr-price-value">USD $1,950</span>
                                    </div>
                                </div>
                            </a>
                            <div class="afr-wishlist-container">
                                <button class="afr-wishlist-btn">
                                    <span>Add to my wishlist</span>
                                    <img src="./images/lesure/heart.png" alt="Add to wishlist">
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="afr-trip-item">
                        <div class="afr-trip-inner">
                            <a href="#">
                                <div class="afr-trip-image">
                                    <img src="./images/trips/namibia-map.png" alt="Namibia Discovery Route">
                                </div>
                                <div class="afr-trip-content">
                                    <div class="afr-trip-meta d-flex txt-gray fw-bold">
                                        <span class="afr-days">11 DAYS •</span>
                                        <span>COMFORT</span>
                                    </div>
                                    <h3 class="afr-trip-name">Namibia Discovery</h3>
                                    <div class="afr-trip-price">
                                        <span class="afr-price-label">From</span>
                                        <span class="afr-price-value">USD $2,120</span>
                                    </div>
                                </div>
                            </a>
                            <div class="afr-wishlist-container">
                                <button class="afr-wishlist-btn">
                                    <span>Add to my wishlist</span>
                                    <img src="./images/lesure/heart.png" alt="Add to wishlist">
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="afr-trip-item">
                        <div class="afr-trip-inner">
                            <a href="#">
                                <div class="afr-trip-image">
                                    <img src="./images/trips/botswana-map.png" alt="Botswana Highlights Route">
                                </div>
                                <div class="afr-trip-content">
                                    <div class="afr-trip-meta d-flex txt-gray fw-bold">
                                        <span class="afr-days">8 DAYS •</span>
                                        <span>PREMIUM</span>
                                    </div>
                                    <h3 class="afr-trip-name">Botswana Highlights</h3>
                                    <div class="afr-trip-price">
                                        <span class="afr-price-label">From</span>
                                        <span class="afr-price-value">USD $2,340</span>
                                    </div>
                                </div>
                            </a>
                            <div class="afr-wishlist-container">
                                <button class="afr-wishlist-btn">
                                    <span>Add to my wishlist</span>
                                    <img src="./images/lesure/heart.png" alt="Add to wishlist">
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            // Append new trips to the grid
            $('.afr-trips-container').append(newTrips);
            
            // Reset button state
            $loadMoreBtn.removeClass('loading');
            $loadMoreBtn.find('span').text('Load more trips');
            
            // Increment and store the load count
            $loadMoreBtn.data('load-count', loadCount + 1);
            
            // Reinitialize wishlist functionality for new elements
            $('.afr-wishlist-btn').off('click').on('click', function(e) {
                e.preventDefault();
                const $wishlistBtn = $(this);
                
                if ($wishlistBtn.hasClass('added')) {
                    $wishlistBtn.removeClass('added');
                    $wishlistBtn.find('span').text('Add to my wishlist');
                    showAfricaNotification('Trip removed from wishlist', 'remove');
                } else {
                    $wishlistBtn.addClass('added');
                    $wishlistBtn.find('span').text('Added to wishlist');
                    showAfricaNotification('Trip added to wishlist', 'add');
                }
            });
            
            // Hide load more button after second load (example only)
            if (loadCount >= 1) {
                $loadMoreBtn.parent().hide();
            }
            
        }, 1200); // Simulate network delay
    });
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

