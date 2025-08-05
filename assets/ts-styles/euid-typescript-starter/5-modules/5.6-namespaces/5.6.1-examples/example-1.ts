namespace MyNamespace {
  export const myVar = '공개 변수'
  const myPrivateVar = '비공개 변수!'
}

console.log(MyNamespace.myVar)

// 아래 코드는 작동하지 않습니다. 
// `myPrivateVar`는 비공개(private)이기 때문입니다.
// console.log(MyNamespace.myPrivateVar)