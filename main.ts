function actualizaretrato () {
    basic.clearScreen()
    if (personajeactivo == 0) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Sword)
    } else if (personajeactivo == 0) {
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Skull)
    } else if (personajeactivo == 0) {
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Heart)
    }
}
input.onButtonPressed(Button.A, function () {
    personajeactivo += 1
    if (personajeactivo) {
        personajeactivo = 0
        actualizaretrato()
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    if (personajeactivo == 0) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
        basic.showString("NUNCA ME RENDIRE")
    } else if (personajeactivo == 1) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
        basic.showString("TODO SERA MIO")
    } else if (personajeactivo == 2) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
        basic.showString("CONFIA EN TI")
    }
    actualizaretrato()
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    if (personajeactivo == 0) {
        led.plotBarGraph(
        20,
        25
        )
    } else if (personajeactivo == 1) {
        led.plotBarGraph(
        4,
        25
        )
    } else if (personajeactivo == 2) {
        led.plotBarGraph(
        25,
        25
        )
    }
    basic.pause(2000)
    actualizaretrato()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    if (personajeactivo == 0) {
        basic.showString("HEROE: VALOR")
    } else if (personajeactivo == 1) {
        basic.showString("VILLANO: CODICIA")
    } else if (personajeactivo == 2) {
        basic.showString("GUIA: SABIDURIA")
    }
    actualizaretrato()
})
let personajeactivo = 0
basic.showString("perfiles")
actualizaretrato()
