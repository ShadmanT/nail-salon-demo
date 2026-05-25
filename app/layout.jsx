import "./globals.css";
export const metadata = {
  title: "Petal Nail Studio — Toronto's Luxury Nail Bar",
  description: "Gel, acrylic, nail art and spa manicures in the heart of Toronto. Book online today.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: "#FDF8F5" }}>{children}</body>
    </html>
  );
}