const selectGender = document.querySelector("#gender");
const genderApi = "https://66d3a7f4184dce1713d0a77d.mockapi.io/genderList";
// get Data
fetch(genderApi)
  .then((response) => response.json())
  .then((data) => {
    const genderList = data.map(
      (genders) =>
        `
       <option value="${genders.gender}" >
       ${genders.gender}
       </option>
       `
    );

    selectGender.innerHTML = genderList.join();
  });
