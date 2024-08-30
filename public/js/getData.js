const myApi = "https://66ccad7da4dd3c8a71b87616.mockapi.io/textContents";
const content = document.querySelector(".text-content");
const tittleElement = document.querySelector("title");
const titleOriginal = tittleElement.innerHTML;
const alertH = document.querySelector(".alert");
const alertFull = document.querySelector(".alert");
const tiClose = document.querySelector(".alert-close");
const alertContainer = document.querySelector(".alert-container");
const contentAlert = document.querySelector(".content-alert p");

try {
  fetch(myApi)
    .then((response) => response.json())
    .then((data) => {
      const textContents = data.map(
        (text) =>
          `
      <div>${text.textcontent}</div>
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
