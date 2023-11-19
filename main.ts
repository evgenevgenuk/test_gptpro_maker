// basic.showNumber(1)
// basic.showNumber(2)
// basic.showNumber(3)
// basic.showNumber(4)
// basic.showNumber(5)
// basic.showNumber(6)
// basic.showNumber(7)
// basic.showNumber(8)
// basic.showNumber(9)
// basic.showNumber(10)

// basic.showNumber(1)
// basic.showNumber(5)
// basic.showLeds(`
//     . . # . .
//     # # # # #
//     . # . # .
//     . # # # .
//     . # . # .
//     `)
// basic.showIcon(IconNames.Heart)
// basic.showIcon(IconNames.Yes)
// basic.showIcon(IconNames.Angry)
// basic.showIcon(IconNames.Rollerskate)
// basic.showIcon(IconNames.Umbrella)
// basic.showLeds(`
//     # # # # #
//     # # # # #
//     # # # # #
//     # # # # #
//     # # # # #
//     `)
// basic.pause(1000)
// basic.clearScreen()
// for (let index = 0; index < 5; index++) {
//     basic.showString("Hello my name is Egen")
// }

// input.onButtonPressed(Button.A, function () {
//     basic.showString("Evgen")
// })
// input.onButtonPressed(Button.B, function () {
//     basic.showString("11")
// })

// led.plot(0, 0)
// led.plot(4, 0)
// led.plot(0, 4)
// led.plot(1, 4)
// led.plot(2, 4)
// led.plot(3, 4)
// // led.plot(4, 4)

// let startuem = 0;
// let end = 0;

// input.onButtonPressed(Button.A, function () {
//     startuem = 5; 
//     end = 10; 
//     showNumbersBetween(startuem, end);
// });

// function showNumbersBetween(start: number, end: number): void {
//     basic.showString("Numbers:");

//     for (let i = start + 1; i < end; i++) {
//         basic.showNumber(i);
//         basic.pause(500); 
//         basic.clearScreen();
//     }

// input.onGesture(Gesture.Shake, function () {
//     basic.showString("ostoroshno ")
// })

// let cars = ["bmw", "lamborgabr", "ferarus", "bugatius", "lexsas"];


// basic.showString(cars[0]); 
// basic.pause(1000); 
// basic.showString(cars[1]); 
// basic.pause(1000);
// basic.showString(cars[2]); 
// basic.pause(1000);
// basic.showString(cars[3]); 
// basic.pause(1000);
// basic.showString(cars[4]); 
// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let alphabetpon = alphabet.split("");

// input.onButtonPressed(Button.A, function () {
//     basic.showString(alphabet);
// });

// input.onButtonPressed(Button.B, function () {
//     let arrayLength = alphabetpon.length;
//     basic.showNumber(arrayLength);
// });
// input.onButtonPressed(Button.A, function () {
//     basic.showString("" + (лол[0]))
// })
// input.onButtonPressed(Button.B, function () {
//     basic.showString("" + (лол[1]))
//     basic.pause(1000)
//     basic.showString("" + (лол[2]))
//     basic.pause(1000)
//     basic.showString("" + (лол[3]))
//     basic.pause(1000)
//     basic.showString("" + (лол[4]))
//     basic.pause(1000)
//     basic.showString("" + (лол[5]))
// })
// let лол: string[] = []
// лол = [
//     "1",
//     "5",
//     "3",
//     "9",
//     "6",
//     "4"
// ]
// let age = 10
// let ega = 7
// age-ega ==3
// let parol=10
// if (age >= 18){
//     basic.showIcon(IconNames.Yes)
// } else {
//     (age<=18)
//     basic.showIcon(IconNames.No)
// }
// input.onButtonPressed(Button.A, function () {
//     basic.showString("" + (randint(1, 1e+27)))
// })

// function t (){
//     let d = randint(5,1000)
//     let p =(5,1000)
//     input.onButtonPressed(Button.B,function () {
// basic.showNumber( d+p)
//     })
//     input.onGesture(Gesture.LogoUp,function () {
//         basic(d+p)
//     }
//      input.onGesture(Gesture.LogoDown, function () {
//          basic(d - p)
//      }
//       input.onGesture(Gesture.TiltLeft, function () {
//           basic(d * p)
//       }
//        input.onGesture(Gesture.TiltRight, function () {
//            basic(d / p)
//        }