export class ProjectTile extends HTMLElement {
  static observedAttributes = ["title", "image-src"];
  title = "";
  imageSource = "";

  constructor() {
    super();
  }

  connectedCallback() {
    const styles = `
      .project-tile {
        --project-tile-height: 400px;
        --project-tile-width: 600px;
        height: var(--project-tile-height);
        width: var(--project-tile-width);
        max-width: 85vw;
        transition: 0.2s ease-in-out;
        background-color: var(--background-secondary-color);
      }

      .project-title {
        text-align: center;
        line-height: 75px;
        margin: 0;
      }

      .project-image {
        height: calc(var(--project-tile-height) - 75px);
        background-color: pink;
        object-fit: cover;
      }
    
      .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
      }
      
      .project-tile a {
          text-decoration: none;
          color: var(--primary-color);
      }
      
      .project-tile:hover {
          background-color: var(--primary-color);
          transform: scale(1.025);
          cursor: pointer;
      }
      
      .project-tile:hover a {
          color: var(--secondary-color);
      }
      
      .project-tile:hover .project-image {
          filter: grayscale(75%);
      }
    `;

    document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);

    const modalId = `'${this.getAttribute("id")}-modal'`
    
    this.innerHTML = `
      <div class="project-tile">
        <a target="_blank" onclick="displayModal(${modalId})" class="cursor-point">
            <div class="project-image">
                <img src="${this.imageSource}">
            </div>
            <h3 class="project-title">${this.title}</h3>
        </a>
      </div>`;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "title":
        this.title = newValue;
        break;
      case "image-src":
        this.imageSource = newValue;
        break;
    }
  }
}

customElements.define("project-tile", ProjectTile);
