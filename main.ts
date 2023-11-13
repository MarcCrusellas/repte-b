input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", ang), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("E F G G E F G G ", 0), music.PlaybackMode.UntilDone)
})
function setTempo () {
    ang = input.rotation(Rotation.Pitch)
}
let ang = 0
ang = 120
