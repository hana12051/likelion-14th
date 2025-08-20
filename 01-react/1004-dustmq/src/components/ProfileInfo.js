const { createElement: h } = React

export default function ProfileInfo({ name, job, desc }) {
  return h(
    React.Fragment,
    null,
    h('div', { style: { fontWeight: 600 } }, name),
    h('div', { style: { color: '#94a3b8', fontSize: '.925rem' } }, job),
    h('p', { style: { lineHeight: 1.5, marginTop: 8 } }, desc)
  )
}
