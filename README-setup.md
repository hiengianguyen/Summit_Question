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

3. Add foder .github\workflows\deploy.yml vào dự án (vào dự án ở dạng file để dễ xử lí phần add)

- phân tích file deploy.yml:

  - 'name: Deploy web app to Firebase Hosting' đây là tên của workflow, có thể đặt tên bất kì đễ dễ hiểu

  - ' on:
        push:
           branches:
               - main '

  * 'on:' Chỉ định sự kiện kích hoạt workflow.
  * 'push:' Sự kiện khi có đẩy (push) code lên kho.
  * 'branches:' Chỉ định nhánh nào sẽ kích hoạt workflow. Trong trường hợp này, workflow sẽ được kích hoạt khi có thay đổi trên nhánh 'main'. Bạn có thể thay đổi tên nhánh này nếu cần.

  - ' jobs:
        deploy:
           runs-on: ubuntu-latest '

  * 'deploy:' tên jobs, có thể thay tên bất kì nếu cần
  * 'runs-on:' Chỉ định hệ điều hành mà job sẽ chạy. ubuntu-latest có nghĩa là job sẽ chạy trên môi trường Ubuntu mới nhất.

  - còn lại là các bước của job. Mỗi bước có thể sử dụng một action hoặc chạy một lệnh shell.

4. Vào github -> repositories -> your project -> setting -> Secrets and variables -> action -> new repository secret

- Name \*: FIREBASE_TOKEN
- Secret \*:
  1//0e8AmNz1-HwE6CgYIARAAGA4SNwF-L9Ir8qOCLQ43b54s_dcc_iSuZ0TofE qmwiObOyJTGotfZjdsjDtxGiT-nxu7N3Il0SDRYvk

- Add secret

5. Push dự án(source code) lên github.
