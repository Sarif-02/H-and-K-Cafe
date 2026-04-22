import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const categories = ['All', 'Pizza', 'Burgers', 'Shakes']

const menuItems = [
  {
    id: 1,
    name: 'Truffle Mushroom Pizza',
    description: 'Wild mushrooms, truffles and fresh mozzarella',
    price: 299,
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80',
    tag: '₹299',
  },
  {
    id: 2,
    name: 'The Classic Smash',
    description: 'Double smashed patty, American cheese, house sauce',
    price: 249,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80',
    tag: '₹249',
  },
  {
    id: 3,
    name: 'Belgian Dark Shake',
    description: 'Rich Belgian chocolate blended with creamy vanilla ice cream',
    price: 179,
    category: 'Shakes',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80',
    tag: '₹179',
  },
  {
    id: 4,
    name: 'Artisan Grilled Cheese',
    description: 'Three cheese blend on sourdough with a pesto of tomato bisque',
    price: 199,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?w=400&q=80',
    tag: '₹199',
  },
  {
    id: 5,
    name: 'Margherita Classic',
    description: 'San Marzano tomatoes, fresh basil, and buffalo mozzarella',
    price: 249,
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80',
    tag: '₹249',
  },
  {
    id: 6,
    name: 'Strawberry Bliss Shake',
    description: 'Fresh strawberries blended with cream and vanilla',
    price: 159,
    category: 'Shakes',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a90bb933?w=400&q=80',
    tag: '₹159',
  },
  {
    id: 7,
    name: 'Crispy Chicken Burger',
    description: 'Crunchy fried chicken with sriracha slaw',
    price: 229,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80',
    tag: '₹229',
  },
  {
    id: 8,
    name: 'BBQ Chicken Pizza',
    description: 'Smoky BBQ base, grilled chicken, red onion and jalapeño',
    price: 319,
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80',
    tag: '₹319',
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.07, ease: 'easeOut' } }),
}

export default function Menu() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? menuItems : menuItems.filter(i => i.category === active)

  return (
    <section id="menu" className="bg-surface-container-low py-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <motion.h2
              className="section-title text-3xl md:text-4xl mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              Curated Cravings
            </motion.h2>
            <motion.p
              className="font-manrope text-on-surface-variant text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              Handcrafted bites perfectly paired with our signature roasts.
            </motion.p>
          </div>

          {/* Category chips */}
          <motion.div
            className="flex gap-2 flex-wrap"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={active === cat ? 'chip-selected' : 'chip-unselected'}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                layout
                className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-ambient group cursor-pointer"
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: '150px' }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 right-2 bg-primary text-on-primary text-[10px] font-manrope font-semibold px-2 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                </div>

                {/* Info */}
                <div className="p-3.5">
                  <h3 className="font-jakarta font-semibold text-on-surface text-sm leading-snug mb-1">{item.name}</h3>
                  <p className="font-manrope text-on-surface-variant text-xs leading-relaxed mb-3 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-manrope text-xs text-on-surface-variant">Add to order</span>
                    <button className="w-6 h-6 rounded-full bg-accent-orange flex items-center justify-center hover:scale-110 transition-transform">
                      <Plus size={13} className="text-white" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
