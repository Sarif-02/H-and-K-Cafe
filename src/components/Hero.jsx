import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Star, MapPin, Clock, Users } from "lucide-react";
import IMG_PIZZA from "../assets/img 1.jpg";
import IMG_BURGER from "../assets/img 2.jpg";
import IMG_SHAKE from "../assets/img 3.jpg";
import HERO_BG from "../assets/hero_img.avif";

// Cards: left tilts -12°, center upright, right tilts +12° — perfectly symmetric
// x offsets are symmetric: left=-85, center=0, right=+85
const cards = [
  {
    img: IMG_PIZZA,
    label: "PIZZA",
    emoji: "🍕",
    title: "Hot & Cheesy",
    sub: "Wood-fired to perfection",
    rotate: -12,
    x: -55,
    y: 15,
    zIndex: 1,
  },
  {
    img: IMG_BURGER,
    label: "BURGER",
    emoji: "🍔",
    title: "Juicy & Delicious",
    sub: "Made with premium ingredients",
    rotate: 0,
    x: 0,
    y: -15,
    zIndex: 3,
  },
  {
    img: IMG_SHAKE,
    label: "SHAKE",
    emoji: "🥤",
    title: "Chill & Refreshing",
    sub: "The perfect blend of taste",
    rotate: 12,
    x: 55,
    y: 15,
    zIndex: 2,
  },
];

// Wave animation: each card gets a keyframe sequence that creates a ripple
// Phase offsets: card[0] leads, card[1] follows 0.6s later, card[2] follows 1.2s later
// Each card animates: rest → down → rest → up → rest over a 3.6s loop
const WAVE_DURATION = 3.6; // seconds for one full wave cycle
const FLOAT_AMOUNT = 14;   // px up/down
// keyframes: [0%, 25%, 50%, 75%, 100%] of the cycle
const waveKeyframes = (baseY) => [
  `calc(-50% + ${baseY}px)`,        // 0%   — rest
  `calc(-50% + ${baseY + FLOAT_AMOUNT}px)`, // 25%  — down
  `calc(-50% + ${baseY}px)`,        // 50%  — rest
  `calc(-50% + ${baseY - FLOAT_AMOUNT}px)`, // 75%  — up
  `calc(-50% + ${baseY}px)`,        // 100% — rest
];
// Delay per card so wave travels left→down→right→up→left
const waveDelay = [0, WAVE_DURATION / 3, (WAVE_DURATION / 3) * 2];

export default function Hero() {
  const scrollToMenu = () => {
    document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // <section
    //   id="home"
    //   className="relative min-h-screen flex items-center overflow-hidden"
    //   style={{
    //     background:
    //       "radial-gradient(ellipse at 70% 40%, #3d1a00 0%, #1a0800 40%, #0d0400 100%)",
    //   }}
    // >

    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <img
        src={HERO_BG}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #F97316, transparent)" }} />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #f59e0b, transparent)" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-10 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-0 min-h-screen">

        {/* ── LEFT CONTENT ── */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Rating + Location */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-5">
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <span className="text-white text-xs font-semibold">4.5</span>
              <span className="text-white/50 text-xs">Google Rating</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
              <MapPin size={14} className="text-[#F97316]" />
              <span className="text-white/80 text-xs font-medium">Rohini, Delhi</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight">
            <span className="text-white">Good </span>
            <span className="text-[#F97316]">Food.</span>
            <br />
            <span className="text-white">Good </span>
            <span className="text-[#F97316]">Mood.</span>
          </h1>

          {/* Tagline */}
          <p className="mt-3 text-white/60 font-light italic text-lg md:text-xl" style={{ fontFamily: "'Dancing Script', cursive" }}>
            Bite into happiness
          </p>

          {/* Description */}
          <p className="mt-4 text-white/60 text-sm md:text-base max-w-md leading-relaxed">
            Delicious pizzas, juicy burgers, refreshing shakes and cozy vibes — all at H AND K Cafe.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
            <motion.button
              onClick={scrollToMenu}
              className="flex items-center gap-2 bg-[#F97316] hover:bg-[#ea6500] text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-[0_4px_20px_rgba(249,115,22,0.45)] hover:shadow-[0_6px_28px_rgba(249,115,22,0.65)] transition-all duration-200"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Order Now <ArrowRight size={16} />
            </motion.button>

            <motion.button
              onClick={scrollToMenu}
              className="flex items-center gap-2 bg-transparent border-2 border-white/30 hover:border-white/60 text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all duration-200 backdrop-blur-sm"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              View Menu <BookOpen size={15} />
            </motion.button>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 mt-10">
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Clock size={15} className="text-[#F97316]" />
              <span>10:00 AM – 10:00 PM</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/20" />
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Users size={15} className="text-[#F97316]" />
              <span>Loved by 100+ happy customers</span>
            </div>
          </div>
        </motion.div>

        {/* ── RIGHT SIDE — CARD FAN ── */}
        <div className="w-full lg:w-1/2 flex justify-center items-center overflow-hidden">
          <div className="relative w-[270px] h-[340px] sm:w-[300px] sm:h-[380px] lg:w-[340px] lg:h-[430px]">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 w-36 sm:w-40 lg:w-52 rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                style={{
                  zIndex: card.zIndex,
                  rotate: card.rotate,
                  x: `calc(-50% + ${card.x}px)`,
                  transformOrigin: "50% 110%",
                }}
                animate={{
                  y: waveKeyframes(card.y),
                }}
                transition={{
                  duration: WAVE_DURATION,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: waveDelay[i],
                  times: [0, 0.25, 0.5, 0.75, 1],
                }}
                whileHover={{ scale: 1.06, zIndex: 10 }}
              >
                {/* Image */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-48 md:h-56 object-cover"
                />

                {/* Card body */}
                <div className="bg-[#1a0f00] px-3 pt-2 pb-3">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-1 bg-[#F97316] text-white text-[10px] font-black px-2 py-0.5 rounded-full mb-1.5 tracking-wider">
                    <span>{card.emoji}</span>
                    <span>{card.label}</span>
                  </div>
                  <p className="text-white font-bold text-sm italic leading-tight" style={{ fontFamily: "'Dancing Script', cursive" }}>
                    {card.title}
                  </p>
                  <p className="text-white/50 text-[10px] mt-0.5">{card.sub}</p>
                </div>

                {/* Shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-2xl" />
              </motion.div>
            ))}

            {/* Dashed orbit arrows (decorative) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 320 420">
              <path d="M 80 80 Q 160 20 240 80" fill="none" stroke="#F97316" strokeWidth="1.5" strokeDasharray="6 4" markerEnd="url(#arr)" />
              <path d="M 240 340 Q 160 400 80 340" fill="none" stroke="#F97316" strokeWidth="1.5" strokeDasharray="6 4" markerEnd="url(#arr2)" />
              <defs>
                <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#F97316" />
                </marker>
                <marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <path d="M6,0 L0,3 L6,6 Z" fill="#F97316" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Wave bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#fdf6ee" />
        </svg>
      </div>

      {/* Google font for italic tagline */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap" />
    </section>
  );
}
