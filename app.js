// Bài đọc:
// câu1: thế nào là cơ chế hoisting trong javascript.

// câu 2: một file js khi chạy trải qua mấy giai đoạn?
// ----- một file js khi chạy trải qua hai gia đoạn: Giai đoạn khởi tạo và gia đoạn thực thi;

// ////////////////////////////////////////////////
//  Baì Tập:
// var age = 20;
// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995";
// // Function declaration
// function calAge(year) {
//     return 2022 - year;
// };

// // Function expression
// var getFullName = function (firstName, lastName) {
//     return `${firstName} ${lastName}`;
// }

// // bai3:
// // debugger;

// console.log(`1. ${age}`);//undefined : đang trong quá trình khởi tạo
// var age = 20;
// console.log(`2. ${age}`);//20 - đã thực thi xong;
// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995";
// console.log(`3. ${calAge(yearOfBirth)}`)//27----hàm gọi trước gọi sau đều nhận,thực thi xong
// // Function declaration
// function calAge(year) {
//     return 2022 - year;
// }
// console.log(`4. ${calAge(yearOfBirth)}`)//27--- như trên
// console.log(`5. ${getFullName(firstName, lastName)}`);//eror- do khai báo bằng var chưa thực thi nên undefined console.log ra bị lỗi
// // Function expression
// var getFullName = function (firstName, lastName) {
//     return `${firstName} ${lastName}`;
// }
// console.log(`6. ${getFullName(firstName, lastName)}`);// Peter parker

// // bai5:
// console.log(age);//undifined --->log ra thì lỗi-(chưa thục thi đang khơi tạo)
// let age = 27;
// console.log(age)//27
// {
//     console.log(firstName);//undifined---> log ra  thì lỗi-(chưa thực thi, đang khởi tạo)
//     console.log(age);//27- đã có khai báo ở trên và không nằm trong function
//     console.log(age);//27- đã có khai báo ở trên và không nằm trong function
//     let firstName = "Peter";
//     let lastName = "Parker";
//     const job = "Spider man";
//     console.log(firstName);//Peter: đã thưc thi xong;
//     console.log(lastName);//Parker: đã thưc thi xong;
//     console.log(job);//Spider man: đã thưc thi xong;
// }

// // bài6: Không chạy đoạn code sau, phán đoán output của các câu lệnh console.log()
// a = 2;
// var a;
// console.log(a);//2---qua khởi tạo

// // bài77. Không chạy đoạn code sau, phán đoán output của các câu lệnh console.log()
// console.log(a);//undefined- do đang khởi tao và chưa thực thi
// var a = 2;(ở tronng global )

// // 8. Không chạy đoạn code sau, phán đoán output của các câu lệnh console.log() var a = 10;
// function foo() {
//     var a;
//     console.log(a);//undefined--- đang khởi tạo chưa qua thực thi
//     a = 2;
// }
// foo();

// 9. Không chạy đoạn code sau, phán đoán output của các câu lệnh console.log()

//
// foo();// sẽ log ra 1
// var foo;
// function foo() {
//     console.log(1);//1- đc đẩy vào global
// }
// foo = function () {// gan lai hàm cho 1 biến
//     console.log(2);
// }
//

// 10. Không chạy đoạn code sau, phán đoán output của các câu lệnh console.log()
// var foo;
// function foo() {
//     console.log(1); //đc định nghia chưa đc thực thi
// }
// foo = function () {
//     console.log(2);//
// }
// foo();

// bai1111. Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array

// function removeEnd(arr, n) {

// this.arr = arr;
//     // if (n <= arr.length) {
//     //     let A = 0;
//     //     for (let i = arr.length - 1; i >= 0; i = i - 1) {
//     //         A = A + 1;
//     //         if (A == n) {
//     //             console.log(A);
//     //             let B = arr.length - A;
//     //             arr.splice(B, n)
//     //         }
//     //     }

//     // }
// cach 2

//     let z = arr.splice(arr.length - n, n)
//     return arr;

// }

// let a = removeEnd([1, 2, 3, 4, 5, 4, 3, 5, 6, 7, 8], 9);
// console.log(a);

// // bai1212. Viết 1 chương trình trả về n phần tử đầu tiên có trong 1 array
// function first(arr, n) {
//     // logic code
// c1
//     this.arr = arr;
//     if (n <= arr.length) {
//         let b = arr.length - n;
//         arr.splice(n, b)
//     }
//
//     return arr;
// c2
//  arr.length =n
// return arr;
//

// }

// let x = first([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 8);
// console.log(x);

// // bai13:
// const users = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2,
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]
// // Sử dụng phương thức map() của array,
// // tạo một array mới với các phần tử con ở trongcó name ( age )
// //     nằm trong các thẻ h1 (h2)

// let y = users.map(function (item) {
// c1:
// item.name = `<h1>${e.name}</h1>`;
// item.age = `<h1>${e.age}</h1>`;

//     return {
//         name: `<h1> ${item.name}</h1>`,
//         age: `<h2> ${item.age} </h2>`
//     }
// });
// console.log(y);

// // 14. Vẫn sử dụng mảng cho sẵn ở bài 13, sử dụng phương thức map() của array, tạoramột
// // mảng mới chỉ chưa tên của các phần tử object con nằm trong mảng lớn.

// map cho phép tưng phần tử con ở trong mảng, duyêtj qua các phần tử trong mảng biến đổi thành dạng ma minh mong muốn
//vidu:  arr.map(function(item,index){
// return

// }
// bailam:

// const users = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2,
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ];
// let x = users.map(function (item) {
//     return item.name;
// });
// console.log(x);
// let y = users.map(function (item) {
//     return item.age;
// });
// console.log(y);

// // // bai1515. - Viết một hàm triple() trả về một số đã được nhân 3
// // - Sử dụng phương thức map của array, viết hàm multiply() nhận vào một mảng
// // vàtrả về mảng mới với các số đã được nhân 3.
// // Sử dụng hàm triple để nhân3cácsố đó.

// let arr = prompt('nhap mang so bat ki cach nhau bang dau phay').split(',');
// let z = arr.map(function (item) {

//     item = item * 3;
//     return item;
// });
// console.log(z);

// // bai16; Sử dụng hàm filter của array. Viết một hàm nhận vào một mảng số ngẫu nhiên,
// //  hàm đó trả về một mảng mới chỉ chứa các phần tử lớn hơn 5.
// (dung để lọc theo điều kiện, và điều kiện để sau thằng return) và trả về mảng mới thoả mãn điều kiênj

// let arr = prompt('nhap mang so bat ki cach nhau bang dau phay').split(',');
// var newArr = arr.filter(function (item) {
//     return (item <= 5);
// });
// console.log(newArr);

// // 17. Cho mảng sau
// var members = [
//     { name: 'Lan', gender: 'female' },
//     { name: 'Linh', gender: 'female' },
//     { name: 'Trung', gender: 'male' },
//     { name: 'Peter', gender: 'gay' }
// ];
// // // // Viết một hàm nhận đầu vào là mảng trên, sử dụng phương thức filter của array,
// // // // trảvềmột mảng mới chỉ chữa những phần tử object có gender la female

// var genderFemale = members.filter(function (item) {
//     return (item.gender == 'female');
// });
// console.log(genderFemale);

// // 18. Viết một hàm nhận vào một mảng số tự nhiên,
// //  sử dụng find method của array trảvềsốchẵn đầu tiên của mảng đó,
// // nếu không tìm thấy trả về undefined

// let arr = prompt('nhap mang so bat ki cach nhau bang dau phay').split(',');
// let soChan = arr.find(function (item) {
//     return item % 2 === 0;
// });
// console.log(soChan);

// /bai1919. Viết một hàm nhận vào 2 tham số, tham số đầu tiên là một mảng số tự nhiên,
//  thamsốthứ 2 là số cần chia hết.
// Sử dụng find method của array, trả về số đầu tiên trongmảngđầu vào chia hết cho tham số thứ 2.
// Nếu không tìm thấy trả về undefined

// let arr = prompt('nhap mang bat ki cach nhau boi dau phay').split(',');
// let x = prompt('nhap so can chia het');
// let y = findDivisibleNum(arr, x); console.log(y);
// function findDivisibleNum(array, x) {
//     // logic code
//     let result = array.find(function (item) {
//         return item % x === 0;

//     });
//     return result;

// };

// 20. Viết một hàm nhận vào một mảng ngẫu nhiên.
// Sử dụng phương thức reduce củaarray,
// trả về object mới với các phần tử trong mảng là key,
//  và value sẽ là số lần xuất hiệncủachúng ở trong mảng
// Input:
// - countOccurrences(['a', 'b', 'c', 'b', 'a'])
// Expected output:
// - { a: 2, b: 2, c: 1 };
// c1
let arr = ["a", "b", "c", "b", "a"];
let x = arr.reduce(function (previousValue, currenValue) {
  //   console.log(previousValue, currenValue);
  if (!previousValue[currenValue]) {
    previousValue[currenValue] = 1;
  } else {
    previousValue[currenValue] = previousValue[currenValue] + 1;
  }
  return previousValue;
}, {});
console.log(x);

// c2:
// let arr = ["a", "b", "c", "b", "a"];
// let result = {};

// for (let i = 0; i <= arr.length - 1; i = i + 1) {
//   let element = arr[i];
//   if (!result[element]) {
//     result[element] = 1;
//   } else {
//     result[element] = result[element] + 1;
//   }
// }
// console.log(result);

// bai22:Viết một hàm nhận vào một mảng số gồm 2 số.
//  Tính tổng của các số tự nhiên trong khoảng 2 số đó

// Input:
// sum([1, 4])
// Expected output:
// 10
// Input:
// sum([4, 1])
// Expected output:
// 10

// let arr = prompt('nhap mang gom 2 so tu nhien cach nhau boi dau phay').split(',');

// if (arr.length == 2) {
//     // console.log(arr[0], arr[1]);
//     let a = 0;
//     if (Number(arr[0]) <= Number(arr[1])) {

//         for (let i = Number(arr[0]); i <= Number(arr[1]); i = i + 1) {
//             a = a + i;
//         }
//         console.log(a);
//     } else if (Number(arr[0]) > Number(arr[1])) {
//         for (let i = Number(arr[1]); i <= Number(arr[0]); i = i + 1) {
//             a = a + i;
//         }
//         console.log(a);
//     }
// } else {
//     alert('moi nhap lai mang');
// }

// 23.Viết một hàm nhận vào 2 mảng số,
//  so sánh 2 mảng và trả về một mảng mới chứa các phần tử độc nhất giữa 2 mảng.
//   Chú ý sử dụng hàm filter

// Input:
// diff([1, 2, 3, 4], [1, 2, 1])
// Expected output:
// [3, 4]
// Input:
// diff([4, 1, 2], [1, 1])
// Expected output:
// [4, 2]

// let arr1 = prompt('nhap mang  cach nhau boi dau phay').split(',');
// let arr2 = prompt('nhap mang  cach nhau boi dau phay').split(',');
// let arr = [arr1, arr2];

// let newArr = arr.filter(function (item) {
//     console.log(item);
//     console.log(item[0]);
//     console.log(item[1]);
//     if(item[0] === item[1]){

//     }
// });
// console.log((newArr));

// // bai24:Viết một hàm nhận vào 1 số n,
// // tính tổng các số lẻ của dãy fibonacci nhỏ hơn số n
// // Lưu ý: Dãy fibonacci bắt đầu từ 1 (1, 1, 2, 3, 5, 8….)

// // Input:
// // sum(4)
// // Expected output:
// // 5 (Tổng của 1 + 1 + 3 = 5)

// let number = prompt('Enter the number of terms: ');
// let n1 = 1, n2 = 1, nextTerm;
// let arr = [];
// console.log('Fibonacci Series:');
// for (let i = 1; i <= number; i++) {
//     arr.push(n1)
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }
// console.log(arr);

// let total = 0;
// for (i = 0; i <= arr.length - 1; i = i + 1) {
//         if (arr[i] % 2 == 1 && arr[i] < number) {
//             total = total + arr[i];
//         }
// } console.log((total));
