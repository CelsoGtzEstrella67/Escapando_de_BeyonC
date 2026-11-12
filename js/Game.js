export class Game {

    constructor(){
        this.area = document.getElementById("game-area");

        this.init();

    }

    init(){
        this.resizeGameArea();

    }

    //Controles con las teclas
    setupInput(){
        window.addEventListener('keydown', (e) => {
            this.keys[e.key.toLowerCase()] = true;
        });
        // cuando una tecla deja de ser presionada, su valor vuelve a ser falso
        window.addEventListener('keyup', (e) => {
            this.keys[e.key.toLowerCase()] = false;
        });
        // limpia keys cuando se abre el menu de contetos
        window.addEventListener('contextmenu', () => {
            this.keys = {};
        });
        // limpia keys cuando la ventana pierde el foco
        window.addEventListener('bur', () => {
            this.keys = {};
        });

    }

    resizeGameArea(){
        this.area.style.width = "1000px";
        this.area.style.height = "600px";

    }

}