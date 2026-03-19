import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Phone } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

export default function AboutPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();

  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://evolutionairllc.com/wp-content/uploads/2020/09/MicrosoftTeams-image-12.jpg"
          alt="Evolution Air LLC — About Us"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-5xl font-extrabold text-white uppercase">
                About Us
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-slate-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:underline transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-700 font-medium">About Us</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Evolution Air LLC
              </h2>
              <div
                className="w-12 h-1 rounded-full mb-8"
                style={{ backgroundColor: colors.primaryHex }}
                aria-hidden="true"
              />

              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Evolution Air LLC is a tight-knit group of HVAC professionals with over <strong>100 years of combined experience</strong>. We are a full-service HVAC company based in Stamford, CT, serving Fairfield and Westchester County since 2010.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We specialize in retrofits and maintaining equipment for residential, commercial, industrial, and institutional sectors. Our philosophy is simple: focus on long-term equipment life and energy efficiency — not on being the lowest bidder.
              </p>
              <p className="text-slate-600 mb-10 leading-relaxed">
                <strong>"If you're not comfortable, we're not comfortable."</strong> That's more than a slogan — it's how we approach every job, from a routine tune-up to a full commercial HVAC system installation.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-4">What Sets Us Apart:</h3>
              <ul className="space-y-3 mb-10">
                {[
                  'Over 100 years of combined HVAC experience',
                  'Fully licensed & insured — Stamford, CT since 2010',
                  '24-Hour Emergency Service — including holidays and weekends',
                  'ONE CALL FOR ALL — residential, commercial, industrial',
                  'Specialists in retrofits and custom duct work',
                  'All major brands: Carrier, Trane, Lennox, Bryant, York, Amana',
                  'Transparent pricing — upfront estimate before any work begins',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: colors.primaryHex }}
                      aria-hidden="true"
                    />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-lg"
                style={{ backgroundColor: colors.primaryHex }}
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call Us: {phoneFormatted}
              </a>
            </motion.div>

            {/* Right — Images & Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Real photo */}
              <img
                src="https://evolutionairllc.com/wp-content/uploads/2020/09/MicrosoftTeams-image-11.jpg"
                alt="Evolution Air LLC technicians working in Fairfield County"
                className="w-full rounded-2xl object-cover shadow-lg"
                style={{ maxHeight: '320px' }}
                loading="lazy"
                decoding="async"
              />

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
                  <p className="text-4xl font-extrabold mb-1" style={{ color: colors.primaryHex }}>100+</p>
                  <p className="text-slate-600 text-sm font-medium">Years Combined Experience</p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
                  <p className="text-4xl font-extrabold mb-1" style={{ color: colors.primaryHex }}>15+</p>
                  <p className="text-slate-600 text-sm font-medium">Years Serving Fairfield County</p>
                </div>
              </div>

              {/* License Box */}
              <div className="rounded-2xl p-6 text-white" style={{ backgroundColor: colors.dark }}>
                <h4 className="font-bold text-lg mb-3">Fully Licensed &amp; Insured</h4>
                <p className="text-white/80 mb-2">
                  CT Licensed HVAC Contractor — <strong className="text-white">fully insured</strong>
                </p>
                <p className="text-white/80 text-sm">
                  We carry full liability insurance and workers' compensation. Happy to provide documentation before any work begins.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
