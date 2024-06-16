datalogger.setColumnTitles("A")
datalogger.setColumnTitles("B")
datalogger.setColumnTitles("C")
let random_variable = 0
basic.forever(function () {
    random_variable = randint(0, 3)
    basic.pause(1000)
    if (random_variable == 1) {
        datalogger.log(datalogger.createCV("A", 1))
        basic.showNumber(1)
    }
    if (random_variable == 2) {
        datalogger.log(datalogger.createCV("B", 2))
        basic.showNumber(2)
    }
    if (random_variable == 3) {
        datalogger.log(datalogger.createCV("C", 3))
        basic.showNumber(3)
    }
    basic.clearScreen()
})
