
$(document).ready(function () {
    const $themeLink = $('#theme-style');
    const savedTheme = localStorage.getItem('theme') || 'light';
    $themeLink.attr('href', `../css/${savedTheme}.css`);
    $('body').attr('data-theme', savedTheme);
    updateIcons(savedTheme);

    $('#theme-toggle').on('click', function () {
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
        Swal.fire ({
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
});