import ServicePage from './ServicePage';
import { CheckCircle2 } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

export default function HeatingPage() {
  const { colors } = useSiteConfig();
  return (
    <ServicePage
      title="Residential &amp; Commercial Heating"
      subtitle="Furnaces · Boilers · Heat Pumps · All Brands"
      heroImage="https://evolutionairllc.com/wp-content/uploads/2020/08/MicrosoftTeams-image-1.jpg"
      heroImageAlt="Evolution Air LLC — Heating service in Stamford, Fairfield County CT"
      content={
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Heating Service &amp; Installation</h2>
          <div className="w-12 h-1 rounded-full mb-8" style={{ backgroundColor: colors.primaryHex }} />

          <img
            src="https://evolutionairllc.com/wp-content/uploads/2020/09/MicrosoftTeams-image-11.jpg"
            alt="Evolution Air LLC heating technician servicing a unit in Fairfield County"
            className="w-full rounded-2xl mb-8 object-cover"
            style={{ maxHeight: '360px' }}
            loading="lazy"
            decoding="async"
          />

          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Evolution Air LLC has been repairing and installing heating equipment for over 10 years throughout Fairfield and Westchester County. We service and install all brands of heating equipment — from gas furnaces to boilers and heat pumps.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Emergency heating service is available same day, with extended hours during winter months. We also offer appointments on holidays and weekends so your family is never left without heat.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mb-4">Our Heating Services Include:</h3>
          <ul className="space-y-3 mb-8">
            {[
              'Service and installation of all heating equipment brands',
              'Gas and oil furnace repair and replacement',
              'Boiler service, repair, and installation',
              'Heat pump installation and maintenance',
              'Emergency heating repair — same-day available',
              'Appointments available on holidays and weekends',
              'Preventative maintenance agreements',
              'New construction heating design and installation',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.primaryHex }} aria-hidden="true" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Brands We Service</h3>
            <p className="text-slate-600 leading-relaxed">
              Evolution Air services and installs <strong>all major heating brands</strong> including Carrier, Amana, Trane, Lennox, Bryant, York, and more. We focus on long-term equipment life and energy efficiency — not on being the lowest bidder.
            </p>
          </div>
        </div>
      }
    />
  );
}
