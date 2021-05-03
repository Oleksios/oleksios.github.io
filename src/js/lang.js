{
	var jsonLocalize = {};

	function setDefaultLanguage(lang) {
		if (lang == undefined || lang == null || lang == "") {
			lang = "uk";
		}

		if (lang == "uk") {
			languageChanger.value = "uk";
		} else if (lang == "en") {
			languageChanger.value = "en";
		} else {
			languageChanger.value = "ru";
		}

		if (lang != "uk")
			changeLanguage();
	}

	function changeLanguage() {
		var lang = languageChanger.value;

		if (lang == "uk") {
			document.cookie = "lang=uk";
		} else if (lang == "en") {
			document.cookie = "lang=en";
		} else {
			document.cookie = "lang=ru";
		}

		localize(lang);
	}

	function localize(language) {
		var colorElements = document.getElementsByClassName("text-lang");
		document.getElementsByTagName("html")[0].setAttribute("lang", language);

		for (let item of colorElements) {
			var key = item.getAttribute("key");
			item.textContent = jsonLocalize[language][key];
		}
	}

	function getJsonAndInitialize(jsonFiles) {
		for (let index = 0; index < jsonFiles.length; index++) {
			const element = jsonFiles[index];

			fetch(element)
				.then(function (response) {
					return response.json();
				})
				.then(function (data) {
					mergeJsonDeep(jsonLocalize, data);
				})
				.then(function () {
					if (index == jsonFiles.length - 1) {
						console.log("Show localized text:");
						console.log(jsonLocalize);
						initialize();
					}
				})
				.catch(function (err) {
					console.log(err);
				});
		}
	}

	function mergeJsonDeep(target, source) {
		const isObject = (obj) => obj && typeof obj === 'object';

		if (!isObject(target) || !isObject(source)) {
			return source;
		}

		Object.keys(source).forEach(key => {
			const targetValue = target[key];
			const sourceValue = source[key];

			if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
				target[key] = targetValue.concat(sourceValue);
			} else if (isObject(targetValue) && isObject(sourceValue)) {
				target[key] = mergeJsonDeep(Object.assign({}, targetValue), sourceValue);
			} else {
				target[key] = sourceValue;
			}
		});

		return target;
	}
}