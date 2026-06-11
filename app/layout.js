import "./globals.css";

export const metadata = {
  title: "มูเลข MOOLEK",
  description: "รวมเลขมงคล ทำนายฝันแม่นๆ ตรวจสถิติหวยย้อนหลัง",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
