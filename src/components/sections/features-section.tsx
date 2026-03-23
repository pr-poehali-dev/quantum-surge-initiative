import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

function CameraAnimation() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => !prev)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        animate={{ scale: active ? 1.15 : 1, opacity: active ? 1 : 0.6 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Icon name="Camera" size={72} className="text-foreground" />
      </motion.div>
    </div>
  )
}

function PhotoFrames() {
  const [layout, setLayout] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLayout((prev) => (prev + 1) % 3)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const sizes = [
    ["h-16 w-12", "h-12 w-16", "h-10 w-10"],
    ["h-20 w-14", "h-10 w-12", "h-14 w-10"],
    ["h-12 w-12", "h-16 w-12", "h-12 w-16"],
  ]

  return (
    <div className="h-full p-4 flex items-center justify-center gap-3">
      {sizes[layout].map((cls, i) => (
        <motion.div
          key={i}
          className={`bg-primary/20 rounded-lg ${cls}`}
          layout
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </div>
  )
}

function PrintIndicator() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10))
    }, 300)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <Icon name="Printer" size={40} className="text-foreground" />
      <div className="w-full max-w-[120px] h-1.5 bg-foreground/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <span className="text-xs text-muted-foreground">Печать...</span>
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
          Наши услуги
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
              <CameraAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Фотосессии</h3>
              <p className="text-muted-foreground text-sm mt-1">Портретные, свадебные, семейные, рекламные — от 5 000 ₽/час.</p>
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
              <PhotoFrames />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Видеосъёмка</h3>
              <p className="text-muted-foreground text-sm mt-1">Клипы, интервью, репортажи, выездная съёмка — от 3 000 ₽.</p>
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
              <PrintIndicator />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Печать фотографий</h3>
              <p className="text-muted-foreground text-sm mt-1">Форматы А4, А3, А5, 10×15 — от 25 ₽ за лист.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
