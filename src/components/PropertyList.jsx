import { useState } from 'react';
import { motion } from 'framer-motion';
import PropertyCard from './PropertyCard';

const PropertyList = ({ properties }) => {
  const [filter, setFilter] = useState('todos');
  const [operationType, setOperationType] = useState('todos');

  const filteredProperties = properties.filter((property) => {
    const matchesType = filter === 'todos' || property.type === filter;
    const matchesOperation = operationType === 'todos' || property.operation === operationType;
    return matchesType && matchesOperation;
  });

  const propertyTypes = [
    { value: 'todos', label: 'Todos' },
    { value: 'casa', label: 'Casas' },
    { value: 'departamento', label: 'Departamentos' },
    { value: 'terreno', label: 'Terrenos' },
    { value: 'local', label: 'Locales' },
  ];

  return (
    <section id="propiedades" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            Nuestras Propiedades
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Propiedades destacadas
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explorá nuestra selección de propiedades cuidadosamente seleccionadas 
            para encontrar tu próximo hogar o inversión ideal.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-10"
        >
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Operation Type Filter */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Tipo de Operación
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setOperationType('todos')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      operationType === 'todos'
                        ? 'bg-emerald-700 text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Todas
                  </button>
                  <button
                    onClick={() => setOperationType('venta')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      operationType === 'venta'
                        ? 'bg-emerald-700 text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Venta
                  </button>
                  <button
                    onClick={() => setOperationType('alquiler')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      operationType === 'alquiler'
                        ? 'bg-emerald-700 text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Alquiler
                  </button>
                </div>
              </div>

              {/* Property Type Filter */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Tipo de Propiedad
                </label>
                <div className="flex flex-wrap gap-2">
                  {propertyTypes.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setFilter(type.value)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        filter === type.value
                          ? 'bg-emerald-700 text-white shadow-md'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-600">
                Mostrando{' '}
                <span className="font-semibold text-slate-900">
                  {filteredProperties.length}
                </span>{' '}
                {filteredProperties.length === 1 ? 'propiedad' : 'propiedades'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Property Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <PropertyCard
                key={property.id}
                property={property}
                index={index}
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-12 h-12 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              No se encontraron propiedades
            </h3>
            <p className="text-slate-600">
              Intentá ajustar los filtros para ver más resultados
            </p>
          </motion.div>
        )}

        {/* Load More Button */}
        {filteredProperties.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="px-8 py-3 bg-white text-emerald-700 font-semibold rounded-lg border-2 border-emerald-700 hover:bg-emerald-700 hover:text-white transition-all duration-200 shadow-md hover:shadow-lg">
              Ver más propiedades
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PropertyList;
