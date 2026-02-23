import "./globals.css";
import {ReactNode} from "react";
import NavBar from './components/nav';
import Footer from "@/app/components/footer";

export default function RootLayout({
    children,
}:Readonly<{
    children: ReactNode;
}>) {
    return(
        <html lang="en">
        <body className={"min-h-screen flex flex-col"}>
            <NavBar/>
            <main className={"grow"}>
                {children}
            </main>
            <Footer/>
        </body>
        </html>
    );
}