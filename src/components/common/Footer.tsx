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
            <h2 className="text-lg font-semibold mb-3 text-white-800">Contact</h2>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="mr-2">📍</span>
                <span>Call us on: +91 9354449357<br />(Between 10 am to 6 pm)</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📎</span>
                <span>Mail us on: info@transitley.com</span>
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
              <p className="text-white-400">Helping students achieve their study abroad dreams</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-white-400 hover:text-white">Home</a></li>
                <li><a href="/about" className="text-white-400 hover:text-white">About Us</a></li>
                <li><a href="/contact" className="text-white-400 hover:text-white">Contact</a></li>
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
                <div className="flex space-x-4 mt-4">
                <a href="https://facebook.com/transitley" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg className="w-6 h-6 text-white-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
                  </svg>
                </a>
                <a href="https://twitter.com/transitley" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <svg className="w-6 h-6 text-white-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.936 0 .388.045.765.127 1.124C7.728 8.89 4.1 6.89 1.671 3.905c-.427.734-.666 1.584-.666 2.491 0 1.72.875 3.234 2.205 4.122a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.014-.633A9.936 9.936 0 0 0 24 4.557z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/transitley" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg className="w-6 h-6 text-white-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.809 2.256 6.089 2.243 6.498 2.243 12c0 5.502.013 5.911.072 7.191.059 1.277.353 2.45 1.32 3.417.967.967 2.14 1.261 3.417 1.32 1.28.059 1.689.072 7.191.072s5.911-.013 7.191-.072c1.277-.059 2.45-.353 3.417-1.32.967-.967 1.261-2.14 1.32-3.417.059-1.28.072-1.689.072-7.191s-.013-5.911-.072-7.191c-.059-1.277-.353-2.45-1.32-3.417C21.45.425 20.277.131 19 .072 17.72.013 17.311 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/transitley" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg className="w-6 h-6 text-white-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76 1.75.79 1.75 1.76-.784 1.76-1.75 1.76zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
                  </svg>
                </a>
                <a href="https://youtube.com/@transitley" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg className="w-6 h-6 text-white-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.379 3.5 12 3.5 12 3.5s-7.379 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.207 0 12 0 12s0 3.793.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.621 20.5 12 20.5 12 20.5s7.379 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.793 24 12 24 12s0-3.793-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-white-400">
            © {new Date().getFullYear()} Transitley Pvt Ltd. All rights reserved.
          </div>
        </div>
    </footer>
    );
  }