function UserCards(){
    fetch("https://randomuser.me/api/?results=3")
    .then((response) => response.json())
    .then((data) =>{
    document.querySelector(".cards-container").innerHTML = "";
    console.log(data.results);

    data.results.forEach(user => {
        console.log(user.name);
        // Create the main article container
const article = document.createElement("article");
article.className = "w-full max-w-sm bg-white/5 dark:bg-gray-800 ring-1 ring-white/6 rounded-2xl shadow-lg p-6 text-gray-100";

// ----- HEADER -----
const header = document.createElement("header");
header.className = "flex items-center gap-4";

// Profile Image
const img = document.createElement("img");
img.src = user.picture.large;
img.alt = "Avatar";
img.className = "h-16 w-16 rounded-full ring-2 ring-white/8 object-cover";

// User info (name + username)
const userInfo = document.createElement("div");

const name = document.createElement("h3");
name.className = "text-lg font-semibold leading-none";
name.textContent = user.name.first + " " + user.name.last;

const username = document.createElement("p");
username.className = "text-sm text-gray-300";
username.textContent = user.email;

// Append name and username to userInfo div
userInfo.appendChild(name);
userInfo.appendChild(username);

// Follow Button (right side)
const followDiv = document.createElement("div");
followDiv.className = "ml-auto";

const followBtn = document.createElement("button");
followBtn.className = "inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium rounded-lg shadow hover:brightness-105 focus:outline-none";
followBtn.textContent = "Follow";

followDiv.appendChild(followBtn);

// Assemble header
header.appendChild(img);
header.appendChild(userInfo);
header.appendChild(followDiv);

// ----- BIO -----
const bio = document.createElement("p");
bio.className = "mt-4 text-sm text-gray-300";
bio.textContent = "Frontend developer • Coffee lover • Building accessible UI and delightful animations.";

// ----- STATS SECTION -----
const statsDiv = document.createElement("div");
statsDiv.className = "mt-5 grid grid-cols-3 text-center gap-4";

const stats = [
  { value: "1.2K", label: "Followers" },
  { value: "312", label: "Following" },
  { value: "86", label: "Posts" }
];

stats.forEach(stat => {
  const statItem = document.createElement("div");

  const value = document.createElement("span");
  value.className = "block text-sm font-semibold";
  value.textContent = stat.value;

  const label = document.createElement("span");
  label.className = "block text-xs text-gray-400";
  label.textContent = stat.label;

  statItem.appendChild(value);
  statItem.appendChild(label);

  statsDiv.appendChild(statItem);
});

// ----- FOOTER -----
const footer = document.createElement("footer");
footer.className = "mt-6 flex items-center justify-between";

// Left side (buttons)
const footerBtns = document.createElement("div");
footerBtns.className = "flex items-center gap-3";

const msgBtn = document.createElement("button");
msgBtn.className = "px-3 py-1.5 bg-transparent border border-white/10 text-sm rounded-lg text-gray-200 hover:bg-white/2";
msgBtn.textContent = "Message";

const shareBtn = document.createElement("button");
shareBtn.className = "px-3 py-1.5 bg-transparent border border-white/10 text-sm rounded-lg text-gray-200 hover:bg-white/2";
shareBtn.textContent = "Share";

footerBtns.appendChild(msgBtn);
footerBtns.appendChild(shareBtn);

// Right side (joined date)
const joined = document.createElement("time");
joined.className = "text-xs text-gray-400";
joined.textContent = "Joined 2021";

// Assemble footer
footer.appendChild(footerBtns);
footer.appendChild(joined);

// ----- Assemble all parts -----
article.appendChild(header);
article.appendChild(bio);
article.appendChild(statsDiv);
article.appendChild(footer);

// Finally append to body (or container)
document.body.appendChild(article);
const container = document.querySelector(".cards-container");
container.appendChild(article); // instead of document.body.appendChild(article)

        
    });
})
}

UserCards();

document.querySelector("#refreshBtn").addEventListener("click", () => {
    UserCards();
});



        // Try to call a page-specific refresh function if provided; otherwise reload.
        // document.getElementById('refreshBtn').addEventListener('click', () => {
        //     const refreshFn = window.refreshCards || window.loadCards || window.fetchCards;
        //     if (typeof refreshFn === 'function') {
        //         refreshFn();
        //     } else {
        //         // fallback: reload the page
        //         location.reload();
        //     }
        // });