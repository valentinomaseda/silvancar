import { useState } from 'react';
import { motion } from 'framer-motion';

const ValuationBanner = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    address: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de tasación:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyType: '',
        address: '',
      });
    }, 3000);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="tasaciones" className="py-20 bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4">
              Tasación Gratuita
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Querés saber cuánto vale tu propiedad?
            </h2>
            <p className="text-lg text-emerald-50 mb-8 leading-relaxed">
              Obtené una tasación profesional y gratuita de tu propiedad. 
              Nuestros expertos analizan el mercado para ofrecerte el valor más preciso.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {[
                { text: 'Tasación profesional sin compromiso', icon: '✓' },
                { text: 'Análisis completo del mercado', icon: '✓' },
                { text: 'Respuesta en menos de 24 horas', icon: '✓' },
                { text: 'Asesoramiento personalizado', icon: '✓' },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center"
                >
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">{benefit.icon}</span>
                  </div>
                  <span className="text-emerald-50">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-6 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold">2000+</div>
                <div className="text-emerald-100 text-sm">Tasaciones realizadas</div>
              </div>
              <div>
                <div className="text-3xl font-bold">95%</div>
                <div className="text-emerald-100 text-sm">Precisión</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Solicitá tu tasación gratuita
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                        placeholder="Juan Pérez"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                        placeholder="juan@ejemplo.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                        Teléfono *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                        placeholder="+54 9 11 1234-5678"
                      />
                    </div>

                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-semibold text-slate-700 mb-2">
                        Tipo de propiedad *
                      </label>
                      <select
                        id="propertyType"
                        required
                        value={formData.propertyType}
                        onChange={(e) => handleChange('propertyType', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                      >
                        <option value="">Seleccioná una opción</option>
                        <option value="casa">Casa</option>
                        <option value="departamento">Departamento</option>
                        <option value="terreno">Terreno</option>
                        <option value="local">Local Comercial</option>
                        <option value="oficina">Oficina</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-semibold text-slate-700 mb-2">
                        Dirección de la propiedad *
                      </label>
                      <input
                        id="address"
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) => handleChange('address', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                        placeholder="Calle 123, Ciudad"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-emerald-700 text-white font-bold rounded-lg hover:bg-emerald-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      Solicitar Tasación Gratuita
                    </button>

                    <p className="text-xs text-slate-500 text-center">
                      Al enviar el formulario, aceptás nuestros términos y condiciones
                    </p>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Solicitud enviada!</h3>
                  <p className="text-slate-600">Te contactaremos dentro de las próximas 24 horas.</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValuationBanner;
