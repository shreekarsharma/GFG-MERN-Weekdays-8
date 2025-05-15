// https://api.github.com/users/${username}
const userCard = document.querySelector(".userCard");
async function getUserData() {
  const username = document.querySelector("#usernameInput").value;
  if (username === "") {
    alert("Please enter username");
  } else {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const user = await response.json();
        console.log(user);
        userCard.innerHTML = `
        <div class="card mt-5 d-flex flex-row gap-5 border-0">
        <img src="${user.avatar_url}" class="card-img-top w-25 rounded-circle" id="avatar" alt="..." />
        <div class="card-body">
          <h5 class="card-title fs-4" id="name">${user.name}</h5>
          <h5 class="card-title lead fs-5" id="username">${user.login}</h5>
          <p class="card-text" id="bio">${user.bio}</p>
          <p class="card-text" id="location"></p>
          <p class="card-text" id="followers">${user.followers} Followers</p>
          <p class="card-text" id="following"> ${user.following} Following</p>
          <p class="card-text" id="repos">${user.public_repos} Public Repositories</p>
        </div>
        </div>
        `;
      } else {
        throw new Error("404 User Not Found");
      }
    } catch (error) {
      console.log(error);
    }
  }
}
