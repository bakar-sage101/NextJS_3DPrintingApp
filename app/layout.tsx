import "./globals.css";
import {ReactNode} from "react";
import NavBar from './components/nav';

export default function RootLayout({
    children,
}:Readonly<{
    children: ReactNode;
}>) {
    return(
        <html lang="en">
        <body>
            <NavBar/>
            {children}
        </body>
        </html>
    );
}