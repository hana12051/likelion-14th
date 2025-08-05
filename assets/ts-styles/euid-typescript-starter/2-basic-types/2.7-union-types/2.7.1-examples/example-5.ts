// // 파이프(|) 또는(OR)로 읽으세요.
type Vehicle = { hasWheels: boolean } | { canFly: boolean }

const car: Vehicle = { hasWheels: true }
const airplane: Vehicle = { canFly: true }
const flyingCar: Vehicle = { hasWheels: true, canFly: true }

// Error: Property 'hasWheels' does not exist on type 'Vehicle'.
//        Property 'hasWheels' does not exist on type '{ canFly: boolean }'
flyingCar.hasWheels = true