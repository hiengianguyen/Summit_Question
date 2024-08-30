const postApi = "https://66ccad7da4dd3c8a71b87616.mockapi.io/classlists";
const selectClass = document.querySelector(".select-class");

// get Data
fetch(postApi)
  .then((response) => response.json())
  .then((data) => {
    const classLists = data.map(
      (classs) =>
        `
       <option value="${classs.class}" ${
          classs.class == "10a4" ? "selected" : ""
        } >
       ${classs.class}
       </option>
       `
    );

    selectClass.innerHTML = classLists.join();
  });
