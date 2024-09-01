import { getFormattedCurrentDateTime } from "./common.js";
import { textContentsApi } from "./apis.js";
import { boyAvatars } from "./common.js";
import { girlAvatars } from "./common.js";

const tittleElement = document.querySelector("title");
const titleOriginal = tittleElement.innerHTML;
const alertH = document.querySelector(".alert");
const alertFull = document.querySelector(".alert");
const tiClose = document.querySelector(".alert-close");
const alertContainer = document.querySelector(".alert-container");
const contentAlert = document.querySelector(".content-alert p");
console.log(girlAvatars)

document
  .getElementById("contactForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault(); // Ngăn không gửi biểu mẫu theo cách thông thường

    // Lấy dữ liệu từ from
    const form = event.target;
    const data = new FormData(form);
    const jsonData = Object.fromEntries(data.entries());
    jsonData.sendTime = getFormattedCurrentDateTime();
    jsonData.gender === "Nam"
     ? jsonData.avatar =
    boyAvatars[Math.floor(Math.random() * boyAvatars.length)]
    : jsonData.avatar =
    girlAvatars[Math.floor(Math.random() * girlAvatars.length)]

    document.getElementById("name").value = "";
    document.querySelector("textarea").value = "";

    try {
      // Gửi dữ liệu đến API
      const response = await fetch(textContentsApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });

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
        tiClose.addEventListener("click", () => {
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
      tiClose.addEventListener("click", () => {
        alertH.style.display = "none";
        tittleElement.innerHTML = titleOriginal; // khôi phục tittle lại ban đầu
      });
    }
  });
// control alert
tiClose.addEventListener("click", () => {
  alertH.style.display = "none"; // click vào "X" => close
  tittleElement.innerHTML = titleOriginal; // khôi phục tittle lại ban đầu
});

alertFull.addEventListener("click", () => {
  alertH.style.display = "none"; //khi click khoản trong ngoài alert thì close
  tittleElement.innerHTML = titleOriginal; // khôi phục tittle lại ban đầu
});

alertContainer.addEventListener("click", (event) => {
  event.stopPropagation(); //dừng sự kiện nổi bột
});
