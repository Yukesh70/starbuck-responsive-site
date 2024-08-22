let menu = document.querySelector('#a1');
let navbar = document.querySelector('.navbar');

menu.onclick = ()=>
{
	menu.classList.toggle('fa-solid');
	navbar.classList.toggle('active');
}
window.onscroll = () =>
{
	menu.classList.remove('fa-solid');
	navbar.classList.remove('active');
}
