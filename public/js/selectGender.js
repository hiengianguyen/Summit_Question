const selectGender = document.querySelector("#gender");
const genderApi = "http://localhost:3000/genderList";
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
