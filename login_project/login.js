// zmienne odwołujące się do elementów HTML
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// nasłuchiwanie kliknięcia przycisku "Login"
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
	// zmienne trzymające wartości z pól do logowania
    const username = loginForm.username.value;
    const password = loginForm.password.value;
	
	// sprawdzenie poprawności danych
    if (username === "" && password === "") {
		// komunikat powodzenia
        alert("You have successfully logged in.");
        location.reload();
    } else {
		// zmiana przezroczystości komunikatu błędu
        loginErrorMsg.style.opacity = 1;
    }
})