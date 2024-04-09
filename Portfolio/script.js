//ScrollBar Show/Hide Logic
button = document.getElementById('myBtn');
window.onscroll = function() {
	scrollFucntion();
};
function scrollFucntion() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		button.style.display = 'block';
	} else {
		button.style.display = 'none';
	}
}
//ScrollBar  Logic
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	button.style.transition = '0.9s ease';
}
