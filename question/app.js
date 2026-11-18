// Q1 変数
let nickname = 'ごっしー';
let age = '28歳';
let username = '私のニックネームは' + nickname + 'です。年齢は' + age + 'です。';
console.log(username);

// Q2 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);

// Q3　オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

// Q4 配列 × オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

// Q5 四則演算
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3);

// Q6-1 関数
function sayHello() {
    console.log('Hello');
}
sayHello();

// Q6-2 無名関数
let sayWorld = function() {
  console.log('World');
};
sayWorld();

// Q7-1 メソッド
user.birthday = '2000-09-27';
console.log(user.birthday);

// Q7-2 メソッド
user.Hello = 'Hello!';
console.log(user.Hello);

// Q8 引数
let calc = {};
calc.add = function(x, y){
    console.log(x + y);
};
calc.add(3, 4);

calc.subtract = function(x, y){
    console.log(x - y);
};
calc.subtract(20, 10);

calc.multiply = function(x, y){
    console.log(x * y);
};
calc.multiply(7, 7);

calc.divide = function(x, y){
    console.log(x / y);
};
calc.divide(10, 2);

// Q9 返り値
function remainder (x, y){
    return x % y;
}
console.log('5を3で割った余りは' + remainder(5, 3) + 'です。');

// Q10 スコープ
// xは関数の中で定義されているため、スコープは関数の中だけで有効、関数の外からは参照できないためエラーが出力される。

// section6 応用問題
// Q1 標準組み込みオブジェクト
console.log(Math.floor(Math.random() * 10));

// Q2 コールバック関数
setTimeout(function(){
    console.log('Hello World!');
},3000);

// Q3 if
let num = 5;
if(num > 0) {
    console.log('num is greater than 0');
}else if (num < 0) {
    console.log('num is less than 0');
}else {
    console.log('num is 0');
}

// Q4 for
let numbers = [];
for(let i = 0; i < 100; i++) {
    numbers.push(i);
}
console.log(numbers);

// Q5 for × if
let mixed = [4 , '2', 5, '8', '9', 0, 1]
for(let value of mixed) {
    if(typeof value === 'number') {
        if (value % 2 ===0) {
            console.log('even');
        }else{
            console.log('odd');
        }
    }else{
            console.log('not number');
        }
    }
