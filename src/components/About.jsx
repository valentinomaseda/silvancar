import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Atención Personalizada',
      description: 'Un asesor dedicado te acompaña en cada paso del proceso, desde la primer consulta hasta el cierre.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Transparencia Total',
      description: 'Información clara y verificada de cada propiedad. Sin sorpresas, sin letra chica.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Respuesta Rápida',
      description: 'Entendemos que el tiempo es valioso. Respondemos tus consultas en minutos, no en días.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Conocimiento del Mercado',
      description: 'Más de 15 años de experiencia nos permiten ofrecerte el mejor asesoramiento y las mejores oportunidades.',
    },
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Tu socio de confianza en el mercado inmobiliario
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              En Silvancar no solo vendemos o alquilamos propiedades: 
              construimos relaciones de confianza con nuestros clientes.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Nuestra misión es simplificar el proceso inmobiliario, ofreciendo 
              un servicio personalizado que se adapte a tus necesidades y objetivos. 
              Ya sea que estés buscando tu primer hogar, una inversión rentable o 
              necesites vender tu propiedad al mejor precio, estamos aquí para ayudarte.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-emerald-700 mb-1">15+</div>
                <div className="text-sm text-slate-600">Años</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-emerald-700 mb-1">500+</div>
                <div className="text-sm text-slate-600">Propiedades</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-emerald-700 mb-1">98%</div>
                <div className="text-sm text-slate-600">Satisfacción</div>
              </div>
            </div>

            <a
              href="#contacto"
              className="inline-block px-8 py-3 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Conocé más sobre nosotros
            </a>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 bg-slate-50 rounded-xl hover:bg-emerald-50 transition-colors duration-300 border border-transparent hover:border-emerald-200"
              >
                <div className="w-14 h-14 bg-emerald-700 rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
