document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 5000); // 5000 milliseconds (5 seconds)
});
