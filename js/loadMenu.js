class menu  extends HTMLElement{
  constructor(){
    super();
  }

  connectedCallback(){
    this.innerHTML =`
    <nav>
    <div class="nav_logo-container">
          <div class="logo-container_left">
              <svg version="1.1"
              id="Layer_1" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 99.3 58"
              style="enable-background:new 0 0 99.3 58;" xml:space="preserve">
              <style type="text/css">
              .st0{fill:#FFFFFF;}
              .st1{fill:#231F20;}
              </style>
              <g transform="matrix(1.25 0 0 -1.25 -194.53 814.51)">
              <g transform="translate(.46466 .37173)">
              <path class="st0" d="M155.3,624.4c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0.1-0.2,0.2-0.2h76.3c0.1,0,0.2,0.1,0.2,0.2
                c0,0.1-0.1,0.2-0.2,0.2L155.3,624.4L155.3,624.4z"/>
              <path class="st0" d="M155.4,651.1c-0.1,0-0.1-0.3,0-0.3c0,0,0,0,0,0c0.7-0.1,1.1-0.2,1.5-0.4c0.4-0.3,0.4-0.5,0.4-1.1l0-18.4
                c0-0.6,0-0.8-0.4-1.1c-0.4-0.3-0.8-0.3-1.5-0.4h0c-0.1,0-0.1-0.3,0-0.3h14.9c6.3,0,8.9,2.5,8.9,6.4c0,2.9-1.3,4.6-4,5.3
                c0,0,0,0.1,0,0.1c1.7,0.5,3.2,1.7,3.2,4.7c0,4.1-2.7,5.4-8.7,5.4L155.4,651.1L155.4,651.1z M189.8,651.1l-10.7,0
                c-0.1,0-0.1-0.2,0-0.3c0,0,0,0,0,0c0.5-0.1,0.7,0,1.2-0.3c0.1,0,0.2-0.1,0.3-0.2c0.3-0.3,0.6-0.6,1-1.2l7.6-11.2v-7
                c0-0.6,0-0.8-0.4-1.1c-0.4-0.3-0.8-0.3-1.5-0.4c0,0,0,0,0,0c-0.1,0-0.1-0.3,0-0.3h11.6c0.1,0,0.1,0.3,0,0.3c0,0,0,0,0,0
                c-0.7,0.1-1.1,0.2-1.5,0.4c-0.4,0.3-0.4,0.5-0.4,1.1v7l7.6,11.3c0.4,0.6,0.7,0.9,1,1.2c0.1,0,0.2,0.1,0.3,0.2
                c0.3,0.2,0.4,0.2,0.8,0.2c0,0,0,0,0,0c0.1,0,0.1,0.3,0,0.3l-10.2,0c-0.1,0-0.1-0.3,0-0.3c0,0,0,0,0,0c0.5,0,1.1,0,1-0.7
                c-0.1-0.7-3-4.9-4.1-6.6c-0.1-0.2-0.3-0.5-0.3-0.8c0,0.3-0.2,0.6-0.3,0.8c-1.5,2.2-4,5.7-4,6.6c-0.1,0.7,0.5,0.7,1,0.7
                c0,0,0,0,0,0C189.9,650.8,189.9,651.1,189.8,651.1L189.8,651.1z M223.1,651.1c-0.1,0-0.1-0.3,0-0.3l0,0c0.7-0.1,1-0.2,1.4-0.4
                c0.4-0.3,0.4-0.5,0.4-1.1v-11c0-2.5-1.4-4.5-4.3-4.5c-2.9,0-4.3,1.9-4.3,4.5v11c0,0.6,0,0.8,0.4,1.1c0.4,0.3,0.8,0.3,1.4,0.4
                c0,0,0,0,0,0c0.1,0,0.1,0.3,0,0.3h-10.3c-0.1,0-0.1-0.3,0-0.3c0,0,0,0,0,0c0.4,0,0.6,0,0.9-0.2c0.3-0.3,0.4-0.6,0.4-1.2l0-10.9
                c0-5.2,2.9-9.7,11.6-9.7c8.7,0,11.5,4.4,11.5,9.7v10.9c0,0.6,0,0.8,0.4,1.1c0.4,0.3,0.8,0.3,1.5,0.4c0,0,0,0,0,0
                c0.1,0,0.1,0.3,0,0.3L223.1,651.1L223.1,651.1z M164.2,647c0,0,0.3,0,0.5,0h2.9c2.2,0,3.5-0.3,3.5-2.3c0-1.3-0.8-2.4-3.4-2.4h-3
                c-0.3,0-0.5,0-0.5,0s0,0.2,0,0.5v3.8C164.3,646.8,164.2,647,164.2,647L164.2,647z M164.2,638.8c0,0,0.3,0,0.5,0h2.4
                c1.9,0,4.3,0,4.3-2.7c0-2-1.7-2.7-4-2.7h-2.8c-0.3,0-0.5,0-0.5,0s0,0.3,0,0.5v4.4C164.3,638.6,164.2,638.8,164.2,638.8
                L164.2,638.8z M225.9,619.4c-4.3,0-7.2-3.5-7.2-7.2c0-3.8,2.9-6.8,6.9-6.8c4.4,0,7.2,3.5,7.2,7.2
                C232.9,616.4,230,619.4,225.9,619.4L225.9,619.4z M189.2,619.3c-0.2,0-0.3,0-0.4-0.1c-0.5-1.7-1.2-3.5-1.9-5.3l-1.1-3.1
                c-1.5-4.2-1.9-4.5-2.1-4.6c-0.3-0.2-0.7-0.3-1.3-0.4c-0.1,0-0.1-0.3,0-0.3h4.3c0.1,0,0.1,0.2,0,0.3c-0.9,0.1-1.2,0.3-1.2,0.6
                c0,0.5,0.2,1.5,1.2,4.2h4.4c1.2-3.1,1.5-4,1.5-4.4c0-0.3-0.4-0.4-1.1-0.5c-0.1,0-0.1-0.3,0-0.3h4.7c0.1,0,0.1,0.2,0,0.3
                c-0.6,0.1-0.9,0.1-1.3,0.4c-0.3,0.2-0.6,0.5-2.2,4.7l-1.2,3.1c-0.7,1.9-1.3,3.4-1.9,5.3C189.5,619.3,189.4,619.3,189.2,619.3
                L189.2,619.3z M155.3,619.3c-0.1,0-0.1-0.3,0-0.3c0.8-0.1,1.4-0.2,1.6-0.4c0.3-0.1,0.4-0.5,0.4-4.7v-3.1c0-4.2-0.2-4.5-0.4-4.7
                c-0.3-0.2-0.8-0.3-1.6-0.4c-0.1,0-0.1-0.3,0-0.3h5.7c0.1,0,0.1,0.3,0,0.3c-0.8,0.1-1.4,0.2-1.6,0.4c-0.3,0.1-0.5,0.5-0.5,4.7v3.1
                c0,4.2,0.2,4.6,0.5,4.7c0.3,0.1,0.8,0.3,1.6,0.4c0.1,0,0.1,0.3,0,0.3H155.3z M165.9,619.3c-0.1,0-0.1-0.3,0-0.3
                c0.8-0.1,1.2-0.2,1.4-0.4c0.3-0.1,0.4-0.5,0.4-4.7v-3.1c0-4.2-0.2-4.5-0.4-4.7c-0.3-0.1-0.6-0.3-1.4-0.4c-0.1,0-0.1-0.3,0-0.3
                c0.9,0,1.9,0,2.7,0c0.8,0,2.3,0,3.2,0c2.7,0,4.3,0.6,5.8,2.1c1.3,1.3,2,3.1,2,4.9c0,3.8-3.1,6.7-7.3,6.7c-1,0-2.9,0-3.7,0
                C167.8,619.2,166.8,619.3,165.9,619.3L165.9,619.3z M199.3,619.3c-0.1,0-0.1-0.3,0-0.3c0.8-0.1,1.2-0.2,1.4-0.4
                c0.3-0.1,0.4-0.5,0.4-4.7v-3.1c0-4.2-0.2-4.5-0.4-4.7c-0.3-0.1-0.6-0.3-1.4-0.4c-0.1,0-0.1-0.3,0-0.3h5.4c0.1,0,0.1,0.2,0,0.3
                c-0.8,0.1-1.2,0.2-1.4,0.4c-0.3,0.2-0.4,0.5-0.4,4.7v1.3h8v-1.3c0-4.2-0.2-4.5-0.4-4.7c-0.3-0.1-0.6-0.3-1.4-0.4
                c-0.1,0-0.1-0.3,0-0.3h5.4c0.1,0,0.1,0.2,0,0.3c-0.8,0.1-1.2,0.2-1.5,0.4c-0.3,0.2-0.4,0.5-0.4,4.7v3.1c0,4.2,0.2,4.6,0.4,4.7
                c0.3,0.1,0.6,0.3,1.5,0.4c0.1,0,0.1,0.3,0,0.3h-5.4c-0.1,0-0.1-0.3,0-0.3c0.8-0.1,1.2-0.2,1.4-0.4c0.3-0.1,0.4-0.5,0.4-4.7v-1h-8
                v1c0,4.2,0.2,4.6,0.4,4.7c0.3,0.1,0.6,0.3,1.4,0.4c0.1,0,0.1,0.3,0,0.3H199.3z M225.5,618.6c3.4,0,5.6-3.2,5.6-6.7
                c0-2.7-1.2-5.8-5-5.8c-3.4,0-5.6,3.2-5.6,6.7C220.5,615.6,221.7,618.6,225.5,618.6L225.5,618.6z M171.6,618.6
                c4.1,0,6.2-3.1,6.2-6.4c0-4-1.9-6-6.1-6c-1.1,0-1.6,0.1-2,0.5c-0.3,0.3-0.5,1.4-0.5,4.1v3.2c0,3.1,0.2,4,0.3,4.2
                C169.8,618.4,170.3,618.6,171.6,618.6L171.6,618.6z M188.9,616.7l1.9-5.1H187L188.9,616.7z"/>
              </g>
              </g>
              <g>
              <rect x="-349.1" y="-27.6" width="53.9" height="53.9"/>
              <g transform="matrix(1.25 0 0 -1.25 -194.53 814.51)">
              <g transform="translate(.46466 .37173)">
                <path class="st0" d="M-114.4,650.6C-114.4,650.6-114.5,650.6-114.4,650.6c-0.1-0.1,0-0.1,0-0.1h23c0,0,0.1,0,0.1,0.1
                  c0,0,0,0.1-0.1,0.1L-114.4,650.6L-114.4,650.6z"/>
                <path class="st0" d="M-114.4,658.6C-114.4,658.6-114.4,658.6-114.4,658.6C-114.4,658.6-114.4,658.6-114.4,658.6
                  c0.2-0.1,0.3-0.1,0.5-0.2c0.1-0.1,0.1-0.1,0.1-0.3l0-5.5c0-0.2,0-0.2-0.1-0.3c-0.1-0.1-0.3-0.1-0.5-0.1h0c0,0,0-0.1,0-0.1h4.5
                  c1.9,0,2.7,0.7,2.7,1.9c0,0.9-0.4,1.4-1.2,1.6c0,0,0,0,0,0c0.5,0.2,1,0.5,1,1.4c0,1.2-0.8,1.6-2.6,1.6L-114.4,658.6L-114.4,658.6
                  z M-104,658.6l-3.2,0c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0.1,0,0.2,0,0.4-0.1c0,0,0.1,0,0.1-0.1c0.1-0.1,0.2-0.2,0.3-0.4l2.3-3.4v-2.1
                  c0-0.2,0-0.2-0.1-0.3c-0.1-0.1-0.3-0.1-0.5-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1h3.5c0,0,0,0.1,0,0.1c0,0,0,0,0,0
                  c-0.2,0-0.3,0-0.5,0.1c-0.1,0.1-0.1,0.1-0.1,0.3v2.1l2.3,3.4c0.1,0.2,0.2,0.3,0.3,0.4c0,0,0.1,0,0.1,0.1c0.1,0,0.1,0.1,0.2,0.1
                  c0,0,0,0,0,0c0,0,0,0.1,0,0.1l-3.1,0c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0.1,0,0.3,0,0.3-0.2c0-0.2-0.9-1.5-1.2-2
                  c0-0.1-0.1-0.1-0.1-0.2c0,0.1-0.1,0.2-0.1,0.2c-0.4,0.7-1.2,1.7-1.2,2C-104.3,658.6-104.2,658.6-104,658.6
                  C-104,658.6-104,658.6-104,658.6C-104,658.6-104,658.6-104,658.6L-104,658.6z M-94,658.6C-94,658.6-94,658.6-94,658.6L-94,658.6
                  c0.2-0.1,0.3-0.1,0.4-0.2c0.1-0.1,0.1-0.1,0.1-0.3v-3.3c0-0.8-0.4-1.3-1.3-1.3c-0.9,0-1.3,0.6-1.3,1.3v3.3c0,0.2,0,0.2,0.1,0.3
                  c0.1,0.1,0.2,0.1,0.4,0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.1h-3.1c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1
                  c0.1-0.1,0.1-0.2,0.1-0.4l0-3.3c0-1.6,0.9-2.9,3.5-2.9c2.6,0,3.5,1.3,3.5,2.9v3.3c0,0.2,0,0.2,0.1,0.3c0.1,0.1,0.3,0.1,0.5,0.1
                  c0,0,0,0,0,0c0,0,0,0.1,0,0.1L-94,658.6L-94,658.6z M-111.7,657.4c0,0,0.1,0,0.2,0h0.9c0.7,0,1-0.1,1-0.7c0-0.4-0.2-0.7-1-0.7
                  h-0.9c-0.1,0-0.2,0-0.2,0s0,0.1,0,0.2v1.1C-111.7,657.3-111.7,657.4-111.7,657.4L-111.7,657.4z M-111.7,655c0,0,0.1,0,0.2,0h0.7
                  c0.6,0,1.3,0,1.3-0.8c0-0.6-0.5-0.8-1.2-0.8h-0.8c-0.1,0-0.2,0-0.2,0s0,0.1,0,0.2v1.3C-111.7,654.9-111.7,655-111.7,655
                  L-111.7,655z M-93.2,649.1c-1.3,0-2.2-1.1-2.2-2.2c0-1.2,0.9-2.1,2.1-2.1c1.3,0,2.2,1.1,2.2,2.2
                  C-91.1,648.2-91.9,649.1-93.2,649.1L-93.2,649.1z M-104.2,649.1c-0.1,0-0.1,0-0.1,0c-0.2-0.5-0.4-1.1-0.6-1.6l-0.3-0.9
                  c-0.5-1.3-0.6-1.3-0.6-1.4c-0.1-0.1-0.2-0.1-0.4-0.1c0,0,0-0.1,0-0.1h1.3c0,0,0,0.1,0,0.1c-0.3,0-0.4,0.1-0.4,0.2
                  c0,0.1,0.1,0.4,0.4,1.3h1.3c0.4-0.9,0.4-1.2,0.4-1.3c0-0.1-0.1-0.1-0.3-0.2c0,0,0-0.1,0-0.1h1.4c0,0,0,0.1,0,0.1
                  c-0.2,0-0.3,0-0.4,0.1c-0.1,0.1-0.2,0.2-0.7,1.4l-0.4,0.9c-0.2,0.6-0.4,1-0.6,1.6C-104.1,649.1-104.2,649.1-104.2,649.1
                  L-104.2,649.1z M-114.4,649.1C-114.4,649.1-114.4,649-114.4,649.1c0.3-0.1,0.4-0.1,0.5-0.2c0.1,0,0.1-0.2,0.1-1.4v-0.9
                  c0-1.3-0.1-1.4-0.1-1.4c-0.1,0-0.2-0.1-0.5-0.1c0,0,0-0.1,0-0.1h1.7c0,0,0,0.1,0,0.1c-0.2,0-0.4,0.1-0.5,0.1
                  c-0.1,0-0.1,0.2-0.1,1.4v0.9c0,1.3,0.1,1.4,0.1,1.4c0.1,0,0.2,0.1,0.5,0.1c0,0,0,0.1,0,0.1H-114.4z M-111.2,649.1
                  C-111.3,649.1-111.3,649-111.2,649.1c0.3-0.1,0.4-0.1,0.4-0.2c0.1,0,0.1-0.2,0.1-1.4v-0.9c0-1.3-0.1-1.4-0.1-1.4
                  c-0.1,0-0.2-0.1-0.4-0.1c0,0,0-0.1,0-0.1c0.3,0,0.6,0,0.8,0c0.2,0,0.7,0,1,0c0.8,0,1.3,0.2,1.7,0.6c0.4,0.4,0.6,0.9,0.6,1.5
                  c0,1.2-0.9,2-2.2,2c-0.3,0-0.9,0-1.1,0C-110.7,649.1-111,649.1-111.2,649.1L-111.2,649.1z M-101.2,649.1
                  C-101.2,649.1-101.2,649-101.2,649.1c0.3-0.1,0.4-0.1,0.4-0.2c0.1,0,0.1-0.2,0.1-1.4v-0.9c0-1.3-0.1-1.4-0.1-1.4
                  c-0.1,0-0.2-0.1-0.4-0.1c0,0,0-0.1,0-0.1h1.6c0,0,0,0.1,0,0.1c-0.3,0-0.4,0.1-0.4,0.1c-0.1,0-0.1,0.2-0.1,1.4v0.4h2.4v-0.4
                  c0-1.3-0.1-1.4-0.1-1.4c-0.1,0-0.2-0.1-0.4-0.1c0,0,0-0.1,0-0.1h1.6c0,0,0,0.1,0,0.1c-0.3,0-0.4,0.1-0.4,0.1
                  c-0.1,0-0.1,0.2-0.1,1.4v0.9c0,1.3,0.1,1.4,0.1,1.4c0.1,0,0.2,0.1,0.4,0.1c0,0,0,0.1,0,0.1h-1.6c0,0,0-0.1,0-0.1
                  c0.2,0,0.4-0.1,0.4-0.1c0.1,0,0.1-0.2,0.1-1.4v-0.3h-2.4v0.3c0,1.3,0.1,1.4,0.1,1.4c0.1,0,0.2,0.1,0.4,0.1c0,0,0,0.1,0,0.1
                  H-101.2z M-93.3,648.9c1,0,1.7-1,1.7-2c0-0.8-0.4-1.7-1.5-1.7c-1,0-1.7,1-1.7,2C-94.8,648-94.4,648.9-93.3,648.9L-93.3,648.9z
                    M-109.5,648.9c1.2,0,1.9-0.9,1.9-1.9c0-1.2-0.6-1.8-1.8-1.8c-0.3,0-0.5,0-0.6,0.2c-0.1,0.1-0.1,0.4-0.1,1.2v1
                  c0,0.9,0.1,1.2,0.1,1.3C-110.1,648.8-109.9,648.9-109.5,648.9L-109.5,648.9z M-104.3,648.3l0.6-1.5h-1.1L-104.3,648.3z"/>
              </g>
              </g>
              </g>
              <rect x="-349.2" y="126.9" style="fill:none;" width="82.5" height="10.2"/>
              <text transform="matrix(1 0 0 1 -349.1532 130.4074)"><tspan x="0" y="0" style="font-family:'MyriadPro-Regular'; font-size:5px;">This exact size for posters</tspan><tspan x="0" y="6" style="font-family:'MyriadPro-Regular'; font-size:5px;">(29mm x 29mm)</tspan></text>
              <rect x="-349.2" y="145.2" style="fill:none;" width="141.5" height="23"/>
              <text transform="matrix(1 0 0 1 -349.1532 148.7014)"><tspan x="0" y="0" style="font-family:'MyriadPro-Regular'; font-size:5px;">Align this to the edge of the document then add your own bleed </tspan><tspan x="0" y="6" style="font-family:'MyriadPro-Regular'; font-size:5px;">without stretching the original. Do not change colors, must be </tspan><tspan x="0" y="12" style="font-family:'MyriadPro-Regular'; font-size:5px;">white text on a black square</tspan></text>
              <rect x="-348.5" y="29" style="fill:none;" width="53.3" height="10.2"/>
              <text transform="matrix(1 0 0 1 -348.5481 32.5215)"><tspan x="0" y="0" style="font-family:'MyriadPro-Regular'; font-size:5px;">This exact size for flyers</tspan><tspan x="0" y="6" style="font-family:'MyriadPro-Regular'; font-size:5px;">(16mm x 16mm)</tspan></text>
              <g>
              <g>
              <rect x="-348.9" y="41.9" width="82.2" height="82.2"/>
              <g transform="matrix(1.25 0 0 -1.25 -194.53 814.51)">
                <g transform="translate(.46466 .37173)">
                  <path class="st0" d="M-109.1,583.1C-109.2,583.1-109.2,583.1-109.1,583.1c-0.1-0.1,0-0.2,0-0.2h35.1c0,0,0.1,0,0.1,0.1
                    c0,0,0,0.1-0.1,0.1L-109.1,583.1L-109.1,583.1z"/>
                  <path class="st0" d="M-109.1,595.3c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0.3-0.1,0.5-0.1,0.7-0.2c0.2-0.1,0.2-0.2,0.2-0.5l0-8.4
                    c0-0.3,0-0.4-0.2-0.5c-0.2-0.1-0.4-0.1-0.7-0.2h0c0,0,0-0.1,0-0.1h6.8c2.9,0,4.1,1.1,4.1,2.9c0,1.3-0.6,2.1-1.8,2.4c0,0,0,0,0,0
                    c0.8,0.2,1.5,0.8,1.5,2.2c0,1.9-1.3,2.5-4,2.5L-109.1,595.3L-109.1,595.3z M-93.3,595.3l-4.9,0c0,0,0-0.1,0-0.1c0,0,0,0,0,0
                    c0.2,0,0.3,0,0.6-0.1c0,0,0.1-0.1,0.1-0.1c0.2-0.1,0.3-0.3,0.4-0.5l3.5-5.1v-3.2c0-0.3,0-0.4-0.2-0.5c-0.2-0.1-0.4-0.1-0.7-0.2
                    c0,0,0,0,0,0c0,0,0-0.1,0-0.1h5.4c0,0,0,0.1,0,0.1c0,0,0,0,0,0c-0.3,0.1-0.5,0.1-0.7,0.2c-0.2,0.1-0.2,0.2-0.2,0.5v3.2l3.5,5.2
                    c0.2,0.3,0.3,0.4,0.5,0.6c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.1,0.4,0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.1l-4.7,0c0,0,0-0.1,0-0.1
                    c0,0,0,0,0,0c0.2,0,0.5,0,0.5-0.3c0-0.3-1.4-2.3-1.9-3c-0.1-0.1-0.1-0.2-0.1-0.4c0,0.1-0.1,0.3-0.2,0.3c-0.7,1-1.8,2.6-1.9,3
                    c0,0.3,0.2,0.3,0.5,0.3c0,0,0,0,0,0C-93.3,595.2-93.2,595.3-93.3,595.3L-93.3,595.3z M-78,595.3c0,0,0-0.1,0-0.1l0,0
                    c0.3,0,0.5-0.1,0.7-0.2c0.2-0.1,0.2-0.2,0.2-0.5v-5.1c0-1.2-0.7-2-2-2c-1.3,0-2,0.9-2,2v5.1c0,0.3,0,0.4,0.2,0.5
                    c0.2,0.1,0.3,0.1,0.7,0.2c0,0,0,0,0,0c0,0,0,0.1,0,0.1H-85c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0.2,0,0.3,0,0.4-0.1
                    c0.2-0.1,0.2-0.3,0.2-0.6l0-5c0-2.4,1.3-4.4,5.3-4.4c4,0,5.3,2,5.3,4.4v5c0,0.3,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.7,0.2
                    c0,0,0,0,0,0c0,0,0,0.1,0,0.1L-78,595.3L-78,595.3z M-105.1,593.5c0,0,0.1,0,0.2,0h1.3c1,0,1.6-0.2,1.6-1.1
                    c0-0.6-0.4-1.1-1.6-1.1h-1.4c-0.1,0-0.2,0-0.2,0s0,0.1,0,0.2v1.8C-105,593.4-105.1,593.5-105.1,593.5L-105.1,593.5z
                      M-105.1,589.7c0,0,0.1,0,0.2,0h1.1c0.9,0,2,0,2-1.2c0-0.9-0.8-1.2-1.8-1.2h-1.3c-0.1,0-0.2,0-0.2,0s0,0.1,0,0.2v2
                    C-105,589.6-105.1,589.7-105.1,589.7L-105.1,589.7z M-76.7,580.8c-2,0-3.3-1.6-3.3-3.3c0-1.8,1.3-3.1,3.2-3.1
                    c2,0,3.3,1.6,3.3,3.3C-73.5,579.4-74.8,580.8-76.7,580.8L-76.7,580.8z M-93.6,580.8c-0.1,0-0.2,0-0.2-0.1
                    c-0.2-0.8-0.6-1.6-0.9-2.4l-0.5-1.4c-0.7-1.9-0.9-2.1-1-2.1c-0.1-0.1-0.3-0.2-0.6-0.2c0,0,0-0.1,0-0.1h2c0,0,0,0.1,0,0.1
                    c-0.4,0-0.6,0.1-0.6,0.3c0,0.2,0.1,0.7,0.6,1.9h2c0.6-1.4,0.7-1.8,0.7-2c0-0.1-0.2-0.2-0.5-0.2c0,0,0-0.1,0-0.1h2.1
                    c0,0,0,0.1,0,0.1c-0.3,0-0.4,0.1-0.6,0.2c-0.1,0.1-0.3,0.2-1,2.2l-0.6,1.4c-0.3,0.9-0.6,1.6-0.9,2.4
                    C-93.4,580.7-93.5,580.8-93.6,580.8L-93.6,580.8z M-109.1,580.7c0,0,0-0.1,0-0.1c0.4,0,0.6-0.1,0.8-0.2c0.1-0.1,0.2-0.2,0.2-2.2
                    v-1.4c0-1.9-0.1-2.1-0.2-2.2c-0.1-0.1-0.4-0.1-0.8-0.2c0,0,0-0.1,0-0.1h2.6c0,0,0,0.1,0,0.1c-0.4,0-0.6,0.1-0.7,0.2
                    c-0.1,0.1-0.2,0.2-0.2,2.2v1.4c0,1.9,0.1,2.1,0.2,2.2c0.1,0.1,0.4,0.1,0.7,0.2c0,0,0,0.1,0,0.1H-109.1z M-104.3,580.7
                    c0,0,0-0.1,0-0.1c0.4,0,0.5-0.1,0.7-0.2c0.1-0.1,0.2-0.2,0.2-2.2v-1.4c0-1.9-0.1-2.1-0.2-2.2c-0.1-0.1-0.3-0.1-0.7-0.2
                    c0,0,0-0.1,0-0.1c0.4,0,0.9,0,1.2,0c0.4,0,1.1,0,1.5,0c1.2,0,2,0.3,2.7,1c0.6,0.6,0.9,1.4,0.9,2.3c0,1.8-1.4,3.1-3.4,3.1
                    c-0.4,0-1.3,0-1.7,0C-103.4,580.7-103.9,580.7-104.3,580.7L-104.3,580.7z M-88.9,580.7c0,0,0-0.1,0-0.1c0.4,0,0.5-0.1,0.7-0.2
                    c0.1-0.1,0.2-0.2,0.2-2.2v-1.4c0-1.9-0.1-2.1-0.2-2.2c-0.1-0.1-0.3-0.1-0.7-0.2c0,0,0-0.1,0-0.1h2.5c0,0,0,0.1,0,0.1
                    c-0.4,0-0.5,0.1-0.7,0.2c-0.1,0.1-0.2,0.2-0.2,2.2v0.6h3.7v-0.6c0-1.9-0.1-2.1-0.2-2.2c-0.1-0.1-0.3-0.1-0.7-0.2
                    c0,0,0-0.1,0-0.1h2.5c0,0,0,0.1,0,0.1c-0.4,0-0.5,0.1-0.7,0.2c-0.1,0.1-0.2,0.2-0.2,2.2v1.4c0,1.9,0.1,2.1,0.2,2.2
                    c0.1,0.1,0.3,0.1,0.7,0.2c0,0,0,0.1,0,0.1h-2.5c0,0,0-0.1,0-0.1c0.4,0,0.5-0.1,0.7-0.2c0.1-0.1,0.2-0.2,0.2-2.2v-0.5h-3.7v0.5
                    c0,1.9,0.1,2.1,0.2,2.2c0.1,0.1,0.3,0.1,0.7,0.2c0,0,0,0.1,0,0.1H-88.9z M-76.9,580.4c1.6,0,2.6-1.5,2.6-3.1
                    c0-1.3-0.6-2.7-2.3-2.7c-1.6,0-2.6,1.5-2.6,3.1C-79.2,579-78.6,580.4-76.9,580.4L-76.9,580.4z M-101.7,580.4
                    c1.9,0,2.9-1.4,2.9-2.9c0-1.8-0.9-2.7-2.8-2.7c-0.5,0-0.7,0.1-0.9,0.3c-0.1,0.1-0.2,0.6-0.2,1.9v1.5c0,1.4,0.1,1.9,0.1,1.9
                    C-102.5,580.3-102.3,580.4-101.7,580.4L-101.7,580.4z M-93.7,579.5l0.9-2.4h-1.7L-93.7,579.5z"/>
                </g>
              </g>
              </g>
              <g>
              <g>
                <path class="st1" d="M-237.9,83.7c0-2.1,1.4-3.4,3.1-3.4c0.9,0,1.6,0.4,2,0.8l-0.6,0.7c-0.3-0.3-0.7-0.6-1.3-0.6
                  c-1.2,0-1.9,0.9-1.9,2.4c0,1.5,0.7,2.4,2,2.4c0.4,0,0.7-0.1,0.9-0.3v-1.4h-1.2v-1h2.3v2.9c-0.4,0.4-1.2,0.8-2.1,0.8
                  C-236.5,87.1-237.9,85.9-237.9,83.7z"/>
                <path class="st1" d="M-231.7,84.5c0-1.6,1.1-2.6,2.3-2.6c1.2,0,2.3,0.9,2.3,2.6c0,1.6-1.1,2.6-2.3,2.6
                  C-230.6,87.1-231.7,86.2-231.7,84.5z M-228.2,84.5c0-1-0.4-1.6-1.2-1.6c-0.7,0-1.2,0.7-1.2,1.6s0.4,1.6,1.2,1.6
                  C-228.6,86.2-228.2,85.5-228.2,84.5z"/>
                <path class="st1" d="M-226.2,84.5c0-1.6,1.1-2.6,2.3-2.6s2.3,0.9,2.3,2.6c0,1.6-1.1,2.6-2.3,2.6S-226.2,86.2-226.2,84.5z
                    M-222.7,84.5c0-1-0.4-1.6-1.2-1.6s-1.2,0.7-1.2,1.6s0.4,1.6,1.2,1.6S-222.7,85.5-222.7,84.5z"/>
                <path class="st1" d="M-220.7,84.5c0-1.6,1-2.6,2.1-2.6c0.6,0,0.9,0.2,1.3,0.5l0-0.8v-1.8h1.2V87h-0.9l-0.1-0.5h0
                  c-0.4,0.4-0.9,0.7-1.4,0.7C-219.9,87.1-220.7,86.2-220.7,84.5z M-217.3,85.6v-2.3c-0.3-0.3-0.7-0.4-1-0.4c-0.6,0-1.1,0.6-1.1,1.6
                  c0,1.1,0.4,1.6,1.1,1.6C-218,86.2-217.7,86-217.3,85.6z"/>
                <path class="st1" d="M-211.3,81.4h-1.9v-1h4.9v1h-1.9V87h-1.2V81.4z"/>
                <path class="st1" d="M-207.3,79.9h1.2v1.8l0,0.9c0.4-0.4,0.9-0.7,1.6-0.7c1.1,0,1.5,0.7,1.5,2V87h-1.2v-2.9
                  c0-0.8-0.2-1.1-0.8-1.1c-0.4,0-0.7,0.2-1.1,0.6V87h-1.2V79.9z"/>
                <path class="st1" d="M-201.7,82.1h0.9l0.1,0.9h0c0.3-0.6,0.9-1,1.4-1c0.2,0,0.4,0,0.6,0.1l-0.2,1c-0.2,0-0.3-0.1-0.5-0.1
                  c-0.4,0-0.9,0.3-1.2,1v3h-1.2V82.1z"/>
                <path class="st1" d="M-198.3,84.5c0-1.6,1.1-2.6,2.3-2.6c1.2,0,2.3,0.9,2.3,2.6c0,1.6-1.1,2.6-2.3,2.6
                  C-197.2,87.1-198.3,86.2-198.3,84.5z M-194.8,84.5c0-1-0.4-1.6-1.2-1.6c-0.7,0-1.2,0.7-1.2,1.6s0.4,1.6,1.2,1.6
                  C-195.2,86.2-194.8,85.5-194.8,84.5z"/>
                <path class="st1" d="M-192.5,85.2v-3.1h1.2V85c0,0.8,0.2,1.1,0.8,1.1c0.4,0,0.7-0.2,1.1-0.7v-3.4h1.2V87h-0.9l-0.1-0.7h0
                  c-0.4,0.5-0.9,0.8-1.6,0.8C-192.1,87.1-192.5,86.4-192.5,85.2z"/>
                <path class="st1" d="M-187.2,87.9c0-0.4,0.3-0.8,0.7-1v0c-0.3-0.2-0.4-0.4-0.4-0.8c0-0.4,0.3-0.7,0.5-0.9v0
                  c-0.3-0.2-0.6-0.7-0.6-1.3c0-1.1,0.9-1.8,1.9-1.8c0.3,0,0.5,0,0.7,0.1h1.8v0.9h-0.9c0.2,0.2,0.3,0.5,0.3,0.8
                  c0,1.1-0.8,1.7-1.9,1.7c-0.2,0-0.4,0-0.7-0.1c-0.1,0.1-0.2,0.2-0.2,0.5c0,0.3,0.2,0.4,0.8,0.4h0.9c1.2,0,1.8,0.4,1.8,1.2
                  c0,1-1,1.7-2.6,1.7C-186.4,89.2-187.2,88.7-187.2,87.9z M-183.7,87.6c0-0.4-0.3-0.5-0.9-0.5h-0.7c-0.3,0-0.5,0-0.7-0.1
                  c-0.3,0.2-0.4,0.4-0.4,0.6c0,0.4,0.5,0.7,1.3,0.7C-184.2,88.4-183.7,88-183.7,87.6z M-184.3,83.7c0-0.6-0.4-1-0.9-1
                  c-0.5,0-0.9,0.3-0.9,1c0,0.6,0.4,1,0.9,1S-184.3,84.3-184.3,83.7z"/>
                <path class="st1" d="M-181.7,79.9h1.2v1.8l0,0.9c0.4-0.4,0.9-0.7,1.6-0.7c1.1,0,1.5,0.7,1.5,2V87h-1.2v-2.9
                  c0-0.8-0.2-1.1-0.8-1.1c-0.4,0-0.7,0.2-1.1,0.6V87h-1.2V79.9z"/>
                <path class="st1" d="M-176.2,82.9c0-0.5,0.3-0.8,0.7-0.8s0.7,0.3,0.7,0.8c0,0.4-0.3,0.8-0.7,0.8S-176.2,83.4-176.2,82.9z
                    M-176.2,86.3c0-0.5,0.3-0.8,0.7-0.8s0.7,0.3,0.7,0.8c0,0.4-0.3,0.8-0.7,0.8S-176.2,86.8-176.2,86.3z"/>
                <path class="st1" d="M-171.7,83.8c0-2.1,0.8-3.3,2.2-3.3s2.2,1.1,2.2,3.3c0,2.1-0.8,3.3-2.2,3.3S-171.7,85.9-171.7,83.8z
                    M-168.5,83.8c0-1.8-0.4-2.4-1.1-2.4c-0.6,0-1.1,0.6-1.1,2.4s0.4,2.4,1.1,2.4C-168.9,86.2-168.5,85.6-168.5,83.8z"/>
                <path class="st1" d="M-166.7,86.2l0.5-0.7c0.4,0.4,0.8,0.7,1.5,0.7c0.7,0,1.2-0.5,1.2-1.2c0-0.8-0.5-1.2-1.2-1.2
                  c-0.4,0-0.6,0.1-1,0.4l-0.5-0.4l0.2-3.1h3.4v1h-2.4l-0.1,1.5c0.3-0.1,0.5-0.2,0.8-0.2c1.1,0,2,0.6,2,2c0,1.4-1.1,2.2-2.2,2.2
                  C-165.6,87.1-166.3,86.7-166.7,86.2z"/>
                <path class="st1" d="M-159.4,79.9h0.8l-2.3,8.7h-0.8L-159.4,79.9z"/>
                <path class="st1" d="M-158,83.8c0-2.1,0.8-3.3,2.2-3.3s2.2,1.1,2.2,3.3c0,2.1-0.8,3.3-2.2,3.3S-158,85.9-158,83.8z M-154.8,83.8
                  c0-1.8-0.4-2.4-1.1-2.4c-0.6,0-1.1,0.6-1.1,2.4s0.4,2.4,1.1,2.4C-155.2,86.2-154.8,85.6-154.8,83.8z"/>
                <path class="st1" d="M-153,86.2l0.5-0.7c0.4,0.4,0.8,0.7,1.5,0.7c0.7,0,1.2-0.5,1.2-1.2c0-0.8-0.5-1.2-1.2-1.2
                  c-0.4,0-0.6,0.1-1,0.4l-0.5-0.4l0.2-3.1h3.4v1h-2.4l-0.1,1.5c0.3-0.1,0.5-0.2,0.8-0.2c1.1,0,2,0.6,2,2c0,1.4-1.1,2.2-2.2,2.2
                  C-151.9,87.1-152.6,86.7-153,86.2z"/>
                <path class="st1" d="M-145.7,79.9h0.8l-2.3,8.7h-0.8L-145.7,79.9z"/>
                <path class="st1" d="M-144.3,86.3c1.8-1.7,2.9-2.8,2.9-3.8c0-0.7-0.4-1.1-1.1-1.1c-0.5,0-0.9,0.3-1.2,0.7l-0.6-0.6
                  c0.6-0.6,1.2-1,2-1c1.2,0,2,0.8,2,2c0,1.1-1,2.3-2.3,3.6c0.3,0,0.8-0.1,1.1-0.1h1.6v1h-4.3V86.3z"/>
                <path class="st1" d="M-139.2,83.8c0-2.1,0.8-3.3,2.2-3.3s2.2,1.1,2.2,3.3c0,2.1-0.8,3.3-2.2,3.3S-139.2,85.9-139.2,83.8z
                    M-136,83.8c0-1.8-0.4-2.4-1.1-2.4c-0.6,0-1.1,0.6-1.1,2.4s0.4,2.4,1.1,2.4C-136.4,86.2-136,85.6-136,83.8z"/>
                <path class="st1" d="M-134.1,86.3c1.8-1.7,2.9-2.8,2.9-3.8c0-0.7-0.4-1.1-1.1-1.1c-0.5,0-0.9,0.3-1.2,0.7l-0.6-0.6
                  c0.6-0.6,1.2-1,2-1c1.2,0,2,0.8,2,2c0,1.1-1,2.3-2.3,3.6c0.3,0,0.8-0.1,1.1-0.1h1.6v1h-4.3V86.3z"/>
                <path class="st1" d="M-128.9,86.3c1.8-1.7,2.9-2.8,2.9-3.8c0-0.7-0.4-1.1-1.1-1.1c-0.5,0-0.9,0.3-1.2,0.7l-0.6-0.6
                  c0.6-0.6,1.2-1,2-1c1.2,0,2,0.8,2,2c0,1.1-1,2.3-2.3,3.6c0.3,0,0.8-0.1,1.1-0.1h1.6v1h-4.3V86.3z"/>
              </g>
              </g>
              </g>
              <rect x="-205.3" y="145.1" style="fill:none;" width="96.3" height="19.6"/>
              <text transform="matrix(1 0 0 1 -205.2575 148.6465)"><tspan x="0" y="0" style="font-family:'MyriadPro-Regular'; font-size:5px;">The good through text is where it is supposed </tspan><tspan x="0" y="6" style="font-family:'MyriadPro-Regular'; font-size:5px;">to be, don’t move it out of place pleaseeeee</tspan></text>
              </svg>
          </div>
          <div class="logo-container_right">
            <p><a href="/index.html">Mackay Library</a></p>
          </div>
    </div>
    <ul class="nav_buttons-container" >
        <li><a href="index.html">MAC LAB</a></li>
        <li><a href="https://byui.libcal.com/calendar/events?cid=8606&t=d&d=0000-00-00&cal=8606&ct=36359&inc=0">Events</a></li>
        <li>
            <a>Services <i class="fa-solid fa-angle-down"></i></a>
            <ul class="dropdown-content">
              <li><a href="/pages/3dPrinting.html">3D Priting</a></li>
              <li><a href="/pages/adobeHelp.html">Adobe Help</a></li>
              <li><a href="/pages/equipment.html">Equipement Check Out</a></li>
              <li><a href="/pages/vr.html">Vr Lab</a></li>
              <li><a href="https://byui.libcal.com/calendar/events?cid=8606&t=d&d=0000-00-00&cal=8606&ct=36359&inc=0">Workshops</a></li>
              <li><a href="/MacLabWbesite/pages/cricut.html">Cricut</a></li>
            </ul>
          </li>
          <li><a href="">Contact Us</a></li>         
    </ul>
  </nav>`
  }
}

window.customElements.define("main-menu", menu);