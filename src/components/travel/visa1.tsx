import React from 'react'

export default function visawithsolicit() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900">
      {/* Container */}
      <header className="bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">Your Fast-Track to the UK — Study, Work, Innovate & Settle</h1>
            <p className="mt-4 text-lg md:text-xl opacity-90">Backed by our <strong>in-house immigration solicitor</strong>, Transitley guides you through Global Talent, Innovator Founder, Student admissions and ILR applications — end-to-end.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a className="inline-flex items-center justify-center rounded-lg bg-white text-violet-700 font-semibold px-5 py-3 shadow hover:shadow-lg" href="https://docs.google.com/forms/d/1-fOcqfMKJXuq7wHnUhZ3xjYxY3_jPFSuE6-ml9o3hSc">Book Free Consultation</a>
              <a className="inline-flex items-center justify-center rounded-lg border border-white/30 text-white px-4 py-3" href="#services">See Services</a>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex-shrink-0 bg-white/10 px-3 py-2 rounded-lg"> 
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2v7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9v13h12V9" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-sm opacity-90">In-house UK Immigration Solicitor</p>
                <p className="text-sm font-semibold">Legal advice · Endorsements · Complex cases</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            {/* Illustration card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10">
                <div>
                  <h2 className="text-lg font-bold mb-4 text-center uppercase">Visa & Immigration Services</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm">
                      <li><strong>• Sponsor Licence</strong></li>
                      <li><strong>• Skilled Worker Visa Application</strong></li>
                      <li><strong>• Global Talent Visa</strong></li>
                      <li><strong>• COS Work</strong></li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li><strong>• Dependant Visa</strong></li>
                      <li><strong>• ILR Application</strong></li>
                      <li><strong>• FLRM (Family Visa)</strong></li>
                      <li><strong>• Youth Mobility Visa</strong></li>
                      <li><strong>• High Potential Visa</strong></li>
                    </ul>
                  </div>
                </div>

              <div className="mt-4">
                <p className="text-sm opacity-80">Success stories: Students, entrepreneurs & researchers from 30+ countries.</p>
                <div className="mt-3 flex gap-2">
                  <div className="text-xs bg-white/5 rounded px-2 py-1">Global Talent</div>
                  <div className="text-xs bg-white/5 rounded px-2 py-1">Innovator Founder</div>
                  <div className="text-xs bg-white/5 rounded px-2 py-1">Student Admissions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Services grid */}
        <section id="services" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-white rounded-xl p-6 shadow">
            <h3 className="font-semibold text-lg">Global Talent Visa (GTV)</h3>
            <p className="mt-2 text-sm opacity-80">For leaders & emerging leaders in tech, research, arts & business. We handle endorsements, evidence packages and applications — helping you reach ILR faster.</p>
            <ul className="mt-3 text-sm space-y-2">
              <li>• Expert assessment & endorsement strategy</li>
              <li>• Evidence collation & personal statements</li>
              <li>• Application submission & solicitor review</li>
            </ul>
          </article>

          <article className="bg-white rounded-xl p-6 shadow">
            <h3 className="font-semibold text-lg">Innovator Founder Visa</h3>
            <p className="mt-2 text-sm opacity-80">Support for founders with scalable, innovative business ideas. Business plan creation, endorsement routes, viability & UK set-up guidance.</p>
            <ul className="mt-3 text-sm space-y-2">
              <li>• Market-fit & UK traction planning</li>
              <li>• Endorsement-ready business plan</li>
              <li>• Compliance & sponsor liaison</li>
            </ul>
          </article>

          <article className="bg-white rounded-xl p-6 shadow">
            <h3 className="font-semibold text-lg">Student Admissions & Visas</h3>
            <p className="mt-2 text-sm opacity-80">University placement, CAS management, visa application and post-arrival support — designed for international students and their families.</p>
            <ul className="mt-3 text-sm space-y-2">
              <li>• University shortlisting & applications</li>
              <li>• CAS & Student visa assistance</li>
              <li>• Graduate transition & accommodation</li>
            </ul>
          </article>
        </section>

        {/* Settlement & ILR */}
        <section className="mt-10 bg-gradient-to-r from-violet-50 to-white rounded-xl p-6 border">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">Settlement (ILR & SET(P))</h3>
              <p className="mt-2 text-sm opacity-80">Guidance for Indefinite Leave to Remain, SET(P) and routes to British citizenship. Complex case handling with solicitor oversight.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <a className="inline-flex items-center rounded-lg bg-violet-700 text-white px-4 py-3 font-semibold shadow" href="https://docs.google.com/forms/d/1-fOcqfMKJXuq7wHnUhZ3xjYxY3_jPFSuE6-ml9o3hSc">Speak to a Solicitor</a>
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2 bg-white rounded-xl p-6 shadow">
            <h3 className="text-lg font-semibold">Why Transitley?</h3>
            <ul className="mt-4 space-y-3 text-sm opacity-90">
              <li>• In-house immigration solicitor for legal accuracy & complex cases</li>
              <li>• End-to-end platform: admissions, visa, accommodation & support</li>
              <li>• Special focus on Global Talent, Innovator Founder & student journeys</li>
              <li>• Transparent pricing – clear steps and timelines</li>
            </ul>
          </div>

          <aside className="bg-white rounded-xl p-6 shadow">
            <h4 className="font-semibold">Success Snapshot</h4>
            <p className="mt-2 text-sm opacity-80">30+ countries served · 200+ applications assisted · 95% satisfaction</p>

            <div className="mt-4">
              <div className="text-xs uppercase font-medium text-violet-700">Trusted</div>
              <div className="mt-2 text-sm">In-house solicitor · Endorsement partners · University links</div>
            </div>
          </aside>
        </section>

        {/* Testimonials */}
        <section className="mt-10">
          <h3 className="text-lg font-semibold">What clients say</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <blockquote className="bg-white p-4 rounded shadow">"Transitley made my Global Talent endorsement clear and fast. The solicitor review was the difference." <div className="mt-2 text-xs opacity-70">— Amit Patel (Researcher, India)</div></blockquote>
            <blockquote className="bg-white p-4 rounded shadow">"Our founder visa plan was solid — they helped with the business plan and endorsement submission." <div className="mt-2 text-xs opacity-70">— Oluwaseun (Founder, Nigeria)</div></blockquote>
            <blockquote className="bg-white p-4 rounded shadow">"Student admission + visa done in weeks. Settling support was top notch." <div className="mt-2 text-xs opacity-70">— Shenzhou (Student, China)</div></blockquote>
          </div>
        </section>

        {/* CTA strip */}
        <section id="book" className="mt-12 rounded-xl p-8 bg-violet-700 text-white flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">Ready to start your UK journey?</h3>
            <p className="mt-2 text-sm opacity-90">Book a free consultation with our immigration solicitor — get a personalised route plan for GTV, Innovator Founder, Student or ILR today.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <a className="inline-flex items-center rounded-lg bg-white text-violet-700 px-5 py-3 font-semibold" href="https://docs.google.com/forms/d/1-fOcqfMKJXuq7wHnUhZ3xjYxY3_jPFSuE6-ml9o3hSc">Book Free Consultation</a>
          </div>
        </section>

      </main>

     
    </div>
  )
}
