### Submit Question Project

### Quy trình setup dự án HTML,CSS,JS với GithubActions để tự động deploy dự án lên internet sử dụng dịch vụ Firebase Hosting

#### 1. Xây dựng dự án code thuần HTML,CSS,JS.
* Xây dựng dự án, chạy OK
* Tạo 1 repository mới trên Github để sử dụng cho dự án này

#### 2. Tạo dự án Firebase console (<a>https://console.firebase.google.com/u/0/</a>)

#### 3. Thiết lập dự án Firebase console vào dự án HTML,CSS,JS trên máy
* Điều kiện tiên quyết: Đã cài đặt NodeJS vào máy (<a>https://nodejs.org/en</a>)
* Mở CMD hoặc terminal tại folder dự án và gõ các lệnh sau:
  - npm install -g firebase-tools
  - firebase login
  - firebase init
  - firebase deploy

#### 4. Thêm file .github\workflows\deploy.yaml vào dự án.
* File định nghĩa các lệnh cho việc deploy dự án lên internet

#### 5. Tạo Github repository secret
* Vào Github -> Repositories -> your project -> Setting -> Secrets and Variables -> Action -> New repository secret
- Name: FIREBASE_TOKEN
- Secret: Lấy được từ chuỗi token sau khi gõ lệnh <b>firebase login:ci</b> ở CMD/Terminal

#### 6. Push dự án lên github
* Push ở nhánh main (nhánh chính - nhánh mặc định) hoặc push ở nhánh khác rồi tạo Pull Request và merge vào nhánh main
* Lúc này GithubActions sẽ đọc file <b>deploy.yaml</b> ở trên, lắng nghe được sự kiện push code lên nhánh main, tiếp tục thực thi các lệnh còn lại trong file và tiến hành deploy dự án lên internet (sử dụng công nghệ Firebase Hosting)
* Mỗi lần có sự kiện push code lên nhánh main, thì dự án sẽ được deploy lên internet lại
