import "./globals.css";
import { NavBar, Footer } from "@organisms";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
