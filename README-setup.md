## setup-to-pushanddeploy

\*\* Quy trình triển khai dự án code thuần HTML,CSS,JS lên GitHub, deploy lên Firebase Hosting và sử dụng công nghệ GithubActions để triển khai CI/CD tự động deploy lên Firebase Hosting mỗi khi có sự kiện push code lên branch chính (main)

1. Xây dựng dự án và chạy ok.

2. Lên Firebase.console tạo project (build HOSTING và nhập theo các dòng lệnh được chỉ dẫn).

- các dòng lệnh:

  - npm install -g firebase-tools
  - firebase login
  - firebase init
  - firebase deploy

- Lưu ý địa điểm nhập lệnh là terminal của vscode hoặc của hệ thống
- Đúng đường dẫn đến thư mục dự án đã xây dựng

3. Add file .github\workflows\deploy.yaml vào dự án.

- phân tích file deploy.yml:

  - ' on: 'on:' Chỉ định sự kiện kích hoạt workflow.
    push: 'push:' Sự kiện khi có đẩy (push) code lên kho.
    branches: - main 'branches:' Chỉ định nhánh nào sẽ kích hoạt workflow. Trong trường hợp này, workflow sẽ được kích hoạt khi có thay đổi trên nhánh 'main'. Bạn có thể thay đổi tên nhánh này nếu cần.'

  - ' jobs:
    deploy: 'deploy:' tên jobs, có thể thay tên bất kì nếu cần
    runs-on: ubuntu-latest, 'runs-on:' Chỉ định hệ điều hành mà job sẽ chạy. ubuntu-latest có nghĩa là job sẽ chạy trên môi trường Ubuntu mới nhất.'

  - còn lại là các bước của job. Mỗi bước có thể sử dụng một action hoặc chạy một lệnh shell.

4. Vào github -> repositories -> your project -> setting -> Secrets and variables -> action -> new repository secret

- Name \*: FIREBASE_TOKEN
- Secret \*:

- Add secret

5. Push dự án(source code) lên github.
