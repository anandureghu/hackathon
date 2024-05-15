import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import "./index.scss";
import "./pages/reset.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
        <Toaster richColors position="bottom-center" />
      </html>
    </ClerkProvider>
  );
}
