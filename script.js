document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const toggleButton = document.getElementById("toggleSidebar");

    toggleButton.addEventListener("click", function() {
        if (sidebar.style.transform === "translateX(0px)") {
            sidebar.style.transform = "translateX(-100%)";
        } else {
            sidebar.style.transform = "translateX(0px)";
        }
    });
});

