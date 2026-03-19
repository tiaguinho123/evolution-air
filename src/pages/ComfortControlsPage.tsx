import ServicePage from './ServicePage';
import { CheckCircle2 } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

export default function ComfortControlsPage() {
  const { colors } = useSiteConfig();
  return (
    <ServicePage
      title="Emergency Service"
      subtitle="Same-Day · Holidays · Weekends · 24/7 Response"
      heroImage="https://evolutionairllc.com/wp-content/uploads/2020/08/MicrosoftTeams-image-3-e1598012087796.jpg"
      heroImageAlt="Evolution Air LLC — Emergency HVAC service in Fairfield County CT"
      content={
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">24/7 Emergency HVAC Service</h2>
          <div className="w-12 h-1 rounded-full mb-8" style={{ backgroundColor: colors.primaryHex }} />

          <img
            src="https://evolutionairllc.com/wp-content/uploads/2020/08/MicrosoftTeams-image-3-e1598012087796.jpg"
            alt="Evolution Air LLC emergency HVAC response team"
            className="w-full rounded-2xl mb-8 object-cover"
            style={{ maxHeight: '360px' }}
            loading="lazy"
            decoding="async"
          />

          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            When your heating or cooling system fails, Evolution Air LLC is ready to respond — fast. We offer same-day emergency service throughout Fairfield and Westchester County with extended hours during winter and summer peak seasons.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            We're available on holidays and weekends because HVAC emergencies don't follow a schedule. Our maintenance agreement members receive priority scheduling with no overtime charges.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mb-4">Our Emergency Services:</h3>
          <ul className="space-y-3 mb-8">
            {[
              'Same-day emergency heating and cooling repair',
              'Extended hours during winter and summer emergencies',
              'Available on holidays and weekends',
              'Priority response for maintenance agreement members',
              'No overtime charge for members',
              'All brands and systems serviced',
              'Serving all of Fairfield and Westchester County',
              'Licensed and insured technicians on every call',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.primaryHex }} aria-hidden="true" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-2xl p-6 text-white" style={{ backgroundColor: colors.primaryHex }}>
            <h3 className="text-lg font-bold mb-3">Save on Emergency Calls</h3>
            <p className="text-white/90 leading-relaxed">
              Join our <strong>Preventative Maintenance Agreement</strong> and get 10% off all service calls — including emergencies — plus priority scheduling year-round. Prevention is always cheaper than an emergency repair.
            </p>
          </div>
        </div>
      }
    />
  );
}
