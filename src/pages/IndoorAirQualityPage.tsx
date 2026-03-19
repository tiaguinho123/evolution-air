import ServicePage from './ServicePage';
import { CheckCircle2 } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

export default function IndoorAirQualityPage() {
  const { colors } = useSiteConfig();
  return (
    <ServicePage
      title="Preventative Maintenance"
      subtitle="A/C · Boiler · Furnace · Humidifier Agreements"
      heroImage="https://evolutionairllc.com/wp-content/uploads/2020/09/MicrosoftTeams-image-12.jpg"
      heroImageAlt="Evolution Air LLC — Preventative maintenance in Fairfield County CT"
      content={
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Preventative Maintenance Agreements</h2>
          <div className="w-12 h-1 rounded-full mb-8" style={{ backgroundColor: colors.primaryHex }} />

          <img
            src="https://evolutionairllc.com/wp-content/uploads/2020/09/MicrosoftTeams-image-12.jpg"
            alt="Evolution Air LLC preventative maintenance technicians"
            className="w-full rounded-2xl mb-8 object-cover"
            style={{ maxHeight: '360px' }}
            loading="lazy"
            decoding="async"
          />

          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Evolution Air's custom maintenance agreements help you get the most out of your HVAC equipment. Our program includes 10% off additional service calls, priority scheduling, and automated reminders so you never miss a tune-up.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mb-4">What's Included in Each Tune-Up:</h3>
          <ul className="space-y-3 mb-8">
            {[
              'A/C: Drain lines, refrigerant charge, blower, evaporator & condenser coils',
              'Boiler: Water pressures, burner tubes, water feeder, pilots & controls',
              'Furnace: Burner tubes, ignition, flame sensors, safeties, inducer motor',
              'Humidifier: Start-up, water lines, tray cleaning, pad/canister replacement',
              'Free video duct inspection via Best Air Cleaning Services',
              'Dryer vent cleaning included',
              '10% discount on all additional service calls',
              'Priority scheduling — always jump the queue',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.primaryHex }} aria-hidden="true" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Recommended Schedule</h3>
            <p className="text-slate-600 leading-relaxed">
              We recommend servicing your <strong>heater in the fall</strong> before winter and your <strong>A/C in the spring</strong> before summer. Our maintenance agreements handle scheduling automatically with automated reminders — so you never have to remember.
            </p>
          </div>
        </div>
      }
    />
  );
}
