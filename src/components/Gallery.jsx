import { motion } from 'framer-motion'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&q=80',
    alt: 'Cafe Interior',
    // Desktop: large 2x2 card | Mobile: full width tall card
    desktopClass: 'md:col-span-2 md:row-span-2',
    mobileStyle: { height: '240px' },
    desktopStyle: { height: '340px' },
  },
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80',
    alt: 'Latte Art',
    desktopClass: '',
    mobileStyle: { height: '160px' },
    desktopStyle: { height: '160px' },
  },
  {
    src: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=500&q=80',
    alt: 'Cozy Corner',
    desktopClass: '',
    mobileStyle: { height: '160px' },
    desktopStyle: { height: '160px' },
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-surface-container-low py-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="section-title text-3xl md:text-4xl mb-2">The Space</h2>
          <p className="font-manrope text-on-surface-variant text-sm">
            Designed for slow mornings and long conversations.
          </p>
        </motion.div>

        {/* ── MOBILE layout: big card left, latte art + cozy corner stacked right ── */}
        <div className="grid grid-cols-2 grid-rows-[160px_160px] gap-3 md:hidden">
          {/* Big card — spans full height of both small cards */}
          <motion.div
            className="overflow-hidden rounded-2xl group row-span-2"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              style={{ minHeight: '323px' }}
            />
          </motion.div>

          {/* Latte Art + Cozy Corner stacked in a column, beside the big card */}
          {galleryImages.slice(1).map((img, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-2xl group"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: (i + 1) * 0.1 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                style={img.mobileStyle}
              />
            </motion.div>
          ))}
        </div>

        {/* ── DESKTOP layout: original asymmetric grid — unchanged ── */}
        <div className="hidden md:grid md:grid-cols-3 gap-5">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className={`overflow-hidden rounded-2xl ${img.desktopClass} group`}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                style={img.desktopStyle}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
