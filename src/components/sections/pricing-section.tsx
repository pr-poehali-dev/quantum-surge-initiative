import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const plans = [
  {
    name: "Фотосессия",
    price: "от 5 000",
    period: " ₽/час",
    description: "Портретная, семейная, свадебная, рекламная",
    features: [
      "Художественная — 5 000–6 000 ₽/час",
      "Портретная — 5 000–6 000 ₽/час",
      "Свадебная — 5 000–6 000 ₽/час",
      "Семейная — 5 000–6 000 ₽/час",
      "Предметная — 4 000 ₽/час",
      "Экспресс (15–30 мин) — 3 000–5 000 ₽",
      "Выездная — 5 000–6 000 ₽/час",
    ],
  },
  {
    name: "Видеосъёмка",
    price: "от 3 000",
    period: " ₽",
    description: "Мероприятия, клипы, интервью, бизнес",
    features: [
      "Выездная съёмка — 4 000–6 000 ₽",
      "Клип до 1 минуты — 3 000–5 000 ₽",
      "Интервью / видеовизитка — 4 000–6 000 ₽",
      "Съёмка для бизнеса — 4 000–6 000 ₽",
      "Бэкстейдж — 3 000–5 000 ₽",
      "Репортажное видео — 4 000–6 000 ₽",
    ],
    popular: true,
  },
  {
    name: "Печать и альбомы",
    price: "от 25",
    period: " ₽/лист",
    description: "Печать фото, копирование, фотокниги",
    features: [
      "10×15 — 25 ₽/лист",
      "А5 — 40 ₽/лист",
      "А4 — 150 ₽/лист",
      "А3 — 250 ₽/лист",
      "Копирование — 20–30 ₽/лист",
      "Фотокнига — от 5 000–6 000 ₽",
    ],
  },
  {
    name: "Визаж и стиль",
    price: "от 2 000",
    period: " ₽",
    description: "Макияж, причёска, образы под ключ",
    features: [
      "Дневной макияж — 2 000–3 000 ₽",
      "Вечерний макияж — 2 000–3 000 ₽",
      "Макияж + локоны — 3 500 ₽",
      "Локоны — 2 000 ₽",
      "Свадебный образ — 5 000 ₽",
      "Образ под ключ — от 5 000 ₽",
    ],
  },
]

interface PricingSectionProps {
  onBooking?: (service?: string) => void
}

export function PricingSection({ onBooking }: PricingSectionProps) {
  return (
    <section className="bg-secondary px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">Цены и услуги</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">Всё, что нужно для идеальных фотографий.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`relative bg-background rounded-xl p-8 ${plan.popular ? "ring-2 ring-primary" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-clickable
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Популярное
                </span>
              )}

              <div className="pb-6 border-b border-dashed border-border">
                <h3 className="font-serif text-xl text-foreground">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-serif text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-foreground">
                    <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onBooking?.(plan.name)}
                className={`w-full mt-8 py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-foreground hover:bg-accent/30"
                }`}
              >
                Записаться
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}