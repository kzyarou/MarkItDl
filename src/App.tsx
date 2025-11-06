import { Download, Smartphone, Users, MessageCircle, TrendingUp, Shield, Globe, Zap, Leaf, Heart, Star, CheckCircle, Code, Database, Wifi, Lock, ChevronDown, Quote, Award, Target, BarChart3, TrendingDown } from 'lucide-react'
import { useEffect } from 'react'

function App() {
  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    // Observe all elements with scroll animation classes
    const animatedElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale')
    animatedElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-green-100 animate-slide-in-left">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-6">
                <img src="/icon.svg" alt="MarkIt Logo" className="w-full h-full group-hover:animate-bounce-slow" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent animate-gradient">MarkIt</span>
            </div>
            <div className="hidden md:flex space-x-1">
              <a href="#features" className="px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 hover:scale-105 transform">Features</a>
              <a href="#about" className="px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 hover:scale-105 transform">About</a>
              <a href="https://mark-it-iota.vercel.app/auth" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105 transform hover:-translate-y-1">Launch App</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium animate-scale-in hover:bg-green-200 transition-colors cursor-pointer">
                <Star className="w-4 h-4 fill-current animate-pulse-slow" />
                <span>Trusted by 30+ farmers & fisherfolk</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight animate-slide-in-left">
                Empowering Rural{' '}
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent animate-gradient inline-block hover:scale-105 transition-transform">
                  Producers
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl animate-fade-in-up animation-delay-300">
                A digital marketplace connecting farmers and fisherfolk directly with consumers. 
                Fair prices, transparent trade, and accessible technology for rural communities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://mark-it-iota.vercel.app/auth" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-shimmer hover-glow relative overflow-hidden"
                  style={{backgroundSize: '200% 100%', backgroundImage: 'linear-gradient(90deg, rgb(22, 163, 74) 0%, rgb(5, 150, 105) 50%, rgb(22, 163, 74) 100%)'}}
                >
                  <Download className="mr-2 group-hover:animate-bounce" size={20} />
                  Launch App
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a 
                  href="#about" 
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 border-2 border-green-200 rounded-xl hover:bg-green-50 hover:border-green-300 transition-all duration-300 hover:shadow-lg"
                >
                  Learn More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 animate-fade-in-up animation-delay-1000">
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white transition-all duration-300 hover:shadow-lg group hover-lift cursor-pointer">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform animate-pulse-slow">9M+</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">Potential Users</div>
                </div>
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white transition-all duration-300 hover:shadow-lg group hover-lift cursor-pointer">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform animate-pulse-slow">30-50%</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">Income Increase</div>
                </div>
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white transition-all duration-300 hover:shadow-lg group hover-lift cursor-pointer">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform animate-pulse-slow">3</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">Languages</div>
                </div>
              </div>
            </div>
            
            {/* Right side - Poster */}
            <div className="relative animate-slide-in-right animation-delay-300">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-white to-green-50 rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] border border-green-100">
                  <img 
                    src="/poster.svg" 
                    alt="MarkIt Application Poster" 
                    className="w-full h-auto rounded-2xl"
                  />
                  {/* Floating badges */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-xl animate-float hover:scale-110 transition-transform cursor-pointer">
                    <Heart className="w-6 h-6 text-red-500 fill-current animate-pulse-slow" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-xl animate-float animation-delay-1000 hover:scale-110 transition-transform cursor-pointer">
                    <CheckCircle className="w-6 h-6 text-green-600 fill-current animate-pulse-slow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <ChevronDown className="text-green-600 animate-pulse-slow" size={32} />
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="bg-gradient-to-b from-white to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience MarkIt</h2>
            <p className="text-xl text-gray-600">A complete digital marketplace solution for agricultural communities</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
            <div className="group relative bg-gradient-to-br from-white to-green-50 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100 hover-glow cursor-pointer overflow-hidden scroll-animate-scale">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Users className="text-white group-hover:animate-bounce-slow" size={24} />
              </div>
              <div className="relative text-gray-900 font-bold text-lg mb-2">For Producers</div>
              <p className="relative text-gray-600 text-sm leading-relaxed">Create listings, manage harvests, and connect directly with buyers</p>
            </div>
            <div className="group relative bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 hover-glow cursor-pointer overflow-hidden scroll-animate-scale">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Smartphone className="text-white group-hover:animate-bounce-slow" size={24} />
              </div>
              <div className="relative text-gray-900 font-bold text-lg mb-2">For Consumers</div>
              <p className="relative text-gray-600 text-sm leading-relaxed">Browse fresh products, compare prices, and support local farmers</p>
            </div>
            <div className="group relative bg-gradient-to-br from-white to-purple-50 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100 hover-glow cursor-pointer overflow-hidden scroll-animate-scale">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <MessageCircle className="text-white group-hover:animate-bounce-slow" size={24} />
              </div>
              <div className="relative text-gray-900 font-bold text-lg mb-2">Real-Time Chat</div>
              <p className="relative text-gray-600 text-sm leading-relaxed">Negotiate prices and arrange deliveries through instant messaging</p>
            </div>
            <div className="group relative bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-100 hover-glow cursor-pointer overflow-hidden scroll-animate-scale">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Zap className="text-white group-hover:animate-bounce-slow" size={24} />
              </div>
              <div className="relative text-gray-900 font-bold text-lg mb-2">AI Assistant</div>
              <p className="relative text-gray-600 text-sm leading-relaxed">Get help in English, Tagalog, or Waray with "Therese" AI</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 scroll-animate">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Built for Rural Philippines</h3>
                <p className="text-gray-600 mb-6">
                  Developed and tested in Dolores, Eastern Samar, MarkIt is specifically designed 
                  to work in areas with limited connectivity and infrastructure.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Works offline with automatic sync when connected</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Optimized for low-end smartphones and 3G networks</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">No app store required - install directly from browser</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Secure authentication with role-based access control</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Government-backed price guarantee system</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img 
                  src="/poster.svg" 
                  alt="MarkIt Application Features" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Real Impact on Communities</h2>
            <p className="text-lg text-white/90">Measurable results from our pilot program in Eastern Samar</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 group hover-lift cursor-pointer scroll-animate-scale">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <TrendingUp className="text-white group-hover:animate-bounce-slow" size={32} />
              </div>
              <div className="text-4xl font-bold text-white mb-2 animate-pulse-slow">30-50%</div>
              <div className="text-white/80 text-sm">Income Increase</div>
              <div className="text-white/60 text-xs mt-2">For participating producers</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 group hover-lift cursor-pointer scroll-animate-scale">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Users className="text-white group-hover:animate-bounce-slow" size={32} />
              </div>
              <div className="text-4xl font-bold text-white mb-2 animate-pulse-slow">30+</div>
              <div className="text-white/80 text-sm">Active Users</div>
              <div className="text-white/60 text-xs mt-2">Farmers & fisherfolk</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 group hover-lift cursor-pointer scroll-animate-scale">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <TrendingDown className="text-white group-hover:animate-bounce-slow" size={32} />
              </div>
              <div className="text-4xl font-bold text-white mb-2 animate-pulse-slow">40%</div>
              <div className="text-white/80 text-sm">Cost Reduction</div>
              <div className="text-white/60 text-xs mt-2">By eliminating middlemen</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 group hover-lift cursor-pointer scroll-animate-scale">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <BarChart3 className="text-white group-hover:animate-bounce-slow" size={32} />
              </div>
              <div className="text-4xl font-bold text-white mb-2 animate-pulse-slow">9M+</div>
              <div className="text-white/80 text-sm">Market Potential</div>
              <div className="text-white/60 text-xs mt-2">Rural producers in PH</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative bg-white py-16 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4 hover:bg-green-200 transition-colors cursor-pointer">
              Why Choose MarkIt
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Built for rural communities with limited infrastructure</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1 */}
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-green-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 scroll-animate-left">
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-500 rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Smartphone className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Offline-First Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Works seamlessly even with intermittent connectivity. Data syncs automatically when online.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 scroll-animate">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500 rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Direct Connection</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect farmers and fisherfolk directly with consumers, eliminating costly middlemen.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-purple-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 scroll-animate-right">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500 rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <MessageCircle className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Real-Time Messaging</h3>
              <p className="text-gray-600 leading-relaxed">
                Instant communication between producers and buyers with message persistence.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-amber-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500 rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Price Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Transparent pricing with market data visualization and government-backed price guarantees.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-indigo-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500 rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Globe className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Multilingual Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Available in English, Tagalog, and Waray with AI assistant "Therese" for guidance.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-red-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-20 h-20 bg-red-500 rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Secure & Private</h3>
              <p className="text-gray-600 leading-relaxed">
                ISO/IEC 27001 compliant with role-based access control and encrypted data storage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-b from-white to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4 hover:bg-green-200 transition-colors cursor-pointer">
              User Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600">Real feedback from farmers and fisherfolk in Dolores, Eastern Samar</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover-lift hover-glow cursor-pointer transform hover:scale-105 scroll-animate-scale">
              <div className="flex items-center mb-4">
                <Quote className="text-green-600 mr-2 animate-pulse-slow" size={24} />
                <div className="flex space-x-1">
                  <Star className="text-yellow-400 fill-current animate-pulse-slow" size={16} />
                  <Star className="text-yellow-400 fill-current animate-pulse-slow" size={16} />
                  <Star className="text-yellow-400 fill-current animate-pulse-slow" size={16} />
                  <Star className="text-yellow-400 fill-current animate-pulse-slow" size={16} />
                  <Star className="text-yellow-400 fill-current animate-pulse-slow" size={16} />
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "MarkIt helped me sell my fish directly to customers. I now earn 40% more than before. The app is easy to use even with slow internet."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3 animate-pulse-slow">
                  M
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Mario Santos</div>
                  <div className="text-sm text-gray-600">Fisherfolk, Dolores</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover-lift hover-glow cursor-pointer transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Quote className="text-green-600 mr-2 animate-pulse-slow" size={24} />
                <div className="flex space-x-1">
                  <Star className="text-yellow-400 fill-current animate-pulse-slow" size={16} />
                  <Star className="text-yellow-400 fill-current animate-pulse-slow" size={16} />
                  <Star className="text-yellow-400 fill-current animate-pulse-slow" size={16} />
                  <Star className="text-yellow-400 fill-current animate-pulse-slow" size={16} />
                  <Star className="text-yellow-400 fill-current animate-pulse-slow" size={16} />
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Dako nga tabang ini para ha amon. Makakabaton kami hin hustong presyo para ha amon produkto. Salamat MarkIt!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3 animate-pulse-slow">
                  R
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Rosa Dela Cruz</div>
                  <div className="text-sm text-gray-600">Farmer, Dolores</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover-lift hover-glow cursor-pointer transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Quote className="text-green-600 mr-2 animate-pulse-slow" size={24} />
                <div className="flex space-x-1">
                  <Star className="text-yellow-400 fill-current animate-pulse-slow" size={16} />
                  <Star className="text-yellow-400 fill-current animate-pulse-slow" size={16} />
                  <Star className="text-yellow-400 fill-current animate-pulse-slow" size={16} />
                  <Star className="text-yellow-400 fill-current animate-pulse-slow" size={16} />
                  <Star className="text-yellow-400 fill-current animate-pulse-slow" size={16} />
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "As a buyer, I love getting fresh produce directly from farmers. The prices are fair and the AI assistant helps me communicate in Waray."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3 animate-pulse-slow">
                  J
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Juan Reyes</div>
                  <div className="text-sm text-gray-600">Consumer, Tacloban</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4 hover:bg-blue-200 transition-colors cursor-pointer">
              Technology
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built with Modern Tech</h2>
            <p className="text-lg text-gray-600">Enterprise-grade technology optimized for rural connectivity</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 hover-lift cursor-pointer group scroll-animate-scale">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Code className="text-white group-hover:animate-bounce-slow" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">React + TypeScript</h3>
              <p className="text-sm text-gray-600">Modern, type-safe frontend framework</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300 hover-lift cursor-pointer group">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Database className="text-white group-hover:animate-bounce-slow" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Firebase</h3>
              <p className="text-sm text-gray-600">Real-time database and authentication</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300 hover-lift cursor-pointer group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Wifi className="text-white group-hover:animate-bounce-slow" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">PWA Technology</h3>
              <p className="text-sm text-gray-600">Offline-first with service workers</p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl border border-red-200 hover:shadow-lg transition-all duration-300 hover-lift cursor-pointer group">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Lock className="text-white group-hover:animate-bounce-slow" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">ISO Compliant</h3>
              <p className="text-sm text-gray-600">Security and usability standards</p>
            </div>
          </div>
          
          <div className="mt-8 bg-gradient-to-r from-gray-50 to-green-50 rounded-2xl p-6 border border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Open Source & Transparent</h3>
                <p className="text-gray-600">Built with open standards and community feedback</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">ISO 25010</div>
                  <div className="text-xs text-gray-600">Quality Model</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">ISO 9241</div>
                  <div className="text-xs text-gray-600">Usability</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">ISO 27001</div>
                  <div className="text-xs text-gray-600">Security</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About MarkIt</h2>
              <p className="text-lg text-gray-600 mb-4">
                MarkIt is a Progressive Web Application (PWA) designed to bridge the gap between smallholder 
                farmers, fisherfolk, and consumers in rural Philippine communities.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Built with accessibility in mind, MarkIt works on low-end smartphones with minimal data 
                requirements, ensuring that even communities with limited digital infrastructure can participate 
                in fair and transparent agricultural trade.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Developed through rigorous research in Dolores, Eastern Samar, MarkIt addresses systemic 
                inefficiencies in agricultural supply chains by promoting direct producer-to-consumer engagement.
              </p>
              
              <div className="flex items-start space-x-3 mb-4 group hover:translate-x-2 transition-transform duration-300">
                <Zap className="text-green-600 mt-1 group-hover:scale-110 transition-transform" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Lightweight & Fast</h4>
                  <p className="text-gray-600">Optimized for 3G networks and low-RAM devices</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 mb-4 group hover:translate-x-2 transition-transform duration-300">
                <Shield className="text-green-600 mt-1 group-hover:scale-110 transition-transform" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Research-Backed</h4>
                  <p className="text-gray-600">Validated through ISO standards and field testing</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group hover:translate-x-2 transition-transform duration-300">
                <Users className="text-green-600 mt-1 group-hover:scale-110 transition-transform" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Community-Driven</h4>
                  <p className="text-gray-600">Open-source and designed with user feedback</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl scroll-animate-right hover-lift hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <span className="font-semibold">Fair Pricing:</span> Producers receive 30-50% more income by eliminating intermediaries
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <span className="font-semibold">Market Access:</span> Direct connection to consumers, retailers, and institutional buyers
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <span className="font-semibold">Transparency:</span> Real-time pricing analytics and market data visualization
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <span className="font-semibold">Accessibility:</span> Works offline and supports multiple languages
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <span className="font-semibold">AI Assistance:</span> Multilingual support for agricultural practices and platform navigation
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4 hover:bg-green-200 transition-colors cursor-pointer">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about MarkIt</p>
          </div>
          
          <div className="space-y-4">
            <details className="group bg-gradient-to-br from-white to-green-50 border border-green-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer list-none group-hover:text-green-600 transition-colors">
                <span className="font-semibold text-gray-900 text-lg">How do I install MarkIt?</span>
                <ChevronDown className="text-green-600 group-open:rotate-180 transition-transform group-hover:scale-110" size={24} />
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed animate-fade-in-up">
                MarkIt is a Progressive Web App (PWA). Simply visit the web app URL on your smartphone browser, 
                and you'll see an option to "Add to Home Screen" or "Install". No app store required! You can also 
                download the APK file for direct Android installation.
              </p>
            </details>
            
            <details className="group bg-gradient-to-br from-white to-green-50 border border-green-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover-lift cursor-pointer">
              <summary className="flex items-center justify-between cursor-pointer list-none group-hover:text-green-600 transition-colors">
                <span className="font-semibold text-gray-900 text-lg">Does MarkIt work offline?</span>
                <ChevronDown className="text-green-600 group-open:rotate-180 transition-transform group-hover:scale-110" size={24} />
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Yes! MarkIt is designed with offline-first architecture. You can browse listings, create posts, 
                and send messages even without internet. All data will automatically sync when you reconnect.
              </p>
            </details>
            
            <details className="group bg-gradient-to-br from-white to-green-50 border border-green-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover-lift cursor-pointer">
              <summary className="flex items-center justify-between cursor-pointer list-none group-hover:text-green-600 transition-colors">
                <span className="font-semibold text-gray-900 text-lg">What languages are supported?</span>
                <ChevronDown className="text-green-600 group-open:rotate-180 transition-transform group-hover:scale-110" size={24} />
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                MarkIt supports English, Tagalog, and Waray. Our AI assistant "Therese" can help you in all three 
                languages with agricultural advice, platform navigation, and translation assistance.
              </p>
            </details>
            
            <details className="group bg-gradient-to-br from-white to-green-50 border border-green-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover-lift cursor-pointer">
              <summary className="flex items-center justify-between cursor-pointer list-none group-hover:text-green-600 transition-colors">
                <span className="font-semibold text-gray-900 text-lg">Is MarkIt free to use?</span>
                <ChevronDown className="text-green-600 group-open:rotate-180 transition-transform group-hover:scale-110" size={24} />
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Yes! MarkIt is completely free for farmers, fisherfolk, and consumers. Our mission is to empower 
                rural communities, not profit from them. The platform is open-source and community-driven.
              </p>
            </details>
            
            <details className="group bg-gradient-to-br from-white to-green-50 border border-green-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover-lift cursor-pointer">
              <summary className="flex items-center justify-between cursor-pointer list-none group-hover:text-green-600 transition-colors">
                <span className="font-semibold text-gray-900 text-lg">How does MarkIt ensure fair pricing?</span>
                <ChevronDown className="text-green-600 group-open:rotate-180 transition-transform group-hover:scale-110" size={24} />
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                MarkIt provides transparent market data and price analytics. We also integrate government-backed 
                price guarantees to protect producers. By connecting producers directly with buyers, we eliminate 
                middlemen who often take unfair margins.
              </p>
            </details>
            
            <details className="group bg-gradient-to-br from-white to-green-50 border border-green-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover-lift cursor-pointer">
              <summary className="flex items-center justify-between cursor-pointer list-none group-hover:text-green-600 transition-colors">
                <span className="font-semibold text-gray-900 text-lg">What devices can run MarkIt?</span>
                <ChevronDown className="text-green-600 group-open:rotate-180 transition-transform group-hover:scale-110" size={24} />
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                MarkIt is optimized for low-end Android smartphones and works on any device with a modern web browser. 
                It's designed to run smoothly even on devices with limited RAM and slow 3G connections.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="relative py-16 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-white rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 hover:bg-white/30 transition-colors cursor-pointer scroll-animate">
            <Download className="w-4 h-4 animate-bounce-slow" />
            <span>Ready to get started?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 scroll-animate">
            Download MarkIt Today
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto scroll-animate">
            Join farmers and fisherfolk in building a fairer agricultural marketplace. 
            Available as a Progressive Web App for all devices.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            {/* Android Download */}
            <a 
              href="#" 
              className="group relative p-8 bg-white rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden scroll-animate-left"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Smartphone className="text-white group-hover:animate-bounce-slow" size={32} />
                </div>
                <div className="text-sm text-gray-600 mb-2">Download for</div>
                <div className="text-2xl font-bold text-gray-900 mb-3">Android</div>
                <p className="text-sm text-gray-600 mb-4">Get the APK file for offline installation</p>
                <div className="inline-flex items-center text-green-600 font-medium group-hover:translate-x-2 transition-transform">
                  Download Now
                  <span className="ml-2">→</span>
                </div>
              </div>
            </a>
            
            {/* Web App */}
            <a 
              href="https://mark-it-iota.vercel.app/auth" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 bg-white rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Globe className="text-white group-hover:animate-bounce-slow" size={32} />
                </div>
                <div className="text-sm text-gray-600 mb-2">Open as</div>
                <div className="text-2xl font-bold text-gray-900 mb-3">Web App</div>
                <p className="text-sm text-gray-600 mb-4">Access directly from your browser</p>
                <div className="inline-flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                  Launch App
                  <span className="ml-2">→</span>
                </div>
              </div>
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto hover:bg-white/20 transition-all duration-300 hover-lift">
            <div className="flex items-start space-x-4 text-left">
              <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center animate-pulse-slow">
                <Zap className="text-white animate-bounce-slow" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-2">Progressive Web App</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  MarkIt is a PWA that can be installed directly from your browser. No app store required! 
                  Simply visit the web app and click "Add to Home Screen" for the full offline experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4 group cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <span className="text-2xl font-bold animate-gradient bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">MarkIt</span>
              </div>
              <p className="text-gray-400">
                Empowering rural producers through accessible digital technology.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-green-400 transition-all duration-200 hover:translate-x-1 inline-block">Features</a></li>
                <li><a href="#about" className="hover:text-green-400 transition-all duration-200 hover:translate-x-1 inline-block">About</a></li>
                <li><a href="https://mark-it-iota.vercel.app/auth" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-all duration-200 hover:translate-x-1 inline-block">Launch App</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Research</h4>
              <p className="text-gray-400 text-sm">
                Developed and tested in Dolores, Eastern Samar, Philippines. 
                Built with ISO/IEC 25010:2011 and ISO 9241-210:2019 standards.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p className="animate-fade-in-up">&copy; 2025 MarkIt. Open-source digital marketplace for rural communities.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
