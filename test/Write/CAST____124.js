const CastVector = () => { const viewportHeight = window.innerHeight; document.documentElement.style.height = `${viewportHeight}px`; document.body.style.height = `${viewportHeight}px`;};
const Cast14 = (callback, delay) => { let timeoutId; return (...args) => { if (!timeoutId) { timeoutId = setTimeout(() => { callback(...args); timeoutId = null; }, delay);}};};
const CastEngage = Cast14(CastVector, 140);
const CastRender = new ResizeObserver(CastEngage);
CastRender.observe(document.documentElement); window.addEventListener('DOMContentLoaded', CastEngage); window.addEventListener('load', CastEngage); window.addEventListener('resize', CastEngage); window.addEventListener('scroll', CastEngage); window.addEventListener('focus', CastEngage); window.addEventListener('blur', CastEngage);