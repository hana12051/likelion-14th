/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Component } from 'react'
import './accordion-item.css'

export class AccordionItemClass extends Component {
  state = { open: this.props.isOpen }
  static getDerivedStateFromProps(props) {
    return props.onlyOneOpen ? { open: props.isOpen } : null
  }
  render() {
    const { index, question, answer, onActive, onlyOneOpen } = this.props
    const { open } = this.state
    const handleActive = () => onActive?.(index)
    const handleToggle = () => this.setState({ open: !open })
    return (
      <div className={`accordion-item ${open ? 'is-open' : ''}`.trim()}>
        <dt onClick={onlyOneOpen ? handleActive : handleToggle}>
          {question}{' '}
          <button type="button" aria-label={open ? '닫힘 전환' : '열림 전환'} aria-pressed={open}>
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </dt>
        <dd className={open ? 'is-open' : ''}>{answer}</dd>
      </div>
    )
  }
}

export function AccordionItem({ index, question, answer, isOpen = false, onActive }) {
  const handleActive = () => onActive?.(index)
  return (
    <div className={`accordion-item ${isOpen ? 'is-open' : ''}`.trim()}>
      <dt onClick={handleActive}>
        {question}{' '}
        <button type="button" aria-label={isOpen ? '닫힘 전환' : '열림 전환'} aria-pressed={isOpen}>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </dt>
      <dd className={isOpen ? 'is-open' : ''}>{answer}</dd>
    </div>
  )
}
