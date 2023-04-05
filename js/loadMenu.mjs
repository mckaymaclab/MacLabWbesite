class menu  extends HTMLElement{
  constructor(){
    super();
  }

  connectedCallback(){
    this.innerHTML =`
    <nav>
      <div class="nav_logo-container">
            <div class="logo-container_left"></div>
            <div class="logo-container_right"></div>
      </div>
      <ul class="nav_buttons-container" >
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>         
      </ul>
    </nav>`
  }
}

window.customElements.define("main-menu", menu);