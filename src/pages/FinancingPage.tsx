import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, CheckCircle2 } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

export default function FinancingPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();

  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://evolutionairllc.com/wp-content/uploads/2020/09/MicrosoftTeams-image-13.jpg"
          alt="Evolution Air LLC — Maintenance Agreements"
          className="w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white uppercase">Maintenance Agreements</h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-slate-500">
            <Link to="/" className="hover:underline transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-700 font-medium">Maintenance Agreements</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Custom Preventative Maintenance Agreements</h2>
            <div className="w-12 h-1 rounded-full mx-auto mb-6" style={{ backgroundColor: colors.primaryHex }} />
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Evolution Air LLC offers custom maintenance agreements tailored to your equipment. Regular maintenance keeps your system running at peak efficiency, extends equipment life, and prevents costly emergency repairs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
            <div>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our maintenance programs include <strong>10% off all additional service calls</strong>, priority scheduling, and automated reminders — so you never miss a tune-up. We also partner with <strong>Best Air Cleaning Services</strong> to offer free video duct inspections and dryer vent cleaning.
              </p>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Agreement Benefits:</h3>
              <ul className="space-y-3">
                {[
                  'Annual A/C and heating tune-ups with detailed checklists',
                  '10% discount on all additional service calls',
                  'Priority scheduling — always jump the queue',
                  'Automated reminders for upcoming service',
                  'Free video duct inspection (Best Air Cleaning Services)',
                  'Dryer vent cleaning included',
                  'Available for residential and commercial properties',
                  'No overtime charges for priority members',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.primaryHex }} aria-hidden="true" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <img
                src="https://evolutionairllc.com/wp-content/uploads/2020/09/MicrosoftTeams-image-11.jpg"
                alt="Evolution Air LLC maintenance technician"
                className="w-full rounded-2xl object-cover shadow-md"
                style={{ maxHeight: '260px' }}
                loading="lazy"
              />
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 text-center">
                <p className="text-slate-600 mb-6">Ready to protect your HVAC system year-round? Ask us about a custom maintenance agreement — no pressure, no obligation.</p>
                <Link
                  to="/contact-us"
                  className="flex items-center justify-center gap-2 w-full py-4 text-white font-bold rounded-xl text-lg transition-colors mb-3"
                  style={{ backgroundColor: colors.primaryHex }}
                >
                  <Calendar className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  Get a Maintenance Agreement
                </Link>
                <a
                  href={`tel:${phone}`}
                  className="flex items-center justify-center gap-2 w-full py-4 border-2 font-bold rounded-xl text-lg transition-colors"
                  style={{ borderColor: colors.primaryHex, color: colors.primaryHex }}
                >
                  <Phone className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  Call {phoneFormatted}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
