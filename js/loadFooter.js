class footer  extends HTMLElement{
    constructor(){
      super();
    }
  
    connectedCallback(){
      this.innerHTML =`
      <div class="footer-divContainer">
      <div class="footer_div-box1">
          <img src="../img/footer/Design-Elements 1.png" alt="">
      </div>
      <div lass="footer_div-box-text">
          <h3>SERVICES</h3>
          <a href=""><p>Virtual Reality</p></a>
          <a href=""><p>3D Printing</p></a>
          <a href=""><p>Cricut</p></a>
          <a href=""><p>Equipment Rental</p></a>
          <a href=""><p>Workshops</p></a>
          <a href=""><p>Adobe Help</p></a>
      </div>
      <div class="footer_div-box-text">
          <h3>CONTACT US</h3>
          <p>208-496-9550</p>
          <p>mckaymaclab@byui.edu</p>
          <p>McKay Library #140</p>
          <p>IG: @mckaylibrary</p>
      </div>           
      </div>`
    }
  }
  
  window.customElements.define("main-footer", footer);