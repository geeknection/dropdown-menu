/**
 * Controla o drop de menu para abrir ou fechar
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
     * Controla o click nos dropdown
     *
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
     * Escuta o evento de click para saber se foi clicado em algum outro item que não seja o dropdown
     */
    addEventListener() {
        window.addEventListener('click', (event) => {
            for (var i = 0; i < this.selectBtn.length; i++) {
                if (event.target !== this.selectBtn[i].children[0]){
                    this.removeClassDropdown(this.selectBtn[i], 'show');
                }
            }
        });
    }
    /**
     * Adiciona uma classe ao dropdown clicado
     * @param {*} el 
     * @param {*} classToToggle 
     */
    addClassDropdown(el, position, classToToggle) {
        var classN = el[position].className
        if(classN.indexOf(classToToggle) < 0){
            el[position].className = classN + " " + classToToggle;
        }
    }
    /**
     * Remove uma classe de todos os dropdown
     * @param {*} el 
     * @param {*} classToToggle 
     */
    removeClassDropdown(el, classToToggle) {
        var classN = el.className;
        if(classN.indexOf(classToToggle) >= 0){
            el.className =  classN.replace(" " + classToToggle, '');
        }
    }

    /**
     * Inicia a classe
     */
    init() {
        this.dropdownClickController();
        this.addEventListener();
        return true;
    }
}

export default dropdownMenu;
