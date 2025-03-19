// document.addEventListener("DOMContentLoaded", function () {
//     let iframe = document.getElementById("background-iframe");
//     let loadingOverlay = document.getElementById("loading-overlay");

//     if (!iframe || !loadingOverlay) return; // Exit if these elements are missing

//     // Show loading screen only if iframe exists
//     loadingOverlay.style.display = "flex";

//     // Load the iframe source
//     let dataSrc = iframe.getAttribute("data-src");
//     if (dataSrc) {
//         iframe.setAttribute("src", dataSrc);
//     }

//     // Hide loading screen after iframe loads
//     iframe.onload = function () {
//         loadingOverlay.style.display = "none";
//     };

//     // Hide loading overlay after max 3s (failsafe)
//     setTimeout(() => {
//         loadingOverlay.style.display = "none";
//     }, 3000);
// });


document.addEventListener("DOMContentLoaded", function () {
    let iframe = document.getElementById("background-iframe");
    let loadingOverlay = document.createElement("div");

    // Create a loading overlay
    loadingOverlay.id = "loading-overlay";
    loadingOverlay.innerHTML = "<div class='spinner'></div>";
    document.body.appendChild(loadingOverlay);


    // Show loading overlay immediately
    loadingOverlay.style.display = "flex";

    // Load the initial iframe source
    let dataSrc = iframe.getAttribute("data-src");
    if (dataSrc) {
        iframe.setAttribute("src", dataSrc);
    }

    // Ensure loading overlay hides after iframe loads
    iframe.onload = function () {
        loadingOverlay.style.display = "none";
    };

    // Fallback: Hide spinner after 3 seconds (prevents it from getting stuck)
    setTimeout(() => {
        loadingOverlay.style.display = "none";
    }, 3000);

    // Remove unwanted elements inside the iframe
    setTimeout(() => {
        try {
            let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            if (iframeDoc) {
                let relatedModels = iframeDoc.querySelector(".similar-3d-models, .related-models");
                if (relatedModels) relatedModels.style.display = "none";

                let cookiePopup = iframeDoc.querySelector(".cookie-banner, .gdpr-banner, .cookie-settings");
                if (cookiePopup) cookiePopup.style.display = "none";
            }
        } catch (e) {
            console.warn("Could not modify iframe due to cross-origin restrictions.");
        }
    }, 2000);

    // **MODEL SWITCHING FUNCTIONALITY**
    document.querySelectorAll(".model-switch").forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault();

            let newSrc = this.getAttribute("data-src");
            if (!newSrc) return;

            // Fade out the iframe
            iframe.style.opacity = "0";
            loadingOverlay.style.display = "flex"; // Show loading overlay

            setTimeout(() => {
                iframe.src = newSrc; // Update iframe source
            }, 600); // 600ms for smooth effect

            iframe.onload = function () {
                iframe.style.opacity = "1"; // Fade back in
                loadingOverlay.style.display = "none"; // Hide loading overlay
            };
        });
    });
});
