const folder = document.getElementById('folder')
const closer = document.getElementById('close')
const closer1 = document.getElementById('close1')
$('#mainR').hide()
$('#getItNow').click(() => {
      $('#dollar').hide()
    $('.mainBlur').show(() => {
        folder.classList.add('slideDown')
        closer.classList.add('slideDownClose')
        $('.folder').show()
        $('#close').show()
    
    })
});
$('#close').click(() => {
    $('.mainBlur').hide()
    folder.classList.remove('slideDown')
    closer.classList.remove('slideDownClose')
})
$('#close1').click(() => {
    $('.mainBlur').hide()
    $('.mainRewards').hide()
    folder.classList.remove('slideDown')
   closer1.classList.remove('slideDownClose')
})
$('#folder').click(function () {
    $(this).fadeOut(900);
    $('#close').fadeOut()
    $('#mainR').addClass('slide-in-fwd-center-top')
    $('#mainR').fadeIn()
    $('#dollar').show()
    $('#dollar').fadeOut().addClass('rotate-vert-center')
})
