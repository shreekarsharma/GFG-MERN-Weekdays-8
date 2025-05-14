async function getUsers() {
  try {
    const response = await fetch(
      "https://fake-json-api.mock.beeceptor.com/users"
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.log("Error 404");
    }
  } catch (error) {
    console.log(error);
  }
}
getUsers();
