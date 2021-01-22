input.onButtonPressed(Button.A, function () {
    for (let index2 = 0; index2 < 3; index2++) {
        basic.showString("" + (strlist[index]))
        basic.pause(200)
        index += 1
    }
})
let strlist: string[] = []
let index = 0
index = 0
strlist = ["Hello", "World", "!"]
