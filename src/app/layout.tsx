import "./globals.css";
import { NavBar, Footer } from "@organisms";
import { StoreProvider } from "./StoreProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <StoreProvider>
                    <NavBar />
                    {children}
                </StoreProvider>
                <Footer />
            </body>
        </html>
    );
}
