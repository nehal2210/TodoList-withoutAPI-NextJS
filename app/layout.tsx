import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />

      <body
        style={{ textAlign: "center", marginTop: "15%", marginBottom: "15%" }}
      >
        <h1 style={{ margin: "20px" }}>Awsome To Do List</h1>
        {children}
      </body>
    </html>
  );
}
