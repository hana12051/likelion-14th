
for (let i = 0; i < 3; i++) {
  console.log(i);
}
// 0, 1, 2

let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

let u = 0;
do {
  console.log(u); // ✅ u 출력
  u++;
} while (u < 3);

const fruits = ['사과', '바나나', '포도'];

for (const fruit of fruits) {
  console.log(fruit);
}
// 사과, 바나나, 포도

const user = { name: '영인', age: 24 };

for (const key in user) {
  console.log(key, user[key]);
}
// name 영인
// age 24
