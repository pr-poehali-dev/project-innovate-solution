import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function HeartBeat() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prev) => (prev === 1 ? 1.3 : 1))
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full">
      <motion.span
        className="font-serif text-6xl md:text-8xl text-primary"
        animate={{ scale }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        ♡
      </motion.span>
    </div>
  )
}

function CountdownAnimation() {
  const weddingDate = new Date("2025-09-13")
  const now = new Date()
  const diff = Math.max(0, Math.floor((weddingDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)))

  return (
    <div className="h-full p-4 flex flex-col items-center justify-center gap-2">
      <motion.span
        className="font-serif text-5xl md:text-6xl text-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {diff}
      </motion.span>
      <span className="text-sm text-muted-foreground tracking-widest uppercase">дней до свадьбы</span>
    </div>
  )
}

function GuestCount() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const target = 80
    const step = Math.ceil(target / 40)
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= target) {
          clearInterval(interval)
          return target
        }
        return prev + step
      })
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <span className="text-4xl md:text-5xl font-serif text-foreground">{count}+</span>
      <span className="text-sm text-muted-foreground">приглашённых гостей</span>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Наш день
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1">
              <HeartBeat />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">13 сентября 2025</h3>
              <p className="text-muted-foreground text-sm mt-1">День, который изменит нашу жизнь навсегда.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <CountdownAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Обратный отсчёт</h3>
              <p className="text-muted-foreground text-sm mt-1">Мы ждём этого момента с нетерпением.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <GuestCount />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Близкие люди</h3>
              <p className="text-muted-foreground text-sm mt-1">Только самые дорогие нашему сердцу.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
