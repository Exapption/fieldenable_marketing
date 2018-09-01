$(function() {

    $('ul.nav > li').click(function(e) {
        // e.preventDefault();
        $('ul.nav > li').removeClass('active');
        $(this).addClass('active');

    });
    $("#store_url").show();
    toggleUrl("yes");
    $("#contact-details #phone").intlTelInput();

});

function toggleUrl(text) {
    if (text === "yes") {
        $("#store_url").show();
        $("#yes").attr("src", "assets/radio_active.png");
        $("#no").attr("src", "assets/radio_inactive.png");
    } else {
        $("#store_url").hide();
        $("#yes").attr("src", "assets/radio_inactive.png");
        $("#no").attr("src", "assets/radio_active.png");
    }
}

function moveToAbout() {
    $("body, html").animate({
        scrollTop: $('#about').offset().top - 50
    }, 800);
}