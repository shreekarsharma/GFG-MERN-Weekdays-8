const fname = document.querySelector("#fname").value;
const lname = document.querySelector("#lname").value;
const email = document.querySelector("#email").value;
const phone = document.querySelector("#phone").value;
const submitInput = document.querySelector("#submitInput");
submitInput.addEventListener("click", () => {
  if (fname === "") {
    alert("Cannot leave empty");
  }
  if (lname === "") {
    alert("cannot leave empty");
  }
  if (email === "") {
    alert("Cannot leave empty");
  }
  if (phone === "") {
    alert("cannot leave empty");
  }
});
