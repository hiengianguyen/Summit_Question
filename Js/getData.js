var myApi = "https://66ccad7da4dd3c8a71b87616.mockapi.io/textContents";
var content = document.querySelector(".text-content");

fetch(myApi)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var textContents = data.map(function (text) {
      return `
      <div>${text.textcontent}</div>
      `;
    });

    content.innerHTML = textContents.join("");
  });
