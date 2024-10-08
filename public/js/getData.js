import { textContentsApi } from "./apis.js";
const content = document.querySelector(".text-content");
const tittleElement = document.querySelector("title");
const titleOriginal = tittleElement.innerHTML;
const alertH = document.querySelector(".alert");
const tiClose = document.querySelector(".alert-close");
const contentAlert = document.querySelector(".content-alert p");

try {
  fetch(textContentsApi)
    .then((response) => response.json())
    .then((data) => {
      const textContents = data.reverse().map(
        (text) =>
          `
      <div class="box-text-content">
      <div class="avatar-name-text-content">
        <img src="
        ${text.avatar}
        " /> 
        <div class="name-text-content">${text.name} ${
            text.class == "" ? "" : `(${text.class})`
          }</div>
      </div>
      <div class="text-content-box">
       Câu Nói: ${text.textcontent} 
        <div class="time-text-content">${text.sendTime}</div>
        </div> 
      </div>
      `
      );

      content.innerHTML = textContents.join("");
    });
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
    // khôi phục tittle lại ban đầu
    tittleElement.innerHTML = titleOriginal;
  });
}
