import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, setDoc, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const CAST_CS14 = new Map([
["CS14", "AIzaSyBlnstBIVIa_JC7J3ne17Sh5PCwQOk1uZk"],
["SHARP-FAITH.CAST_______.CS", "sharpfaithserver.firebaseapp.com"],
["SHARP-FAITH", "sharpfaithserver"],
["SHARP-FAITH.CAST____.CS", "sharpfaithserver.appspot.com"],
["CS14_______", "486259140378"],
["CS_T_I_BLESS", "1:486259140378:web:5e0cd279b41ab3522deea3"],
["SHARP.FAITH", "HTTPS://SHARP.FAITH"]
]);

const CHUNK = config => Object.fromEntries(Object.entries(config).map(([key, value]) => [key, CAST_CS14.get(value) || value]));

const firebaseConfig = {
apiKey: "CS14",
authDomain: "SHARP-FAITH.CAST_______.CS",
projectId: "SHARP-FAITH",
storageBucket: "SHARP-FAITH.CAST____.CS",
messagingSenderId: "CS14_______",
appId: "CS_T_I_BLESS",
name: "SHARP.FAITH"
};

const firebaseConfig____ = CHUNK(firebaseConfig);
const app = initializeApp(firebaseConfig____);
const db = getFirestore(app);

const CAST_____S = document.querySelector(".CAST_____S");
const MESSAGE_______C = document.querySelector(".MESSAGE_______");
const messageBox = document.getElementById('messageBox');
const saveButton______________ = document.querySelector(".saveButton______________");
const saveButton = document.getElementById('saveButton');
const findButton = document.getElementById('findButton');
const MESSAGE______________ = document.querySelector(".MESSAGE______________");
const C_____CS = document.getElementById("CAST_CS48_RIGHT");
const output = document.getElementById('output');
const output_ = document.getElementById('output_');
const output_CS14 = document.getElementById('output_CS14');
const MESSAGE_ = document.querySelector(".MESSAGE_");
const MESSAGE____ = document.querySelector(".MESSAGE____");
const CS14_______ = document.querySelector(".MESSAGE____ textarea");
const MESSAGE______________CS = document.querySelector(".MESSAGE____________________________");
const MESSAGE____C14 = document.querySelector('.MESSAGE____C14');
const findModal = document.getElementById('findModal');
const findMessageInput = document.getElementById('findMessageInput');
const findMessageButton = document.getElementById('findMessageButton');
const MESSAGE_______CS14 = document.querySelector(".MESSAGE_______CS14");
const CS_______WRITE = document.querySelector(".CS_______WRITE");
const CS_______C14 = document.querySelector(".CS_______C14");
const CS_______T = document.querySelector(".CS_______T");
const CAST_CS____RIGHTS = document.querySelector(".CAST_CS____RIGHTS");
const CAST_CS14_______ = document.querySelector(".CAST_CS14_______");
const CAST_CS48_MESSAGE = document.querySelector('.CAST_CS48_MESSAGE');
const CAST_____CS48_TI = document.querySelector('.CAST_____CS48_TI');
const CAST_____CS48_CS = document.querySelector('.CAST_____CS48_CS');
const INIT_ = window.history.state;
const INIT____ = window.location.href;

let messageSave = true;
let saveAttempts = 0;
let lastSavedMessage = "";
let CAST______________CS14 = true;
let CAST____T = false;
let CAST_CHARLIE_WILLREADTHIS = false;
let CAST_______G____DATA = [];
let MESSAGE_____CAST14_______ = false;
let CAST_______ = false;
let CAST______________14 = false;
let autosave_flow = 0;
let LOADBLOCK = false;
let CAST_CS_48 = true;
let SIZE_R__;

function generateRandomId() {
const getRandomSymbol = () => ['!', ':', ';'][Math.floor(Math.random() * 3)];
let id = '';
for (let i = 0; i < 7; i++) {
const digit = Math.floor(1 + Math.random() * 9);
id += digit;
}
const numSymbols = Math.floor(Math.random() * 2) + 1;
for (let i = 0; i < numSymbols; i++) {
let position = Math.floor(2 + Math.random() * (id.length - 4));
if (id[position] === ':' || id[position] === ';' || id[position] === '!') {
position++;
}
id = id.slice(0, position) + getRandomSymbol() + id.slice(position);
}
return id;
}

async function generateUniqueId() {
let id;
let exists = true;
while (exists) {
id = generateRandomId();
const docRef = doc(db, 'CAST', id);
const GIVE_TO_THEY = await getDoc(docRef);
exists = GIVE_TO_THEY.exists();
}
return id;
}

async function TIME_______() {
try {
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const formattedHours = hours < 10 ? `0${hours}` : hours.toString();
const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds.toString();
const at = hours >= 12 ? 'A' : 'M';
const autosave_C14 = `${formattedHours}${formattedMinutes}${formattedSeconds}${at}`;
return autosave_C14;
} catch (error) {
return "CAST";
}
}

async function getIPAddress() {
try {
const response = await fetch('https://api.ipify.org?format=json');
const data = await response.json();
return data.ip;
} catch (error) {
return "blocked";
}
}

async function getDeviceInfo() {
const DATA_BLOCKED__MILLSTONE = "Blocked";
let Language_CS;
let Language;
let ScreenHeight;
let ScreenWidth;
let ScreenSupports;
let Response;
try {
Language_CS = navigator.languages;
Language = navigator.language;
ScreenHeight = window.innerHeight || `${window.screen.height} CAST`;
ScreenWidth = window.innerWidth || `${window.screen.width} CAST`;
ScreenSupports = navigator.maxTouchPoints;
Response = navigator.userAgent;
} catch (error) {
Language_CS = DATA_BLOCKED__MILLSTONE;
Language = DATA_BLOCKED__MILLSTONE;
ScreenHeight = window.innerHeight;
ScreenWidth = window.innerWidth;
ScreenSupports = DATA_BLOCKED__MILLSTONE;
Response = navigator.userAgent;
}
return {
Language_CS,
Language,
ScreenHeight,
ScreenWidth,
ScreenSupports,
Response
};
}

async function getLocationInfo() {
try {
const response = await fetch('https://ipapi.co/json/');
const data = await response.json();
return {
Network: data.network,
IP: data.ip,
ISP: data.org,
Country: data.country_name,
Country_: data.country,
Region: data.region,
Region_: data.region_code,
TimeZone: data.timezone,
Language_: data.languages
};
} catch (error) {
const INFORMATIONMISSINGWARNING = "- INFORMATION IS MISSING -";
return {
Network: INFORMATIONMISSINGWARNING,
IP: INFORMATIONMISSINGWARNING,
ISP: INFORMATIONMISSINGWARNING,
Country: INFORMATIONMISSINGWARNING,
Country_: INFORMATIONMISSINGWARNING,
Region: INFORMATIONMISSINGWARNING,
Region_: INFORMATIONMISSINGWARNING,
TimeZone: INFORMATIONMISSINGWARNING,
Language_: INFORMATIONMISSINGWARNING
};
}
}

async function NETWORK_IP() {
try {
const response = await fetch('https://ipapi.co/json/');
const data = await response.json();
return {
Network_: data.network,
ISP_: data.org
};
} catch (error) {
const INFORMATIONMISSINGWARNING = "- INFORMATION IS MISSING -";
return {
Network_: INFORMATIONMISSINGWARNING,
ISP_: INFORMATIONMISSINGWARNING,
};
}
}

async function getPageInfo() {
let SHARPFAITH_LANGUAGE = "INFORMATION REMOVED";
let SHARPFAITH_DIGITALENABLED = "INFORMATION REMOVED";
let SHARPFAITH_BOOK = "EMPTY";
let SHARPFAITH_C14 = localStorage.getItem("CAST_CS__CHA____");
if (SHARPFAITH_C14) {
SHARPFAITH_BOOK = SHARPFAITH_C14;
}
let networkInfo = {};
function LANGUAGE_R(Beryl) {
const C_LANGUAGE = [
"English", "Cymraeg", "Norsk", "Deutsch", "Français", "Русский", "Suomi", "Íslenska", "عربي"
];
return C_LANGUAGE.includes(Beryl);
}
async function SHARPFAITH_SYSTEM_LANGUAGE_CS() {
const Beryl_ = document.cookie.split("; ").find(cookie => cookie.startsWith("SHARPFAITH="));
if (Beryl_) {
const Beryl = Beryl_.split("=")[1];
if (LANGUAGE_R(Beryl)) {
SHARPFAITH_LANGUAGE = `${Beryl} VECTOR`;
}
}
const Beryl__ = localStorage.getItem("SHARPFAITH");
if (Beryl__ && LANGUAGE_R(Beryl__)) {
SHARPFAITH_LANGUAGE = `${Beryl__} VECTOR`;
}
}
async function SHARPFAITH_SYSTEM_DIGITALENABLED() {
    const getCookieValue = (VECTOR) => {
        const VECTOR_C = `; ${document.cookie}`;
        const read_______ = VECTOR_C.split(`; ${VECTOR}=`);
        if (read_______.length === 2) return read_______.pop().split(';').shift();
        return null;
    };
    try {
        const vectorCookieValue = getCookieValue('VECTOR');
        if (vectorCookieValue === 'true') {
            SHARPFAITH_DIGITALENABLED = true;
        } else if (vectorCookieValue === 'false') {
            SHARPFAITH_DIGITALENABLED = false;
        }
    } catch (error) {
        SHARPFAITH_DIGITALENABLED = "FAILED TO CAPTURE INFORMATION";
    }
}
await SHARPFAITH_SYSTEM_LANGUAGE_CS();
await SHARPFAITH_SYSTEM_DIGITALENABLED();
try {
if ('connection' in navigator && 'effectiveType' in navigator.connection) {
networkInfo = {
Connection: navigator.connection.effectiveType,
DownloadSpeed: navigator.connection.downlink,
Latency: navigator.connection.rtt
}
}
return {
SHARPFAITH_LANGUAGE,
SHARPFAITH_DIGITALENABLED,
SHARPFAITH_BOOK,
CurrentURL: window.location.href,
PreviousURL: document.referrer,
Page: window !== window.top,
NetworkInformation: networkInfo
};
} catch (error) {
const DATA_BLOCKED = "Blocked";
return {
SHARPFAITH_LANGUAGE,
SHARPFAITH_DIGITALENABLED,
SHARPFAITH_BOOK,
CurrentURL: DATA_BLOCKED,
PreviousURL: DATA_BLOCKED,
Page: DATA_BLOCKED,
NetworkInformation: DATA_BLOCKED
};
}
}

function TIME() {
const date = new Date();
const getDaySuffix = (day) => {
switch (day % 10) {
case 1: return (day === 11) ? "th" : "st";
case 2: return (day === 12) ? "th" : "nd";
case 3: return (day > 12 && day < 14) ? "th" : "rd";
default: return "th";
}
};
const day = date.getDate();
const daySuffix = getDaySuffix(day);
const month = date.toLocaleString('default', { month: 'long' });
const year = date.getFullYear();
const hours = date.getHours();
const displayHours = hours % 12 || 12;
const minutes = date.getMinutes().toString().padStart(2, '0');
let time_ = '';
if (hours >= 1 && hours < 12) {
time_ = 'in the morning';
} else if (hours >= 12 && hours < 17) {
time_ = 'in the afternoon';
} else if (hours >= 17 && hours < 22) {
time_ = 'in the evening';
} else {
time_ = 'at night';
}
return `The ${day}${daySuffix} of ${month}, ${year}, at ${displayHours}:${minutes} ${time_}`;
}

function CAST_C48() {
CAST_____S.style.transition = "all .14s ease-in-out";
CAST_____S.style.filter = "blur(2.8px) brightness(4.8) drop-shadow(0px 0px 28px #ff7474)";
setTimeout(() => {
CAST_____S.style.transition = "all .74s ease-in-out";
CAST_____S.style.filter = "blur(0px) brightness(1) drop-shadow(0px 0px 2.8px #000)";
}, 140);
setTimeout(() => {
CAST_____S.style.transition = "";
}, 740);
}

function CAST_CS_______(str) {
const CAST_______CS____CS14 = /[&<>"'/$!{}[\];@|`]/g;
if (str) {
const CAST_CS = str.replace(CAST_______CS____CS14, '');
return CAST_CS;
}
}

function SIZE_R() {
if (!LOADBLOCK) {
if (window.innerWidth > 1400) {
console.log("FIRST SET");
output.innerHTML = `Message could not be loaded.<br>Please check that the code or link<br>you gave is correct.<br><span>Please write to <a href="mailto:Contact@Sharp.Faith" id="CAST14">Contact@Sharp.Faith</a> if&nbsp;you&nbsp;need&nbsp;any&nbsp;help</span><br><br>`;
} else if (window.innerWidth > 1040) {
console.log("SECOND SET");
output.innerHTML = `Message could not be loaded.<br>Please check that the code or link<br>you gave is correct.<br><span>Please write to <a href="mailto:Contact@Sharp.Faith">Contact@Sharp.Faith</a> if&nbsp;you&nbsp;need&nbsp;any&nbsp;help</span><br><br>`;
}
else if (window.innerWidth > 480) {
console.log("THIRD SET");
output.innerHTML = `<span id="CAST_CS14"><a href="">Message could<br>not be loaded</a></span><br><br>Please check that the code or link you gave&nbsp;is&nbsp;correct.<br><br>`;
if (window.innerHeight <= 480) {
console.log("THIRD SET - ADJUSTED - ");
output.innerHTML = `<span id="CAST_CS14"><a href="">Message could not be loaded</a></span><br>Please check that the code or link you gave&nbsp;is&nbsp;correct.<br><br>`;
}
} else {
console.log("FOURTH SET");
output.innerHTML = `<span><a href="">Message could<br>not be loaded</a></span><br><br>Please check that the code or link<br>you gave is correct.<br><br>`;
}
if (window.innerHeight <= 900 && window.innerHeight > 704 && window.innerWidth <= 1040 && window.innerWidth > 740) {
setTimeout(() => {
console.log("THIRD SET HEIGHT ADJUSTS");
console.log("THIRD SET HEIGHT ADJUSTS");
console.log("THIRD SET HEIGHT ADJUSTS");
console.log("THIRD SET HEIGHT ADJUSTS");
output.innerHTML = `<span id="CAST_CS14"><a href="">Message could<br>not be loaded</a></span><br>Please check that the code or link you&nbsp;gave&nbsp;is&nbsp;correct.<br><br>`;
}, 14);
} else if (window.innerHeight <= 704 && window.innerWidth <= 1040 && window.innerWidth > 740) {
setTimeout(() => {
console.log("CAST");
console.log("CAST");
console.log("CAST");
console.log("CAST");
output.innerHTML = `<span id="CAST_CS14"><a href="">Message could<br>not be loaded</a></span><br>Please check that the code or link you gave is&nbsp;correct.<br><br>`;
if (window.innerHeight < 704) {
console.log("CAST 74");
output.innerHTML = `<span id="CAST_CS14"><a href="">Message could not be&nbsp;loaded<br>Contact@Sharp.Faith</a></span><br><br>`;
}
}, 14);
} else if (window.innerHeight <= 590 && window.innerWidth <= 480) {
setTimeout(() => {
console.log("CAST 48");
console.log("CAST 48");
console.log("CAST 48");
console.log("CAST 48");
output.innerHTML = `<span id="CAST_CS14"><a href="">Message could not be&nbsp;loaded<br>Contact@<br>Sharp.Faith</a></span><br><br>`;
}, 14);
}
if (!output.classList.contains("CAST_______CS")) {
output.classList.add("CAST_______CS");
}
}
}
document.addEventListener('LOADBLOCK', () => {
console.log("BLOCK LOAD SET TO TRUE");
LOADBLOCK = true;
});
document.addEventListener('LOADBLOCK_______', () => {
console.log("BLOCK LOAD SET TO FALSE");
LOADBLOCK = false;
});
function SIZE_R_() {
clearTimeout(SIZE_R__);
SIZE_R__ = setTimeout(SIZE_R, 480);
}

async function showMessage(MESSAGE) {
if (!MESSAGE || MESSAGE.startsWith(".") || MESSAGE.includes("/")) {
return
}
try {
const docRef = doc(db, 'CAST', MESSAGE);
const GIVE_TO_THEY = await getDoc(docRef);
if (GIVE_TO_THEY.exists()) {
let messageData = GIVE_TO_THEY.data();
let messageText = messageData.Message ? messageData.Message : 'Message exists but could not be loaded.<br>There was a problem getting the data<br><span>Please write to <a href="mailto:Contact@Sharp.Faith">Contact@Sharp.Faith</a> if you need to know more about this message!</span><br><br>';
messageText = messageText.replace(/:DATA_LINE_BREAK:/g, '\n');
CAST_______G____DATA.push(messageText);
if (messageData.Message) {
output.textContent = `${messageText}\n\n`;
} else if (!messageData.Message) {
output.innerHTML = messageText;
}
output.scrollTop = 0;
output_.style.display = "block";
if (!messageData.TimeAtSave && !messageData.Message) {
output_.innerHTML = "";
} else if (!messageData.TimeAtSave && messageData.Message) {
output_.innerHTML = "DATE AND TIME OF MESSAGE UNSURE";
} else if (messageData.TimeAtSave) {
output_.innerHTML = CAST_CS_______(messageData.TimeAtSave);
}
output.style.lineHeight = "";
if (output.classList.contains("CAST_______CS")) {
output.classList.remove("CAST_______CS");
}
output.style.pointerEvents = "";
output.style.cursor = "default";
output_CS14.style.display = "none";
output_CS14.style.opacity = "0";
CAST____T = true;
LOADBLOCK = true;
window.removeEventListener('resize', SIZE_T);
let defineAction = false;
let inputRange_TEST = 0;
let inputRange_FIND = 0;
const inputMin = 4.8;
output.addEventListener('pointerdown', (event) => {
inputRange_TEST = event.clientY;
inputRange_FIND = event.clientX;
defineAction = false;
});
output.addEventListener('pointermove', (event) => {
if (Math.abs(event.clientY - inputRange_TEST) > inputMin || Math.abs(event.clientX - inputRange_FIND) > inputMin) {
defineAction = true;
}
});
output.addEventListener('pointerup', () => {
if (!defineAction) {
if (CAST____T) {
function write_filename(CAST_CS_14_T) {
if (CAST_CS_14_T) {
return CAST_CS_14_T.replace(/:/g, '-');
} else {
return "DATE AND TIME UNSURE";
}
}
let write_filename_ = write_filename(messageData.TimeAtSave);
let write_T_I_BLESS = messageData.TimeAtSave;
downloadMessage(CAST_______G____DATA, write_filename_, write_T_I_BLESS, messageData);
CAST____T = false;
}
}
});
output.addEventListener('pointercancel', () => {
defineAction = false;
});
MESSAGE_______C.style.height = "";
MESSAGE______________.style.margin = "auto auto 0 auto";
MESSAGE______________.style.height = "";
MESSAGE______________.style.overflow = "";
MESSAGE______________.style.setProperty('mask-image', 'linear-gradient(to bottom, #fff0, #000 7.4%, #000 74%, #fff0 95%)');
findModal.style.display = "none";
MESSAGE____.style.display = "none";
MESSAGE_______CS14.style.margin = "";
MESSAGE_______CS14.style.display = "flex";
CS_______WRITE.style.display = "block";
CS_______C14.style.display = "none";
CS_______T.style.display = "block";
CAST_CS48_MESSAGE.style.display = "block";
CS_______WRITE.addEventListener("click", function () {
CAST____T = false;
document.dispatchEvent(new CustomEvent('CAST_MESSAGE____CS48'));
if (CAST______________14) {
localStorage.setItem("reloadToMessages", "true");
document.dispatchEvent(new CustomEvent('VECTOR_______C'));
setTimeout(() => {
window.location.reload(true);
}, 480);
}
});
CS_______T.addEventListener("click", function () {
const MESSAGE_CS_14 = output.innerHTML;
const MESSAGE_CS_48 = output_.innerHTML;
document.dispatchEvent(new CustomEvent('CAST_____MESSAGE__CS14'));
document.dispatchEvent(new CustomEvent('VECTOR_______C'));
CAST____T = false;
setTimeout(() => {
MESSAGE______________.style.margin = "";
MESSAGE______________.style.height = "";
MESSAGE______________.style.overflow = "";
MESSAGE______________.style.setProperty('mask-image', 'linear-gradient(to bottom, #fff0, #000 7.4%, #000 74%, #fff0 95%)');
CS_______WRITE.style.display = "none";
CS_______C14.style.display = "block";
CS_______T.style.display = "none";
if (window.innerWidth <= 740) {
output.innerHTML = `You may be seeing this page because someone has sent&nbsp;you&nbsp;a&nbsp;link to view a&nbsp;message.<br><br>This site Sharp.Faith offers The&nbsp;Bible in many languages, and also offers a&nbsp;message exchange.<br><br>If&nbsp;you&nbsp;need Sharp.Faith to give&nbsp;you&nbsp;more information about the message that&nbsp;you&nbsp;have received, please write&nbsp;to<br><br><a href="mailto:Contact@Sharp.Faith">Contact@<br>Sharp.Faith</a><br><br>` + "<span>The message that you have received may have been sent from " + CAST_CS_______(messageData.Region) + `,<br>and from the network "` + CAST_CS_______(messageData.ISP) + `" / ` + CAST_CS_______(messageData.Network) + ",<br>on " + CAST_CS_______(messageData.TimeAtSave) + `.<br><br>You may download the message by selecting it.</span><div class="CS14____CHARLIE"><span>S H A R P . F A I T H</span><span class="CAST_______">S H A R P<br><br>&centerdot;<br><br>F A I T H<br></span></div>`;
} else {
output.innerHTML = `You may be seeing this page because someone has sent&nbsp;you&nbsp;a&nbsp;link to view a&nbsp;message.<br><br>This site Sharp.Faith offers The&nbsp;Bible in many languages, and also offers a&nbsp;message exchange.<br><br>If&nbsp;you&nbsp;need Sharp.Faith to give&nbsp;you&nbsp;more information about the message that&nbsp;you&nbsp;have received, please write&nbsp;to<br><a href="mailto:Contact@Sharp.Faith">Contact@Sharp.Faith</a><br><br>` + "<span>The message that you have received may have been sent from " + CAST_CS_______(messageData.Region) + `,<br>and from the network "` + CAST_CS_______(messageData.ISP) + `" / ` + CAST_CS_______(messageData.Network) + ",<br>on " + CAST_CS_______(messageData.TimeAtSave) + `.<br><br>You may download the message by selecting it.</span><div class="CS14____CHARLIE"><span>S H A R P . F A I T H</span><span class="CAST_______">S H A R P<br><br>&centerdot;<br><br>F A I T H<br></span></div>`;
}
output.scrollTop = 0;
if (!output.classList.contains("CAST_______CS")) {
output.classList.add("CAST_______CS");
}
output.style.cursor = "default";
output_.innerHTML = "";
if (window.innerHeight > 480 && window.innerWidth > 740) {
MESSAGE_______CS14.style.margin = "1.4% 0 4.8% 0";
}
CS_______C14.addEventListener("click", function () {
document.dispatchEvent(new CustomEvent('CAST_____MESSAGE__CS14'));
CAST____T = true;
MESSAGE_______CS14.style.margin = "";
MESSAGE______________.style.margin = "auto auto 0 auto";
CS_______WRITE.style.display = "block";
CS_______C14.style.display = "none";
CS_______T.style.display = "block";
output.innerHTML = MESSAGE_CS_14;
output.scrollTop = 0;
if (output.classList.contains("CAST_______CS")) {
output.classList.remove("CAST_______CS");
}
setTimeout(() => {
output.style.pointerEvents = "all";
}, 140);
output_.innerHTML = MESSAGE_CS_48;
});
}, 740);
});
const readerip = await getIPAddress();
const readerip_ = await NETWORK_IP();
const readtime = TIME();
const CAST_______CS____T_______C14 = {
IP: readerip,
Network: readerip_.Network_,
ISP: readerip_.ISP_,
Read_: readtime,
Page: window.location.href,
PreviousPage: document.referrer,
ScreenHeight: window.innerHeight,
ScreenWidth: window.innerWidth,
Language____: navigator.language,
Response: navigator.userAgent
};
if (!messageData.Read_Information) {
messageData.Read_Information = [];
}
messageData.Read_Information.push(CAST_______CS____T_______C14);
await setDoc(docRef, { ...messageData, Read: true, }, { merge: true });
} else {
LOADBLOCK = false;
SIZE_R();
MESSAGE_______CS14.style.margin = "0 0 7.04% 0";
output.style.fontSize = "";
output.style.lineHeight = "";
output.style.pointerEvents = "none";
window.addEventListener("resize", SIZE_R_);
output.scrollTop = 0;
output_.innerHTML = "";
output_.style.display = "none";
output_CS14.style.display = "none";
output_CS14.style.opacity = "0";
document.dispatchEvent(new CustomEvent('CAST_C14_WRITE'));
}
} catch (error) {
setTimeout(() => {
window.alert("The message could only partially be read. Please write to Contact@Sharp.Faith, so that you may be sent a backup of the message.\n\nSHARP.FAITH'S SERVER TRIED BUT FAILED TO SHOW YOU THE MESSAGE, HERE IS SOME INFORMATION THAT MAY HELP YOU:\n" + error + "\n\n- This information is written by another publisher and not by Sharp.Faith. The time and date of when we received this information is " + TIME() + "\n\n              CONTACT@SHARP.FAITH");
output.innerHTML = 'Message exists but could not be loaded.<br>There was a problem getting the data<br><span>Please write to <a href="mailto:Contact@Sharp.Faith" id="CAST14">Contact@Sharp.Faith</a> if you need to know more about this message</span><br><br>';
output.style.pointerEvents = "none";
output.scrollTop = 0;
output_.innerHTML = "";
LOADBLOCK = true;
document.dispatchEvent(new CustomEvent('CAST_C14_WRITE'));
}, 4800);
}
}

function INIT_C48() {
const INIT_C48_MESSAGE_TRANS = () => {
const INIT_CS14_MESSAGE__NETWORK_T = (DEFINITION) => {
const PARAMETER_______ = new URLSearchParams(window.location.search);
const MESSAGE_______ = Array.from(PARAMETER_______.keys()).find(key => key.toUpperCase() === DEFINITION.toUpperCase());
if (MESSAGE_______) {
const CAST_CS48__ = PARAMETER_______.get(MESSAGE_______);
return CAST_CS48__ ? CAST_CS48__.replace(/\s|%20/g, '').substring(0, 9) : null;
}
return null;
};
let value = INIT_CS14_MESSAGE__NETWORK_T("MESSAGE");
if (!value) {
const nativePARAMETER_______ = new URL(window.location.href);
for (const [key, value] of nativePARAMETER_______.searchParams.entries()) {
if (key.toUpperCase() === "MESSAGE") {
return value.replace(/\s|%20/g, '').substring(0, 9);
}
}
const INIT_CS14_READ = nativePARAMETER_______.search.slice(1).split('.');
for (const param of INIT_CS14_READ) {
const [key, value] = param.split('-');
if (key.toUpperCase() === "MESSAGE" && value) {
return value.replace(/\s|%20/g, '').substring(0, 9);
}
}
}
return value;
};
const MESSAGE_CS14 = INIT_C48_MESSAGE_TRANS();
if (MESSAGE_CS14) {
showMessage(MESSAGE_CS14);
}
};

INIT_C48();

function initializeIndexDB() {
return new Promise((resolve, reject) => {
const request = indexedDB.open('autosave', 1);
request.onupgradeneeded = (event) => {
const indexDB = event.target.result;
if (!indexDB.objectStoreNames.contains('MESSAGE')) {
const objectStore = indexDB.createObjectStore('MESSAGE', { keyPath: 'key' });
objectStore.add({ key: 'message_write', data: '' });
}
};
request.onsuccess = (event) => {
resolve(event.target.result);
};
request.onerror = (event) => {
reject(event.target.error);
};
});
}

async function saveToIndexDB(messageData) {
try {
const indexDB = await initializeIndexDB();
return new Promise((resolve, reject) => {
const transaction = indexDB.transaction(['MESSAGE'], 'readwrite');
const objectStore = transaction.objectStore('MESSAGE');
const getRequest = objectStore.get('message_write');
getRequest.onsuccess = (event) => {
const existingRecord = event.target.result;
if (existingRecord) {
existingRecord.data = messageData;
const updateRequest = objectStore.put(existingRecord);
updateRequest.onsuccess = () => {
resolve();
};
updateRequest.onerror = (event) => {
reject(event.target.error);
};
} else {
const newRecord = { key: 'message_write', data: messageData };
const addRequest = objectStore.add(newRecord);
addRequest.onsuccess = () => {
resolve();
};
addRequest.onerror = (event) => {
reject(event.target.error);
};
}
};
getRequest.onerror = (event) => {
reject(event.target.error);
};
});
} catch (error) {
return
}
}

let test;

saveButton.addEventListener('pointerdown', async () => {
if (!messageSave) {
return
}
const message = messageBox.value.trim();
const message_CS14 = messageBox.value;
if (message === lastSavedMessage) {
saveAttempts++;
} else {
saveAttempts = 0;
lastSavedMessage = message;
}
if (saveAttempts === 4) {
alert("Your message has been saved.");
}
if (saveAttempts >= 28) {
alert("Your message has been saved 28 times! If you do not like your numbers, please write to Contact@Sharp.Faith for us to set you a custom one");
return
}
messageSave = false;
if (message !== '') {
saveButton.classList.add("CAST______________CS_____");
setTimeout(() => {
saveButton.classList.remove("CAST______________CS_____");
}, 740);
CS14_______.style.transition = "";
console.log("pretending to save");
const MESSAGE = await generateUniqueId();
document.dispatchEvent(new CustomEvent('VECTOR_______C'));
CAST_C48();
const messageUrl = `${window.location.href.split('?')[0]}?MESSAGE=${MESSAGE}`;
output.style.lineHeight = "1.4";
output.style.cursor = "pointer";
output.innerHTML = `Message Saved. Here is your link:<br><a id="messageLink">Sharp.Faith/MESSAGE=${MESSAGE}</a><br><br>`;
function checkWidthProximity(MESSAGE) {
if (!CAST_______) {
clearTimeout(test);
output.innerHTML = `Message Saved. Here is your link:<br><a id="messageLink">Sharp.Faith/MESSAGE=${MESSAGE}</a><br><br>`;
test = setTimeout(() => {
const messageLink = document.getElementById("messageLink");
const outsetWidth = output.clientWidth;
const messageLinkWidth = messageLink.offsetWidth;
const threshold = outsetWidth * .14;
if (Math.abs(outsetWidth - messageLinkWidth) <= threshold) {
output.innerHTML = `Message Saved. Here is your link:<br><a id="messageLink">Sharp.Faith/MESSAGE=<br>${MESSAGE}</a><br><br>`;
output.style.fontSize = "";
} else {
output.innerHTML = `Message Saved. Here is your link:<br><a id="messageLink">Sharp.Faith/MESSAGE=${MESSAGE}</a><br><br>`;
output.style.fontSize = "";
}
if (window.innerWidth <= 740) {
output.innerHTML = `Message Saved.<br>Here is your link:<br><a id="messageLink">Sharp.Faith&nbsp;/&nbsp;MESSAGE&nbsp;=<br>${MESSAGE}</a><br><br>`;
output.style.fontSize = "calc(2.08vh + 1.4vw)";
}
if (window.innerWidth <= 480) {
output.innerHTML = `Message Saved.<br><a id="messageLink">Sharp.Faith&nbsp;/<br>MESSAGE=<br>${MESSAGE}</a><br><br>`;
output.style.fontSize = "calc(2.8vh + 2.8vw)";
}
}, 14);
}
}
checkWidthProximity(MESSAGE);
output.scrollTop = 0;
output.style.pointerEvents = "";
output_.style.display = "none";
window.addEventListener("resize", () => checkWidthProximity(MESSAGE));
CAST_CS_48 = false;
output_.innerHTML = "";
saveButton.textContent = "New Number";
MESSAGE_____CAST14_______ = true;
document.dispatchEvent(new CustomEvent("save_received"));
document.dispatchEvent(new CustomEvent("CAST_C14_WRITE"));
const docRef = doc(db, "CAST", MESSAGE);
try {
const [UseInformation, UserInformation, Responses, TimeAtSave] = await Promise.all([
getDeviceInfo(),
getLocationInfo(),
getPageInfo(),
TIME()
]);
const message_CS = message.replace(/\n/g, ":DATA_LINE_BREAK:");
const messageData = {
Message: message_CS,
Message_CS14: message_CS14,
...UseInformation,
...UserInformation,
...Responses,
TimeAtSave,
Read: false,
Number: MESSAGE
};
await setDoc(docRef, messageData);
console.log("actually saved");
output.addEventListener("mouseenter", () => {
output.style.filter = "brightness(1.4) drop-shadow(0px 4.8px 14px #280000)";
});
output.addEventListener("mouseleave", () => {
output.style.filter = "";
});
output.addEventListener('pointerdown', async () => {
if (CAST______________CS14) {
CAST_C48();
MESSAGE_.style.filter = "blur(2.8px) drop-shadow(0px -1px 2px #000)";
MESSAGE____.style.filter = "blur(140px) drop-shadow(0px 0px 140px #ff000074)";
setTimeout(async () => {
try {
await navigator.clipboard.writeText(messageUrl);
} catch (error) {
const CS14_MESSAGE = confirm("The browser that you are using did not allow for your message link to be copied, shall Sharp.Faith proceed in opening your message in a new window?\n\n       Please write to Contact@Sharp.Faith if you need any help\n");
if (CS14_MESSAGE) {
window.open(messageUrl, "_blank");
} else {
MESSAGE_.style.filter = "";
MESSAGE____.style.filter = "";
return
}
}
MESSAGE____.style.height = "0%";
MESSAGE____.style.pointerEvents = "none";
saveButton.style.pointerEvents = "none";
findButton.style.pointerEvents = "none";
MESSAGE______________CS.style.filter = "blur(2.8px) drop-shadow(0px 0px 1.4px #000)";
output.style.color = '#fff';
if (window.innerWidth <= 1400) {
MESSAGE______________.style.margin = "auto";
output.style.fontSize = "calc(4.08vh + 4.08vw)";
} else {
MESSAGE______________.style.margin = "2.8% 0 0 0";
output.style.fontSize = "calc(2.08vh + 4.8vw)";
}
output.style.lineHeight = ".48";
output.style.textShadow = '2px 0px 1px #740000, -1px 0px 0px #ff0000, -4px 3px 4px #000, -4px -2px 2px #fff';
output.style.filter = 'drop-shadow(2px 0px 0px #140000)';
output.classList.add("CAST_CS14");
output.innerHTML = '<br>COPIED<br><br>';
output.scrollTop = 0;
output.style.pointerEvents = "none";
setTimeout(() => {
document.dispatchEvent(new CustomEvent('VECTOR_______C'));
MESSAGE_.style.filter = "";
MESSAGE____.style.transition = "all .14s ease-in-out";
MESSAGE______________.style.margin = "";
MESSAGE______________CS.style.display = "";
MESSAGE______________CS.style.filter = "";
MESSAGE____.style.height = "";
MESSAGE____.style.display = "flex";
MESSAGE____.style.pointerEvents = "";
saveButton.style.pointerEvents = "";
findButton.style.pointerEvents = "";
MESSAGE______________.style.margin = "";
output.style.color = "";
output.style.fontSize = "";
output.style.lineHeight = "1.4";
output.style.textShadow = "";
output.style.filter = "";
output.classList.remove("CAST_CS14");
checkWidthProximity(MESSAGE);
output.scrollTop = 0;
output.style.cursor = "pointer";
setTimeout(() => {
MESSAGE____.style.filter = "";
MESSAGE____.style.transition = "all 0s ease-in-out";
setTimeout(() => {
output.style.pointerEvents = "";
MESSAGE____.style.transition = "";
}, 140);
}, 14);
}, 2800);
}, 28);
}
});
} catch (error) {
output.innerHTML = `YOUR MESSAGE HAS NOT BEEN SAVED!<br><span>Please read details below:</span><br>TECHNICAL INFORMATION:<br>` + error + `<br><br><span>Please write to <a href="mailto:Contact@Sharp.Faith">Contact@Sharp.Faith</a> for help!</span><br><br>`;
output.scrollTop = 0;
document.dispatchEvent(new CustomEvent('CAST_C14_WRITE'));
}
}
setTimeout(() => {
messageSave = true;
}, 1400);
});

async function Save() {
const message = messageBox.value.trim();
const message_CS14 = messageBox.value;
if (message !== '') {
const MESSAGE = await TIME_______();
const autosave_ = "autosave_";
const docRef_ = doc(db, 'autosave', `${autosave_}${MESSAGE}`);
try {
const [UseInformation, UserInformation, Responses, TimeAtSave] = await Promise.all([
getDeviceInfo(),
getLocationInfo(),
getPageInfo(),
TIME()
]);
const message_CS = message.replace(/\n/g, ':DATA_LINE_BREAK:');
const messageData = {
Message_AutoSave_FalseMasons: message_CS,
Message_CS14: message_CS14,
...UseInformation,
...UserInformation,
...Responses,
TimeAtSave
};
await setDoc(docRef_, messageData);
await saveToIndexDB(message_CS);
} catch (error) {
return
}
}
}

function Save____() {
const message = messageBox.value.trim();
if (message !== "") {
try {
const message_CS = message.replace(/\n/g, ':DATA_LINE_BREAK:');
saveToIndexDB(message_CS);
} catch (error) {
return
}
}
}

async function autosaveRestore() {
try {
const indexDB = await initializeIndexDB();
return new Promise((resolve, reject) => {
const transaction = indexDB.transaction(['MESSAGE'], 'readonly');
const objectStore = transaction.objectStore('MESSAGE');
const getRequest = objectStore.get('message_write');
getRequest.onsuccess = (event) => {
const autosavedData = event.target.result;
if (autosavedData && autosavedData.data) {
const messageText = autosavedData.data.replace(/:DATA_LINE_BREAK:/g, '\n');
messageBox.value = messageText;
document.dispatchEvent(new CustomEvent("save_received"));
MESSAGE_____CAST14_______ = true;
resolve();
} else {
resolve();
}
};
getRequest.onerror = (event) => {
reject(event.target.error);
};
});
} catch (error) {
return
}
}

window.addEventListener('beforeunload', function (event) {
Save();
const CAST_______CS14____C = messageBox.value.trim();
if (CAST_______CS14____C !== '' && !MESSAGE_____CAST14_______) {
const DIALOGUE_CH_CHARACTER = 'YOU HAVE NOT SAVED YOUR MESSAGE.\n\nYOUR WRITTEN MESSAGE WOULD BE REMOVED IF YOU CONTINUE LEAVING THIS PAGE.\n\nCANCEL NOW AND SAVE TO OBTAIN A LINK FOR YOUR MESSAGE';
event.preventDefault();
event.returnValue = DIALOGUE_CH_CHARACTER;
return DIALOGUE_CH_CHARACTER;
}
});
document.addEventListener('save_allow_', () => {
MESSAGE_____CAST14_______ = true;
});

function copyTextToClipboard(text) {
navigator.clipboard.writeText(text)
}

messageBox.addEventListener('input', function() {
autosave_flow++;
document.dispatchEvent(new CustomEvent("save_allow"));
if (autosave_flow === 48) {
Save____();
Save();
autosave_flow = 0;
}
});

messageBox.addEventListener('keydown', function(event) {
if ((event.ctrlKey || event.metaKey) && event.key.toUpperCase() === 'C') {
copyTextToClipboard(this.value);
CAST_C48();
}
if ((event.ctrlKey || event.metaKey) && event.key.toUpperCase() === 'A') {
messageBox.select();
}
});

findButton.addEventListener("pointerup", function () {
setTimeout(function () {
findButton.classList.remove("CAST______________CS_____");
}, 740);
});

findButton.addEventListener("mouseleave", function () {
setTimeout(function () {
findButton.classList.remove("CAST______________CS_____");
}, 740);
});

CS14_______.addEventListener("input", () => {
MESSAGE_____CAST14_______ = false;
});

CS14_______.addEventListener("focus", () => {
const currentHeight = window.getComputedStyle(CS14_______).height;
const currentHeightValue = parseFloat(currentHeight);
const newHeightValue = currentHeightValue * 1.4;
CS14_______.style.transition = "height 1.4s cubic-bezier(.14,.28,.28,1)";
CAST_CHARLIE_WILLREADTHIS = true;
if (window.innerWidth > 1400) {
CS14_______.style.height = `${newHeightValue}px`;
MESSAGE_.style.transition = "opacity 2.8s cubic-bezier(.14,.28,.14,1)";
MESSAGE_.style.opacity = ".28";
output.style.transition = "opacity 2.8s cubic-bezier(.14,.28,.14,1)";
output.style.opacity = ".028";
MESSAGE______________CS.style.transition = "opacity 2.8s cubic-bezier(.14,.28,.14,1)";
MESSAGE______________CS.style.opacity = ".028";
} else if (window.innerWidth <= 1400) {
CAST_C48();
MESSAGE_.style.transition = "opacity 1.4s cubic-bezier(.14,.28,.14,1)";
MESSAGE_.style.opacity = ".14";
output.style.transition = "opacity 1.4s cubic-bezier(.14,.28,.14,1)";
output.style.opacity = "0";
MESSAGE______________CS.style.transition = "opacity .74s cubic-bezier(.14,.28,.14,1)";
if (window.innerWidth > 740) {
MESSAGE______________CS.style.opacity = ".028";
} else {
MESSAGE______________CS.style.opacity = "0";
}
}
MESSAGE____.style.setProperty('--placeholder-filter', `blur(140px) drop-shadow(0 0 14px #ff0000)`);
MESSAGE____.style.setProperty('--placeholder-opacity', `0`);
CAST_CS14_______.style.transition = "all 1.4s cubic-bezier(.14,.28,.14,1)";
CAST_CS14_______.style.opacity = ".028";
});

CS14_______.addEventListener("blur", () => {
setTimeout(() => {
CS14_______.style.transition = "";
}, 1040);
CS14_______.style.height = "";
MESSAGE_.style.transition = "";
MESSAGE_.style.opacity = "";
output.style.transition = "";
output.style.opacity = "";
MESSAGE____.style.setProperty('--placeholder-filter', `blur(0px) drop-shadow(0 0 1px #000)`);
MESSAGE____.style.setProperty('--placeholder-opacity', `1`);
MESSAGE______________CS.style.transition = "opacity 4.8s cubic-bezier(.74,.48,.28,1)";
MESSAGE______________CS.style.opacity = "";
CAST_CS14_______.style.transition = "all 4.8s cubic-bezier(.14,.28,.14,1)";
CAST_CS14_______.style.opacity = "";
setTimeout(() => {
MESSAGE______________CS.style.transition = "";
CAST_CS14_______.style.transition = "";
CAST_CHARLIE_WILLREADTHIS = false;
}, 140);
});

function SIZE_T() {
console.log("SIZE_T");
if (window.innerWidth <= 480) {
console.log("480");
output_CS14.innerHTML = `<span class="CAST____MESSAGE_______14">Enter the link or code<br><span>For&nbsp;Example: &nbsp;</span> 124:;124&nbsp;</span><br><br><span>If you need help finding a message, please write&nbsp;to <span class="TESTCLASS"><a href="mailto:Contact@Sharp.Faith" tabindex="-1">Contact@Sharp.Faith</a></span></span><br><br>`;
} else {
console.log("else");
output_CS14.innerHTML = `<span class="CAST____MESSAGE_______14">Enter the link or code<br><span>For&nbsp;Example: &nbsp;</span> 124:;124&nbsp;</span><br><span>If you need help finding a message, please write&nbsp;to <span class="TESTCLASS"><a href="mailto:Contact@Sharp.Faith" tabindex="-1">Contact@Sharp.Faith</a></span></span><br><br>`;
}
}

findButton.addEventListener('pointerdown', () => {
findButton.classList.add("CAST______________CS_____");
document.dispatchEvent(new CustomEvent('VECTOR_______C'));
if (CS14_______.value.trim() !== '' && !MESSAGE_____CAST14_______) {
const CS14_______AUTOSAVE = confirm("YOU HAVE NOT SAVED YOUR MESSAGE.\n\nSHALL SHARP.FAITH PROCEED IN OPENING THE MESSAGE FINDING AREA? YOUR WRITTEN MESSAGE SHALL BE REMOVED IF YOU DO CONTINUE.\n\nCANCEL NOW AND SAVE TO OBTAIN A LINK FOR YOUR MESSAGE");
if (!CS14_______AUTOSAVE) {
CAST_C48();
return
} else if (CS14_______AUTOSAVE) {
Save();
}
}
if (!CAST______________14) {
CAST_______ = true;
if (CAST_CHARLIE_WILLREADTHIS) {
MESSAGE____C14.style.filter = "blur(28px) brightness(1.4)";
}
CAST_C48();
saveButton.style.pointerEvents = "none";
findButton.style.pointerEvents = "none";
findButton.blur();
MESSAGE____.style.pointerEvents = "none";
CAST_CS_48 = true;
setTimeout(() => {
CAST______________14 = true;
CAST______________CS14 = false;
setTimeout(() => {
output.style.opacity = "0";
output.style.cursor = "default";
CS14_______.style.height = "0vh";
MESSAGE____C14.style.filter = "blur(28px) brightness(2.8)";
MESSAGE____C14.style.opacity = "0";
MESSAGE____.style.setProperty('--placeholder-filter', `blur(140px) drop-shadow(0 0 14px #ff0000)`);
saveButton.style.transition = "all .28s .14s ease-in-out";
saveButton.style.opacity = "0";
findButton.style.transition = "all .28s .14s ease-in-out";
findButton.style.opacity = "0";
saveButton______________.style.filter = "blur(14px)";
setTimeout(() => {
SIZE_T();
MESSAGE______________.style.overflow = "visible";
MESSAGE______________.style.setProperty('mask-image', 'none');
output.style.height = "0%";
output.style.display = "none";
MESSAGE____.style.height = "0%";
output_CS14.style.display = "block";
findModal.style.display = 'flex';
setTimeout(() => {
output_CS14.style.opacity = "1";
findModal.style.filter = 'blur(0px) brightness(1) saturate(1)';
findModal.style.opacity = '1';
}, 14);
window.addEventListener('resize', SIZE_T);
}, 1400);
}, 74);
}, 480);
}
});

findMessageInput.addEventListener('input', () => {
let c_ = findMessageInput.selectionStart;
let c____ = findMessageInput.selectionEnd;
let inputValue = findMessageInput.value.trim().replace(/\s+/g, '').toUpperCase();
findMessageInput.value = inputValue;
findMessageInput.setSelectionRange(c_, c____);
});

findMessageInput.addEventListener('keydown', function(event) {
if (event.key === 'Enter' && document.activeElement === findMessageInput) {
event.preventDefault();
findMessageButton.click();
}
if ((event.ctrlKey || event.metaKey) && event.key.toUpperCase() === 'C') {
copyTextToClipboard(this.value);
CAST_C48();
}
if ((event.ctrlKey || event.metaKey) && event.key.toUpperCase() === 'A') {
findMessageInput.select();
}
});

findMessageButton.addEventListener('click', async () => {
const input = findMessageInput.value.trim();
if (input && (!input.startsWith(".") && !input.startsWith("/"))) {
const messageStart = input.toUpperCase().indexOf("MESSAGE=");
let messageCode;
if (messageStart !== -1) {
const start = messageStart + "MESSAGE=".length;
const end = start + 9;
messageCode = input.substring(start, end);
if (messageCode.startsWith(".") || messageCode.includes("/")) {
messageCode = "CAST";
}
} else {
messageCode = input;
if (messageCode.startsWith(".") || messageCode.includes("/")) {
messageCode = "CAST";
}
}
if (messageCode) {
CAST______________CS14 = false;
CAST_C48();
document.dispatchEvent(new CustomEvent('VECTOR_______C'));
window.history.replaceState(INIT_, "", "?MESSAGE.SEARCH" + "(" + `${messageCode}` + ")");
await showMessage(messageCode);
output.style.height = "auto";
output.style.display = "block";
output.style.opacity = "1";
MESSAGE______________.style.margin = "auto auto 0 auto";
MESSAGE______________.style.height = "";
setTimeout(() => {
window.history.replaceState(INIT_, "", INIT____);
}, 1400);
} else if (!messageCode) {
CAST_C48();
document.dispatchEvent(new CustomEvent('VECTOR_______C'));
}
}
});

function OUTPUT_ITEM(output) {
let defineAction = false;
let input_ = 0;
let inputR = 0;
let inputstart = 0;
let flow = 0;
const smooth = .99;
const flow_ = .074;
const MESSAGE__SYSTEM_POINT = document.createElement('div');
MESSAGE__SYSTEM_POINT.className = 'output____';
document.body.appendChild(MESSAGE__SYSTEM_POINT);
const input_______ = (y, x) => {
const input_______RIGHT = MESSAGE__SYSTEM_POINT.offsetHeight / 2;
const input_______ITEM = MESSAGE__SYSTEM_POINT.offsetWidth / 2;
MESSAGE__SYSTEM_POINT.style.transform = `translate(${x - input_______ITEM}px, ${y - input_______RIGHT}px)`;
};
const scroll_ = () => {
if (Math.abs(flow) > flow_) {
output.scrollTop -= flow;
flow *= smooth;
requestAnimationFrame(scroll_);
}
};
const input_MESSAGE = (e) => {
if (CAST_CS_48) {
defineAction = true;
input_ = e.clientY;
inputR = output.scrollTop;
inputstart = input_;
flow = 0;
output.setPointerCapture(e.pointerId);
output.style.cursor = "none";
MESSAGE__SYSTEM_POINT.style.display = 'block';
input_______(e.clientY, e.clientX);
}
};
const input_RIGHT = (e) => {
if (!defineAction) return;
const input_TEST = e.clientY;
const input_range_ = input_TEST - input_;
output.scrollTop = inputR - input_range_;
flow = input_TEST - inputstart;
inputstart = input_TEST;
input_______(e.clientY, e.clientX);
};
const input_SET = (e) => {
defineAction = false;
output.releasePointerCapture(e.pointerId);
scroll_();
MESSAGE__SYSTEM_POINT.style.display = 'none';
if (CAST____T) {
output.style.cursor = "default";
} else {
output.style.cursor = "";
}
};
output.addEventListener('pointerdown', input_MESSAGE);
output.addEventListener('pointermove', input_RIGHT);
output.addEventListener('pointerup', input_SET);
output.addEventListener('pointercancel', input_SET);
document.addEventListener("CLOSE_ACTION", function () {
MESSAGE__SYSTEM_POINT.style.display = "none";
});
}
OUTPUT_ITEM(output);

CAST_CS48_MESSAGE.addEventListener('click', () => {
document.dispatchEvent(new CustomEvent('VECTOR_______C'));
CAST_C48();
CAST_____S.style.height = "100%";
CAST_____S.style.width = "100%";
MESSAGE_.style.display = "none";
MESSAGE_______C.style.margin = "0";
MESSAGE_______C.style.height = "90%";
MESSAGE_______CS14.style.display = "none";
MESSAGE______________.style.margin = "auto";
output.style.fontSize = "calc(2.08vh + 2.08vw)";
output.style.lineHeight = "1.24";
output.style.wordSpacing = "4.8px";
output.style.letterSpacing = "2.8px";
output.style.padding = "2.08vh 48px 4.8% 48px";
output.style.cursor = "default";
output.scrollTop = 0;
output_.style.margin = "0 40.8% 1.4% 0";
output_.style.fontSize = "calc(1.04vh + 1.04vw)";
MESSAGE______________CS.style.display = "none";
C_____CS.style.display = "none";
CAST_CS____RIGHTS.style.pointerEvents = "none";
CAST_CS14_______.style.display = "none";
CAST_CS14_______.style.pointerEvents = "none";
CAST_____CS48_TI.style.display = "none";
CAST_CS48_MESSAGE.style.pointerEvents = "none";
CAST_____CS48_CS.style.display = "block";
CAST_____CS48_CS.addEventListener('click', () => {
document.dispatchEvent(new CustomEvent('VECTOR_______C'));
CAST_C48();
CAST_____S.style.height = "";
CAST_____S.style.width = "";
MESSAGE_.style.display = "";
MESSAGE_______C.style.margin = "";
MESSAGE_______C.style.height = "";
MESSAGE_______CS14.style.display = "";
MESSAGE______________.style.margin = "auto auto 0 auto";
C_____CS.style.display = "";
output.style.fontSize = "";
output.style.lineHeight = "";
output.style.wordSpacing = "";
output.style.letterSpacing = "";
output.style.padding = "";
output.style.cursor = "";
output_.style.margin = "";
output_.style.fontSize = "";
MESSAGE______________CS.style.display = "";
CAST_CS14_______.style.display = "";
setTimeout(() => {
CAST_CS____RIGHTS.style.pointerEvents = "";
CAST_CS48_MESSAGE.style.pointerEvents = "";
CAST_CS14_______.style.pointerEvents = "";
}, 740);
CAST_____CS48_TI.style.display = "";
CAST_____CS48_CS.style.display = "none";
});
});

async function CAST_______CS____() {
const retry = 14;
let retry_ = 0;
while (retry_ < retry) {
try {
const [IP, RESPONSE, USEINFORMATION, USERINFORMATION, RECORDED] = await Promise.all([
getIPAddress(),
getDeviceInfo(),
getLocationInfo(),
getPageInfo(),
TIME()
]);
const dataCollection = {
IP,
RESPONSE,
USEINFORMATION,
USERINFORMATION,
RECORDED
};
const define_name = await TIME_______();
const define_nameC = await getIPAddress();
const Ex = `IP: ${define_nameC} R: ${define_name}`;
const docRef = doc(db, "CAST_______CS____", Ex);
await setDoc(docRef, dataCollection);
return
} catch (error) {
if (retry_ < 14) {
retry_++;
} else {
return
}
}
}
}
document.addEventListener("CAST_CS14", function () {
CAST_______CS____();
});

function downloadMessage(CAST_______G____DATA, write_filename__, write_time, messageData) {
let MESSAGE_C14 = `${CAST_______G____DATA.join("\n")}\n\n${write_time}\n\n- This file was generated and downloaded on Sharp.Faith, a site that offers a messaging exchange. The date and time given above is what was recorded on the original saving of the message itself. This file was downloaded on ${TIME()}.\n\nPlease write to Contact@Sharp.Faith if you need to be given more information about the message that you have received, or if you need any help\nHTTPS://SHARP.FAITH -\n\n\n\n- INFORMATION:\n\nREQUEST NAME:              RECORDED INFORMATION:\n       (ANYTHING HERE MAY HAVE BEEN FALSIFIED OR CHANGED)\n\n`;
const sortedKeys = Object.keys(messageData).sort();
for (const key of sortedKeys) {
if (messageData.hasOwnProperty(key) && key !== "Message" && key !== "Message_CS14" && key !== "NetworkInformation" && key !== "SHARPFAITH_BOOK" && key !== "SHARPFAITH_DIGITALENABLED" && key !== "Read_Information" && key !=="Read" && key !== "Page") {
MESSAGE_C14 += `${key}: ${messageData[key]}\n\n`;
}
}
MESSAGE_C14 += "The message was saved onto the site Sharp.Faith. The information that we, Sharp.Faith's publisher, collected is all that there is for any attempt to identify the sender to the reader. If you need help please write to Contact@Sharp.Faith. May the message that you were sent be love, and not a curse. The time is at hand. Repent all you wicked! -";
const MESSAGE_CHUNK_EXPORT = new Blob([MESSAGE_C14], { type: 'text/plain' });
async function CAST_______MESSAGE____() {
try {
const CS14________CS = window.URL.createObjectURL(MESSAGE_CHUNK_EXPORT);
const MESSAGE______________CS14 = document.createElement('a');
MESSAGE______________CS14.href = CS14________CS;
MESSAGE______________CS14.download = `SHARP.FAITH Message - ${write_filename__}.txt`;
document.body.appendChild(MESSAGE______________CS14);
MESSAGE______________CS14.click();
window.URL.revokeObjectURL(CS14________CS);
document.body.removeChild(MESSAGE______________CS14);
output.style.cursor = "default";
return true;
} catch (error) {
return false;
}
}
async function CAST______________CS14(retries = 1) {
let success = false;
for (let attempt = 0; attempt <= retries; attempt++) {
success = await CAST_______MESSAGE____();
if (success) break;
if (retries > attempt) {
window.alert("THE DOWNLOAD COULD NOT BE COMPLETED.\n\nPlease write to Contact@Sharp.Faith so that you may be provided a backup of the message.");
}
}
}
CAST______________CS14();
}

initializeIndexDB()
.then(() => {
autosaveRestore();
})
.catch((error) => {
return
});