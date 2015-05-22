$(document).ready(function () {
    moreInfo();
});

function moreInfo() {
    $('.test2').hide();
    
    $(".test1").click(function () {
        var parentContainer = $(this).parents(".col-md-12").first();
        $(parentContainer).find(".test2").slideToggle(400);
        
    });
   
}
