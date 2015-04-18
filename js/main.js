$(function () {
    
    // Search popover
    $('.search [data-toggle=popover]').popover({
	content: $("#search-form").html()
	, html: true
    }).on('shown.bs.popover', function () {
	$('#search-form-inner input:first').focus();
    });

    // Close popovers on focusout
    $(document).on('blur', '.popover', function () {
	$(this).popover('hide');
    });
});