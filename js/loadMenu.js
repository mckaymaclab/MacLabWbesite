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
        <li>
            <a>Services <i class="fa-solid fa-angle-down"></i></a>
            <ul class="dropdown-content">
              <li><a>3D Priting</a></li>
              <li><a>Adobe Help</a></li>
              <li><a>Equipement Check Out</a></li>
              <li><a href="/pages/vr.html">Vr Lab</a></li>
              <li><a>Workshops</a></li>
              <li><a>Cricut</a></li>
            </ul>
          </li>
          <li><a href="">Events</a></li>
          <li><a href="">Contact Us</a></li>         
    </ul>
  </nav>`
  }
}

window.customElements.define("main-menu", menu);