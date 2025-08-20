import accordionData from './data.json'
import { useState } from 'react'
import { AccordionItem } from './accordion-item.jsx'
import './accordion-list.css'

export function AccordionList({ onlyOneOpen = false }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const handleActiveIndex = (i) => setActiveIndex(i)

  return (
    <section className="accordion-section">
      <h2>
        자주 묻는 질문
        <img
          src="/assets/tutor@2x.png"
          alt="피그마 튜터"
          width={43}
          height={43}
        />
      </h2>
      <dl className="accordion-list">
        {accordionData.map((it, index) => (
          <AccordionItem
            key={it.id}
            question={it.question}
            answer={it.answer}
            isOpen={activeIndex === index}
            index={index}
            onActive={handleActiveIndex}
            onlyOneOpen={onlyOneOpen}
          />
        ))}
      </dl>
    </section>
  )
}
