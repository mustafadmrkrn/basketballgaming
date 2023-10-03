namespace SpriteKind {
    export const pota = SpriteKind.create()
}
function yonergeler (metinler: string) {
    game.showLongText(metinler, DialogLayout.Bottom)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
        . 4 f 4 4 4 4 4 4 4 4 4 4 f 4 . 
        4 4 4 f 4 4 4 4 4 4 4 4 f 4 4 4 
        4 4 4 4 f f f f f f f f 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 f f f f f f f f 4 4 4 4 
        4 4 4 f 4 4 4 4 4 4 4 4 f 4 4 4 
        . 4 f 4 4 4 4 4 4 4 4 4 4 f 4 . 
        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
        `, Mustafa, 0, -100)
    topunvarolmadurumu = true
})
sprites.onOverlap(SpriteKind.pota, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(projectile)
    topunvarolmadurumu = false
    if (info.score() == 5) {
        game.gameOver(true)
    }
})
function ıcerik () {
    game.setDialogFrame(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 1 
        1 2 3 8 8 8 8 8 8 8 8 8 8 8 8 8 8 3 2 1 
        1 2 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 2 1 
        1 2 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 2 1 
        1 2 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 2 1 
        1 2 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 2 1 
        1 2 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 2 1 
        1 2 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 2 1 
        1 2 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 2 1 
        1 2 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 2 1 
        1 2 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 2 1 
        1 2 3 8 8 8 8 8 8 8 8 8 8 8 8 8 8 3 2 1 
        1 3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `)
    yonergeler("Mustafa Basketbol Oynuyor")
    yonergeler("Oyuncunun Amacı: Potaya Basket atmak")
    yonergeler("Potaya attığı her basket için 1 puan kazanıyor")
    yonergeler("Eğer top potaya girmezse 1 can kaybediyor")
    yonergeler("Toplamda 3 can kaybedildiğinde oyun sonlanır")
    yonergeler("5 isabetli basket atıldığında ise oyun kazanılır")
    yonergeler("İyi eğlenceler")
}
let projectile: Sprite = null
let topunvarolmadurumu = false
let Mustafa: Sprite = null
scene.setBackgroundImage(img`
    8888888888888888888888888888888888888811888888888888888888888888888888888888888888888888888888888811888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888818888888888888888888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888118888888888888888888888888888888888888888888888888888888888881188888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888881188888888888888888888888888888888888888888888888888888888888888118888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888811888888888888888888888888888888888888888888888888888888888888888811888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888881188888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888188888888888888888888888888888888888888888888888888888888888888888888118888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888881888888888888888888888888888888888888888888888888888888888888888888888811888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888811888888888888888888888888888888888888888888888888888888888888888888888881188888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888118888888888888888888888888888888888888888888888888888888888888888888888888111888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888188888888888888888888888888888888888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888888888
    8888888888888888888888888888881188888888888888888888888888888888888888888888888888888888888888888888888888888188888888888888888888888888888888888888888888888888
    8888888888888888888888888888881888888888888888888888888888888888888888888888888888888888888888888888888888888818888888888888888888888888888888888888888888888888
    8888888888888888888888888888811888888888888888888888888888888888888888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888888
    8888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888888888888888888888888888888888888888
    8888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888888888888888888888888888888888888888
    8888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888118888888888888888888888888888888888888888888888
    8888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888818888888888888888888888888888888888888888888888
    8888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888818888888888888888888888888888888888888888888888
    8888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888818888888888888888888888888888888888888888888888
    8888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888818888888888888888888888888888888888888888888888
    8888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888818888888888888888888888888888888888888888888888
    8888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888818888888888888888888888888888888888888888888888
    8888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888818888888888888888888888888888888888888888888888
    8888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888818888888888888888888888888888888888888888888888
    8888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888818888888888888888888888888888888888888888888888
    8888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888818888888888888888888888888888888888888888888888
    8888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888811888888888888888888888888888888888888888888888
    8888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888
    8888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888
    8888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888
    8888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888
    8888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888
    8888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888
    8888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888
    8888888888888888888888888888818111111111111111111111111111111111111118888888888888888888888888888888888888811111111188888888888888888888888888888888888888888888
    8888888888888888888888888888811888888888888888888888888888888888888811111111111111111111111111111111111111118888881888888888888888888888888888888888888888888888
    8888888888888888888888888888881888888888888888888888888888888888888888888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888
    8888888888888888888888888888881188888888888888888888888888888888888888888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888
    8888888888888888888888888888888188888888888888888888888888888888888888888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888
    8888888888888888888888888888888118888888888888888888888888888888888888888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888
    8888888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888818888888888888888888888888888888888888888888888
    8888888888888888888888888888888811888888888888888888888888888888888888888888888888888888888888888888888888888888118888888888888888888888888888888888888888888888
    8888888888888888888888888888888881888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888888888888888888888888888888888888888
    8888888888888888888888888888888881188888888888888888888888888888888888888888888888888888888888888888888888888888188888888888888888888888888888888888888888888888
    8888888888888888888888888888888888118888888888888888888888888888888888888888888888888888888888888888888888888881188888888888888888888888888888888888888888888888
    8888888888888888888888888888888888811888888888888888888888888888888888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888881188888888888888888888888888888888888888888888888888888888888888888888888818888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888118888888888888888888888888888888888888888888888888888888888888888888888818888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888811888888888888888888888888888888888888888888888888888888888888888888888118888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888881188888888888888888888888888888888888888888888888888888888888888888888188888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888111888888888888888888888888888888888888888888888888888888888888888881188888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888881188888888888888888888888888888888888888888888888888888888888888811888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888118888888888888888888888888888888888888888888888888888888888888818888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888811888888888888888888888888888888888888888888888888888888888888118888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888881188888888888888888888888888888888888888888888888888888888881188888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888188888888888888888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888811888888888888888888888888888888888888888888888888888888811888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888881188888888888888888888888888888888888888888888888888888118888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888188888888888888888888888888888888888888888888888888881188888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888111888888888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888881188888888888888888888888888888888888888888888888118888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888111888888888888888888888888888888888888888888881188888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888111888888888888888888888888888888888888888811888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888111888888888888888888888888888888888888118888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888111118888888888888888888888888888881188888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888811111111111111111111111111111111888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888111888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    `)
Mustafa = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f e e e e e e e f f . 
    f f e f e e e e e e f f 
    f f f e e e e e e e e f 
    f f f e e e e e e f e f 
    f f f f e e e e f f f f 
    f f f f f f f f f f f f 
    f f f f f f f f f f f f 
    . f f f f f f f f f f . 
    . e f f f f f f f f e . 
    e 4 f b b b b b b f 4 e 
    4 d f d d d d d d c d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
Mustafa.setPosition(75, 85)
controller.moveSprite(Mustafa, 100, 0)
Mustafa.setBounceOnWall(true)
let pota = sprites.create(img`
    . . . f . . . . . . . . f . . . 
    . . f . . . . . . . . . . f . . 
    . f . . . . . . . . . . . . f . 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f f . . . . . . . . . . . . . f 
    f f . . . . . . . . . . . . f f 
    f . f f . . . . . . . . . f . f 
    f . f . f f f f f f f f f f . f 
    f . f . f . . . f . . . f f . f 
    f . f . f . . . . . . . f f . f 
    f . f . . . . . . . . . . f . f 
    f . . . . . . . . . . . . f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.pota)
pota.setPosition(75, 7)
pota.setVelocity(50, 0)
pota.setBounceOnWall(true)
info.setScore(0)
info.setLife(3)
ıcerik()
topunvarolmadurumu = false
game.onUpdateInterval(500, function () {
    if (topunvarolmadurumu == true && projectile.y < 1) {
        topunvarolmadurumu = false
        info.changeLifeBy(-1)
    }
})
