
$(document).ready(function () {
    const $themeLink = $('#theme-style');
    const savedTheme = localStorage.getItem('theme') || 'light';
    $themeLink.attr('href', `../css/${savedTheme}.css`);
    $('body').attr('data-theme', savedTheme);
    updateIcons(savedTheme);

    $('#theme-toggle').on('click', function () {
        const icon = $(this);

        icon.addClass('rotate-once');
        setTimeout(() => icon.removeClass('rotate-once'), 200);

        const currentHref = $themeLink.attr('href') || '';
        const isDark = currentHref.indexOf('dark') !== -1;
        const newTheme = isDark ? 'light' : 'dark';

        $themeLink.attr('href', `../css/${newTheme}.css`);
        $('body').attr('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcons(newTheme);
    });
    function updateIcons(theme) {
        if (theme === 'dark') {
            $('.light-mode').addClass('d-none');
            $('.dark-mode').removeClass('d-none');
        } else {
            $('.dark-mode').addClass('d-none');
            $('.light-mode').removeClass('d-none');
        }
        if (window.feather) feather.replace();
    }

    // Filter
    $('.btn-filter').on('click', function () {
        $('#layoutBox').slideToggle(900);
    });

    // Edit Design 
    $('#logoInput').on('change', function () {
        var fileName = this.files[0] ? this.files[0].name : 'No File Chosen';
        $('#file-name').text(fileName);
    });
    $('#uploadQRCode').on('change', function () {
        var fileName = this.files[0] ? this.files[0].name : 'No File Chosen';
        $('#file-chosen').text(fileName);
    });

    // DateRange
    $('input[name="daterange"]').daterangepicker({
        opens: 'center'
    }, function (start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });

    //  GOOGLE BUSINESS NAME
    $('#saveButton').on('click', function () {
        saveData();
    });

    // Google Business Name
    const businessNameInput = $('#businessName');
    const ratingInputs = $('input[name="rating"]');
    const googleBusinessNameSelection = $('#googleBusinessNameSelection');
    const googleBusinessNameTable = $('#googleBusinessNameTable');
    const displayBusinessName = $('#displayBusinessName');
    const displayRating = $('#displayRating');
    const editIcon = $('#editRating');
    const saveButton = $('#saveData');

    // Variables to track mode
    let isEditMode = false;

    // Load data from LocalStorage
    const storedBusinessName = localStorage.getItem('businessName');
    const storedRating = localStorage.getItem('rating');

    if (storedBusinessName && storedRating) {
        businessNameInput.val(storedBusinessName);
        ratingInputs.filter('[value="' + storedRating + '"]').prop('checked', true);

        displayBusinessName.text(storedBusinessName);
        displayRating.text(storedRating);

        googleBusinessNameSelection.find('input, button').prop('disabled', true);
        googleBusinessNameTable.removeClass('d-none');
    }

    // Save Data Logic
    saveButton.on('click', function () {
        const businessName = businessNameInput.val();
        const rating = ratingInputs.filter(':checked').val();

        if (!businessName || !rating) {
            Swal.fire({
                icon: 'warning',
                title: 'Missing Information',
                text: 'Please enter business name and select a rating.'
            });
            return;
        }

        // Update LocalStorage & Table Values
        localStorage.setItem('businessName', businessName);
        localStorage.setItem('rating', rating);

        // Update the Table instantly
        displayBusinessName.text(businessName);
        displayRating.text(rating);

        // Disable the form after save
        googleBusinessNameSelection.find('input, button').prop('disabled', true);
        googleBusinessNameTable.removeClass('d-none');

        Swal.fire({
            icon: 'success',
            title: 'Saved!',
            text: 'Your business name and rating have been saved successfully.'
        });
    });

    // Edit Logic
    editIcon.on('click', function () {
        googleBusinessNameSelection.find('input, button').prop('disabled', false);
        googleBusinessNameTable.addClass('d-none');
        isEditMode = true;
    });

    // Trip Advisory 

    // Google Business Name
    const tripBusinessNameInput = $('#tripBusinessName');
    const tripRatingInput = $('input[name="rating"]');
    const tripBusinessNameSelection = $('#tripBusinessNameSelection');
    const BusinessNameTable = $('#tripBusinessNameTable');
    const displayTripUrl = $('#displayTripUrl');
    const displayTripRating = $('#displayTripRating');
    const editTripIcon = $('#ediTriptRating');
    const saveTripButton = $('#tripBusinessSave');

    // Variables to track mode
    let isTripEditMode = false;

    // Load data from LocalStorage
    const storedTripBusinessName = localStorage.getItem('tripBusinessName');
    const storedTripRating = localStorage.getItem('rating');

    if (storedTripBusinessName && storedTripRating) {
        tripBusinessNameInput.val(storedTripBusinessName);
        tripRatingInput.filter('[value="' + storedTripRating + '"]').prop('checked', true);

        displayTripUrl.text(storedTripBusinessName);
        displayTripRating.text(storedTripRating);

        tripBusinessNameSelection.find('input, button').prop('disabled', true);
        BusinessNameTable.removeClass('d-none');
    }

    // Save Data Logic
    saveTripButton.on('click', function () {
        const businessName = tripBusinessNameInput.val();
        const rating = tripRatingInput.filter(':checked').val();

        if (!businessName || !rating) {
            Swal.fire({
                icon: 'warning',
                title: 'Missing Information',
                text: 'Please enter business name and select a rating.'
            });
            return;
        }

        // Update LocalStorage & Table Values
        localStorage.setItem('businessName', businessName);
        localStorage.setItem('rating', rating);

        // Update the Table instantly
        displayTripUrl.text(businessName);
        displayTripRating.text(rating);

        // Disable the form after save
        tripBusinessNameSelection.find('input, button').prop('disabled', true);
        BusinessNameTable.removeClass('d-none');

        Swal.fire({
            icon: 'success',
            title: 'Saved!',
            text: 'Your business name and rating have been saved successfully.'
        });
    });

    // Edit Logic
    editTripIcon.on('click', function () {
        tripBusinessNameSelection.find('input, button').prop('disabled', false);
        BusinessNameTable.addClass('d-none');
        isTripEditMode = true;
    });

    // Booking

    const bookingBusinessNameInput = $('#bookingBusinessName');
    const bookingRatingInput = $('input[name="rating"]');
    const bookingBusinessNameSelection = $('#bookingBusinessNameSelection');
    const bookingBusinessNameTable = $('#bookingBusinessNameTable');
    const displayBookingUrl = $('#displayBookingUrl');
    const displayBookingRating = $('#displayBookingRating');
    const editBookingIcon = $('#ediBookingtRating');
    const saveBookingButton = $('#bookingBusinessSave');

    // Variables to track mode
    let isBookingEditMode = false;

    // Load data from LocalStorage
    const storedBookingBusinessName = localStorage.getItem('bookingBusinessName');
    const storedBookingRating = localStorage.getItem('rating');

    if (storedBookingBusinessName && storedBookingRating) {
        bookingBusinessNameInput.val(storedBookingBusinessName);
        bookingRatingInput.filter('[value="' + storedBookingRating + '"]').prop('checked', true);

        displayBookingUrl.text(storedBookingBusinessName);
        displayBookingRating.text(storedBookingRating);

        bookingBusinessNameSelection.find('input, button').prop('disabled', true);
        bookingBusinessNameTable.removeClass('d-none');
    }

    // Save Data Logic
    saveBookingButton.on('click', function () {
        const businessName = bookingBusinessNameInput.val();
        const rating = bookingRatingInput.filter(':checked').val();

        if (!businessName || !rating) {
            Swal.fire({
                icon: 'warning',
                title: 'Missing Information',
                text: 'Please enter business name and select a rating.'
            });
            return;
        }

        // Update LocalStorage & Table Values
        localStorage.setItem('businessName', businessName);
        localStorage.setItem('rating', rating);

        // Update the Table instantly
        displayBookingUrl.text(businessName);
        displayBookingRating.text(rating);

        // Disable the form after save
        bookingBusinessNameSelection.find('input, button').prop('disabled', true);
        bookingBusinessNameTable.removeClass('d-none');

        Swal.fire({
            icon: 'success',
            title: 'Saved!',
            text: 'Your booking name and rating have been saved successfully.'
        });
    });

    // Edit Logic
    editBookingIcon.on('click', function () {
        bookingBusinessNameSelection.find('input, button').prop('disabled', false);
        bookingBusinessNameTable.addClass('d-none');
        isBookingEditMode = true;
    });
    // Open dropdown on page load
    // Find the active sidebar item
    const activeItem = $(".sidebar-dropdown .sidebar-item.active");

    if (activeItem.length) {
        const parentDropdown = activeItem.closest(".sidebar-dropdown");
        const parentLink = parentDropdown.prev("a.sidebar-link");

        // Parent dropdown ko open kar do
        parentDropdown.addClass("show");
        parentLink.attr("aria-expanded", "true");
        parentLink.removeClass("collapsed");
    }

    // SignUP Page validation

    // On Sign Up button click
    $("#signUp").click(function () {
        var isValid = true; // Flag to check if the form is valid

        // --- First Name Validation ---
        var firstName = $("#signUpFN").val();
        if (firstName === "") {
            $("#signUpFNError").removeClass("d-none");
            $("#signUpFNSuccess").addClass("d-none");
            isValid = false;
        } else {
            $("#signUpFNError").addClass("d-none");
            $("#signUpFNSuccess").removeClass("d-none");
        }

        // --- Last Name Validation ---
        var lastName = $("#signUpLN").val();
        if (lastName === "") {
            $("#signUpLNError").removeClass("d-none");
            $("#signUpLNSuccess").addClass("d-none");
            isValid = false;
        } else {
            $("#signUpLNError").addClass("d-none");
            $("#signUpLNSuccess").removeClass("d-none");
        }

        // --- Google Business Profile Validation ---
        var googleBusinessProfile = $("#signUpGBP").val();
        if (googleBusinessProfile === "") {
            $("#signUpGBPError").removeClass("d-none");
            $("#signUpGBPSuccess").addClass("d-none");
            isValid = false;
        } else {
            $("#signUpGBPError").addClass("d-none");
            $("#signUpGBPSuccess").removeClass("d-none");
        }

        // --- Email Validation ---
        var email = $("#signUpEmail").val();
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Email regex pattern
        if (email === "") {
            $("#signUpEmailError").removeClass("d-none").text("Email is required.");
            $("#signUpEmailSuccess").addClass("d-none");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $("#signUpEmailError").removeClass("d-none").text("Please enter a valid email.");
            $("#signUpEmailSuccess").addClass("d-none");
            isValid = false;
        } else {
            $("#signUpEmailError").addClass("d-none");
            $("#signUpEmailSuccess").removeClass("d-none");
        }

        // --- Password Validation ---
        var password = $("#signUpPassword").val();
        if (password === "") {
            $("#signUpPasswordError").removeClass("d-none");
            $("#signUpPasswordSuccess").addClass("d-none");
            isValid = false;
        } else {
            $("#signUpPasswordError").addClass("d-none");
            $("#signUpPasswordSuccess").removeClass("d-none");
        }
    });

    //********************SIGN IN ************************ */
    $("#signIn").click(function () {
        var isValid = true;

        var email = $("#signInEmail").val();
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Email regex pattern
        if (email == "") {
            $("#signInEmailError").removeClass("d-none");
            $("#signInEmailSuccess").addClass("d-none");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $("#signInEmailError").removeClass("d-none");
            $("#signInEmailSuccess").addClass("d-none");
            isValid = false;
        } else {
            $("#signInEmailError").addClass("d-none");
            $("#signInEmailSuccess").removeClass("d-none");
        }

        // Check Password validation
        var password = $("#signInPassword").val();
        if (password == "") {
            $("#signInPasswordError").removeClass("d-none");
            $("#signInPasswordSuccess").addClass("d-none");
            $("#signInPasswordError").text("Password is required.");
            isValid = false;
        } else {
            $("#signInPasswordError").addClass("d-none");
            $("#signInPasswordSuccess").removeClass("d-none");
        }
    });

    // Delete Client List 
    $('.deleteClient').on('click', function () {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    });
    // Profile modal
    $("#editProfileForm").on("submit", function (event) {
        event.preventDefault();
        const fullName = $("#fullName").val();
        const email = $("#email").val();
        const phone = $("#phone").val();

        Swal.fire({
            title: 'Profile Updated!',
            text: 'Your profile information has been successfully updated.',
            icon: 'success',
            confirmButtonText: 'OK',
            customClass: {
                popup: 'my-swal-popup',
                title: 'h3 mb-0',
                htmlContainer: 'small',
                confirmButton: 'my-swal-button'
            }
        }).then(() => {
            $("#profileModal").modal('hide');
        });
    });
    // Edit Passowrd
    $("#updatePasswordForm").on("submit", function (event) {
        event.preventDefault();
        const email = $("#email").val();

        Swal.fire({
            title: 'Password Updated!',
            text: 'Your Password information has been successfully updated.',
            icon: 'success',
            confirmButtonText: 'OK',
            customClass: {
                popup: 'my-swal-popup',
                title: 'h3 mb-0',
                htmlContainer: 'small',
                confirmButton: 'my-swal-button'
            }
        }).then(() => {
            $("#updatePasswordModal").modal('hide');
        });
    });

    // Add for eye icon toggle
    $('#togglePassword').click(function () {
        const icon = $(this);
        const input = icon.siblings('input[type="password"], input[type="text"]');

        const isPassword = input.attr('type') === 'password';
        input.attr('type', isPassword ? 'text' : 'password');

        // Toggle icon class
        icon.toggleClass('fa-eye');
        icon.toggleClass('fa-eye-slash');
    });
    // Add for Tooltip
    const $trigger = $('.custom-tooltip-trigger');
    const $wrapper = $trigger.closest('.tooltip-wrapper');

    $trigger.on('click', function (e) {
        e.stopPropagation();
        $wrapper.toggleClass('active');
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.tooltip-wrapper').length) {
            $wrapper.removeClass('active');
        }
    });
});

// ------------------------------------------------------------------

$(document).ready(function () {
    let ratings = {
        room: 0,
        service: 0,
        amenities: 0,
        comfort: 0,
        cleanliness: 0,
        experience: 0
    };

    let ratingsSet = {
        room: false,
        service: false,
        amenities: false,
        comfort: false,
        cleanliness: false,
        experience: false
    };

    function setStars(ratingElement, ratingValue) {
        const stars = ratingElement.children('.star');
        stars.each(function () {
            const starValue = parseFloat($(this).data('value'));
            if (starValue <= ratingValue) {
                $(this).removeClass('half').addClass('full');
            } else if (starValue - 0.5 === ratingValue) {
                $(this).removeClass('full').addClass('half');
            } else {
                $(this).removeClass('full half');
            }
        });
    }

    function createStars(ratingElement) {
        for (let i = 1; i <= 5; i++) {
            const star = $('<span/>', {
                'class': 'bx bx-star star',
                'data-value': i,
            });
            ratingElement.append(star);
        }
    }

    function updateSelectedStarDisplay() {
        let totalRating = 0;
        let ratingCount = 0;

        for (const key in ratings) {
            if (ratingsSet[key]) {
                totalRating += ratings[key];
                ratingCount++;
            }
        }

        if (ratingCount === 4) { // Ensure all 4 ratings are set
            let averageRating = totalRating / ratingCount;
            averageRating = Math.round(averageRating * 2) / 2;  // Round to nearest 0.5

            const averageRatingElement = $('<div/>', {
                'class': 'average-rating'
            });

            // Determine overall rating text based on average rating
            let overallRatingText = '';

            if (averageRating >= 4 && averageRating <= 5) {
                overallRatingText = 'Overall Ratings 😄';
            } else if (averageRating >= 0 && averageRating <= 3.5) {
                overallRatingText = 'Overall Ratings 😔';
            }

            // Display overall rating text
            const overallRatingTextElement = $('<div/>', {
                'class': 'overall-rating-text',
                'text': overallRatingText
            });
            averageRatingElement.append(overallRatingTextElement);

            // Display average rating number
            const averageScore = $('<span/>', {
                'class': 'average-score',
                'text': averageRating.toFixed(1)
            });
            averageRatingElement.append(averageScore);

            // Create stars for display in stars-text
            const starsText = $('<div/>', {
                'class': 'stars-text'
            });

            // Loop to create all 5 stars
            for (let i = 1; i <= 5; i++) {
                const star = $('<span/>', {
                    'class': 'bx bx-star star',
                    'data-value': i,
                });

                // Determine if star should be full, half, or empty
                if (i <= averageRating) {
                    star.addClass('full');
                } else if (i - 0.5 === averageRating) {
                    star.addClass('half');
                }

                starsText.append(star);
            }

            // Append stars to averageRatingElement
            averageRatingElement.append(starsText);

            // Create submit button
            const submitButton = $('<button/>', {
                'id': 'submit-btn',
                'class': 'btn btn-primary my-3 w-100 py-2',
                'text': 'Submit'
            });

            // Check if the current page URL matches the specified URL
            if (window.location.href === 'https://rms.ranqinxz.com/frontend/customer-impressions.html') {
                // Create and append the textarea
                const textarea = $('<textarea/>', {
                    'class': 'form-control my-3 w-100',
                    'placeholder': 'Please provide additional feedback here...', 'rows': '6', 'cols': '60'
                });
                averageRatingElement.append(textarea);
            }

            averageRatingElement.append(submitButton);

            $('.selected-star').empty().append(averageRatingElement).addClass('border rounded shadow');

            // Handle submit button click
            submitButton.on('click', function () {
                // Check if the current page URL matches the specified URL
                if (window.location.href === 'https://rms.ranqinxz.com/frontend/customer-impressions.html') {
                    // Redirect to post-review-submission.html
                    window.location.href = 'https://rms.ranqinxz.com/frontend/post-review-submission.html';
                } else {
                    // Redirect logic based on average rating
                    if (averageRating >= 0 && averageRating <= 3.5) {
                        window.location.href = 'negative-feedback.html';
                    } else if (averageRating >= 4 && averageRating <= 5) {
                        window.location.href = 'positive-feedback.html';
                    }
                }
            });
        }
    }

    $('.rating').each(function () {
        const rating = $(this).data('rating');
        createStars($(this));
        setStars($(this), rating);
    });

    $('.rating').on('mousemove', '.star', function (e) {
        const ratingElement = $(this).closest('.rating');
        const offset = $(this).offset();
        const relativeX = e.pageX - offset.left;
        const width = $(this).width();
        let ratingValue = parseFloat($(this).data('value'));

        if (relativeX < width / 2) {
            ratingValue -= 0.5;
        }

        setStars(ratingElement, ratingValue);
    });

    $('.rating').on('mouseleave', function () {
        const rating = $(this).data('rating');
        setStars($(this), rating);
    });

    $('.rating').on('click', '.star', function (e) {
        const ratingElement = $(this).closest('.rating');
        const offset = $(this).offset();
        const relativeX = e.pageX - offset.left;
        const width = $(this).width();
        let ratingValue = parseFloat($(this).data('value'));

        if (relativeX < width / 2) {
            ratingValue -= 0.5;
        }

        ratingElement.data('rating', ratingValue);

        // Determine which rating section this is and update the corresponding rating
        const label = ratingElement.prev('label').text().toLowerCase();
        if (label.includes('room')) {
            ratings.room = ratingValue;
            ratingsSet.room = true;
        } else if (label.includes('service')) {
            ratings.service = ratingValue;
            ratingsSet.service = true;
        } else if (label.includes('amenities')) {
            ratings.amenities = ratingValue;
            ratingsSet.amenities = true;
        } else if (label.includes('comfort')) {
            ratings.comfort = ratingValue;
            ratingsSet.comfort = true;
        } else if (label.includes('cleanliness')) {
            ratings.cleanliness = ratingValue;
            ratingsSet.cleanliness = true;
        } else if (label.includes('experience')) {
            ratings.experience = ratingValue;
            ratingsSet.experience = true;
        }

        setStars(ratingElement, ratingValue);
        updateSelectedStarDisplay();

        // Add animation to the selected star
        $(this).addClass('animated').css({
            'animation': 'animate .5s ease-in-out forwards'
        });
    });

    // Initial display update
    updateSelectedStarDisplay();
});

// Customer review screen

$(document).ready(function () {
    let overallRating = 0;

    function setStars(ratingElement, ratingValue) {
        const stars = ratingElement.children('.star');
        stars.each(function () {
            const starValue = parseFloat($(this).data('value'));
            if (starValue <= ratingValue) {
                $(this).removeClass('half').addClass('full');
            } else if (starValue - 0.5 === ratingValue) {
                $(this).removeClass('full').addClass('half');
            } else {
                $(this).removeClass('full half');
            }
        });
    }

    function createStars(ratingElement) {
        for (let i = 1; i <= 5; i++) {
            const star = $('<span/>', {
                'class': 'bx bx-star star',
                'data-value': i,
            });
            ratingElement.append(star);
        }
    }

    function updateRatingScore() {
        let averageRating = Math.round(overallRating * 2) / 2;  // Round to nearest 0.5

        // Update the average score text
        $('.rating-score').text(averageRating.toFixed(1));
    }

    $('.rating-stars').each(function () {
        const rating = $(this).data('rating');
        createStars($(this));
        setStars($(this), rating);
    });

    $('.rating-stars').on('mousemove', '.star', function (e) {
        const ratingElement = $(this).closest('.rating-stars');
        const offset = $(this).offset();
        const relativeX = e.pageX - offset.left;
        const width = $(this).width();
        let ratingValue = parseFloat($(this).data('value'));

        if (relativeX < width / 2) {
            ratingValue -= 0.5;
        }

        setStars(ratingElement, ratingValue);
    });

    $('.rating-stars').on('mouseleave', function () {
        const rating = $(this).data('rating');
        setStars($(this), rating);
    });

    $('.rating-stars').on('click', '.star', function (e) {
        const ratingElement = $(this).closest('.rating-stars');
        const offset = $(this).offset();
        const relativeX = e.pageX - offset.left;
        const width = $(this).width();
        let ratingValue = parseFloat($(this).data('value'));

        if (relativeX < width / 2) {
            ratingValue -= 0.5;
        }

        overallRating = ratingValue;
        ratingElement.data('rating', ratingValue);

        setStars(ratingElement, ratingValue);
        updateRatingScore();

        // Add animation to the selected star
        $(this).addClass('animated').css({
            'animation': 'animate .5s ease-in-out forwards'
        });
    });

    // Handle submit button click
    $('#customereview-btn').on('click', function () {
        if (overallRating >= 4) {
            window.location.href = 'experience-share.html';
        } else {
            window.location.href = 'customer-impressions.html';
        }
    });

    // Hide submit button if on qrcode-review-submission.html
    if (window.location.pathname.includes('qrcode-review-submission.html')) {
        $('#customereview-btn').hide();
    }

    // Initial display update
    updateRatingScore();
});