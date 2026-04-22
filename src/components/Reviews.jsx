import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Aaron K.',
    role: 'Local Guide',
    initials: 'AK',
    rating: 5,
    text: '"The Truffle Mushroom Pizza is out of this world. Pair it with their cold brew and it\'s the perfect Sunday afternoon."',
  },
  {
    name: 'Sara M.',
    role: 'Food Blogger',
    initials: 'SM',
    rating: 5,
    text: '"Love the sunkissed vibe! It really feels like sitting in a cozy library but with incredible food. The Brioche Donut is a must-try."',
  },
  {
    name: 'Rohan J.',
    role: 'Regular',
    initials: 'RJ',
    rating: 5,
    text: '"My go-to spot for remote work. The Wi-Fi is reliable, the staff is incredibly friendly, and the Signature Oak Latte keeps me going."',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="fill-accent-orange text-accent-orange" />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-surface py-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="section-title text-3xl md:text-4xl mb-2">Word on the Street</h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              className="bg-surface-container-lowest rounded-2xl p-6 shadow-ambient"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Stars count={review.rating} />
              <p className="font-manrope text-on-surface-variant text-sm leading-relaxed mt-4 mb-6 italic">
                {review.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-jakarta font-bold text-xs text-on-primary flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #672d00, #8b4000)' }}>
                  {review.initials}
                </div>
                <div>
                  <p className="font-jakarta font-semibold text-on-surface text-sm">{review.name}</p>
                  <p className="font-manrope text-on-surface-variant text-xs">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
