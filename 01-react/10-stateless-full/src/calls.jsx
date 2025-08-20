import { Component } from 'react'

export default class StatefulComponentClass extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // 읽기 전용인 컴포너트 속성(외부에서 전달된 데이터)
    // console.log(this.props)
    const { className, style, ...restProps } = this.props

    console.log(restProps)

    return (
      <article className={className} style={style} {...restProps}>
        <h2>상태가 있는 컴포넌트 (클래스 타입)</h2>
      </article>
    )
  }
}