import { useState } from 'react';
import { motion } from 'framer-motion';

const SearchBar = ({ onSearch, variant = 'default' }) => {
  const [searchData, setSearchData] = useState({
    type: 'venta',
    propertyType: '',
    location: '',
    priceRange: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchData);
    }
  };

  const handleChange = (field, value) => {
    setSearchData(prev => ({ ...prev, [field]: value }));
  };

  const isHero = variant === 'hero';

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      onSubmit={handleSubmit}
      className={`${
        isHero 
          ? 'bg-white rounded-2xl shadow-2xl p-6' 
          : 'bg-white rounded-xl shadow-lg p-4'
      }`}
    >
      <div className={`grid ${isHero ? 'grid-cols-1 md:grid-cols-5' : 'grid-cols-1 md:grid-cols-4'} gap-4`}>
        {/* Tipo de Operación */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-slate-700 mb-2">
            Operación
          </label>
          <div className="flex bg-slate-100 rounded-lg p-1">
            <button
              type="button"
              onClick={() => handleChange('type', 'venta')}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-200 ${
                searchData.type === 'venta'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'text-slate-700 hover:text-emerald-700'
              }`}
            >
              Venta
            </button>
            <button
              type="button"
              onClick={() => handleChange('type', 'alquiler')}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-200 ${
                searchData.type === 'alquiler'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'text-slate-700 hover:text-emerald-700'
              }`}
            >
              Alquiler
            </button>
          </div>
        </div>

        {/* Tipo de Propiedad */}
        <div className="flex flex-col">
          <label htmlFor="propertyType" className="text-sm font-semibold text-slate-700 mb-2">
            Tipo de Propiedad
          </label>
          <select
            id="propertyType"
            value={searchData.propertyType}
            onChange={(e) => handleChange('propertyType', e.target.value)}
            className="py-3 px-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent text-slate-700"
          >
            <option value="">Todos</option>
            <option value="casa">Casa</option>
            <option value="departamento">Departamento</option>
            <option value="terreno">Terreno</option>
            <option value="local">Local Comercial</option>
            <option value="oficina">Oficina</option>
          </select>
        </div>

        {/* Ubicación */}
        <div className="flex flex-col">
          <label htmlFor="location" className="text-sm font-semibold text-slate-700 mb-2">
            Ubicación
          </label>
          <input
            id="location"
            type="text"
            value={searchData.location}
            onChange={(e) => handleChange('location', e.target.value)}
            placeholder="Ciudad, barrio..."
            className="py-3 px-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent text-slate-700 placeholder-slate-400"
          />
        </div>

        {/* Rango de Precio */}
        <div className="flex flex-col">
          <label htmlFor="priceRange" className="text-sm font-semibold text-slate-700 mb-2">
            Precio
          </label>
          <select
            id="priceRange"
            value={searchData.priceRange}
            onChange={(e) => handleChange('priceRange', e.target.value)}
            className="py-3 px-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent text-slate-700"
          >
            <option value="">Cualquier precio</option>
            <option value="0-50000">Hasta $50.000</option>
            <option value="50000-100000">$50.000 - $100.000</option>
            <option value="100000-200000">$100.000 - $200.000</option>
            <option value="200000+">Más de $200.000</option>
          </select>
        </div>

        {/* Botón de Búsqueda */}
        <div className={`flex ${isHero ? 'flex-col justify-end' : 'items-end'}`}>
          {isHero && <label className="text-sm font-semibold text-slate-700 mb-2 opacity-0">Buscar</label>}
          <button
            type="submit"
            className="w-full py-3 px-6 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Buscar
          </button>
        </div>
      </div>
    </motion.form>
  );
};

export default SearchBar;
