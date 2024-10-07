import testimonialSectionData from "@/assets/data/testimonialSectionData.json";
import Image from "next/image";

const TestimonialSection = () => {
    return (
        <section className="relative bg-bone -z-20">
            <div className="pt-36 md:pt-40 lg:pt-60">
                <h2 className="w-full m-auto text-title text-center text-thirdColor">Apa Kata Mereka?</h2>

                <div className="flex flex-wrap justify-center gap-8 responsive-padding-x pt-6">
                    {testimonialSectionData.map((testimonial, index) => (
                        <div key={index} className="max-w-sm bg-[#FFF5ED] shadow-lg rounded-2xl overflow-hidden relative">
                            <div className="bg-slate-200 h-72 lg:h-80">
                                <Image
                                    src={testimonial.image} 
                                    alt={`Testimonial ${index + 1}`}
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover relative block"
                                />
                            </div>
                            
                            <div className="flex flex-col gap-6 p-4">
                                <h3 className="font-satisfy text-2xl font-semibold text-primaryColor">{testimonial.name}</h3>
                                <p className="font-sawarabi text-sm text-gray-600">{testimonial.review}</p>
                                
                                <div className="flex items-center">
                                    {[...Array(testimonial.rating)].map((_, index) => (
                                        <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="gold" stroke="gold">
                                            <path d="M12 .587l3.668 7.431L23.332 9.5l-5.664 5.517L19.36 23.5 12 19.857 4.64 23.5l1.692-8.483L.668 9.5l7.664-1.482L12 .587z"/>
                                        </svg>
                                    ))}
                                    {[...Array(5 - testimonial.rating)].map((_, index) => (
                                        <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="grey">
                                            <path d="M12 .587l3.668 7.431L23.332 9.5l-5.664 5.517L19.36 23.5 12 19.857 4.64 23.5l1.692-8.483L.668 9.5l7.664-1.482L12 .587z"/>
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialSection