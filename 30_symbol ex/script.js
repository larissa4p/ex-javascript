class VideoGame {
    construction(console, controle, cor) {
        this.console = console;
        this.controle = controle;
        this.cor = cor;
    }
    ligar() {
        console.log('PLIM')
    }

}

VideoGame.prototype.console = 'XBOX'

let cabos = Symbol();

VideoGame.prototype[cabos] = 'ok';

let PlayStation = new VideoGame('PlayStation', 2, 'Black')

PlayStation.ligar()

console.log(VideoGame.prototype.console)
console.log(PlayStation.console)

console.log(VideoGame.prototype[cabos])