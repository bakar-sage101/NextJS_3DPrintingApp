// code for navbar.tsx
import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className={"flex items-center justify-between px-8 py-4 bg-white"}>
            <div>
                <Link className={"text-xl"} href={"/"}>ForgePrint</Link>
            </div>
            <div className={"flex gap-4"}>
                <Link className={"text-xl"} href={"/"}>3D Models</Link>
                <Link className={"text-xl"} href={"/"}>About</Link>
            </div>
        </nav>
    )
}