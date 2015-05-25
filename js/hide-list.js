$(document).ready(function () {
    moreInfo();
});

function moreInfo() {
    $('.collapse').on('show.bs.collapse', function () {
        $(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").show("slow").addClass("glyphicon-minus");
    }).on('hide.bs.collapse', function () {
        $(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").show("slow").addClass("glyphicon-plus");
    });
}