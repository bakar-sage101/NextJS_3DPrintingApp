import Image from "next/image";
import { TbNumber100Small } from "react-icons/tb";
import { MdNotificationsActive } from "react-icons/md";
import { FaRegFlag } from "react-icons/fa";

export default function About(){
    return(
        <main>
            <section className={"max-w-6xl mx-auto flex items-center justify-between px-5 py-20 gap-16"}>
                <div className={"w-[45%] relative aspect-square"}>
                    <Image
                        src={"/pic3.jpg"}
                        alt={"About-Image"}
                        fill
                        className={"object-cover"}
                    />
                </div>
                <div className={"w-[50%]"}>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">
                        About printforge
                    </p>

                    <h2 className="text-6xl font-bold leading-[1.1] mb-8">
                        Empowering <br /> makers worldwide
                    </h2>

                    <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                        <p>
                            Founded in 2023, PrintForge has quickly become the go-to platform for 3D printing enthusiasts, makers, and professional designers to share and discover amazing STL files for 3D printing.
                        </p>
                        <p>
                            Our mission is to foster a vibrant community where creativity meets technology, enabling anyone to bring their ideas to life through 3D printing.
                        </p>
                    </div>
                </div>
            </section>
            <section className={"max-w-6xl mx-auto py-12 border-t border-b border-gray-100"}>
                <div className={"grid grid-cols-1 md:grid-cols-3"}>
                    <div className="p-8">
                        <h3 className="flex items-center gap-3 text-xl font-bold mb-4">
                            <TbNumber100Small className="text-blue-500 text-3xl"/>
                            100K+ Models
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Access our vast library of community-created 3D models, from practical tools to artistic creations.
                        </p>
                    </div>

                    <div className="p-8 md:border-l border-gray-200">
                        <h3 className="flex items-center gap-3 text-xl font-bold mb-4">
                            <MdNotificationsActive className="text-2xl"/>
                            Active Community
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Join thousands of makers who share tips, provide feedback, and collaborate on projects.
                        </p>
                    </div>

                    <div className="p-8 md:border-l border-gray-200">
                        <h3 className="flex items-center gap-3 text-xl font-bold mb-4">
                            <FaRegFlag className="text-2xl"/>
                            Free to Use
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Most models are free to download, with optional premium features for power users.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-24 border-t border-gray-100">
                {/* Use a wrapper to center everything and limit the width of the text */}
                <div className="max-w-3xl mx-auto px-5 text-center">

                    {/* Title: In Figma, this is very large and bold */}
                    <h2 className="text-6xl font-bold mb-12 tracking-tight">Our vision</h2>

                    {/* Content: Use 'space-y' to manage the gap between paragraphs and the horizontal line */}
                    <div className="space-y-8 text-gray-600 text-lg leading-relaxed">
                        <p>
                            At PrintForge, we believe that 3D printing is revolutionizing the way we create, prototype, and manufacture. Our platform serves as a bridge between designers and makers, enabling the sharing of knowledge and creativity that pushes the boundaries of what's possible with 3D printing.
                        </p>

                        {/* The horizontal divider line seen in your reference */}
                        <hr className="w-24 mx-auto border-gray-300" />

                        <p>
                            Whether you're a hobbyist looking for your next weekend project, an educator seeking teaching materials, or a professional designer wanting to share your creations, PrintForge provides the tools and community to support your journey in 3D printing.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}