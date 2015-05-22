
$(document).ready(function () {
    moreInfo();
});

function moreInfo() {
    $('.test2').hide();
    
    var x = $(".test1").click(function () {
        var parentContainer = $(this).parents(".col-md-12").first();
        var a = $(parentContainer).find(".test2").slideDown(400);
        $(this).next(parentContainer).slideUp(400);
    });
   
}
