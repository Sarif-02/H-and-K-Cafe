import { motion } from 'framer-motion'
import { Plus, Star } from 'lucide-react'

const featured = {
  name: 'Signature Oak Latte',
  description: 'Our house-blend espresso smoothed out with perfectly textured milk and a hint of vanilla bean.',
  price: 200,
  image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80',
  badge: '#1 Bestseller',
}

const sideItems = [
  {
    id: 1,
    name: 'Brioche Donut',
    description: 'Filled with fresh vanilla custard',
    price: 150,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=200&q=80',
  },
  {
    id: 2,
    name: '12-Hour Cold Brew',
    description: 'Smooth, low acidity, highly caffeinated',
    price: 220,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=200&q=80',
  },
  {
    id: 3,
    name: 'Midnight Truffle Cake',
    description: 'Decadent layers of dark chocolate',
    price: 280,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&q=80',
  },
]

export default function PopularItems() {
  return (
    <section className="bg-surface py-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="section-title text-3xl md:text-4xl mb-2">
            Most Loved <span className="text-accent-orange">❤</span>
          </h2>
          <p className="font-manrope text-on-surface-variant text-sm">The stars of the Sunkissed Library.</p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Featured card */}
          <motion.div
            className="bg-surface-container-lowest rounded-2xl overflow-hidden bestseller-glow group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Image */}
            <div className="relative overflow-hidden" style={{ height: '240px' }}>
              <img
                src={featured.image}
                alt={featured.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Badge */}
              <div className="absolute bottom-3 left-3 bg-surface-container-lowest/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1.5">
                <Star size={11} className="fill-accent-orange text-accent-orange" />
                <span className="font-manrope text-xs font-semibold text-on-surface">{featured.badge}</span>
              </div>
            </div>

            {/* Info */}
            <div className="p-6">
              <h3 className="font-jakarta font-bold text-on-surface text-xl mb-2">{featured.name}</h3>
              <p className="font-manrope text-on-surface-variant text-sm leading-relaxed mb-5">{featured.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-jakarta font-bold text-on-surface text-lg">₹{featured.price}</span>
                <button className="w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  style={{ background: 'linear-gradient(135deg, #672d00, #8b4000)' }}>
                  <Plus size={18} className="text-white" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Side items */}
          <div className="flex flex-col gap-4">
            {sideItems.map((item, i) => (
              <motion.div
                key={item.id}
                className="bg-surface-container-lowest rounded-2xl p-4 flex items-center gap-4 shadow-ambient group cursor-pointer hover:shadow-[0_8px_32px_rgba(30,27,23,0.1)] transition-shadow"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Thumb */}
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-jakarta font-semibold text-on-surface text-sm mb-0.5">{item.name}</h4>
                  <p className="font-manrope text-on-surface-variant text-xs leading-snug line-clamp-1">{item.description}</p>
                </div>

                {/* Price */}
                <div className="flex-shrink-0 text-right">
                  <span className="font-jakarta font-bold text-on-surface text-sm">₹{item.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
