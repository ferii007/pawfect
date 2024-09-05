// import dogImg from "@/assets/images/about_section_images/dog-img.webp";
// import dogImg2 from "@/assets/images/about_section_images/dog-2-img.webp";

import aboutSectionData from "@/assets/data/aboutSectionData.json";
import Image from "next/image";

const AboutSection = () => {
    return (
        <section className="relative pt-96 lg:pt-96">
            <div className="absolute left-0 right-0 -z-10">
                <svg width="" height="" viewBox="0 0 1440 782" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M286.721 129.078C162.393 149.383 36.2295 135.699 0 110.847V620.546C0 620.546 220.308 757.761 379.5 777.876C590.614 804.551 699.194 694.265 909.75 663.5C1115.02 633.507 1440 631.534 1440 631.534V79.2107C1372.46 56.2094 1187.47 18.1644 955.212 2.21542C663.769 -17.7981 442.131 103.697 286.721 129.078Z" fill="#D7ADA5"/>
                    <path d="M286.721 147.025C162.393 167.33 36.2295 153.646 0 128.794V620.546C0 620.546 220.308 757.761 379.5 777.876C590.614 804.551 699.194 683.277 909.75 652.512C1115.02 622.519 1440 620.546 1440 620.546V79.2107C1372.46 56.2094 1178.95 10.2067 945.246 10.2067C653.115 10.2067 442.131 121.644 286.721 147.025Z" fill="#FFCCC2"/>
                </svg>
            </div>

            <div className="relative bg-secondaryBackgroundColor h-auto mt-20 md:mt-40 lg:mt-56">
                <div className="flex justify-between responsive-padding-x">
                    <div className="grid grid-cols-3 gap-5">
                        {aboutSectionData.map((data, index) => (
                            <div key={index} className="w-56 h-36 bg-frontBackgroundColor rounded-3xl overflow-hidden">
                                <Image
                                    src={data.src}
                                    alt={data.alt}
                                    layout="responsive"
                                    width={224}
                                    height={144}
                                    className="rounded-3xl"
                                />
                            </div>
                        ))}
                    </div>

                    <div>
                        Text
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection