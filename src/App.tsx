import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ServiceAreaCheck from './components/ServiceAreaCheck';
import ValueSnapshot from './components/ValueSnapshot';
import VehicleSelector from './components/VehicleSelector';
import Process from './components/Process';
import EnterpriseLeads from './components/EnterpriseLeads';
import EnterpriseBenefits from './components/EnterpriseBenefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ServiceAreaCheck />
      <ValueSnapshot />
      <VehicleSelector />
      <Process />
      <EnterpriseBenefits />
      <EnterpriseLeads />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
