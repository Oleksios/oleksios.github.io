{
	function setDefaultTheme(theme) {
		if (theme == undefined) {
			theme = "light";
		}

		if (theme == "dark") {
			document.cookie = "theme=dark";
			themeLink.setAttribute('href', "src/css/theme/dark-theme.css");
			themeChanger.checked = true;
			changeColorHead("#2c2f34");
		} else {
			document.cookie = "theme=light";
			themeLink.setAttribute('href', "src/css/theme/light-theme.css");
			themeChanger.checked = false;
			changeColorHead("#e4ebf5");
		}
	}

	function changeTheme() {
		if (themeChanger.checked) {
			document.cookie = "theme=dark";
			themeLink.setAttribute('href', "src/css/theme/dark-theme.css");
			changeColorHead("#2c2f34");
		} else {
			document.cookie = "theme=light";
			themeLink.setAttribute('href', "src/css/theme/light-theme.css");
			changeColorHead("#e4ebf5");
		}
	}

	function changeColorHead(color) {
		var colorElements = document.getElementsByClassName("theme-color-set");

		for (let item of colorElements) {
			item.content = color;
		}
	}
}