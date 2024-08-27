var postApi = "https://66ccad7da4dd3c8a71b87616.mockapi.io/classlists";
var selectClass = document.querySelector(".select-class");

// get Data
fetch(postApi)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var classLists = data.map(function (classs) {
      return `
       <option>
       ${classs.class}
       </option>
       `;
    });

    var html = classLists.join();
    selectClass.innerHTML = html;
  });
