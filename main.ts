input.onButtonPressed(Button.A, function () {
    hero.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.AB, function () {
    hero.move(1)
})
input.onButtonPressed(Button.B, function () {
    hero.turn(Direction.Right, 90)
})
let hero: game.LedSprite = null
music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Forever)
let food = game.createSprite(2, 2)
hero = game.createSprite(4, 4)
let ghost = game.createSprite(0, 0)
basic.forever(function () {
    if (hero.isTouching(ghost)) {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        game.gameOver()
    }
    if (hero.isTouching(food)) {
        food.change(LedSpriteProperty.X, randint(0, 4))
        food.change(LedSpriteProperty.Y, randint(0, 4))
    }
    if (ghost < hero) {
        ghost.change(LedSpriteProperty.X, 1)
        basic.pause(600)
    } else if (ghost > hero) {
        hero.change(LedSpriteProperty.X, -1)
        basic.pause(600)
    } else if (ghost < hero) {
        ghost.change(LedSpriteProperty.X, 1)
        basic.pause(600)
    } else if (ghost > hero) {
        hero.change(LedSpriteProperty.X, -1)
        basic.pause(600)
    }
})
