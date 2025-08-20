const { createElement: h } = React
import Avatar from './Avatar.js'
import ProfileInfo from './ProfileInfo.js'

export default function ProfileCard({
  img,
  name,
  job,
  desc,
  children,
  onMore,
}) {
  return h(
    'article',
    {
      className: 'card',
      style: {
        background: '#111827',
        border: '1px solid #1f2937',
        borderRadius: 16,
        padding: 16,
        display: 'grid',
        gridTemplateColumns: '64px 1fr',
        gridTemplateAreas: `"avatar name" "avatar job" "desc desc" "actions actions"`,
        gap: '10px 12px',
      },
    },
    h(
      'div',
      { style: { gridArea: 'avatar' } },
      h(Avatar, { src: img, alt: `${name}의 아바타` })
    ),
    h(ProfileInfo, { name, job, desc }),
    h(
      'div',
      { style: { gridArea: 'actions', marginTop: 6 } },
      children ||
        h(
          'button',
          {
            onClick: onMore,
            style: {
              padding: '8px 12px',
              borderRadius: 8,
              background: 'transparent',
              border: '1px solid #60a5fa',
              color: '#60a5fa',
              cursor: 'pointer',
            },
          },
          '더보기'
        )
    )
  )
}
