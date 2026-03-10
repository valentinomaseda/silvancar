import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import PropertyList from './components/PropertyList';
import About from './components/About';
import ValuationBanner from './components/ValuationBanner';
import Footer from './components/Footer';
import properties from './data/properties';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Header />
        
        <Routes>
          <Route 
            path="/" 
            element={
              <main>
                <Hero />
                <PropertyList properties={properties} />
                <About />
                <ValuationBanner />
              </main>
            } 
          />
          
          {/* Ruta para detalles de propiedad (placeholder) */}
          <Route 
            path="/propiedad/:id" 
            element={
              <div className="pt-32 pb-20 container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    Detalles de la Propiedad
                  </h1>
                  <p className="text-slate-600 mb-8">
                    Esta página estará disponible próximamente con información detallada de la propiedad.
                  </p>
                  <a 
                    href="/#propiedades" 
                    className="inline-block px-6 py-3 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors"
                  >
                    Volver a las propiedades
                  </a>
                </div>
              </div>
            } 
          />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
