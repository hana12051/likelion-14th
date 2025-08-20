import { useState, useRef } from "react";

export default function FaqAccordion({
  items,
  defaultIndex = -1,          // 처음에 닫힘(-1) / 특정 항목을 기본으로 열려면 0,1,2...
}) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const btnRefs = useRef([]);

  const onToggle = (i) => {
    setActiveIndex((cur) => (cur === i ? -1 : i)); // 한 번에 하나만 열림
  };

  const onKeyDown = (e, i) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = (i + 1) % items.length;
      btnRefs.current[next]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = (i - 1 + items.length) % items.length;
      btnRefs.current[prev]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      btnRefs.current[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      btnRefs.current[items.length - 1]?.focus();
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggle(i);
    }
  };

  return (
    <section aria-label="자주 묻는 질문" className="faq">
      <h2 className="faq__title">자주 묻는 질문</h2>

      <ul className="faq__list">
        {items.map((it, i) => {
          const open = i === activeIndex;
          const panelId = `faq-panel-${i}`;
          const btnId = `faq-button-${i}`;
          return (
            <li key={i} className={`faq__item ${open ? "is-open" : ""}`}>
              <button
                id={btnId}
                ref={(el) => (btnRefs.current[i] = el)}
                className="faq__button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => onToggle(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                type="button"
              >
                <span className="faq__q">{it.q}</span>
                <span className="faq__chevron" aria-hidden>▾</span>
              </button>

              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                hidden={!open}
                className="faq__panel"
              >
                <p className="faq__a">{it.a}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
