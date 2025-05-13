export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 py-8 font-sans">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-blue-800">Transitley</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Download Apps Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-3 text-white-800">Contact us</h2>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="mr-2">📍</span>
                <span>Call us on: +91 9354449357<br />(Between 10 am to 7 pm)</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📎</span>
                <span>Mail us on: contact@Transitley.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* IELTS Test Center Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-white-800">IELTS Test Center</h2>
          <ul className="space-y-2">
            <li className="text-white-600">Free Counselling</li>
            <li className="text-white-600">Study Abroad Intakes</li>
            <li className="text-white-600">IELTS Exam Guidance</li>
            {/* <li className="text-white-600">
              Countries
              <ul className="ml-4 mt-1 space-y-1">
                <li>USA</li>
                <li>UK</li>
                <li>Canada</li>
                <li>Australia</li>
                <li>Ireland</li>
                <li>Germany</li>
              </ul>
            </li> */}
          </ul>
        </div>

        {/* Top Universities Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-white-800">Top Universities</h2>
          <ul className="space-y-2">
            {/* <li className="text-white-600">Top Universities in USA</li> */}
            <li className="text-white-600">Top Universities in UK</li>
            {/* <li className="text-white-600">Top Universities in Canada</li>
            <li className="text-white-600">Top Universities in Australia</li>
            <li className="text-white-600">Top Universities in Ireland</li> */}
          </ul>

          {/* <h2 className="text-lg font-semibold mt-6 mb-3 text-white-800">Calculators</h2>
          <ul className="space-y-2">
            <li className="text-white-600">IELTS Coaching</li>
            <li className="text-white-600">Cue Card Categories</li>
            <li className="text-white-600">IELTS Writing Task 2 Categories</li>
          </ul> */}
        </div>

        {/* Company Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-white-800">Company</h2>
          <ul className="space-y-2">
            <li className="text-white-600">About Us</li>
            <li className="text-white-600">Careers</li>
            {/* <li className="text-white-600">Leap in the news!</li> */}
          </ul>

          {/* <h2 className="text-lg font-semibold mt-6 mb-3 text-white-800">Our Partners</h2>
          <ul className="space-y-2">
            <li className="text-white-600">Yocket study abroad</li>
            <li className="text-white-600">GEEBEE</li>
          </ul> */}
        </div>

        {/* LOR & SOP Section */}
        {/* <div>
          <h2 className="text-lg font-semibold mb-3 text-white-800">LOR & SOP</h2>
          <ul className="space-y-2">
            <li className="text-white-600">Duolingo English Test</li>
            <li className="text-white-600">IELTS</li>
            <li className="text-white-600">Other Exams</li>
            <li className="text-white-600">Top Universities</li>
            <li className="text-white-600">IELTS Practice Test</li>
          </ul>
        </div> */}

        {/* Our Offerings Section */}
        {/* <div>
          <h2 className="text-lg font-semibold mb-3 text-white-800">Our Offerings</h2>
          <ul className="space-y-2">
            <li className="text-white-600">Free IELTS Masterclass</li>
            <li className="text-white-600">Talk to a counsellor</li>
            <li className="text-white-600">Twinning Programs</li>
            <li className="text-white-600">Cost Calculator</li>
            <li className="text-white-600">Blog</li>
            <li className="text-white-600">Study Abroad Knowledge Center</li>
            <li className="text-white-600">Events</li>
          </ul>
        </div> */}

        {/* Our Products Section */}
        {/* <div>
          <h2 className="text-lg font-semibold mb-3 text-white-800">Our Products</h2>
          <ul className="space-y-2">
            <li className="text-white-600">Finance</li>
            <li className="text-white-600">Advantage</li>
            <li className="text-white-600">IELTS Prep by Transitley</li>
          </ul>

          <h2 className="text-lg font-semibold mt-6 mb-3 text-white-800">Exam Information</h2>
          <ul className="space-y-2">
            <li className="text-white-600">IELTS</li>
            <li className="text-white-600">TOEFL</li>
            <li className="text-white-600">SAT</li>
            <li className="text-white-600">PTE</li>
            <li className="text-white-600">GRE</li>
            <li className="text-white-600">GMAT</li>
          </ul>
        </div> */}
      </div>

      <hr className="my-8 border-gray-200" />
    </div>


    <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Transitley</h3>
              <p className="text-white-400">Helping students achieve their study abroad dreams since 2025.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-white-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-white-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-white-400 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-white-400">info@transitley.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-white-400">
            © {new Date().getFullYear()} Transitley. All rights reserved.
          </div>
        </div>


    </footer>
    );
  }