class footer  extends HTMLElement{
    constructor(){
      super();
    }
  
    connectedCallback(){
      this.innerHTML =`
      <div class="footer-divContainer">
        <div class="footer_div-box1"></div>
        <div class="footer_div-box2"></div>
        <div class="footer_div-box3"></div>
      </div>`
    }
  }
  
  window.customElements.define("main-footer", footer);