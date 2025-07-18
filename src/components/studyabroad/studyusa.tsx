import React from "react";

const studyUsaData = {
    title: "Study in the USA: Your Gateway to World-Class Education",
    intro:
        "The United States has long been a dream destination for international students—and for good reason. Home to over 5,000 universities, world-renowned Ivy League institutions, and diverse academic programs, studying in the USA opens doors to a global future.",
    whyChoose: [
        {
            label: "Top-Ranked Universities",
            desc: "7 of the world's top 10 universities are in the USA (QS World Rankings 2025).",
        },
        {
            label: "Cutting-Edge Research",
            desc: "The U.S. spends over $700 billion annually on R&D—ideal for students in STEM, business, healthcare, and more.",
        },
        {
            label: "Diverse Courses & Flexible Curriculum",
            desc: "Choose majors, minors, electives, or even switch your stream after enrolling.",
        },
        {
            label: "Global Career Opportunities",
            desc: "OPT (Optional Practical Training) & CPT (Curricular Practical Training) allow work experience in the U.S. during/after study.",
        },
        {
            label: "Vibrant Campus Life",
            desc: "Over 1 million international students study in the USA, offering a multicultural, welcoming experience.",
        },
    ],
    institutions: [
        {
            label: "Community Colleges",
            desc: "2-year associate degrees, lower tuition, with option to transfer to a 4-year university.",
        },
        {
            label: "Public Universities",
            desc: "State-funded, larger class sizes, lower fees for in-state students.",
        },
        {
            label: "Private Universities",
            desc: "Smaller class sizes, often more specialized programs.",
        },
        {
            label: "Ivy League Schools",
            desc: "Prestigious, competitive, and globally respected (e.g., Harvard, Yale, Princeton).",
        },
    ],
    popularCourses: [
        "Computer Science & IT",
        "Engineering (Mechanical, Civil, AI/Robotics)",
        "Business Administration & MBA",
        "Health & Life Sciences (Biotech, Pharmacy, Public Health)",
        "Data Science & Analytics",
        "Arts, Design & Communication",
        "Law and Public Policy",
    ],
    costs: [
        { degree: "Associate Degree", range: "$6,000 – $20,000" },
        { degree: "Undergraduate", range: "$20,000 – $45,000" },
        { degree: "Graduate (Master's)", range: "$25,000 – $55,000" },
        { degree: "MBA Programs", range: "$35,000 – $80,000" },
    ],
    costNote:
        "Public universities are usually more affordable than private institutions. Scholarships, assistantships, and on-campus jobs can reduce costs significantly.",
    entryRequirements: [
        "Academic transcripts (minimum GPA varies by program)",
        "English language proficiency:",
        "TOEFL iBT: 79–100",
        "IELTS: 6.5–7.5",
        "Standardized test scores (if required): GRE, GMAT, SAT, ACT",
        "Statement of Purpose (SOP)",
        "Letters of Recommendation (LORs)",
        "Passport & Financial documents",
    ],
    visa: [
        "I-20 Form issued by your university",
        "SEVIS Fee payment proof",
        "Visa application form (DS-160)",
        "Visa interview at U.S. Embassy",
    ],
    visaTip:
        "✅ Pro tip: Apply early! Some programs have deadlines 10–12 months in advance.",
    work: [
        "On-Campus Jobs: Up to 20 hours/week during term.",
        "CPT (Curricular Practical Training): Gain work experience during your course.",
        "OPT (Optional Practical Training): Work up to 12 months after graduation; STEM graduates get 24-month extension.",
    ],
    transitleyHelp: [
        "University & course shortlisting",
        "Application & document support",
        "Visa guidance & mock interviews",
        "Student loans & forex assistance",
        "Flight tickets",
    ],
    cta: {
        title: "Ready to Begin Your U.S. Journey?",
        desc: "Let us guide you every step of the way—from choosing the right university to landing in the U.S. stress-free.",
        action: "👉 Get Started Today",
        contact:
            "📞 Talk to our advisors | ✉️ info@transitley.com | 🌐 transitley.com",
    },
};

type SectionProps = {
    title: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    bgColor?: string;
};

const Section: React.FC<SectionProps> = ({ title, icon, children, bgColor = "bg-white" }) => (
    <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
            {icon && <span className="text-3xl">{icon}</span>}
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {title}
            </h2>
        </div>
        <div className={`${bgColor} rounded-2xl p-6 shadow-xl border border-gray-100`}>
            {children}
        </div>
    </section>
);

type CardProps = React.PropsWithChildren<{
    gradient?: string;
    hoverGradient?: string;
}>;

const Card: React.FC<CardProps> = ({ children, gradient = "from-blue-50 to-indigo-50", hoverGradient = "from-blue-100 to-indigo-100" }) => (
    <div className={`bg-gradient-to-br ${gradient} hover:bg-gradient-to-br hover:${hoverGradient} shadow-lg hover:shadow-xl rounded-xl p-6 border border-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 transform`}>
        {children}
    </div>
);

const StudyUSA = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                        {studyUsaData.title}
                    </h1>
                </div>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                    {studyUsaData.intro}
                </p>
            </div>

            {/* Why Choose USA */}
            <Section title="Why Choose the USA for Your Studies?" icon="🌟" bgColor="bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {studyUsaData.whyChoose.map((item, index) => (
                        <Card 
                            key={item.label}
                            gradient={index % 2 === 0 ? "from-blue-50 to-cyan-50" : "from-purple-50 to-pink-50"}
                            hoverGradient={index % 2 === 0 ? "from-blue-100 to-cyan-100" : "from-purple-100 to-pink-100"}
                        >
                            <div className="font-bold text-lg text-gray-800 mb-2">{item.label}</div>
                            <div className="text-gray-600">{item.desc}</div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Institution Types */}
            <Section title="Types of Higher Education Institutions" icon="🏛️" bgColor="bg-gradient-to-r from-emerald-50 to-teal-50">
                <div className="grid md:grid-cols-2 gap-6">
                    {studyUsaData.institutions.map((item, index) => (
                        <Card 
                            key={item.label}
                            gradient={index % 2 === 0 ? "from-emerald-50 to-teal-50" : "from-green-50 to-emerald-50"}
                            hoverGradient={index % 2 === 0 ? "from-emerald-100 to-teal-100" : "from-green-100 to-emerald-100"}
                        >
                            <div className="font-bold text-lg text-gray-800 mb-2">{item.label}</div>
                            <div className="text-gray-600">{item.desc}</div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Popular Courses */}
            <Section title="Popular Courses Among International Students" icon="📚" bgColor="bg-gradient-to-r from-orange-50 to-red-50">
                <div className="flex flex-wrap gap-4">
                    {studyUsaData.popularCourses.map((course, index) => (
                        <span
                            key={course}
                            className={`px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                                index % 4 === 0 ? 'bg-gradient-to-r from-orange-400 to-red-400 text-white' :
                                index % 4 === 1 ? 'bg-gradient-to-r from-blue-400 to-purple-400 text-white' :
                                index % 4 === 2 ? 'bg-gradient-to-r from-green-400 to-teal-400 text-white' :
                                'bg-gradient-to-r from-pink-400 to-purple-400 text-white'
                            }`}
                        >
                            {course}
                        </span>
                    ))}
                </div>
            </Section>

            {/* Cost Table */}
            <Section title="Cost of Studying in the USA (2025 Estimates)" icon="💰" bgColor="bg-gradient-to-r from-yellow-50 to-orange-50">
                <div className="overflow-x-auto">
                    <table className="w-full rounded-2xl overflow-hidden shadow-lg">
                        <thead>
                            <tr className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white">
                                <th className="py-4 px-6 text-left font-bold">Degree Level</th>
                                <th className="py-4 px-6 text-left font-bold">Average Annual Tuition (USD)</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {studyUsaData.costs.map((row, index) => (
                                <tr key={row.degree} className={index % 2 === 0 ? "bg-yellow-50" : "bg-white"}>
                                    <td className="py-4 px-6 font-medium text-gray-800">{row.degree}</td>
                                    <td className="py-4 px-6 font-semibold text-orange-600">{row.range}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl border border-yellow-200">
                    <p className="text-sm text-orange-800 flex items-center gap-2">
                        <span className="text-lg">💡</span>
                        <span className="font-medium">{studyUsaData.costNote}</span>
                    </p>
                </div>
            </Section>

            {/* Entry Requirements */}
            <Section title="Entry Requirements" icon="📋" bgColor="bg-gradient-to-r from-indigo-50 to-blue-50">
                <div className="space-y-3">
                    {studyUsaData.entryRequirements.map((req, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                            <span className="text-indigo-500 mt-1 text-lg">•</span>
                            <span className="text-gray-700 font-medium">{req}</span>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Visa Information */}
            <Section title="USA Student Visa (F1 Visa)" icon="🎓" bgColor="bg-gradient-to-r from-purple-50 to-pink-50">
                <div className="space-y-3">
                    {studyUsaData.visa.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                            <span className="text-purple-500 mt-1 text-lg">•</span>
                            <span className="text-gray-700 font-medium">{item}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl border border-green-200">
                    <p className="text-green-800 font-semibold">{studyUsaData.visaTip}</p>
                </div>
            </Section>

            {/* Work Information */}
            <Section title="Work While You Study" icon="💼" bgColor="bg-gradient-to-r from-teal-50 to-cyan-50">
                <div className="space-y-3">
                    {studyUsaData.work.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                            <span className="text-teal-500 mt-1 text-lg">•</span>
                            <span className="text-gray-700 font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Transitley Help */}
            <Section title="How Transitley Can Help" icon="🤝" bgColor="bg-gradient-to-r from-green-50 to-emerald-50">
                <div className="flex flex-wrap gap-4">
                    {studyUsaData.transitleyHelp.map((item, i) => (
                        <span
                            key={i}
                            className="bg-gradient-to-r from-green-400 to-emerald-400 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-center shadow-2xl border border-white/20 backdrop-blur-lg">
                <h2 className="text-3xl font-bold mb-4 text-white">{studyUsaData.cta.title}</h2>
                <p className="mb-6 text-white/90 text-lg">{studyUsaData.cta.desc}</p>
                <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
                    <p className="font-bold mb-4 text-white text-xl">{studyUsaData.cta.action}</p>
                    <p className="text-white/90">{studyUsaData.cta.contact}</p>
                </div>
            </div>
        </div>
    </div>
);

export default StudyUSA;