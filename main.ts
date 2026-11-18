radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 135)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 2)
    } else if (receivedNumber == 2) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 2)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 135)
    } else if (receivedNumber == 3) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 135)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 135)
    } else if (receivedNumber == 4) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 135)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 135)
    } else if (receivedNumber == 5) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 0)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 0)
    }
})
radio.setGroup(1)
