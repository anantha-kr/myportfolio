
$(document).on('click','.myBtn',function(){
	var myTargetModal =  $(this).attr('href');
	$('#myModal').hide();
	$('.modal-content').hide();
	
	$('#myModal').fadeIn();
	$(myTargetModal).fadeIn();
  return false;
});

$("body" ).on( "click",".close", function() {
  	$('#myModal').hide();
	$('.modal-content').hide();
});