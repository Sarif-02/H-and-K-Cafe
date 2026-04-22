import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Mail, ExternalLink } from 'lucide-react'

export default function Location() {
  return (
    <section id="location" className="bg-surface-container-low py-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-10"
        >
          <h2 className="section-title text-3xl md:text-4xl mb-2">Find Your Corner</h2>
          <p className="font-manrope text-on-surface-variant text-sm">
            We're right around the corner — come as you are.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Info panel */}
          <motion.div
            className="flex flex-col gap-7"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            {/* Address */}
            <div className="flex gap-3.5 items-start">
              <div className="w-9 h-9 rounded-xl bg-primary-fixed flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={16} className="text-primary" />
              </div>
              <div>
                <p className="font-jakarta font-semibold text-on-surface text-sm mb-1">H AND K Cafe</p>
                <p className="font-manrope text-on-surface-variant text-sm leading-relaxed">
                  Ground Floor, 276, Pocket 7,<br />
                  Sector 24, Rohini, New Delhi,<br />
                  Delhi 110085, India
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-3.5 items-start">
              <div className="w-9 h-9 rounded-xl bg-primary-fixed flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock size={16} className="text-primary" />
              </div>
              <div>
                <p className="font-jakarta font-semibold text-on-surface text-sm mb-1">Hours</p>
                <p className="font-manrope text-on-surface-variant text-sm">
                  Monday – Sunday<br />
                  10:00 AM – 10:00 PM
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-3.5 items-start">
              <div className="w-9 h-9 rounded-xl bg-primary-fixed flex items-center justify-center flex-shrink-0 mt-0.5">
                <Phone size={16} className="text-primary" />
              </div>
              <div>
                <p className="font-jakarta font-semibold text-on-surface text-sm mb-1">Phone</p>
                <a
                  href="tel:+919414485952"
                  className="font-manrope text-sm text-on-surface-variant hover:text-primary transition-colors duration-200"
                >
                  +91 94144 85952
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-3.5 items-start">
              <div className="w-9 h-9 rounded-xl bg-primary-fixed flex items-center justify-center flex-shrink-0 mt-0.5">
                <Mail size={16} className="text-primary" />
              </div>
              <div>
                <p className="font-jakarta font-semibold text-on-surface text-sm mb-1">Email</p>
                <a
                  href="mailto:contact@handkcafe.com"
                  className="font-manrope text-sm text-on-surface-variant hover:text-primary transition-colors duration-200"
                >
                  contact@handkcafe.com
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <p className="font-jakarta font-semibold text-on-surface text-base mb-4">Visit Us Today</p>
              <a
                href="https://www.google.com/maps/place/H+AND+K+Cafe/@28.7276035,77.0846451,17z/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get Directions <ExternalLink size={15} />
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="rounded-2xl overflow-hidden shadow-ambient w-full"
            style={{ height: '400px' }}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <iframe
              title="H AND K Cafe on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.387!2d77.0820702!3d28.7276035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da7c1b9c0a1ab%3A0x70bf91ef51bde25c!2sH%20AND%20K%20Cafe!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
