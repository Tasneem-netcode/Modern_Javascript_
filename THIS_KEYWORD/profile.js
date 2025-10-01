let form = document.querySelector("form");
let nameInput = document.querySelector("#name");
let roleInput = document.querySelector("#role");
let bioInput = document.querySelector("#bio");
let userimgInput = document.querySelector("#photo-url");

const UserManager = {
  users: [],
  init: function () {
    // Load users from local storage if available
    let storedUsers = localStorage.getItem("users");
    if (storedUsers) {
        this.users = JSON.parse(storedUsers);
        this.showUser();
    }
    
    form.addEventListener("submit", this.submitForm.bind(UserManager)); // by using bind here, 'this' will always refer to UserManager object
  },
  submitForm: function (event) {
    event.preventDefault();
    console.log(this);
    console.log("Form submitted");
    this.addUser();
  },
  addUser: function () {
    this.users.push({
      name: nameInput.value,
      role: roleInput.value,
      bio: bioInput.value,
      photoUrl: userimgInput.value,
    });
    console.log(this.users);
   // Save in local storage
   localStorage.setItem("users", JSON.stringify(this.users));
    form.reset();
    this.showUser();
  },
  showUser: function () {
    let container = document.querySelector(".users.profile-cards-container");
    container.innerHTML = ""; // Clear existing content


    this.users.forEach((user) => {
      // Create parent div
      let card = document.createElement("div");
      card.className = "profile-card";

      // Create image
      let img = document.createElement("img");
      img.src = user.photoUrl;
      img.alt = user.name;
      img.className = "profile-pic";

      // Create h3
      let name = document.createElement("h3");
      name.textContent = user.name;

      // Create role paragraph
      let role = document.createElement("p");
      role.className = "role";
      role.textContent = user.role;

      // Create bio paragraph
      let bio = document.createElement("p");
      bio.className = "bio";
      bio.textContent = user.bio;

      // Create link
      let link = document.createElement("a");
      link.href = "#";
      link.className = "demo-link";
      link.textContent = "Demo Link";

      // Append children to card
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(role);
      card.appendChild(bio);
      card.appendChild(link);

      // Finally, append card to body (or another container)
      container.appendChild(card);
    });
  },

  removeUser: function () {
    // Implementation for removing a user

  },
};

UserManager.init();

// In the above code, 'this' inside the event listener function refers to the form element that received the submit event, not the UserManager object. This is because in regular functions, 'this' is determined by how the function is called. In this case, it's called as an event handler, so 'this' refers to the element that triggered the event.
