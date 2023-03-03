function scrollFunction1() {
	let e = document.getElementById("home");
		e.scrollIntoView({
			block: 'start',
			behavior: 'smooth',
			inline: 'start'
	});
}

function scrollFunction2() {
	let e = document.getElementById("aboutme");
	e.scrollIntoView({
			block: 'end',
			behavior: 'smooth',
			inline: 'center'
	});
}
// Login

const loginBtn = document.getElementById('login-confirm');
const username = document.getElementById('username1');
const password = document.getElementById('password1');
const loggedOut = document.querySelectorAll('.logged-out');
const loggedIn = document.querySelectorAll('.logged-in');
const welcomeUser = document.querySelectorAll('.welcome-user');

// document.cookie.split(';')[0] === 'loggedIn=true'

if (localStorage.getItem('loggedIn') === 'true') {
	loggedIn.forEach(e => {
		e.classList.remove('hide');
	});
	loggedOut.forEach(e => {
		e.classList.add('hide');
	});
	welcomeUser.forEach(e => {
		e.classList.remove('hide');
		e.innerHTML = 'Välkommen, ' + localStorage.getItem('username') + '!';
	});
}

loginBtn.addEventListener('click', () =>{
	const anvNamn = document.getElementById('username1').value;
	const losenord = document.getElementById('password1').value;

	var success = login(anvNamn, losenord);
	if (success) {
		loginBtn.click();
	}
});

function login(username, password) {
if (password === "PassW") {
	loginBtn.setAttribute('data-bs-dismiss', 'modal');

	loggedIn.forEach(e => {
		e.classList.remove('hide');
	});

	loggedOut.forEach(e => {
		e.classList.add('hide');
	});

	welcomeUser.forEach(e => {
		e.classList.remove('hide');
		e.innerHTML = 'Välkommen, ' + username + '!';
	});

	localStorage.setItem('username', username);
	localStorage.setItem('loggedIn', true);
	// document.cookie = "loggedIn=true";
	// document.cookie = "username=" + username;
	return true;
} else {
	alert("Fel användarnamn eller lösenord");
	loginBtn.removeAttribute('data-bs-dismiss', 'modal');
	return false;
}}

function logout() {
	localStorage.removeItem('username');
	localStorage.setItem('loggedIn', false);
	// document.cookie = "loggedIn=false";
	// document.cookie = "username=";
	loginBtn.removeAttribute('data-bs-dismiss', 'modal');
	loggedIn.forEach(e => {
		e.classList.add('hide');
	});
	loggedOut.forEach(e => {
		e.classList.remove('hide');
	});
	welcomeUser.forEach(e => {
		e.classList.add('hide');
		e.innerHTML = '';
	});
}



