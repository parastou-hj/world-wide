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

document.addEventListener('DOMContentLoaded', function() {
    // Selecting all itinerary headers for event binding
    const itineraryHeaders = document.querySelectorAll('.itinerary-header');
    const showAllControl = document.querySelector('.itinerary-control');
    
    // Function to toggle single accordion
    function toggleAccordion(header) {
        const parentItem = header.closest('.itinerary-item');
        const isActive = parentItem.classList.contains('active');
        
        // Close all items first
        document.querySelectorAll('.itinerary-item').forEach(item => {
            if(item !== parentItem || isActive) {
                item.classList.remove('active');
            }
        });
        
        // Toggle the clicked item
        if(!isActive) {
            parentItem.classList.add('active');
        }
    }
    
    // Function to toggle all accordions
    function toggleAllAccordions() {
        const allItems = document.querySelectorAll('.itinerary-item');
        const anyActive = Array.from(allItems).some(item => item.classList.contains('active'));
        
        if(anyActive) {
            // Close all
            allItems.forEach(item => item.classList.remove('active'));
            showAllControl.querySelector('span').textContent = 'Show all';
        } else {
            // Open all
            allItems.forEach(item => item.classList.add('active'));
            showAllControl.querySelector('span').textContent = 'Hide all';
        }
        
        // Update the dropdown icon rotation
        const dropdownIcon = showAllControl.querySelector('.dropdown-icon');
        dropdownIcon.style.transform = anyActive ? 'rotate(0deg)' : 'rotate(180deg)';
    }
    
    // Add click event listeners to each accordion header
    itineraryHeaders.forEach(header => {
        header.addEventListener('click', function() {
            toggleAccordion(this);
        });
    });
    
    // Add click event listener to the show/hide all control
    showAllControl.addEventListener('click', toggleAllAccordions);
    
    // Optional: Open the first accordion by default
    if(itineraryHeaders.length > 0) {
        toggleAccordion(itineraryHeaders[0]);
    }
});

 document.getElementById('showIncluded').addEventListener('click', function(e) {
            e.preventDefault();
            const hiddenItems = document.getElementById('moreIncluded');
            const list = document.getElementById('includedList');
            const link = document.getElementById('showIncluded');
            
            if (hiddenItems.style.display === 'block') {
                hiddenItems.style.display = 'none';
                link.textContent = 'Show all (22) ▾';
            } else {
                hiddenItems.style.display = 'block';
                list.appendChild(hiddenItems);
                link.textContent = 'Show less ▴';
            }
        });
        
        document.getElementById('showOptional').addEventListener('click', function(e) {
            e.preventDefault();
            const hiddenItems = document.getElementById('moreOptional');
            const list = document.getElementById('optionalList');
            const link = document.getElementById('showOptional');
            
            if (hiddenItems.style.display === 'block') {
                hiddenItems.style.display = 'none';
                link.textContent = 'Show all (9) ▾';
            } else {
                hiddenItems.style.display = 'block';
                list.appendChild(hiddenItems);
                link.textContent = 'Show less ▴';
            }
        });

$(document).ready(function() {
    $('.accordion-row').each(function() {
        // $(this).append('<i class="fas fa-chevron-down accordion-indicator"></i>');
    });
    // مخفی کردن همه محتواهای آکاردیون در ابتدا
    $('.accordion-content').hide();
    
    // تنظیم استایل برای محتوای آکاردیون
    $('.accordion-content').css({
        'overflow': 'hidden',
        'transition': 'all 0.3s ease-in-out'
    });
    
    // اضافه کردن رویداد کلیک به سطرهای آکاردیون
    $(document).on('click', '.accordion-row', function() {
        var targetId = $(this).data('row');
        var $targetContent = $('#' + targetId);
        
        // حذف کلاس active از همه سطرها
        $('.accordion-row').removeClass('active');
        
        // اگر آکاردیون در حال حاضر باز است
        if ($targetContent.is(':visible')) {
            // بستن آکاردیون با انیمیشن نرم
            $targetContent.css('max-height', '0');
            setTimeout(function() {
                $targetContent.hide();
            }, 300);
        } else {
            // بستن همه آکاردیون‌های باز
            $('.accordion-content').each(function() {
                if ($(this).is(':visible')) {
                    var $this = $(this);
                    $this.css('max-height', '0');
                    setTimeout(function() {
                        $this.hide();
                    }, 300);
                }
            });
            
            // اضافه کردن کلاس active به سطر انتخاب شده
            $(this).addClass('active');
            
            // باز کردن آکاردیون انتخاب شده با انیمیشن نرم از بالا به پایین
            $targetContent.show();
            $targetContent.css('max-height', '0');
            
            // تأخیر برای اطمینان از اعمال نمایش
            setTimeout(function() {
                $targetContent.css('max-height', '1000px'); // ارتفاع بزرگ برای اطمینان از نمایش کامل محتوا
            }, 10);
        }
    });
    
    // هندل کردن تغییر تب‌ها
    $('.year-tab, .month-tab').on('click', function() {
        // پس از تغییر تب، همه آکاردیون‌ها را ببند و کلاس active را حذف کن
        setTimeout(function() {
            $('.accordion-content').hide().css('max-height', '0');
            $('.accordion-row').removeClass('active');
        }, 100);
    });
     $(document).on('click', '.view-more-dates', function() {
        var $button = $(this);
        var $tab = $button.closest('.tab-content');
        var $extraRows = $tab.find('.extra-row');
        
        // اگر دکمه در حالت "نمایش داده شده" باشد
        if ($button.hasClass('all-shown')) {
            // مخفی کردن ردیف‌های اضافی
            $extraRows.each(function() {
                $(this).hide();
                // مخفی کردن ردیف محتوای آکاردیون مرتبط
                var rowId = $(this).data('row');
                $('#' + rowId).closest('tr').hide();
            });
            
            // تغییر متن و ظاهر دکمه
            $button.removeClass('all-shown');
            $button.html('<i class="fas fa-plus-circle"></i> View more dates');
        } else {
            // نمایش ردیف‌های اضافی
            $extraRows.each(function() {
                $(this).fadeIn(400);
                // نمایش ردیف محتوای آکاردیون مرتبط (ولی محتوا همچنان مخفی بماند)
                var rowId = $(this).data('row');
                $('#' + rowId).closest('tr').show();
                $('#' + rowId).hide(); // اطمینان از مخفی ماندن محتوای آکاردیون
            });
            
            // تغییر متن و ظاهر دکمه
            $button.addClass('all-shown');
            $button.html('<i class="fas fa-plus-circle"></i> Hide additional dates');
        }
    });
    
    // هندل کردن تغییر تب‌ها
    $('.year-tab, .month-tab').on('click', function() {
        // کد قبلی...
        
        // ریست کردن وضعیت دکمه "View more dates"
        setTimeout(function() {
            $('.view-more-dates').removeClass('all-shown')
                .html('<i class="fas fa-plus-circle"></i> View more dates');
            $('.extra-row').hide();
            $('.extra-row').each(function() {
                var rowId = $(this).data('row');
                $('#' + rowId).closest('tr').hide();
            });
        }, 100);
    });

});

