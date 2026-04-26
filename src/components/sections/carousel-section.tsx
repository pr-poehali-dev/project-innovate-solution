import { motion } from "framer-motion"

const weddingWords = [
  "Любовь", "Счастье", "Верность", "Нежность",
  "Радость", "Навсегда", "Доверие", "Вместе",
  "Семья", "Мечта", "Тепло", "Harmony",
]

export function CarouselSection() {
  const items = [...weddingWords, ...weddingWords]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Создано с любовью — для вас.
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-8 items-center"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((word, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-8"
              data-clickable
            >
              <span className="font-serif text-3xl md:text-4xl text-primary-foreground/90 whitespace-nowrap">
                {word}
              </span>
              <span className="text-primary-foreground/40 text-2xl">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
