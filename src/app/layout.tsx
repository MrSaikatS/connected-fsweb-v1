import ThemeProvider from "@/components/ThemeProvider";
import { LayoutProps } from "@/lib/types";
import "./globals.css";

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <body className="">
        <ThemeProvider
          attribute={"class"}
          defaultTheme="dark"
          enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
