import React from 'react';
import { ArrowRight, BookOpen, Star, Users, CheckCircle, ExternalLink, MessageCircle, Code, Heart } from 'lucide-react';

export default function App() {
  
  // PASTE YOUR GOOGLE FORM LINK HERE
  const GOOGLE_FORM_LINK = "https://forms.gle/vWh9EzoWYGQr34it8"; 

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-800">EduPortal</span>
            </div>
            
            <a 
              href={GOOGLE_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 px-4 py-2 rounded-full text-sm font-semibold transition"
            >
              Register Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 text-center">
          <div className="inline-block bg-indigo-800 rounded-full px-4 py-1.5 text-sm font-medium text-indigo-200 mb-6 border border-indigo-700">
            Programming for Everyone
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Master Coding Without the <br className="hidden md:block" />
            <span className="text-yellow-400">Language Barrier</span>
          </h1>
          <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Don't let English stop you from becoming a developer. We teach modern programming concepts in your own language.
          </p>
          
          <a 
            href={GOOGLE_FORM_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-yellow-400 text-indigo-900 hover:bg-yellow-300 font-bold py-4 px-8 rounded-full text-lg transition transform hover:scale-105 shadow-lg"
          >
            <span>Start Learning Today</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* NEW SECTION: Language Barrier Solution */}
      <div className="py-20 bg-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
            
            {/* Left Content */}
            <div className="p-10 md:p-12 md:w-3/5 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-indigo-600 font-bold uppercase tracking-wider text-sm mb-4">
                <MessageCircle className="w-5 h-5" />
                <span>Our Teaching Method</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We Speak Your Language
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Programming is a skill, not a language test. We have <strong>expert teachers</strong> who specialize in breaking down complex coding concepts.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                If a student does not understand English perfectly, our instructors will switch to your <strong>Mother Tongue</strong> to ensure you grasp the logic completely.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="font-medium text-gray-700">Urdu Explanation</span>
                </div>
                
                <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="font-medium text-gray-700">Balochi Support</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="font-medium text-gray-700">Sindhi Guide</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="font-medium text-gray-700">Pashto Help</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="bg-indigo-600 md:w-2/5 p-10 flex flex-col items-center justify-center text-white text-center">
              <Heart className="w-16 h-16 text-pink-400 mb-6 animate-pulse" />
              <h3 className="text-2xl font-bold mb-2">No More Confusion</h3>
              <p className="text-indigo-200">
                Ask questions freely in the language you are most comfortable with.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition duration-300 text-center bg-gray-50 hover:bg-white group">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-600 group-hover:text-white transition">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Programmers</h3>
              <p className="text-gray-500">Learn from industry professionals who know how to code and how to teach.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition duration-300 text-center bg-gray-50 hover:bg-white group">
              <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-pink-600 group-hover:text-white transition">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Interactive Classes</h3>
              <p className="text-gray-500">Live sessions where you can interact directly with mentors in your language.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition duration-300 text-center bg-gray-50 hover:bg-white group">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-600 group-hover:text-white transition">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Certified Skills</h3>
              <p className="text-gray-500">Gain practical skills that help you get hired, regardless of your English level.</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a 
                href={GOOGLE_FORM_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition text-lg"
            >
                Start Registration
                <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="bg-indigo-600 p-1.5 rounded">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl">EduPortal</span>
            </div>
          <p className="text-gray-400 text-sm">© 2024 EduPortal. Breaking Barriers in Education.</p>
        </div>
      </footer>
    </div>
  );
}