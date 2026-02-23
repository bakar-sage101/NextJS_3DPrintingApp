import { FaInstagram, FaFacebook, FaLinkedin} from "react-icons/fa";

export default function Footer(){
    return(
        <footer className={"bg-black text-white"}>
            <div className={"flex gap-100 px-3 py-3"}>
                <div>
                    PrintForge
                </div>
                <div className={"flex gap-20"}>
                    <div>
                        Explore
                        <ul>
                            <li>3D Models</li>
                            <li>Categories</li>
                            <li>Trending</li>
                        </ul>
                    </div>
                    <div>
                        Company
                        <ul>
                            <li>About Us</li>
                            <li>Contact</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div>
                        Resources
                        <ul>
                            <li>Blog</li>
                            <li>Tutorials</li>
                            <li>Support</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={"border-t-2 flex justify-between"}>
                <div className={"px-5"}>
                    © 2024 PrintForge. All rights reserved.
                </div>
                <div className={"flex px-4 gap-2 py-1"}>
                    <FaInstagram/>
                    <FaFacebook/>
                    <FaLinkedin/>
                </div>
            </div>
        </footer>
    )
}