import { useState, useEffect } from 'react'
import { NAV_LINKS, CONTACT } from '../data'


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)

    }, [])

    return (
        <header className={`sticky top-0 z-50 bg-white border-b-[3px] border-blue
    transition-shadow duration-300
    ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>

            <nav className='flex items-center justify-between px-[6%] h-[78px]'>

                {/* Techflux Hub Logo */}
                <a href="#home" className='flex items-center gap-3 no-underline'>
                    <div className='w-[50px] h-[50px] rounded-xl
    bg-gradient-to-br from-blue to-blue-light
    flex items-center justify-center
    text-white font-heading font-black text-sm
    shadow-mf'>
                        TF
                    </div>
                    <div className="leading-tight">
                        <span className="block font-heading text-[1.15rem] font-extrabold text-blue tracking-tight">
                            TECH<span className='text-navy'>FLUX</span> HUB
                        </span>
                        <span className='block text-[0.6rem] text-blue-mid/60 uppercase tracking-widest font-medium'>
                           Build Practical Tech & Engineering Skills
                        </span>
                    </div>
                </a>

                {/* Desktop Nav Links */}
                <ul className='hidden lg:flex items-center gap-1 list-none'>
                    {NAV_LINKS.map((link) => (
                        <li key={link.label}
                            className='relative'
                            onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <a href={link.href}
                                className='flex items-center gap-1 px-3 py-2 text-[0.87rem] font-medium
                       text-blue-mid rounded-lg hover:bg-blue-pale hover:text-blue
                       transition-all duration-200 no-underline whitespcae-nowrap'>
                                {link.label}
                                {link.dropdown && <span className="text-[0.65rem] opacity-50">
                                    ▾</span>}
                            </a>

                            {/* The Dropdown Section */}
                            {link.dropdown && activeDropdown === link.label && (
                                <div className="absolute top-[calc(100%+8px)] left-0 bg-white
                               border border-blue-sky rounded-xl shadow-xl
                               p-2 min-w-[220px] z-50 flex flex-col gap-1">
                                    {link.dropdown.map((item) => (
                                        <a key={item} href='#courses'
                                            className='block px-4 py-2 text-[0.84rem] text-blue-mid
                                             rounded-lg hover:bg-blue-pale hover:text-blue
                                             transition-all durration-150 no-underline'

                                        >
                                            {item}
                                        </a>
                                    ))}

                                </div>
                            )}

                        </li>
                    ))}

                </ul>

                {/* Call To Action For Desktop */}
                <div className='hidden lg:flex items-center gap-3'>
                    <a href={`tel:${CONTACT.phones[0]}`} className='btn-outline text-sm py-2 px-4'>
                        📞 Call Us
                    </a>
                    <a href="#courses" className='btn-primary text-sm py-2 px-5'>
                        Register Now  →
                    </a>
                </div>

                {/* Hamburger */}
                <button
                    className='lg:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1'
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label='Toggle menu'>
                    <span className={`block w-6 h-[2.5px] bg-blue rounded transition-all duration-300
                ${menuOpen ? 'rotate-45 translate-y-[7.5px]' : ""}`} />

                    <span className={`block w-6 h-[2.5px] bg-blue rounded transition-all duration-300
                            ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-[2.5px] bg-blue rounded transition-all duration-300
                            ${menuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
                </button>

            </nav>

            {/* ── Mobile Menu ── */}
            {menuOpen && (
                <div className="lg:hidden bg-white border-t border-blue-sky px-6 py-4 flex flex-col gap-2 shadow-lg">
                    {NAV_LINKS.map((link) => (
                        <a key={link.label} href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="py-2 px-3 text-[0.9rem] font-medium text-blue-mid
                         rounded-lg hover:bg-blue-pale hover:text-blue
                         transition-all no-underline">
                            {link.label}
                        </a>
                    ))}
                    <div className="flex gap-3 mt-3 pt-3 border-t border-blue-sky">
                        <a href={`tel:${CONTACT.phones[0]}`} className="btn-outline text-sm flex-1 justify-center">
                            📞 Call Us
                        </a>
                        <a href="#courses" className="btn-primary text-sm flex-1 justify-center">
                            Register →
                        </a>
                    </div>
                </div>
            )}
        </header>
    )


}