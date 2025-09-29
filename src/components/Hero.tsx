import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Su Hnin Htet
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
              Business Computing and IT developer
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions and bringing ideas to life through 
              technology. I specialize in building beautiful, functional applications that make 
              a difference.
            </p>

            <div className="flex justify-center space-x-6">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Get In Touch
              </a>
              <a
                href="#portfolio"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
              >
                View Work
              </a>
            </div>

            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/hsuhninhtet"
                className="p-3 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="http://linkedin.com/in/su-hnin-htet-73150a230"
                className="p-3 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:hsuhninhtet12@gmail.com"
                className="p-3 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
}