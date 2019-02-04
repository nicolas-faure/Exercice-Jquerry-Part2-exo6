$(function(){
  $(document).ready(function(){
    $('.color').hover(function(){
      $('#text').css('color', $(this).attr('id'));
      //put the element who have the focus in green
    }, function() {
      $('#text').css('color', 'black');
    });
  });
});
