jQuery(document).ready(function(){
	//tabs
	var tabLink = $('.portfolio-nav a');
	$(tabLink).on('click', function(){
		var hash = $(this).attr('href');
		$(this).addClass('tabs-show').siblings().removeClass('tabs-show');
        $(hash).fadeIn().siblings().hide();
		return false;
	});
});