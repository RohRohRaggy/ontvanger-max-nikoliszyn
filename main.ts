radio.onReceivedNumber(function (receivedNumber) {
    basic.clearScreen()
    if (receivedNumber == 1) {
        led.plot(4, 2)
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 135)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 2)
    } else if (receivedNumber == 2) {
        led.plot(0, 2)
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 2)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 135)
    } else if (receivedNumber == 3) {
        led.plot(2, 4)
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 135)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 135)
    } else if (receivedNumber == 4) {
        led.plot(2, 0)
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 135)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 135)
    } else if (receivedNumber == 5) {
        led.plot(2, 2)
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 0)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 0)
    }
})
radio.setGroup(1)