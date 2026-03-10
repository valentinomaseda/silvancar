import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property, index }) => {
  const {
    id,
    title,
    type,
    operation,
    price,
    location,
    bedrooms,
    bathrooms,
    area,
    image,
    featured,
  } = property;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm ${
            operation === 'venta' 
              ? 'bg-emerald-700/90' 
              : 'bg-indigo-700/90'
          }`}>
            {operation === 'venta' ? 'EN VENTA' : 'EN ALQUILER'}
          </span>
          
          {featured && (
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/90 text-white backdrop-blur-sm">
              DESTACADA
            </span>
          )}
        </div>

        {/* Overlay with Quick Actions */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <Link
            to={`/propiedad/${id}`}
            className="px-6 py-2.5 bg-white text-slate-900 font-semibold rounded-lg hover:bg-emerald-700 hover:text-white transition-colors duration-200"
          >
            Ver Detalles
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Type */}
        <div className="text-sm text-emerald-700 font-semibold mb-2 uppercase tracking-wide">
          {type}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-emerald-700 transition-colors duration-200">
          {title}
        </h3>

        {/* Location */}
        <div className="flex items-center text-slate-600 mb-4">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm">{location}</span>
        </div>

        {/* Features */}
        <div className="flex items-center justify-between text-slate-600 pb-4 border-b border-slate-200 mb-4">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-sm font-medium">{bedrooms} dorm.</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-sm font-medium">{bathrooms} baños</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <span className="text-sm font-medium">{area} m²</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-600 mb-1">
              {operation === 'venta' ? 'Precio' : 'Alquiler'}
            </p>
            <p className="text-2xl font-bold text-emerald-700">
              ${price.toLocaleString()}
              {operation === 'alquiler' && <span className="text-sm text-slate-600">/mes</span>}
            </p>
          </div>
          <button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-emerald-700 text-slate-600 hover:text-white transition-all duration-200 flex items-center justify-center group-hover:scale-110">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
