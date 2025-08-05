declare namespace pluralize {
  /** 단어를 복수형으로 변환합니다. */
  function plural(word: string): string
  /** 단어를 단수형으로 변환합니다. */
  function singular(word: string): string
}

export = pluralize


// 또는, const 객체로 선언할 수도 있습니다.

// declare function plural(word: string): string
// declare function singular(word: string): string

// declare const pluralize: {
//   plural: typeof plural
//   singular: typeof singular
// }

// export = pluralize
