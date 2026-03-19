import ServicePage from './ServicePage';
import { CheckCircle2 } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

export default function CoolingPage() {
  const { colors } = useSiteConfig();
  return (
    <ServicePage
      title="Commercial HVAC &amp; Cooling"
      subtitle="Restaurants · Office Buildings · Custom Duct Work"
      heroImage="https://evolutionairllc.com/wp-content/uploads/2020/09/condenser-repair.jpg"
      heroImageAlt="Evolution Air LLC — Commercial HVAC and cooling service in Fairfield County CT"
      content={
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Commercial HVAC &amp; Cooling</h2>
          <div className="w-12 h-1 rounded-full mb-8" style={{ backgroundColor: colors.primaryHex }} />

          <img
            src="https://evolutionairllc.com/wp-content/uploads/2020/09/MicrosoftTeams-image-13.jpg"
            alt="Evolution Air LLC commercial HVAC service in Fairfield County"
            className="w-full rounded-2xl mb-8 object-cover"
            style={{ maxHeight: '360px' }}
            loading="lazy"
            decoding="async"
          />

          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Evolution Air LLC specializes in commercial HVAC solutions for restaurants, office buildings, retail spaces, and institutional facilities throughout Fairfield and Westchester County. We handle upfits, equipment change-outs, and diagnostics for temperature and humidity issues.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Our experienced technicians are an expert source for custom ducting and sheet metal services, fabricated to last decades without gaps or leaks.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mb-4">Our Commercial Services Include:</h3>
          <ul className="space-y-3 mb-8">
            {[
              'Commercial HVAC upfits and equipment change-outs',
              'Diagnostics for temperature and humidity issues',
              'Custom duct work and sheet metal fabrication',
              'New construction HVAC design and installation',
              'Restaurant and occupied-space HVAC specialists',
              'Central air conditioning service and repair',
              'Refrigerant recharge and leak detection',
              'All major brands: Carrier, Trane, Lennox, Bryant, York',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.primaryHex }} aria-hidden="true" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-2xl p-6 border border-blue-100" style={{ backgroundColor: '#EFF6FF' }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: colors.primaryHex }}>Custom Duct Work</h3>
            <p className="text-slate-600 leading-relaxed">
              Evolution Air is your expert source for custom ducting and sheet metal services. All duct work is fabricated in-house to last decades without gaps or leaks — from residential retrofits to new commercial construction projects.
            </p>
          </div>
        </div>
      }
    />
  );
}
