$(document).ready(function() {
    // Gallery Modal Toggle
    $('#showAllImages').on('click', function() {
        $('#galleryModal').addClass('active');
        $('body').css('overflow', 'hidden');
    });
    
    // Close Modal
    $('.close-modal, .modal-overlay').on('click', function(e) {
        if (e.target === this) {
            $('#galleryModal').removeClass('active');
            $('body').css('overflow', '');
        }
    });
    
    // ESC Key to Close Modal
    $(document).keydown(function(e) {
        if (e.key === 'Escape' && $('#galleryModal').hasClass('active')) {
            $('#galleryModal').removeClass('active');
            $('body').css('overflow', '');
        }
    });
    
    // Wishlist Button Toggle
    $('.wishlist-btn').on('click', function() {
        const $button = $(this);
        const $text = $button.find('span:first-child');
        const $icon = $button.find('.heart-icon');
        
        if ($text.text() === 'Added to wishlist') {
            $text.text('Add to wishlist');
            $icon.removeClass('active');
        } else {
            $text.text('Added to wishlist');
            $icon.addClass('active');
        }
    });
    
    // Slider Navigation
    $('.next-slide').on('click', function() {
        const $currentSlide = $('.slide.active');
        const $nextSlide = $currentSlide.next('.slide').length ? 
                           $currentSlide.next('.slide') : 
                           $('.slide:first');
        
        // Update active slide
        $currentSlide.removeClass('active');
        $nextSlide.addClass('active');
        
        // Update active thumbnail
        const slideId = $nextSlide.attr('id');
        $('.thumbnail').removeClass('active');
        $(`.thumbnail[data-slide="${slideId}"]`).addClass('active');
    });
    
    $('.prev-slide').on('click', function() {
        const $currentSlide = $('.slide.active');
        const $prevSlide = $currentSlide.prev('.slide').length ? 
                          $currentSlide.prev('.slide') : 
                          $('.slide:last');
        
        // Update active slide
        $currentSlide.removeClass('active');
        $prevSlide.addClass('active');
        
        // Update active thumbnail
        const slideId = $prevSlide.attr('id');
        $('.thumbnail').removeClass('active');
        $(`.thumbnail[data-slide="${slideId}"]`).addClass('active');
    });
    
    // Thumbnail Click
    $('.thumbnail').on('click', function() {
        const slideId = $(this).data('slide');
        
        // Update active slide
        $('.slide').removeClass('active');
        $(`#${slideId}`).addClass('active');
        
        // Update active thumbnail
        $('.thumbnail').removeClass('active');
        $(this).addClass('active');
    });
});

$(document).ready(function() {
    const $navWrapper = $('.menu-nav-wrapper');
    const $tripTitles = $('.trip-titles');
    const $menuItems = $('.trip-title');
    const $prevBtn = $('.menu-nav-prev');
    const $nextBtn = $('.menu-nav-next');
    
    // محاسبه عرض هر آیتم و تنظیم عرض wrapper برای نمایش 7 آیتم
    function setMenuWidth() {
        // محاسبه میانگین عرض 7 آیتم اول
        let totalWidth = 0;
        for (let i = 0; i < Math.min(7, $menuItems.length); i++) {
            totalWidth += $($menuItems[i]).outerWidth(true);
        }
        
        // تنظیم عرض wrapper برای نمایش دقیقاً 7 آیتم
        $navWrapper.css('width', totalWidth + 'px');
        
        // بررسی مجدد وضعیت فلش‌ها
        checkArrowsState();
    }
    
    // اجرای تنظیم عرض در ابتدا و هنگام تغییر اندازه صفحه
    setMenuWidth();
    $(window).on('resize', setMenuWidth);
    
    // کلیک روی فلش بعدی
    $nextBtn.on('click', function() {
        // محاسبه اندازه اسکرول (عرض میانگین 3 آیتم)
        const averageItemWidth = $navWrapper.width() / 7 * 3;
        
        // اسکرول به اندازه 3 آیتم
        $navWrapper.animate({
            scrollLeft: $navWrapper.scrollLeft() + averageItemWidth
        }, 300, function() {
            checkArrowsState();
        });
    });
    
    // کلیک روی فلش قبلی
    $prevBtn.on('click', function() {
        // محاسبه اندازه اسکرول (عرض میانگین 3 آیتم)
        const averageItemWidth = $navWrapper.width() / 7 * 3;
        
        // اسکرول به اندازه 3 آیتم
        $navWrapper.animate({
            scrollLeft: $navWrapper.scrollLeft() - averageItemWidth
        }, 300, function() {
            checkArrowsState();
        });
    });
    
    // بررسی وضعیت فلش‌ها در هنگام اسکرول دستی
    $navWrapper.on('scroll', function() {
        checkArrowsState();
    });
    
    // تابع بررسی وضعیت فلش‌ها
    function checkArrowsState() {
        const scrollLeft = $navWrapper.scrollLeft();
        const maxScrollLeft = $tripTitles.width() - $navWrapper.width();
        
        // بررسی وضعیت فلش قبلی
        if (scrollLeft <= 0) {
            $prevBtn.addClass('disabled');
        } else {
            $prevBtn.removeClass('disabled');
        }
        
        // بررسی وضعیت فلش بعدی
        if (scrollLeft >= maxScrollLeft) {
            $nextBtn.addClass('disabled');
        } else {
            $nextBtn.removeClass('disabled');
        }
    }
    
    // کلیک روی آیتم‌های منو
    $menuItems.on('click', function(e) {
        e.preventDefault();
        
        // حذف کلاس active از همه آیتم‌ها
        $menuItems.removeClass('active');
        
        // اضافه کردن کلاس active به آیتم کلیک شده
        $(this).addClass('active');
        
        // اسکرول به بخش مربوطه
        const targetId = $(this).find('a').attr('href');
        $('html, body').animate({
            scrollTop: $(targetId).offset().top - 60
        }, 500);
    });
    
    // تغییر آیتم فعال هنگام اسکرول صفحه
    $(window).on('scroll', function() {
        const scrollPosition = $(window).scrollTop();
        
        // بررسی هر بخش
        $('section[id]').each(function() {
            const sectionTop = $(this).offset().top - 100;
            const sectionBottom = sectionTop + $(this).outerHeight();
            const sectionId = '#' + $(this).attr('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // حذف کلاس active از همه آیتم‌ها
                $menuItems.removeClass('active');
                
                // اضافه کردن کلاس active به آیتم مربوطه
                const $targetItem = $menuItems.find(`a[href="${sectionId}"]`).parent();
                $targetItem.addClass('active');
                
                // اسکرول منو تا آیتم فعال قابل مشاهده باشد
                const itemPosition = $targetItem.position().left;
                const itemWidth = $targetItem.outerWidth();
                const wrapperScrollLeft = $navWrapper.scrollLeft();
                const wrapperWidth = $navWrapper.width();
                
                // اگر آیتم فعال خارج از محدوده قابل مشاهده باشد
                if (itemPosition + itemWidth > wrapperWidth || itemPosition < 0) {
                    // اسکرول منو تا آیتم فعال در مرکز قرار گیرد
                    const scrollTo = wrapperScrollLeft + itemPosition - (wrapperWidth / 2) + (itemWidth / 2);
                    
                    $navWrapper.animate({
                        scrollLeft: scrollTo
                    }, 300, function() {
                        checkArrowsState();
                    });
                }
            }
        });
    });
});

$(document).ready(function() {
    // باز کردن مودال با کلیک روی نقشه
    $('#mapImage, .trip-map').on('click', function() {
        $('#mapModal').addClass('active');
        $('body').css('overflow', 'hidden'); // غیرفعال کردن اسکرول صفحه
    });
    
    // بستن مودال با کلیک روی دکمه ضربدر یا دکمه Close
    $('.close-modal, .close-btn').on('click', function() {
        $('#mapModal').removeClass('active');
        $('body').css('overflow', ''); // فعال کردن مجدد اسکرول صفحه
    });
    
    // بستن مودال با کلیک روی بک‌گراند
    $('.modal-overlay').on('click', function(e) {
        if (e.target === this) {
            $('#mapModal').removeClass('active');
            $('body').css('overflow', '');
        }
    });
    
    // بستن مودال با کلید ESC
    $(document).keydown(function(e) {
        if (e.key === 'Escape' && $('#mapModal').hasClass('active')) {
            $('#mapModal').removeClass('active');
            $('body').css('overflow', '');
        }
    });
    
    // عملکرد دکمه "Read more"
    $('.read-more').on('click', function(e) {
        e.preventDefault();
        
        const $description = $('.tour-description p');
        
        if ($description.hasClass('expanded')) {
            // جمع کردن متن
            $description.removeClass('expanded');
            $description.css('max-height', '100px');
            $(this).html('Read more <i class="read-more-arrow"></i>');
        } else {
            // گسترش متن
            $description.addClass('expanded');
            $description.css('max-height', 'none');
            $(this).html('Read less <i class="read-more-arrow"></i>');
        }
    });
    
    // اگر متن بیش از حد طولانی است، دکمه "Read more" را نمایش بده
    const $description = $('.tour-description p');
    if ($description.height() > 100) {
        $description.css({
            'max-height': '100px',
            'overflow': 'hidden'
        });
    } else {
        $('.read-more-container').hide();
    }
});

