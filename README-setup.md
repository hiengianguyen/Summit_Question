## setup-to-pushanddeploy

** Quy trình triển khai dự án code thuần HTML,CSS,JS lên GitHub, deploy lên Firebase Hosting và sử dụng công nghệ GithubActions để triển khai CI/CD tự động deploy lên Firebase Hosting mỗi khi có sự kiện push code lên branch chính (main)

1. Xây dựng dự án và chạy ok.

2. Lên Firebase.console tạo project (build HOSTING và nhập theo các dòng lệnh được chỉ dẫn).

- các dòng lệnh:
   - npm install -g firebase-tools
   - firebase login
   - firebase init
   - firebase deploy

- Lưu ý địa điểm nhập lệnh là terminal của vscode hoặc của hệ thống
- Đúng đường dẫn đến thư mục dự án đã xây dựng

3. Add foder .github\workflows\deploy.yml vào dự án (vào dự án ở dạng file để dễ xử lí phần add)

4. Push dự án(source code) lên github.


