import { STATS, COURSES, CONTACT } from '../data'

const previewCourses = COURSES.slice(0, 6)

export default function Hero() {
    return(
        <section id='home'
        className='relative min-h-screen flex items-center overflow-hidden
                   bg-gradient-to-br from-navy-dark via-blue to-blue-light
                   px-[6%] py-[88px]'>

        {/* Background dot grid */}
        <div className='hero-grid-bg absolute inset-0 pointer-events-none'/>
        
        {/*Glow orb */}
        <div className='absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full
                        bg-gradient-radial from-white/8 to-transparent pointer-events-none'/>

        <div className='relative z-10 max-w-[1100px] mx-auto w-full
                        grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center'>
        
        {/* — Left: Copy — */}
        <div>
            {/* Badge */}
            <div className='inine-flex items-center gap-2
                            bg-white/15 border border-white/30
                            text-white text-xs font-bold uppercase tracking-widest
                            px-4 py-2 rounded-full mb-6 w-fit'>
            <span className='w-2 h-2 rounded-full bg-blue-sky pulse-dot'/>
            Now Enrolling — Join Us Today!
            </div>
        
        {/* Headline */}
        <h1 className='font-heading text-[clamp(2.4rem,4.5vw,4rem)] font-black
                       text-white uppercase leading-[1.08] mb-5 tracking-tight'>
                        LEVEL UP<br/>
          <span className='text-[0.38em] font-medium italic normal-case tracking-normal
                           text-white/75 align-middle'> With </span>
          TECH<br/>
          <span className='gradient-text'>SKILLS</span>
        </h1>

        {/* Subtext */}
        <p className='text-white/72 text-base leading-relaxed max-w-[460px] mb-8'>
            Join <strong className='text-white'>Techflux Hub</strong> to get started on a career-changing journey
            in Information Technology, Solar Energy and Electrical Engineering design
            — practical training that gets you job-ready fast.
        </p>

        {/* CTA Buttons */}
        <div className='flex flex-wrap gap-4 mb-12'>
            <a href='#courses' className='btn-white text-base py-3 px-7'>
              🚀 Explore Courses  
            </a>
            <a href='#contact' className='btn-ghost-white text-base py-3 px-7'>
             📍 Visit Us
            </a>
        </div>
        {/* Stats */}
        <div className='flex gap-8 pt-6 border-t border-white/15 flex-wrap'>
            {STATS.map((s) => (
                <div key={s.label}>
                <div className='font-heading text-[1.9rem] font-black text-white leading-none mb-1'>
                    {s.num}
                </div>
                <div className='text-[0.74rem] text-white/50 uppercase tracking-widest'>
                    {s.label}
                </div>
                </div>
            ))}
        </div>
        </div>

        {/*— Right: Preview Cards — */}
        <div className='hidden lg:flex flex-col gap-4'>
            {/* Courses preview */}
            <div className='bg-white/12 backdrop-blur-md border border-white/20 rounded-2xl p-7'>
                <div className='flex items-center gap-3 text-[0.8rem] font-extrabold
                                uppercase tracking-widest text-white mb-5'>
                    Our Courses
                    <div className='flex-1 h-px bg-white/15'/>
                </div>
                <ul className='flex flex-col gap-3'>
                    {previewCourses.map((c) => (
                        <li key={c.id} className='flex items-center gap-3 text-[0.87rem] text-white/88 font-medium'>
                          <span className='w-2 h-2 rounded-full bg-blue-sky flex-shrink-0'/>
                            {c.name}
                        </li>
                    ))}
                </ul>
                <div>
                    ...and {COURSES.length - previewCourses.length} more.{' '}
                    <a href='#courses' className='text-white font-bold hover:underline'>View all →</a>
                </div>
            </div>

            {/* Location Card */}
            <div className='bg-white/10 border border-white/18 rounded-2xl p-5
                            flex items-center gap-4'>
                <span className='text-3xl'>📍</span>
                <div className='text-[0.82rem] text-white/60 leading-relaxed'>
                    <strong className='text-white block text-[0.9rem] mb-1'>
                        178 Dr. Cletus Ibeto Road
                    </strong>
                    Behind Water Works Amuko, Uruagu Nnewi, Anambra State
                </div>
            </div>
            {/*Phone Quick-dial*/}
            <a href={`tel:${CONTACT.phones[0]}`}
                className='bg-white/10 border border-white/18 rounded-2xl p-5 '>
                <span className='text-3xl'>📞</span>
                <div className='text-[0.7rem] text-white/40 uppercase tracking-widest mb-1'>
                    Call to Register
                </div>
                <div className='text-white font-bold font-heading text-lg group-hover:text-blue-sky transition-colors'>
                    {CONTACT.phones[0]}
                </div>
            </a>
        </div>
        </div>
        </section>
    )
}