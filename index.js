function alertFunc() {
    alert("Subscriber \"added\": " + document.getElementById("subscribe-form").email.value);
}
window.onload = function() {
    document.getElementById("subscribe-form").addEventListener("submit", alertFunc);
}
    