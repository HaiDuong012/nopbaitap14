// Bài 4, Viết hàm kiểm tra số lượng ký tự mật khẩu, nếu mật khẩu nhập vào ngắn
// hơn 8 ký tự thì in ra là “Mật khẩu không được ngắn hơn 8 ký tự), nếu mật
// khẩu nhập lớn hơn 8 ký tự thì in ra nội dung “Đăng ký tài khoản thành công”

// const checkpass = (pass) => {
//   if (pass.length < 8) {
//     return true;
//   } else {
//     return false;
//   }
// };
// let check = prompt("mơi nhap");
// if (checkpass(check)) {
//   console.log("mat khau ko đc ngăn hơn 8 kí tự");
// } else {
//   console.log("Đăng kí thành công");
// }

//bài 5: Tìm hiểu cách để chặn việc nhập ngày tháng năm bé hơn ngày hiện tại

//bài 6:Xây dựng một hàm nhập vào một chuỗi và một ký tự bất kỳ, giá trị trả
// ra là một chuỗi mới có ký tự vừa nhập vào sẽ là một chữ cái in hoa.
// Ví dụ: Nhập chuỗi “lâm xấu trai lắm” thành chuỗi “Lâm xấu trai Lắm”.
//
//
// let stringtext = prompt("mơi nhap chuoi");
// let intext = prompt("mơi nhap chư cai");
// const textUpperCase = (stringtext, intext) => {
//   let newString = "";
//   for (let i = 0; i < stringtext.length; i++) {
//     if (stringtext[i] == intext) {
//       newString += stringtext[i].toUpperCase();
//     } else {
//       newString += stringtext[i];
//     }
//   }
//   return newString;
// };
// console.log(textUpperCase(stringtext, intext));

//bài 7:Xây dựng hàm chuyển đổi từ độ C sang độ F và ngược lại từ độ F sang
// độ C. Tạo hàm convertTemperature nhận vào 3 tham số, tham số 1 là giá trị
// cần chuyển đổi, tham số 2 là đơn vị gốc (có thể là độ C hoặc độ F) ,
// tham số 3 là giá trị chuyển đổi qua ( có thể là độ F hoặc độ C)

// let number = +prompt("moi nhap nhiet do ");
// let cel = prompt("moi nhap đơn vị cần đổi");
// let fah = prompt("moi nhap don vi chuyển qua");

// const convertTemperature = (number, cel, fah) => {
//   let t; //khai báo biến t để lưu trữ kqua chuyển đổi
//   if (cel == "F" && fah == "C") {
//     //đơn vị dạng chuỗi thì để trong ""
//     t = (number - 32) / 1.8; //dấu phẩy chuyển thành dấu .
//   } else if (cel == "C" && fah == "F") {
//     t = (number * 9) / 5 + 32;
//   } else {
//     console.log("mời nhập lại"); // thong bao
//     return; // thoat ham
//   }
//   return t; // trả về nhiệt độ
// };
// console.log(convertTemperature(number, cel, fah));

//bài 8: Xây dựng hàm để đếm số lần xuất hiện của một ký tự.
// Ví dụ khi mình gọi hàm: count(“a”, “anh day”) thì nó sẽ in ra là 2

// const text = prompt("moi nhap chuoi");
// let kitu = prompt("moi nhap kí tu");
// const repeat = (s) => {
//   // 1, neu ham co tham số trong ngoặc chỉ để đại diện,mô tả hàm. trong trường
//   //hợp này thì tham số và đk cần giống nhau. log hàm nhập riêng
//   //2,neu ham ko co tham so, nhập luôn kí tự vào đk, trong th này đk phải giống
//   //với biến nhập vào lúc log hàm cuối cùng
//   let characters = 0;
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === s) {
//       //nếu hàm có tham số đại diện thì đk cần phải giống
//       //                                                                  mô tả
//       characters += 1;
//     }
//   }
//   return characters; /// chỉ return kết quả cần retun. nên đôi khi chỉ cần if
//   //ko cần else; retun thường là biến mình khai báo thêm trong hàm.
// };
// console.log(repeat(kitu)); //biến do người dùng nhập vào hàm
// //nếu ko có biến ban đầu thì cần nhập chuỗi đã được định sẵn.

//bài 9:Xây dựng hàm trả về giá trị lớn nhất trong một mảng

// const array = [12, 39, 45, 82, 53, 44, 22, 73];
// const maxmin = () => {
//   let tg;
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] > array[j]) {
//         tg = array[i];
//         array[i] = array[j];
//         array[j] = tg;
//       }
//     }
//   }

//   return array;
// };
// console.log("max là ", maxmin(array)[array.length - 1]);
//Bài 10: Viết hàm để đảo ngược một số nguyên.
//Ví dụ nhập vào 12345 thì trả về 54321

// let a = +prompt("mời nhập:");
// const reverse = () => {
//   let b = a.toString().split("").reverse().join("");
//   return b;
// };
// console.log("số a sau khi đảo ngược là:", reverse());

//Bài 11 Viết hàm đặt tên là findIndex() nhập vào một mảng số nguyên và một
//giá trị, trả về vị trí xuất hiện của phần tử đó trong mảng,
// nếu không tìm thấy thì trả về -1.
//
//
let a = [3, 5, 6, 9, 3, 2, 6];
let x = +prompt("mời nhập số:");
let check = 0;
const find = () => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return i;
    } else {
      check = -1;
    }
  }

  return check;
};
console.log("kk", find(x));
//
//bài 12: Viết một hàm nhập vào một mảng các số nguyên và một giá trị,
//trả về một mảng mới nhưng không chứa giá trị nhập vào.
// Đặt tên hàm là filter() nhập vào filter (2, [1, 2, 3, 4, 5])
// và kết quả trả ra là [1, 3, 4, 5]
//
//bài tập thêm
// 1. Viết một hàm JavaScript để tính tổng của hai số.

// 2. Viết một hàm JavaScript nhận vào một mảng số nguyên và trả về tổng của các số đó.

// 3. Viết một hàm JavaScript để kiểm tra xem một số có phải là số nguyên tố hay không.

//. 4. Viết một hàm JavaScript để đảo ngược một chuỗi.
