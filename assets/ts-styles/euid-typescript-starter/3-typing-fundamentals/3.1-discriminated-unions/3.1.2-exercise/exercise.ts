// --------------------------------------------------------------------------
// ✅ TypeScript의 판별 유니언(Discriminated union) 타입
// --------------------------------------------------------------------------

// 판별 유니언을 사용하여 Vehicle 타입을 정의하세요.
// 이 타입은 car 또는 truck 두 가지 형태를 가져야 합니다.
// car 형태에는 numberOfDoors 프로퍼티가 있어야 합니다.
// truck 형태에는 payloadCapacity 프로퍼티가 있어야 합니다.
// Vehicle을 받아 차량을 설명하는 문자열을 반환하는 `describeVehicle` 함수를 작성하세요.
// car 형태라면 "[    ] 문이있는 자동차."를 반환해야 하고,
// truck 형태라면 "적재 화물 용량이 [     ]인 트럭."를 반환해야 합니다.


// 테스트 케이스
// const car: Vehicle = { kind: 'car', numberOfDoors: 4 }
// const truck: Vehicle = { kind: 'truck', payloadCapacity: 2000 }

// console.log(describeVehicle(car)) // 자동차 설명이 출력되어야 합니다.
// console.log(describeVehicle(truck)) // 트럭 설명이 출력되어야 합니다.
