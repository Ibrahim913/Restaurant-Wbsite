$(document).ready(function()
{
	$("#RESERVATION").click(function()
	{
		$("form").show();
	});
		$("#RESERVE").click(function()
	{
		$("form").hide();
		alert("Your Table Has been Reserved For You")
	});
});