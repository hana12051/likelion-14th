// protected 멤버는 해당 클래스와 
// 그 하위(자식) 클래스 내에서 접근할 수 있습니다.
class Chef {
  public cook() {
    console.log('쿠킹 ' + this.getDish())
  }
  protected getDish() {
    return '파스타'
  }
}

class SpecialChef extends Chef {
  public prepareSpecialDish() {
    // 여기서는 `protected` 멤버에 접근이 가능합니다.
    console.log('특별 요리를 준비합니다. ' + this.getDish())
  }
}

const chef = new SpecialChef()
chef.cook() // 잘 작동합니다.
// chef.getDish() // Error: Property 'getDish' is protected and only accessible within class 'Chef' and its subclasses.