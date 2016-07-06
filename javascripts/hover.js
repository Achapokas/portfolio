var $contactTarget = $('[data-contact-target]'),
	$contactToggle = $('[data-contact-toggle]');

	$contactTarget.on('mouseenter', function(){
		var $this = $(this);
		
		$contactToggle.removeClass('hidden');
		$this.addClass('hidden');
	});

	$contactToggle.on('mouseleave', function(){
		var $this = $(this);
		
		$contactTarget.removeClass('hidden');
		$this.addClass('hidden');
	});