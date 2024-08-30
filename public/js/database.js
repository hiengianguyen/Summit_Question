var alertH = document.querySelector(".alert");
var alertFull = document.querySelector(".alert");
var tiClose = document.querySelector(".alert-close");
var alertContainer = document.querySelector(".alert-container");

document
  .getElementById("contactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Ngăn không gửi biểu mẫu theo cách thông thường

    // Lấy dữ liệu từ biểu mẫu
    const form = event.target;
    const data = new FormData(form);
    const jsonData = Object.fromEntries(data.entries());

    try {
      // Gửi dữ liệu đến API
      const response = await fetch(
        "https://66ccad7da4dd3c8a71b87616.mockapi.io/textContents",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonData),
        }
      );

      if (response.ok) {
        alertH.style.display = "flex";
      } else {
        var alertFail = document.querySelector(".alert-fail");
        alertFail.style.display = "flex";
        var hiClose = document.querySelector(".alert-close-2");
        hiClose.addEventListener("click", function () {
          alertFail.style.display = "none";
        });
      }
    } catch (error) {
      var alertFail = document.querySelector(".alert-fail");
      alertFail.style.display = "flex";
      var hiClose = document.querySelector(".alert-close-2");
      hiClose.addEventListener("click", function () {
        alertFail.style.display = "none";
      });
    }
  });
// alert close
tiClose.addEventListener("click", function () {
  alertH.style.display = "none";
});

alertFull.addEventListener("click", function () {
  alertH.style.display = "none";
});

alertContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
