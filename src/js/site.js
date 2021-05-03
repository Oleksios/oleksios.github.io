{
	var themeChanger;
	var languageChanger;
	var themeLink;

	document.addEventListener('DOMContentLoaded', function () {
		document.getElementById("portfolioTabItem").click();

		themeChanger = document.getElementById('themeChanger');
		languageChanger = document.getElementById('languageChanger');
		themeLink = document.getElementById('theme-link');

		setDefaultTheme(getCookie("theme"));
	}, false);

	async function deletePreloader(element) {
		element.style.animation = "fadeIn 0.5s 1s";
		await new Promise(r => setTimeout(r, 1050));
		element.style.visibility = "collapse";
	}

	function initialize() {
		var preloader = document.getElementById("preloader");

		var lang = getCookie("lang");

		setDefaultLanguage(lang);

		deletePreloader(preloader);
	}

	function openTab(evt, tabName) {
		var i, tabcontent, tablinks;

		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}

		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}

		document.getElementById(tabName).style.display = "flex";
		evt.currentTarget.className += " active";
	}

	function getCookie(name) {
		let matches = document.cookie.match(new RegExp(
			name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
		));
		return matches ? decodeURIComponent(matches[1]) : undefined;
	}
}