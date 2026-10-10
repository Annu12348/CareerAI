import ReduxProvider from "../features/redux/provider";
import { ToastProvider } from "./providers/ToastProvider"
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <ToastProvider />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
