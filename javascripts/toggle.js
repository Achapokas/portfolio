var $navigationMarker = $('[data-navigation-marker]'),
	$navigationMarkerAnchor = $('[data-navigation-marker-anchor]');

$(document).ready(function(event){
	loadBounce($navigationMarker, 2, '5px', 500);
});

function loadBounce(e, times, distance, speed) {
    for(var i = 0; i < times; i++) {
        e.animate({marginTop: '-='+distance}, speed)
            .animate({marginTop: '+='+distance}, speed);
    }        
}

$navigationMarker.on('click', function(){
	$navigationMarkerAnchor.toggleClass('hidden');
	$navigationMarker.toggleClass('fa-plus').toggleClass('fa-minus');
});