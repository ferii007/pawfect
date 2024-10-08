
import logoImg from "@/assets/images/logo.png";
import Image from "next/image";

const ContactForm = () => {
    return (
        <>
            <div className="responsive-padding-x responsive-padding-t flex">
                <div className="bg-white px-6 py-4 shadow-2xl rounded-tl-lg rounded-bl-lg w-fit">
                    <h3 className="text-2xl font-medium">Contact Form</h3>
                    <form className="mt-4 font-sawarabi">
                        <div className="mb-4">
                            <label htmlFor="name" className="input-label">Name</label>
                            <input className="input-box" type="text" placeholder="Jane Doe" aria-label="name" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="phone" className="input-label">Phone Number</label>
                            <input className="input-box" type="number" placeholder="Jane Doe" aria-label="phone" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="input-label">Email</label>
                            <input className="input-box" type="email" placeholder="Jane Doe" aria-label="email" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="input-label">Message</label>

                            <textarea name="message" className="input-box border-2 rounded-md p-1" rows={6}></textarea>
                        </div>

                        <button className="button-3 py-3 px-10">
                            Submit
                        </button>
                    </form>
                </div>

                <div className="bg-white rounded-tr-lg rounded-br-lg p-[20px] w-72 hidden md:block">
                    <Image
                        className="w-full h-full object-contain drop-shadow-2xl"
                        src={logoImg}
                        alt="Pawfect Img - Gambar hewan peliharaan sedang mandi spa dengan ekspresi bahagia"
                        // priority
                    />
                </div>
            </div>
        </>
    )
}

export default ContactForm