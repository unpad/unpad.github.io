jQuery(document).ready(function($) {
    
    $("ul.sf-menu").superfish();
    
    $('.pengumuman-list').cycle({
	    fx:     'fade',
	    timeout: 5000
	});
	$('.profile').cycle({
	    fx:     'scrollLeft',
	    timeout: 5000
	});
	
	$('.faculty-list').masonry({
	  	itemSelector: '.faculty'
	});
	
	$('.fakultas .current_page_parent .children, .fakultas .current_page_item .children, .fakultas .current_page_ancestor .children').css('display','block');
	
if ($('#navigation ul li').hasClass("current_page_parent")) {
	$('#navigation .current_page_parent ul').addClass("displayMe"); }

$('#navigation ul li ul').hide();

$("#navigation ul li:has(ul)").addClass("theDon");

$("#navigation ul li ul li:has(a)").addClass("henchmen");

$('#navigation .theDon > a').attr('href', '#');

$('#navigation ul li a').click(
function() {

$(this).next().slideToggle('slow').removeClass("displayMe");

if ($(this).attr('href') == '#') { return false; }

	});
	
});