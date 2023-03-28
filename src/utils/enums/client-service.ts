export const UserObjectEnum: any = [
  {
    label: "Chỉ Bên Phía Công Ty",
    name: "INTERNAL_OBJECT",
  },
  {
    label: "Chỉ Bên Phía Khách Hàng Đã Đăng Ký",
    name: "EXTERNAL_OBJECT",
  },
  {
    label: "Cả Trong Và Ngoài Công Ty",
    name: "INTERNAL_EXTERNAL_OBJECT",
  },
];

export const BusinessStatusEnum: any = [
  {
    value: true,
    label: "Đang kinh doanh",
  },
  {
    value: false,
    label: "Không cho kinh doanh",
  },
];

export const ActiveStatusEnum: any = [
  {
    value: true,
    label: "Kích hoạt",
  },
  {
    value: false,
    label: "Ẩn",
  },
];

export const StorageUnit: any = [
  { name: "TB" },
  { name: "GB" },
  { name: "MB" },
];

export const StorageProviderType: any = [
  { name: "DATABASE", label: "Database" },
  { name: "AWS", label: "Amazon S3" },
  { name: "GOOGLE", label: "Google Drive" },
];

export const CurrencyWorld: any = [
  { name: "VIET_NAM", code: "VND" },
  { name: "UNITED_STATES", code: "USD" },
  { name: "UNITED_KINGDOM", code: "GBP" },
];
