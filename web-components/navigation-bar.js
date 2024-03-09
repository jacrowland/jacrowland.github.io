export class NavigationBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const styles = `
      #navbar {
        z-index: 3;
        background-color: var(--background-color);
        width: 100%;
        position: fixed;
        top: 0;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--primary-color);
        min-height: var(--header-height);
        height: var(--header-height);
        -webkit-box-shadow: 0px -10px 50px 5px var(--box-shadow-color);
        -moz-box-shadow: 0px -10px 50px 5px var(--box-shadow-color);
        box-shadow: 0px -10px 50px 5px var(--box-shadow-color);
        transition: 0.3s ease-in-out;
      }
    
      #navbar h1 {
          color: var(--primary-color);
          font-size: 1.5rem;
          font-weight: bolder;
          margin-left: 25px
      }
      
      #nav-social-links {
          margin-right: 25px;
      }
      
      #navbar ul {
          display: flex;
          justify-content: center;
          align-items: center;
          list-style: none;
          height: var(--header-height);
      }
      
      #navbar ul li {
          margin-right: 40px;
      }

      @media (max-width: var(--md-breakpoint)) {
        #navbar p, #navbar > #nav-social-links {
          display: none;
        }
      }
      `;

    var previousScrollY = 0;
    document.addEventListener("scroll", (e) => {
      document.getElementById("navbar").style.top =
        window.scrollY > previousScrollY && window.scrollY > window.innerHeight ? "-100px" : "0";
      document.getElementById("navbar").style.opacity =
        window.scrollY > previousScrollY && window.scrollY > window.innerHeight ? "0" : "1";
      previousScrollY = window.scrollY;
    });

    document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
    this.innerHTML = `
        <nav id="navbar">
            <h1>JACOB ROWLAND</h1>
            <ul id="nav-social-links">
                <li>
                  <a class="nav-link" target="_blank" href="https://github.com/jacrowland/">
                    <i class="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a class="nav-link" target="_blank" href="mailto:jacob.rowland@hotmail.com">
                    <i class="fa-solid fa-envelope"></i>
                  </a>
                </li>
                <li>
                  <a class="nav-link" target="_blank" href="https://www.linkedin.com/in/jacob-rowland-197821193/">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
            </ul>
        </nav>
    `;
  }
}

customElements.define("navigation-bar", NavigationBar);
