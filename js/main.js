$(function() {
    $('.search [data-toggle=popover]').popover({
	content: $("#search-form").html()
	, html: true
    });
    $('.user [data-toggle=popover]').popover({
	content: $("#user-form").html()
	, html: true
    });
});