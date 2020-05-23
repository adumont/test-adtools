let vLight = 0
let sensors: number[] = []
let vTemp = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(vLight)
    ADTools.logNumber(vLight)
})
radio.onReceivedString(function (receivedString) {
    sensors = ADTools.unpackNums(receivedString, Delimiters.Pipe)
    vLight = sensors[0]
    vTemp = sensors[1]
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(vTemp)
    ADTools.logNumber(vTemp)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString(ADTools.packNums([input.lightLevel(), input.temperature()], Delimiters.Pipe))
})
