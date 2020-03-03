/**
 * @todo Controla o drop de menu para abrir ou fechar
 * @author Bruno Nascimento <br.dev.jobs@gmail.com>
 */
class dropdownMenu {
    constructor() {
        this.selectBtn = document.getElementsByClassName('dropdown');
        this.dropdownClickController = this.dropdownClickController.bind(this);
        this.addEventListener = this.addEventListener.bind(this);
        this.addClassDropdown = this.addClassDropdown.bind(this);
        this.removeClassDropdown = this.removeClassDropdown.bind(this);
    }
    
    /**
     * @todo Controla o click nos dropdown
     * @returns {void}
     */
    dropdownClickController() {
        const classThis = this;
        for (var i = 0; i < this.selectBtn.length; i++) {
            let position = i;
            this.selectBtn[position].onclick = (e) => {
                if (e.toElement.className.indexOf('show') >= 0){
                    for (var j = 0; j < this.selectBtn.length; j++) {
                        classThis.removeClassDropdown(this.selectBtn[j], 'show')
                    }
                } else {
                    classThis.addClassDropdown(classThis.selectBtn, position, 'show');            
                }               
            };
        }
    }
    /**
     * @todo Escuta o evento de click para saber se foi clicado em algum outro item que não seja o dropdown
     * @returns {void}
     */
    addEventListener() {
        window.addEventListener('click', (event) => {
            for (var i = 0; i < this.selectBtn.length; i++) {
                if (event.toElement.offsetParent !== this.selectBtn[i]){
                    this.removeClassDropdown(this.selectBtn[i], 'show');
                }
            }
        });
    }
    /**
     * @todo Adiciona uma classe ao dropdown clicado
     * @param {*} el 
     * @param {*} classToToggle 
     * @returns {void}
     */
    addClassDropdown(el, position, classToToggle) {
        var classN = el[position].className
        if(classN.indexOf(classToToggle) < 0){
            el[position].className = classN + " " + classToToggle;
        }
    }
    /**
     * @todo Remove uma classe de todos os dropdown
     * @param {*} el 
     * @param {*} classToToggle
     * @returns {void}
     */
    removeClassDropdown(el, classToToggle) {
        var classN = el.className;
        if(classN.indexOf(classToToggle) >= 0){
            el.className =  classN.replace(" " + classToToggle, '');
        }
    }

    /**
     * @todo Inicia a classe
     * @returns {Boolean}
     */
    init() {
        this.dropdownClickController();
        this.addEventListener();
        return true;
    }
}
