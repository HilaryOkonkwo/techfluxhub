import { COURSES } from "../data";

function CourseCard({ course }) {
    return(
        <div className="card group relative overflow-hidden">
            {/* Top color bar */}
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                     style={{backgroundColor: course.color}}/>

            {/*Icon */}
            <div className="w-[54px] h-[54px] rounded-[14px] bg-blue-pale
                            flex items-center justify-center text-2xl mb-4">
                {course.icon}
            </div>

            {/* Name */}
            <h3 className="font-heading text-[1rem] font-bold text-navy mb-2">
                {course.name}
            </h3>

            {/* Desc */}
            <p className="text-[0.84rem] text-blue-mid leading-relaxed mb-4">
                {course.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
                {course.tags.map((tag) =>(
                    <span key={tag}
                    className="text-[0.7rem] font-semibold px-3 py-1
                               rounded-md bg-blue-pale text-blue-mid">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Call To Action */}
            <a href="#contact"
            className="text-[0.82rem] font-bold text-blue
                       inline-flex items-center gap-1
                       hover:text-navy trasition-colors">
                Enroll now →
            </a>
        </div>
    )
    
}

export default function Courses() {
    return(
        <section id="courses" className="py-[88px] px-[6%] bg-white">
            <div className="max-w-[1100px] mx-auto">

            {/* Header */}
            <div className="flex justify-between items-end mb-12 flex-wrap gap-5">
                <div>
                    <span className="chip">Our Courses</span>
                    <h2 className="sec-title">Practical Skills for the <br/>Modern World</h2>
                </div>
                <a href="#contact" className="btn-primary">Register Now →</a>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {COURSES.map((course) => (
                    <CourseCard key={course.id} course={course}/>
                ))}
            </div>

            {/* Working Space callout */}
            <div className="mt-8 bg-blue-pale border-2 border-blue-sky rounded-2xl
                            p-6 flex items-center gap-5">
                <span className="text-4xl">🏢</span>
                <div>
                    <h4 className="font-heading text-[1rem] font-bold text-navy mb-1">
                        Working Space Available
                    </h4>
                    <p className="text-[0.87rem] text-blue-mid">
                        Need a productive space to work, study, or build your project?
                        TechFlux Hub offers a dedicated co-working space for freelancers,
                        students, and startups.{' '}
                        <a href="#contact" className="text-blue font-bold hover:underline">
                            Contact us →
                        </a>
                    </p>
                </div>
            </div>
            </div>
        </section>
    )
}