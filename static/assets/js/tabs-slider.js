
	/*Activate default tab contents*/
	var $magicLine, defaultActive;  
	
	defaultActive = $('.tekup-tabs-menu li.active a').attr('href');
	$(defaultActive).show();
				
	$('.tekup-tabs-menu').append("<li id='magic-line'></li>");
	$magicLine = $('#magic-line');		    
	$magicLine.width($('.active').width())
		// .css('left', $('.active a').position().left)
		// .data('origLeft', $magicLine.position().left)
		// .data('origWidth', $magicLine.width());				
		
	$('.tekup-tabs-menu li a').click(function(){
		var $this,tabId,leftVal,$tabContent;
		$this = $(this);
		$tabContent = $('.tabContent');
		$this.parent().addClass('active').siblings().removeClass('active');
		tabId = $this.attr('href');		
		
		leftVal = $($tabContent).index($(tabId)) * $tabContent.width() * -1;
		$('.tekup-tabs-wrapper').stop().animate({left:leftVal});
		
		$magicLine
			.data('origLeft',$this.position().left)
			.data('origWidth',$this.width() + 40);				
		return false;
	});		
	
	
