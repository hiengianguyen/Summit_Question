import {
  boyAvatars,
  girlAvatars,
  defaultAvatar,
  getFormattedCurrentDateTime,
} from "./common.js";
import { textContentsApi } from "./apis.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const alertH = $(".alert");
const alertFull = $(".alert");
const tiClose = $(".alert-close");
const tittleElement = $("title");
const contentAlert = $(".content-alert p");
const alertContainer = $(".alert-container");
const titleOriginal = tittleElement.innerHTML;

$("#contactForm").addEventListener("submit", async (event) => {
  event.preventDefault(); // Ngăn không gửi biểu mẫu theo cách thông thường

  // Lấy dữ liệu từ form
  const form = event.target;
  const data = new FormData(form);
  const jsonData = Object.fromEntries(data.entries());
  const currentTime = getFormattedCurrentDateTime();
  jsonData.sendTimestamp = currentTime.sendTimestamp;
  jsonData.sendTime = currentTime.sendTime;
  
  jsonData.gender === "Nam"
    ? (jsonData.avatar =
        boyAvatars[Math.floor(Math.random() * boyAvatars.length)])
    : jsonData.gender === "Nữ"
    ? (jsonData.avatar =
        girlAvatars[Math.floor(Math.random() * girlAvatars.length)])
    : (jsonData.avatar = defaultAvatar);

  $("#name").value = "";
  $("textarea").value = "";

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
