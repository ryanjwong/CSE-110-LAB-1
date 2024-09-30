function alertFunc() {
    alert(document.getElementById("subscribe-form").email.value);
}
window.onload = function() {
    document.getElementById("subscribe-form").addEventListener("submit", alertFunc);
}
    