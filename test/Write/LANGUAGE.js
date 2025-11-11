/* document.addEventListener('DOMContentLoaded', function() {
let messageReceived = false;

function getLanguagePreference() {
let language = localStorage.getItem('SHARPFAITH');

if (!language) {
const cookieValue = document.cookie
.split('; ')
.find(row => row.startsWith('SHARPFAITH='));
if (cookieValue) {
language = cookieValue.split('=')[1];
}
if (!cookieValue) {
const userLanguage = navigator.language;
language = mapToSupportedLanguage(userLanguage);
}
}

function languageCheck(language) {
  const supportedLanguages = [
    "English", "Cymraeg", "Norsk", "Deutsch", "Français",
    "Русский", "Suomi", "Íslenska", "عربي"
  ];
  return supportedLanguages.includes(language);
}

if (!languageCheck(language)) {
language = "English";
}

saveLanguagePreference(language);

return language;
}

const currentLanguage = getLanguagePreference();

function mapToSupportedLanguage(language) {
const languageMappings = {
'en': 'English',
'en-gb': 'English',
'en-ie': 'English',
'en-ca': 'English',
'en-us': 'English',
'en-au': 'English',
'en-nz': 'English',
'en-jm': 'English',
'cy': 'Cymraeg',
'cy-gb': 'Cymraeg',
'gd': 'Cymraeg',
'ga': 'Cymraeg',
'sco': 'Cymraeg',
'no': 'Norsk',
'no-se': 'Norsk',
'nb': 'Norsk',
'nb-no': 'Norsk',
'nn': 'Norsk',
'nn-no': 'Norsk',
'se-no': 'Norsk',
'sv': 'Norsk',
'sv-fi': 'Norsk',
'sv-se': 'Norsk',
'de': 'Deutsch',
'de-de': 'Deutsch',
'de-li': 'Deutsch',
'de-lu': 'Deutsch',
'de-ch': 'Deutsch',
'de-at': 'Deutsch',
'fr': 'Français',
'fr-fr': 'Français',
'fr-be': 'Français',
'fr-ca': 'Français',
'fr-lu': 'Français',
'fr-ch': 'Français',
'ru': 'Русский',
'ru-ru': 'Русский',
'ru-md': 'Русский',
'fi': 'Suomi',
'fi-fi': 'Suomi',
'se': 'Suomi',
'se-fi': 'Suomi',
'is': 'Íslenska',
'is-is': 'Íslenska',
'ar': 'عربي',
'ar-ae': 'عربي',
'ar-bh': 'عربي',
'ar-dz': 'عربي',
'ar-eg': 'عربي',
'ar-iq': 'عربي',
'ar-jo': 'عربي',
'ar-kw': 'عربي',
'ar-lb': 'عربي',
'ar-ly': 'عربي',
'ar-ma': 'عربي',
'ar-om': 'عربي',
'ar-qa': 'عربي',
'ar-sa': 'عربي',
'ar-sy': 'عربي',
'ar-tb': 'عربي',
'ar-ye': 'عربي'
};

return languageMappings[language.toLowerCase()] || 'English';
}

function SAVE_S() {
return new Promise((resolve, reject) => {
const request = indexedDB.open('LANGUAGE', 1);

request.onerror = function(event) {
resolve(null);
};

request.onsuccess = function(event) {
const db = event.target.result;
resolve(db);
};

request.onupgradeneeded = function(event) {
const db = event.target.result;
db.createObjectStore('language_', { keyPath: 'key' });
};
});
}

async function saveLanguagePreference(language) {
localStorage.setItem('SHARPFAITH', language);
const expirationDate = new Date();
expirationDate.setFullYear(expirationDate.getFullYear() + 1);
document.cookie = `SHARPFAITH=${language}; expires=${expirationDate.toUTCString()}; path=/`;
try {
const db = await SAVE_S();
const transaction = db.transaction(['language_'], 'readwrite');
const store = transaction.objectStore('language_');
store.put({ key: 'LANGUAGE_CS', value: language });
await transaction.complete;
} catch (error) {
return
}
}

function CAST______________(language) {
localStorage.setItem('SHARPFAITH', language);

const expirationDate = new Date();
expirationDate.setFullYear(expirationDate.getFullYear() + 1);
document.cookie = `SHARPFAITH=${language}; expires=${expirationDate.toUTCString()}; path=/`;

localStorage.setItem("CAST_14", "true");

const CAST_48 = document.querySelector(".CAST______________");
document.dispatchEvent(new CustomEvent('VECTOR_______C'));
CAST_48.style.transition = "opacity .48s .28s ease-in-out";
setTimeout(() => {
CAST_48.style.opacity = "1";
}, 14);
setTimeout(() => {
window.location.reload();
}, 1040);
}

const elements = document.querySelectorAll('[CAST_____]');

const strings = {
TheBible: {
Cymraeg: "Y Beibl",
Norsk: "Den Bibel"
},
OldTestament: {
Cymraeg: "HEN TESTAMENT",
Norsk: "GAMLETESTAMENTET"
},
NewTestament: {
Cymraeg: "NEWYDD TESTAMENT",
Norsk: "NYETESTAMENTET"
},
YOU: {
Cymraeg: "CYMERWCH<i>&centerdot;&ThinSpace;</i>SYLW",
Norsk: "VÆR<i>&centerdot;&ThinSpace;</i>PÅ<i>&centerdot;&VeryThinSpace;</i>VAKT",
},
Books: {
Cymraeg: "Llyfrau",
Norsk: "Bøker"
},
Scripts: {
Cymraeg: "Ysgrifau",
Norsk: "Skrifter"
},
English: {
Cymraeg: "Saesneg",
Norsk: "Engelsk"
},
Cymraeg: {
Norsk: "Walisisk"
},
Norwegian: {
Cymraeg: "Norwyaidd",
},
German: {
Cymraeg: "Almaenaidd",
Norsk: "Tysk"
},
French: {
Cymraeg: "Ffrangeg",
Norsk: "Fransk"
},
Russian: {
Cymraeg: "Rwsiaidd",
Norsk: "Russisk"
},
Icelandic: {
Cymraeg: "Islandeg",
Norsk: "Islandsk"
},
Finnish: {
Cymraeg: "Ffinnaidd",
Norsk: "Finsk"
},
Arabic: {
Cymraeg: "Arabaidd",
Norsk: "Arabisk"
},
Settings: {
Cymraeg: "&#926;&nbsp;Hopsiynau&nbsp;",
Norsk: "&#926;&nbsp;Oppsett&nbsp;"
},
Accessibility: {
Cymraeg: "&#9000;&nbsp;Cyrchiad&nbsp;",
Norsk: "&#9000;&nbsp;Adgang&nbsp;"
},
Details: {
Cymraeg: "&#926;&nbsp;Manylion&nbsp;",
Norsk: "&#926;&nbsp;Detaljer&nbsp;"
},
Settings____: {
Cymraeg: "Hopsiynau"
},

// CS HELP {} 

FirstEpistleofJohn_______: {
Cymraeg: "Epistol Cyntaf Ioan"
},

SecondEpistleofJohn_______: {
Cymraeg: "Epistol Ail Ioan"
},

ThirdEpistleofJohn_______: {
Cymraeg: "Epistol Trydydd Ioan"
}

};

const stringsWithFontSizeAdjustment = {
Cymraeg: {
OldTestament: { adjust: true, persist: false },
NewTestament: { adjust: true, persist: false },
YOU: { adjust: true, persist: false },
Revelation: { adjust: true, persist: true }
},
Norsk: {
FirstEpistleofJohn: { adjust: true, persist: true },
SecondEpistleofJohn: { adjust: true, persist: true },
ThirdEpistleofJohn: { adjust: true, persist: true },
Revelation: { adjust: true, persist: true }
}
};

function calculateAdjustedFontSize(currentFontSize) {
// Regular expression to match different font size formats
const fontSizeRegex = /([\d.]+)([a-z%]+)/i;

// Parse the current font size using regex
const matches = currentFontSize.match(fontSizeRegex);

if (matches && matches.length === 3) {
const fontSizeValue = parseFloat(matches[1]); // Font size value
const fontSizeUnit = matches[2]; // Font size unit

// Calculate the adjusted font size (decrease by 1.4%)
const adjustedFontSizeValue = fontSizeValue * .95;

// Construct the adjusted font size string
return `${adjustedFontSizeValue}${fontSizeUnit}`;
}

// Return the original font size if unable to parse
return currentFontSize;
}

function sendLanguageMessage() {
if (!messageReceived) {
document.dispatchEvent(new CustomEvent('CS_____LANGUAGE'));
setTimeout(sendLanguageMessage, 74);
}
}

document.addEventListener('CAST____C14_', () => {
messageReceived = true;
});

async function updateLocalizedText(language) {
const promises = Array.from(elements).map(async (element) => {
const translationKey = element.getAttribute('CAST_____');

if (strings[translationKey] && strings[translationKey][language]) {
const adjustmentInfo = stringsWithFontSizeAdjustment[language][translationKey];
const shouldAdjustFontSize = adjustmentInfo && adjustmentInfo.adjust;
const persistAdjustment = adjustmentInfo && adjustmentInfo.persist;

if (['FirstEpistleofJohn', 'SecondEpistleofJohn', 'ThirdEpistleofJohn', 'Revelation', 'Settings', 'Accessibility', 'Details', 'YOU'].includes(translationKey)) {
element.innerHTML = strings[translationKey][language];
} else {
element.textContent = strings[translationKey][language];
}

if (shouldAdjustFontSize && (persistAdjustment || window.innerWidth >= 1510)) {
const computedStyle = window.getComputedStyle(element);
const currentFontSize = computedStyle.getPropertyValue('font-size');
const adjustedFontSize = calculateAdjustedFontSize(currentFontSize);
element.style.fontSize = adjustedFontSize;
}
}
});

await Promise.all(promises);

if (document.fonts && document.fonts.ready) {
document.fonts.ready.then(() => {
setTimeout(sendLanguageMessage, 74);
}).catch(() => {
setTimeout(sendLanguageMessage, 2800);
});
} else {
setTimeout(sendLanguageMessage, 2800);
}
}

function HIGH_TAG(language) {
const languageAttributes = {
"English": {
lang: "en",
title: "The Bible"
},
"Cymraeg": {
lang: "cy",
title: "Y Beibl"
},
"Norsk": {
lang: "CAST",
title: "The Bible"
},
"Deutsch": {
lang: "CAST",
title: "The Bible"
},
"Français": {
lang: "CAST",
title: "The Bible"
},
"Русский": {
lang: "CAST",
title: "The Bible"
},
"Suomi": {
lang: "CAST",
title: "The Bible"
},
"Íslenska": {
lang: "CAST",
title: "The Bible"
},
"عربي": {
lang: "CAST",
title: "The Bible"
}
};
const { lang, title } = languageAttributes[language];
document.documentElement.setAttribute('lang', lang);
document.title = title;
}

function finalizeLanguage(language) {
updateLocalizedText(language);
HIGH_TAG(language);
const elementsToRemove = document.querySelectorAll(`[LANGUAGE="${language}"]`);
elementsToRemove.forEach(element => {
const parent = element.parentElement;
if (parent.tagName.toLowerCase() === "span") {
parent.remove();
}
});
if (language === "عربي") {
const Arabic_ = document.querySelector("[Arabic_]");
Arabic_.remove();
}
}

finalizeLanguage(currentLanguage);

function updateLanguageLink(currentLanguage) {
const languageMap = {
"English": { text: "Cymraeg", language: "Cymraeg" },
"Cymraeg": { text: "Saesneg", language: "English" },
"Norsk": { text: "Engelsk", language: "English" },
"Deutsch": { text: "STRING", language: "English" },
"Français": { text: "STRING", language: "English" },
"Русский": { text: "STRING", language: "English" },
"Suomi": { text: "STRING", language: "English" },
"Íslenska": { text: "STRING", language: "English" },
"عربي": { text: "STRING", language: "English" }
};

const anchorElement = document.querySelector('a[CAST_48]');
if (anchorElement) {
const languageInfo = languageMap[currentLanguage];
if (languageInfo) {
anchorElement.textContent = languageInfo.text;
anchorElement.setAttribute('LANGUAGE', languageInfo.language);
}
}
}

setTimeout(function() {
updateLanguageLink(currentLanguage);
}, 14);

const languageLinks = document.querySelectorAll('[LANGUAGE]');

languageLinks.forEach(link => {
link.addEventListener('keydown', handleLanguageSelection);
link.addEventListener('pointerup', handleLanguageSelection);
});

function handleLanguageSelection(event) {
if (event.type === 'click' || event.type === 'keydown' && (event.key === 'Enter' || event.key === ' ') || event.type === 'pointerup' || event.type === 'touchend') {
event.preventDefault();
const selectedLanguage = this.getAttribute('LANGUAGE');
CAST______________(selectedLanguage);
}
}

let CS_____ = localStorage.getItem('CAST_14');
if (CS_____ === "true") {
setTimeout(() => {
localStorage.removeItem('CAST_14');
document.dispatchEvent(new CustomEvent('CAST_14'));
}, 140);
}

function debounce(func, delay) {
let timeoutId;
return function() {
const context = this;
const args = arguments;
clearTimeout(timeoutId);
timeoutId = setTimeout(() => {
func.apply(context, args);
}, delay);
};
}

// Function to handle font size adjustment on resize
function handleFontSizeAdjustment(language) {
elements.forEach(element => {
const translationKey = element.getAttribute('CAST_____');
if (strings[translationKey] && strings[translationKey][language]) {
const adjustmentInfo = stringsWithFontSizeAdjustment[language][translationKey];
const shouldAdjustFontSize = adjustmentInfo && adjustmentInfo.adjust;
const persistAdjustment = adjustmentInfo && adjustmentInfo.persist;
if (shouldAdjustFontSize && (persistAdjustment || window.innerWidth >= 1510)) {
element.style.fontSize = "";
setTimeout(() => {
const computedStyle = window.getComputedStyle(element);
const currentFontSize = computedStyle.getPropertyValue('font-size');
const adjustedFontSize = calculateAdjustedFontSize(currentFontSize);
element.style.fontSize = adjustedFontSize;
}, 280);
} else if (shouldAdjustFontSize && !persistAdjustment) {
element.style.fontSize = "";
}
}
});
}

const debouncedHandleFontSizeAdjustment = debounce(() => {
handleFontSizeAdjustment(currentLanguage);
}, 480);

window.addEventListener('resize', debouncedHandleFontSizeAdjustment);
}); */