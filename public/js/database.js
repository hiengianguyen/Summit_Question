var alertH = document.querySelector(".alert");
var alertFull = document.querySelector(".alert");
var tiClose = document.querySelector(".alert-close");
var alertContainer = document.querySelector(".alert-container");
var contentAlert = document.querySelector(".content-alert p");

document
  .getElementById("contactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Ngăn không gửi biểu mẫu theo cách thông thường

    // Lấy dữ liệu từ from
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
        // hiện alert
        // nội dung ban đầu của alert là thành công
        alertH.style.display = "flex";
      } else {
        // hiện alert
        alertH.style.display = "flex";
        // nếu không gửi được thì thay text thành:
        contentAlert.innerHTML = "Gửi câu nói không được rùi =((";
        // close
        tiClose.addEventListener("click", function () {
          alertH.style.display = "none";
        });
      }
    } catch (error) {
      // hiện alert
      alertH.style.display = "flex";
      // nếu lọt vào catch thì thay text thành:
      contentAlert.innerHTML = "Lỗi server rùi =((";
      // close
      tiClose.addEventListener("click", function () {
        alertH.style.display = "none";
      });
    }
  });
// control alert
tiClose.addEventListener("click", function () {
  alertH.style.display = "none"; // click vào "X" => close
});

alertFull.addEventListener("click", function () {
  alertH.style.display = "none"; //khi click khoản trong ngoài alert thì close
});

alertContainer.addEventListener("click", function (event) {
  event.stopPropagation(); //dừng sự kiện nổi bột
});
