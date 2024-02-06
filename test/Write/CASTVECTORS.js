const Cast124 = {
highlightColor:0x484848,
midtoneColor:0xff0000,
lowlightColor:0xff0000,
baseColor:0x140000,
blurFactor:.48,
scale:.74,
speed:.74,
zoom:2
};
const Cast48 = {
highlightColor:0x5900AD,
midtoneColor:0xff0000,
lowlightColor:0xff0000,
baseColor:0x2a2a2a,
blurFactor:.48,
scale:.59,
speed:.74,
zoom:1.9
};
const repent_ = {
highlightColor:0x484848,
midtoneColor:0xff0000,
lowlightColor:0xff0000,
baseColor:0x140000,
blurFactor:.48,
scale:.74,
speed:.74,
zoom:2
};
const repent = {
highlightColor:0x484848,
midtoneColor:0x2a2a2a,
lowlightColor:0x484848,
baseColor:0xff1400,
blurFactor:.48,
scale:0,
speed:1.24,
zoom:.48
};
const sets = [Cast124,Cast48,repent,repent_];
const randomSet = sets[Math.floor(Math.random() * sets.length)];
VANTA.FOG({
el:"#CastRender",
mouseControls:false,
touchControls:false,
gyroControls:false,
minHeight:14,
minWidth:14,
...randomSet
});
document.addEventListener('DOMContentLoaded', function() {
document.addEventListener("contextmenu", function(e) {e.preventDefault();});
document.querySelector("#CastRender canvas").style.opacity = .19;
document.body.style.opacity = 1;});
window.addEventListener('beforeunload', function() {document.body.style.opacity = .14;});
window.addEventListener('popstate', function() {document.body.style.opacity = 1;});
window.addEventListener('pageshow', function(event) {if (event.persisted) {document.body.style.opacity = 1;}});
document.addEventListener('visibilitychange', function() {if (document.visibilityState === 'visible') {document.body.style.opacity = 1;}});