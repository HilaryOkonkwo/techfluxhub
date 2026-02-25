import { CONTACT } from '../data'
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

const socials = [
    { label: FiFacebook, title: 'Facebook', href: `https://facebook.com/${CONTACT.facebook}` },
    { label: '𝕏', title: 'X', href: `https://x.com/${CONTACT.x}` },
    { label: FaInstagram, title: 'Instagram', href: `https://instagram.com/${CONTACT.instagram}` },
    { label: FaWhatsapp, title: 'Whatsapp', href: `https://wa.me/${CONTACT.whatsapp}` },

]

export default function TopBar() {
    return (
        <div className="bg-navy-dark py-2 px-[6%] flex justify-between items-center">

            {/* Left —  contact info */}
            <div className='hidden md:flex gap-6 items-center'>
                <a href={`tel:${CONTACT.phones[0]}`} className='flex items-center gap-2 text-xs text-white/70 hover:text-white trasition-colors'>
                    📞 {CONTACT.phones[0]}
                </a>
                <span className='flex items-center gap-2 text-xs text-white/70 hover:text-white transition-colors'>
                    📍 Nnewi, Anambra State
                </span>
                <a href={`mailto:${CONTACT.email}`}
                    className="flex items-center gap-2 text-xs text-white/70 hover:text-white transition-colors">
                    📧 {CONTACT.email}
                </a>
            </div>

            {/*Right - socials */}
            <div className='flex gap-2 ml-auto'>
                {socials.map((s) => (
                    <a key={s.title} href={s.href} title={s.title}
                        className="w-7 h-7 rounded-full border border-white/20 bg-white/[0.07]
                            flex items-center justify-center text-white/70 text-xs
                            hover:bg-blue-light hover:border-blue-light hover:text-white
                            transition-all duration-200">
                        {s.label} {<s.label/>}

                    </a>
                ))

                }

            </div>
        </div>
    )
}