// import dogImg from "@/assets/images/about_section_images/dog-img.webp";
// import dogImg2 from "@/assets/images/about_section_images/dog-2-img.webp";

import aboutSectionData from "@/assets/data/aboutSectionData.json";
import Image from "next/image";

const AboutSection = () => {
    return (
        <section className="relative mt-[35rem]">
            <div className="about-section-container">
                <div className="responsive-padding-x">
                    <div className="about-element pt-4">
                        <div>
                            <h1 className="text-title text-thirdColor">
                                Tentang Kami
                            </h1>


                            <div className="text-desc mt-4 about-desc">
                                <p>
                                    Pawfect adalah layanan perawatan hewan peliharaan terbaik yang dirancang dengan cinta dan perhatian untuk hewan peliharaan kamu. 
                                    Kami menyediakan layanan grooming, konsultasi kesehatan, dan banyak lagi. Dengan tim profesional yang berpengalaman, kami siap membantu hewan kesayangan kamu tampil dan merasa sempurna.
                                </p>

                                <p>
                                    Kami berdiri untuk menciptakan lingkungan yang nyaman dan menyenangkan bagi hewan peliharaan kamu, serta memberikan layanan yang berkualitas dengan harga terjangkau.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="image-element">
                                {aboutSectionData.dataImg.map((data, index) => (
                                    <div key={index} className="image-card">
                                        <Image
                                            src={data.src}
                                            alt={data.alt}
                                            layout="fill"
                                            objectFit="cover"
                                            className="object-top"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5 flex flex-col gap-5">
                                <p className="text-title text-thirdColor">
                                    Kenapa Pawfect? 
                                </p>

                                <ul className="list-disc pl-4">
                                    {aboutSectionData.dataPoint.map((point, index) => (
                                        <li key={index} className="text-desc mb-1.5">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection