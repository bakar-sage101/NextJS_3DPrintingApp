import Image from "next/image";

export default function About(){
    return(
        <main>
            <section className={"flex justify-center items-stretch px-5 py-10 gap-3"}>
                <div className={"w-1/2 relative"}>
                    <Image
                        src={"/pic3.jpg"}
                        alt={"About-Image"}
                        fill
                        className={"object-cover"}
                    />
                </div>
                <div className={"w-1/2"}>
                    <p className={"text-sm uppercase tracking-wider py-1"}>About printforge</p>

                    <h2 className={"text-5xl font-bold py-6"}>Empowering <br /> makers worldwide</h2>

                    <p className={"py-2"}>Founded in 2023, PrintForge has quickly become the go-to platform for 3D printing enthusiasts, makers, and professional designers to share and discover amazing STL files for 3D printing. <br /> Our mission is to foster a vibrant community where creativity meets technology, enabling anyone to bring their ideas to life through 3D printing.</p>
                </div>
            </section>
            <section>

            </section>
        </main>
    )
}