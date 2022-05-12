let computador = {
    monitor: 'LG e AOC',
    mouse: 'G403 Hero Logitech',
    teclado: 'Hyperx Alloy  FPS',
    gabinete: 'Cougar',
    ligar: function() {
        console.log('VUUUUUUUUUUUUUUUUUUUUUU')
    }
}
computador.ligar()

let pad = Object.create(computador)

pad.mousePad = 'Fallen'

console.log(pad.mousePad)

