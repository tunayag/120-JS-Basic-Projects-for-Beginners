const countries = {
    "am-ET": "Amharic",
    "ar-SA": "Arabic",
    "be-BY": "Bielarus",
    "bem-ZM": "Bemba",
    "bi-VU": "Bislama",
    "bjs-BB": "Bajan",
    "bn-IN": "Bengali",
    "bo-CN": "Tibetan",
    "br-FR": "Breton",
    "bs-BA": "Bosnian",
    "ca-ES": "Catalan",
    "cop-EG": "Coptic",
    "cs-CZ": "Czech",
    "cy-GB": "Welsh",
    "da-DK": "Danish",
    "dz-BT": "Dzongkha",
    "de-DE": "German",
    "dv-MV": "Maldivian",
    "el-GR": "Greek",
    "en-GB": "English",
    "es-ES": "Spanish",
    "et-EE": "Estonian",
    "eu-ES": "Basque",
    "fa-IR": "Persian",
    "fi-FI": "Finnish",
    "fn-FNG": "Fanagalo",
    "fo-FO": "Faroese",
    "fr-FR": "French",
    "gl-ES": "Galician",
    "gu-IN": "Gujarati",
    "ha-NE": "Hausa",
    "he-IL": "Hebrew",
    "hi-IN": "Hindi",
    "hr-HR": "Croatian",
    "hu-HU": "Hungarian",
    "id-ID": "Indonesian",
    "is-IS": "Icelandic",
    "it-IT": "Italian",
    "ja-JP": "Japanese",
    "kk-KZ": "Kazakh",
    "km-KM": "Khmer",
    "kn-IN": "Kannada",
    "ko-KR": "Korean",
    "ku-TR": "Kurdish",
    "ky-KG": "Kyrgyz",
    "la-VA": "Latin",
    "lo-LA": "Lao",
    "lv-LV": "Latvian",
    "men-SL": "Mende",
    "mg-MG": "Malagasy",
    "mi-NZ": "Maori",
    "ms-MY": "Malay",
    "mt-MT": "Maltese",
    "my-MM": "Burmese",
    "ne-NP": "Nepali",
    "niu-NU": "Niuean",
    "nl-NL": "Dutch",
    "no-NO": "Norwegian",
    "ny-MW": "Nyanja",
    "ur-PK": "Pakistani",
    "pau-PW": "Palauan",
    "pa-IN": "Panjabi",
    "ps-PK": "Pashto",
    "pis-SB": "Pijin",
    "pl-PL": "Polish",
    "pt-PT": "Portuguese",
    "rn-BI": "Kirundi",
    "ro-RO": "Romanian",
    "ru-RU": "Russian",
    "sg-CF": "Sango",
    "si-LK": "Sinhala",
    "sk-SK": "Slovak",
    "sm-WS": "Samoan",
    "sn-ZW": "Shona",
    "so-SO": "Somali",
    "sq-AL": "Albanian",
    "sr-RS": "Serbian",
    "sv-SE": "Swedish",
    "sw-SZ": "Swahili",
    "ta-LK": "Tamil",
    "te-IN": "Telugu",
    "tet-TL": "Tetum",
    "tg-TJ": "Tajik",
    "th-TH": "Thai",
    "ti-TI": "Tigrinya",
    "tk-TM": "Turkmen",
    "tl-PH": "EselectElalog",
    "tn-BW": "Tswana",
    "to-TO": "Tongan",
    "tr-TR": "Turkish",
    "uk-UA": "Ukrainian",
    "uz-UZ": "Uzbek",
    "vi-VN": "Vietnamese",
    "wo-SN": "Wolof",
    "xh-ZA": "Xhosa",
    "yi-YD": "Yiddish",
    "zu-ZA": "Zulu"
}

const textAreaEl = document.querySelector("#textarea1");
const translationAreaEl = document.querySelector("#textarea2");
const volumeUpEl = document.querySelector(".fa-volume-up");
const selectEl = document.querySelectorAll("select");
const buttonEl = document.querySelector("button");
const exchangeIconEl = document.querySelector(".fa-exchange-alt");
const iconEl = document.querySelectorAll("i");

selectEl.forEach((select, idx) => {
    for (const country_code in countries) {

        let selected;

        if (idx == 0 && country_code == "en-GB") {
            selected = "selected"
        } else if (idx == 1 && country_code == "tr-TR") {
            selected = "selected"
        }

        let optionEl = `<option value="${country_code}"${selected}>${countries[country_code]
            }</option >
        `
        select.insertAdjacentHTML("beforeend", optionEl)
    }
});


exchangeIconEl.addEventListener("click", () => {
    let tempText = textAreaEl.value;
    let tempLang = selectEl[0].value;
    textAreaEl.value = translationAreaEl.value;
    translationAreaEl.value = tempText;
    selectEl[0].value = selectEl[1].value;
    selectEl[1].value = tempLang;
});

iconEl.forEach((icon) => {
    icon.addEventListener("click", ({ target }) => {
        if (target.classList.contains("fa-copy")) {
            if (target.id == "from") {
                navigator.clipboard.writeText(textAreaEl.value)
            } else {
                navigator.clipboard.writeText(translationAreaEl.value)
            }
        } else {
            let utterance;
            if (target.id == "from") {
                utterance = new SpeechSynthesisUtterance(textAreaEl.value);
                utterance.lang = selectEl[0].value;
            } else {
                utterance = new SpeechSynthesisUtterance(translationAreaEl.value);
                utterance.lang = selectEl[1].value;
            }
            speechSynthesis.speak(utterance);
        };
    })

});

function translateText() {
    let text = textAreaEl.value;
    let translateFrom = selectEl[0].value;
    let translateTo = selectEl[1].value;
    console.log(text)
    if (!text) return;
    translationAreaEl.setAttribute("placeholder", "Translating...");
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    fetch(apiUrl).then(res => res.json()).then(data => {
        console.log(data);
        translationAreaEl.value = data.responseData.translatedText;
        translationAreaEl.setAttribute("placeholder", "Translation");

    })

};

buttonEl.addEventListener("click", translateText);