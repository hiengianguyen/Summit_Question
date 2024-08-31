import { classlistsApi } from "./apis.js";
const selectClass = document.querySelector(".select-class");

// get Data
fetch(classlistsApi)
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
