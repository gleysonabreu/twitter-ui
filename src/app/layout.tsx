import "../styles/main.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white dark:bg-brand-background">{children}</body>
    </html>
  );
}
