import "./globals.css";
import { NavBar, Footer } from "@organisms";
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAZUvs8MV9AhGPC_TMFbyMStr3Spt3-M4",
  authDomain: "gymmate-12ba2.firebaseapp.com",
  projectId: "gymmate-12ba2",
  storageBucket: "gymmate-12ba2.appspot.com",
  messagingSenderId: "946593897836",
  appId: "1:946593897836:web:4f217f3ee5e1cd3ac16749"
};

// Initialize Firebase

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

const app = initializeApp(firebaseConfig);