// import dogImg from "@/assets/images/about_section_images/dog-img.webp";
// import dogImg2 from "@/assets/images/about_section_images/dog-2-img.webp";

import aboutSectionData from "@/assets/data/aboutSectionData.json";
import Image from "next/image";

const AboutSection = () => {
    return (
        <section className="relative translate-y-[35rem] sm:translate-y-[42rem] lg:translate-y-[38rem]">
            <div className="relative bg-secondaryBackgroundColor h-full before:content-[''] before:absolute before:-top-12 before:sm:-top-28 before:lg:-top-44 before:-z-10 before:w-full before:h-12 before:sm:h-28 before:lg:h-48 before:bg-shape-1 before:bg-no-repeat before:bg-cover after:content-[''] after:absolute after:rotate-180 after:-bottom-12 after:sm:-bottom-20 after:lg:-bottom-40 after:z-10 after:w-full after:h-12 after:sm:h-28 after:lg:h-48 after:bg-shape-1 after:bg-no-repeat after:bg-cover">
                <div className="responsive-padding-x pb-10">
                    <div className="flex justify-between flex-col-reverse sm:flex-row gap-5 sm:gap-0">
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {aboutSectionData.dataImg.map((data, index) => (
                                    <div key={index} className="relative bg-slate-200 w-full h-60 sm:h-40 sm:w-60 rounded-3xl overflow-hidden">
                                        <Image
                                            src={data.src}
                                            alt={data.alt}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 sm:mt-8">
                                <p className="text-title text-thirdColor">
                                   Kenapa Pawfect? 
                                </p>

                                <ul className="mt-4 sm:mt-8 list-disc pl-4">
                                    {aboutSectionData.dataPoint.map((point, index) => (
                                        <li key={index} className="text-desc mb-1.5">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div>
                            <p className="mt-4 sm:mt-0 text-title text-thirdColor">
                                Tentang Kami
                            </p>

                            <p className="mt-4 sm:mt-8 text-desc">
                                Pawfect adalah layanan perawatan hewan peliharaan terbaik yang dirancang dengan cinta dan perhatian untuk hewan peliharaan kamu. 
                                Kami menyediakan layanan grooming, konsultasi kesehatan, dan banyak lagi. Dengan tim profesional yang berpengalaman, kami siap membantu hewan kesayangan kamu tampil dan merasa sempurna.
                            </p>

                            <p className="mt-2 sm:mt-4 text-desc">
                                Kami berdiri untuk menciptakan lingkungan yang nyaman dan menyenangkan bagi hewan peliharaan kamu, serta memberikan layanan yang berkualitas dengan harga terjangkau.
                            </p>

                            <button className="mt-8 max-w-fit button-2">
                                Hubungi Kami
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="bg-secondaryBackgroundColor h-full mt-10">

            </div> */}
            <h1 className="h-[3000px]">Hello World</h1>
        </section>
    )
}

export default AboutSection