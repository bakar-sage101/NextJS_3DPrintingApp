import Image from "next/image";

export default function HeroSection() {
    return (
        <section className={"flex justify-center px-8 py-8"}>
            <div className={"w-1/2"}>
                <p className={"text-sm uppercase tracking-wider py-1"}>Your go-to platform for 3D printing files</p>

                <h2 className={"text-5xl font-bold py-6"}>Discover what’s <br /> possible with <br /> 3D printing</h2>

                <p className={"py-3"}>Join our community of creators and explore a vast library of user-submitted models.</p>

                <button className={"border px-6 py-1 uppercase hover:bg-black hover:text-white transition"}>BROWSE MODELS</button>
            </div>

            <div className={"w-1/2"}>
                <Image
                    src={"/pic2.jpg"}
                    alt={"Hero-Image"}
                    width={600}
                    height={500}
                />
            </div>
        </section>
    )
}