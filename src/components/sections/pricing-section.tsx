import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const details = [
  {
    name: "Место проведения",
    icon: "MapPin",
    description: "Ресторан «Белый зал»",
    features: ["Москва, ул. Садовая, 12", "Парковка для гостей", "Живая музыка", "Выездная регистрация"],
  },
  {
    name: "Дресс-код",
    icon: "Sparkles",
    description: "Нежные пастельные тона",
    features: ["Белый, пудровый, бежевый", "Нарядные платья и костюмы", "Без чёрного цвета", "Каблуки приветствуются"],
    popular: true,
  },
]

export function PricingSection() {
  return (
    <section className="bg-secondary px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">Всё, что нужно знать гостям</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">Мы позаботились о каждой детали, чтобы этот день был незабываемым.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {details.map((item, i) => (
            <motion.div
              key={i}
              className={`relative bg-background rounded-xl p-8 ticket-edge ${item.popular ? "ring-2 ring-primary" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-clickable
            >
              {item.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Важно
                </span>
              )}

              <div className="text-center pb-6 border-b border-dashed border-border">
                <div className="flex justify-center mb-3">
                  <Icon name={item.icon as "MapPin" | "Sparkles"} size={32} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground">{item.name}</h3>
                <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
              </div>

              <ul className="mt-6 space-y-3">
                {item.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-foreground">
                    <span className="text-primary text-lg">✦</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
