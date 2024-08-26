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
        "https://submit-question-default-rtdb.firebaseio.com/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        alert("Câu hỏi của bạn đã được gửi thành công!");
      } else {
        alert("Đã xảy ra lỗi khi gửi câu hỏi. Vui lòng thử lại sau.");
      }
    } catch (error) {
      alert("Đã xảy ra lỗi khi gửi câu hỏi. Vui lòng thử lại sau.");
    }
  });
