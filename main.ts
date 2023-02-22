input.onButtonPressed(Button.A, function () {
    Balls += 1
    basic.showString("Ball")
    basic.showNumber(Balls)
})
input.onButtonPressed(Button.B, function () {
    Strikes += 1
    basic.showString("Strike")
    basic.showNumber(Strikes)
})
input.onGesture(Gesture.Shake, function () {
    Balls = 0
    Strikes = 0
    basic.showNumber(Balls)
    basic.showNumber(Strikes)
})
let Strikes = 0
let Balls = 0
Balls = 0
Strikes = 0
