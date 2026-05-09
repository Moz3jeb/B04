// root layout - imports the global stylesheet
import "./styles.css";

export const metadata = {
  title: "Decks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
