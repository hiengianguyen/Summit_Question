var tittleElement = document.querySelector("title");
var titleOriginal = tittleElement.innerHTML;
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

    document.getElementById("name").value = "";
    document.querySelector("textarea").value = "";

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
        // nếu thành công thay tittle thành:
        tittleElement.innerHTML = "Gửi Thành Công";
      } else {
        // hiện alert
        alertH.style.display = "flex";
        // nếu không gửi được thì thay text thành:
        contentAlert.innerHTML = "Gửi câu nói không được rùi =((";
        // nếu gửi không thành công thay tittle thành:
        tittleElement.innerHTML = "Gửi Không Thành Công";
        // close
        tiClose.addEventListener("click", function () {
          alertH.style.display = "none";
          tittleElement.innerHTML = titleOriginal;
        });
      }
    } catch (error) {
      // hiện alert
      alertH.style.display = "flex";
      // nếu lọt vào catch thì thay text thành:
      contentAlert.innerHTML = "Lỗi server rùi =((";
      // nếu lỗi server thì thay tittle thành:
      tittleElement.innerHTML = "Lỗi Server";
      // close
      tiClose.addEventListener("click", function () {
        alertH.style.display = "none";
        tittleElement.innerHTML = titleOriginal; // khôi phục tittle lại ban đầu
      });
    }
    // reset input
  });
// control alert
tiClose.addEventListener("click", function () {
  alertH.style.display = "none"; // click vào "X" => close
  tittleElement.innerHTML = titleOriginal; // khôi phục tittle lại ban đầu
});

alertFull.addEventListener("click", function () {
  alertH.style.display = "none"; //khi click khoản trong ngoài alert thì close
  tittleElement.innerHTML = titleOriginal; // khôi phục tittle lại ban đầu
});

alertContainer.addEventListener("click", function (event) {
  event.stopPropagation(); //dừng sự kiện nổi bột
});
