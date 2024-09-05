import logoImg from "@/assets/images/logo.png";
import heroImg from "@/assets/images/hero-img.png";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="relative">
            <div className="absolute left-0 top-0 -z-20">
                <svg width="892" height="794" viewBox="0 0 892 794" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="stripe-pattern" patternUnits="userSpaceOnUse" width="90" height="90">
                            <rect x="0" y="0" width="45" height="90" fill="#EABB97" />
                            <rect x="45" y="0" width="45" height="90" fill="#F7C59F" />
                        </pattern>
                    </defs>

                    <path d="M759.5 331C905.553 311.084 911.5 149 868 0H0V793.5C123 769.833 359.5 682.5 372.5 558.5C388.401 406.826 550.5 359.5 759.5 331Z" fill="url(#stripe-pattern)"/>
                </svg> 
            </div>

            <div className="select-none absolute -bottom-full lg:-bottom-32 right-0 -z-10">
                <Image
                    className="w-full h-full md:w-[40rem] md:h-[40rem] lg:w-[30rem] lg:h-[30rem] xl:w-[38rem] xl:h-[38rem]"
                    src={heroImg}
                    alt="Pawfect Img - Gambar hewan peliharaan sedang mandi spa dengan ekspresi bahagia"
                    // priority
                />
            </div>

            <div className="responsive-padding-l pt-6 md:pt-8 lg:pt-12 flex flex-col gap-5 md:gap-8 lg:gap-10">
                <div className="max-w-fit">
                    <a href="" className="flex items-center select-none">
                        <Image
                            src={logoImg}
                            alt="Pawfect logo"
                            width={80}
                            height={80}
                            // priority
                        />

                        <h1 className="text-title text-xl font-bold flex flex-col leading-none">
                            <span>Pawfect</span>
                            <span>Care</span>
                        </h1>
                    </a>
                </div>

                <h2 className="text-title">
                    Grooming Asik buat Sahabat Berbulumu
                </h2>

                <p className="text-desc">
                    Bikin hewan peliharaanmu makin sehat dan terawat dengan layanan grooming terbaik dari kami. Mulai dari potong bulu, mandi spa, sampai perawatan lengkap biar mereka tetap sehat dan nyaman. Serahkan ke kami, dan lihat sendiri hasilnya!
                </p>

                <button className="max-w-fit button">
                    Hubungi Kami
                </button>
            </div>
        </section>
    )
}

export default HeroSection