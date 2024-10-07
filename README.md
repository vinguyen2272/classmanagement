# ClassManagement_Phase1

# Cài thư viện

npm i

# Chạy ứng dụng

npm run dev

# Build ứng dụng

npm run build

# Cấu trúc dự án

- **src/**: Đây là thư mục chính chứa mã nguồn của dự án
  - **app/**: chứa các cấu hình và sử dụng Redux để quản lý trạng thái của ứng dụng
  - **assets/**: chứa các icon, svg, image của dự án
  - **components/**: chứa các component của dự án và layout
  - **layout/**: chứa các layout của dự án
  - **context/**:
    - **Interface/**: chứa các interface và props của TypeScript
  - **features/**: quản lý slice của redux
  - **hooks/**: chứa các custom hooks
  - **pages/**: chứa các page của dự án bên trong sẽ có các thư mục riêng của từng page, mỗi thư mục chứa 1 file chính, 1 file css module và chứa các component riêng của page đó nếu có (component riêng của page cũng phải có 1 file chính của component đó và 1 file css module)
  - **routes/**: quản lý chuyển hướng trang

# Sử dụng svg trong dự án

- **src/assets/svg**: chứa các svg của dự án sử dụng bằng cách thêm svg giống Component có thể truyển prop color để thay đổi màu svg, set width qua prop width, set height qua prop height. Có thể xem tổng quát các svg ở file index bên trong thư mục svg

## Công nghệ được sử dụng

- [React-hook-form](https://react-hook-form.com/)
- [Axios](https://axios-http.com/vi/docs/intro)
- [Prime-React](https://primereact.org/)
