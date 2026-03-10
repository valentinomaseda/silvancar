import { motion } from 'framer-motion';
import SearchBar from './SearchBar';

const Hero = () => {
  const handleSearch = (searchData) => {
    console.log('Búsqueda:', searchData);
    // Aquí se implementaría la lógica de búsqueda
    const element = document.getElementById('propiedades');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-900/75 to-emerald-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Text */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-emerald-700/20 text-emerald-300 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-emerald-700/30">
                Tu inmobiliaria de confianza
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Encontrá la propiedad <br />
                <span className="text-emerald-400">de tus sueños</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
                En Silvancar te acompañamos en cada paso del proceso. 
                Ofrecemos atención personalizada, transparencia y el mejor asesoramiento del mercado inmobiliario.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-8 mb-12"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">500+</div>
                <div className="text-slate-300 text-sm">Propiedades</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">15+</div>
                <div className="text-slate-300 text-sm">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">2000+</div>
                <div className="text-slate-300 text-sm">Clientes satisfechos</div>
              </div>
            </motion.div>
          </div>

          {/* Search Bar */}
          <SearchBar onSearch={handleSearch} variant="hero" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <a href="#propiedades" className="flex flex-col items-center text-white hover:text-emerald-400 transition-colors duration-200">
          <span className="text-sm mb-2">Ver propiedades</span>
          <motion.svg
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </motion.svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
