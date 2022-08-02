function open() {

    $(document).ready(function() {
        $('.menu-btn').click(function(event) {
            $('.navbar-demo').toggleClass('open-nav');
            console.log("LOL")
        });
    });
}