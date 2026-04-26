import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

const timeline = [
  {
    title: "Церемония бракосочетания",
    category: "14:00 — Загс",
    image: "https://cdn.poehali.dev/projects/10994ea3-35c7-4488-995e-39b9a4ac9aae/files/fd83b552-bb50-4f45-a712-c6385c04ffb1.jpg",
  },
  {
    title: "Фотосессия в саду",
    category: "15:30 — Парк Сокольники",
    image: "https://cdn.poehali.dev/projects/10994ea3-35c7-4488-995e-39b9a4ac9aae/files/3450de3e-3785-4cb3-bde1-9371f6dd835c.jpg",
  },
  {
    title: "Банкет и торжество",
    category: "17:00 — Ресторан «Белый зал»",
    image: "https://cdn.poehali.dev/projects/10994ea3-35c7-4488-995e-39b9a4ac9aae/files/f63d5100-fc71-431f-95c4-cd3f0351cf18.jpg",
  },
  {
    title: "Первый танец молодожёнов",
    category: "20:00 — Живая музыка",
    image: "https://cdn.poehali.dev/projects/10994ea3-35c7-4488-995e-39b9a4ac9aae/files/fd83b552-bb50-4f45-a712-c6385c04ffb1.jpg",
  },
]

export function InsightsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <section className="bg-background px-6 py-24" onMouseMove={handleMouseMove}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Программа дня
        </motion.p>

        <div className="divide-y divide-border">
          {timeline.map((item, i) => (
            <motion.a
              key={i}
              href="#"
              className="group flex items-center justify-between py-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ paddingLeft: 16, paddingRight: 16 }}
              data-clickable
            >
              <div className="flex-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{item.category}</span>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mt-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </motion.a>
          ))}
        </div>

        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              className="fixed pointer-events-none z-50 w-[200px] md:w-[300px] rounded-lg overflow-hidden shadow-2xl hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePosition.x + 20,
                y: mousePosition.y - 100,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={timeline[hoveredIndex].image || "/placeholder.svg"}
                alt={timeline[hoveredIndex].title}
                className="w-full h-auto"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
