import servicesSectionData from "@/assets/data/servicesSectionData.json";

const ServicesSection = () => {
    return (
        <section className="relative">
            <div className="pt-20 lg:pt-24">
                <div className="relative bg-[#EABB97] py-16 lg:py-20" style={{ background: 'repeating-linear-gradient(45deg, #F7C59F, #F7C59F 2.5rem, #EABB97 2.5rem, #EABB97 5rem)' }}>
                    <div className="before:absolute before:content before:content-[''] before:left-0 before:right-0 before:top-0 before:h-40 before:bg-gradient-to-b before:from-[#EABB97] before:to-transparent">
                        <h2 className="w-full m-auto text-title text-center text-thirdColor">Layanan Kami</h2>

                        <div className="responsive-padding-x grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 items-center mt-10">
                            {servicesSectionData.map((service, index) => (
                                <div key={index} className={`max-w-sm bg-thirdBackgroundColor shadow-xl rounded-2xl overflow-hidden relative ${index % 2 === 0 ? 'min-h-52' : 'min-h-60'}`}>
                                    <div className="flex flex-col gap-6 p-4 text-[#FFF5ED] font-roboto">
                                        <h3 className="text-2xl font-semibold">{service.title}</h3>
                                        <p className="text-sm">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection