// const sheetCSVUrl = "https://docs.google.com/spreadsheets/d/1FxrhV5BB3xaHAvkhQF8HLbseIzBvpbq5Z5_S569Lm4M/gviz/tq?tqx=out:csv&sheet=Sheet1";
    
// document.addEventListener("DOMContentLoaded", () => {
//     Papa.parse(sheetCSVUrl, {
//     header: true,
//     download: true,
//     complete: function(results) {
//         const container = document.getElementById("posts-container");

//         results.data.forEach(post => {
//         if (!post.image || !post.url) return;

//         const postDiv = document.createElement("div");
//         postDiv.className = "post";
//         postDiv.innerHTML = `
//             <img src="../temp/site images/${post.image}" alt="Post image">
//             <div class="post-caption">${post.caption}</div>
//             <a href="${post.url}" target="_blank">See post →</a>
//         `;
//         container.appendChild(postDiv);
//         });
//     }
//     });
// });

const sheetCSVUrl = "https://docs.google.com/spreadsheets/d/1FxrhV5BB3xaHAvkhQF8HLbseIzBvpbq5Z5_S569Lm4M/gviz/tq?tqx=out:csv&sheet=Sheet1";

document.addEventListener("DOMContentLoaded", () => {
    Papa.parse(sheetCSVUrl, {
    header: true,
    download: true,
    complete: function(results) {
        const container = document.getElementById("posts-container");

        results.data.forEach(post => {
        if (!post.image || !post.url) return;

        const postDiv = document.createElement("div");
        postDiv.className = "post";
        postDiv.innerHTML = `
            <img src="../temp/site images/${post.image}" alt="Post image">
            <div class="post-caption">${post.caption}</div>
            <div class="social-icons">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-youtube"></i>
            <i class="fas fa-times"></i>
            </div>
            <a href="${post.url}" target="_blank">See post →</a>
        `;
        container.appendChild(postDiv);
        });
    }
    });
});