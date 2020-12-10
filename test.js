// // // // // // // // // // // // // // // function wait(t) {
// // // // // // // // // // // // // // //   return new Promise((r) => setTimeout(r, t));
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // async function asyncMania() {
// // // // // // // // // // // // // // //   console.log("1");
// // // // // // // // // // // // // // //   await wait(1000);
// // // // // // // // // // // // // // //   console.log("2");
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // asyncMania().then(() => console.log("3"));

// // // // // // // // // // // // // // // provider
// // // // // // // // // // // // // // async function* nums() {
// // // // // // // // // // // // // //   yield 1;
// // // // // // // // // // // // // //   yield 2;
// // // // // // // // // // // // // //   yield 3;
// // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // consumer
// // // // // // // // // // // // // // async function printData() {
// // // // // // // // // // // // // //   for (const key in nums()) {
// // // // // // // // // // // // // //     console.log("ok");
// // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // }

// // // // // // // // // // // // // // printData().then(() => console.log("ok"));

// // // // // // // // // // // // // var person = {
// // // // // // // // // // // // //   fname: "Hemanth",
// // // // // // // // // // // // //   lname: "HM",
// // // // // // // // // // // // //   location: "Earth",
// // // // // // // // // // // // //   type: "Human",
// // // // // // // // // // // // // };

// // // // // // // // // // // // // console.log(Object.values(person));

// // // // // // // // // // // // var Point = new StructType({
// // // // // // // // // // // //   x: int32,
// // // // // // // // // // // //   y: int32,
// // // // // // // // // // // // });

// // // // // // // // // // // // var point = new Point({
// // // // // // // // // // // //   x: 42,
// // // // // // // // // // // //   y: 420,
// // // // // // // // // // // // });

// // // // // // // // // // // // console.log(point);

// // // // // // // // // // const aliceScore = [21, 34, 22];
// // // // // // // // // // const bobScore = [33, 34, 32];

// // // // // // // // // // let alicePoints = 0;
// // // // // // // // // // let bobPoints = 0;

// // // // // // // // // // aliceScore.map((alice, index) => {
// // // // // // // // // //   if (bobScore[index] > alice) {
// // // // // // // // // //     return bobPoints++;
// // // // // // // // // //   }
// // // // // // // // // //   if (bobScore[index] < alice) {
// // // // // // // // // //     return alicePoints++;
// // // // // // // // // //   }
// // // // // // // // // // });

// // // // // // // // // // console.log([alicePoints, bobPoints]);

// // // // // // // // // const diagonalArr = [
// // // // // // // // //   [11, 2, 4], //0->index1,2->index2 1,1 2,0
// // // // // // // // //   [4, 5, 6],
// // // // // // // // //   [10, 8, -12],
// // // // // // // // // ];

// // // // // // // // // let diagonal1 = [];

// // // // // // // // // diagonalArr.map((diag, index) => {
// // // // // // // // //   diag.map((x, index2) => {
// // // // // // // // //     // if (index !== ix) {
// // // // // // // // //     //   return false;
// // // // // // // // //     // }
// // // // // // // // //     // diagonal1.push(x);
// // // // // // // // //     console.log(x);
// // // // // // // // //   });
// // // // // // // // // });

// // // // // // // // // // const frost = diagonal1.reduce((acc, curr) => {
// // // // // // // // // //   return acc + curr;
// // // // // // // // // // });

// // // // // // // // // // console.log(frost);
// // // // // // // // // function diagonalSums(matrix) {
// // // // // // // // //   let mainSum = 0,
// // // // // // // // //     secondarySum = 0;
// // // // // // // // //   for (let row = 0; row < matrix.length; row++) {
// // // // // // // // //     mainSum += matrix[row][row];
// // // // // // // // //     secondarySum += matrix[row][matrix.length - row - 1];
// // // // // // // // //   }
// // // // // // // // //   console.log(mainSum + " " + secondarySum);
// // // // // // // // // }

// // // // // // // // // diagonalSums(diagonalArr);

// // // // // // // // const number = [3, 3, 2, 1];
// // // // // // // // const maxNumber = Math.max(...number);
// // // // // // // // maxNumber.map((x) =>)

// // // // // // // const efex = "12:00:00PM";
// // // // // // // console.log(efex.substring(efex.length - 2, efex.length));
// // // // // // // console.log(efex.split([":"]));
// // // // // // // const efexSplit = efex.split("PM");
// // // // // // // console.log(efexSplit);
// // // // // // // console.log(efex.split(":").includes("12"));

// // // // // // // let array = ["mario", "luigi", "kong", "sad", "sod"];

// // // // // // // array = array.slice(0, 2); //Need to assign it to the same or another variable

// // // // // // // console.log(array); //["mario", "luigi"]

// // // // // // function timeConversion(s) {
// // // // // //   /*
// // // // // //    * Write your code here.
// // // // // //    * 07:05:45PM
// // // // // //    */
// // // // // //   const format = s.substring(s.length - 2, s.length);
// // // // // //   //   const splitPM = s.split("PM");
// // // // // //   //   const getHours = splitPM[0];
// // // // // //   //   const splitHours = getHours.split(":");

// // // // // //   let conversion = "";

// // // // // //   if (format == "PM") {
// // // // // //     const splitPM = s.split("PM");
// // // // // //     const getHours = splitPM[0];
// // // // // //     const splitHours = getHours.split(":");

// // // // // //     if (splitHours[0] == "12") {
// // // // // //       conversion = `${splitHours[0]}:${splitHours[1]}:${splitHours[2]}`;
// // // // // //     }
// // // // // //     if (splitHours[0] != "12") {
// // // // // //       const plus12 = parseInt(splitHours[0]) + 12;
// // // // // //       conversion = `${plus12}:${splitHours[1]}:${splitHours[2]}`;
// // // // // //     }
// // // // // //   }
// // // // // //   if (format == "AM") {
// // // // // //     const splitPM = s.split("AM");
// // // // // //     const getHours = splitPM[0];
// // // // // //     const splitHours = getHours.split(":");

// // // // // //     if (splitHours[0] == "12") {
// // // // // //       conversion = `00:${splitHours[1]}:${splitHours[2]}`;
// // // // // //     }
// // // // // //     if (splitHours[0] != "12") {
// // // // // //       conversion = `${splitHours[0]}:${splitHours[1]}:${splitHours[2]}`;
// // // // // //     }
// // // // // //   }

// // // // // //   return conversion;
// // // // // // }

// // // // // // console.log(timeConversion("07:05:45AM"));

// // // // // // for (let i = 1; i <= 5; i++) {
// // // // // //   for (let j = 5; j >= i; j--) {
// // // // // //     console.log(" ");
// // // // // //   }
// // // // // //   for (let k = 1; k <= i; k++) {
// // // // // //     console.log("*");
// // // // // //   }
// // // // // //   console.log("\n");
// // // // // // }

// // // // // function round5(x) {
// // // // //   return Math.ceil(x / 5) * 5;
// // // // // }

// // // // // console.log(round5(32));

// // // // const arr = [3, 4, 5, 6, 7, 8, 9, 15];

// // // // // arr.map((x) => {
// // // // //   if (x % 3 == 0 && x % 5 == 0) {
// // // // //     return console.log("FizzBuzz");
// // // // //   }
// // // // //   if (x % 3 == 0) {
// // // // //     return console.log("Fizz");
// // // // //   }
// // // // //   if (x % 5 == 0) {
// // // // //     return console.log("Buzz");
// // // // //   }
// // // // // });
// // // // // Array.from(Array(10), (e, i) => {
// // // // //   console.log(i + 1);
// // // // // });

// // // // // for (let x = 1; x <= 15; x++) {
// // // // //   if (x % 3 == 0 && x % 5 == 0) {
// // // // //     return console.log("FizzBuzz");
// // // // //   }
// // // // //   if (x % 3 == 0) {
// // // // //     return console.log("Fizz");
// // // // //   }
// // // // //   if (x % 5 == 0) {
// // // // //     return console.log("Buzz");
// // // // //   }
// // // // // }

// // // // console.log(["a", "b", "c", "g", "d"].sort((a, b) => a - b));

// // // // console.log(20 < 15 < 30);

// // // // console.log("zord"[0]);

// // // // console.log("sdaadsa".split("").reverse().join(""));

// // // // try {
// // // //   console.log("1234".split("").reverse().join(""));
// // // // } catch (error) {
// // // //   console.log(error);
// // // // } finally {
// // // //   console.log("splitted");
// // // // }

// // // function Jancok(a, b) {
// // //   this.a = a;
// // // }

// // // const janc = new Jancok("zxzx", "asad");
// // // console.log(janc.a);

// // let m = new Map();
// // //let s = Symbol("ss");
// // m.set("hello", 42);
// // m.set("for", 34);
// // console.log(m.get("for") === 34);
// // m.size === 2;
// // for (let [key, val] of m.entries()) console.log(key + " = " + val);

// //" ".repeat(4 * depth);
// console.log("".repeat(3));

function msgAfterTimeout(msg, who, timeout, onDone) {
  onDone(msg + " Hello " + who + "!");
}
msgAfterTimeout("wikwik", "Foo", 100, function (msg) {
  console.log("done after 300ms:" + msg);
});

const abc = {
  ale: "ok",
};

abc.ale = "meh";
console.log(abc);
