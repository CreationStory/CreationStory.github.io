$(document).ready(function() {
var $videoSrc;
$('.video-btn').click(function() {
    $videoSrc = $(this).data( "src" );
});
console.log($videoSrc);
$('#myModal').on('shown.bs.modal', function (e) {
$("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" );
})
$('#myModal').on('hide.bs.modal', function(e) {
var $if = $(e.delegateTarget).find('iframe');
var src = $if.attr("src");
$if.attr("src", 'js/modal_pause.html');
})
});


