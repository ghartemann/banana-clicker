////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////// TOOLTIP I COPYPASTEd FROM SOMEWHERE

class Tooltip extends HTMLElement {
  connectedCallback() {
    this.setup();
  }

  handleDropdownPosition() {
    const screenPadding = 16;

    const placeholderRect = this.placeholder.getBoundingClientRect();
    const dropdownRect = this.dropdown.getBoundingClientRect();

    const dropdownRightX = dropdownRect.x + dropdownRect.width;
    const placeholderRightX = placeholderRect.x + placeholderRect.width;

    if (dropdownRect.x < 0) {
      this.dropdown.style.left = "0";
      this.dropdown.style.right = "auto";
      this.dropdown.style.transform = `translateX(${
        -placeholderRect.x + screenPadding
      }px)`;
    } else if (dropdownRightX > window.outerWidth) {
      this.dropdown.style.left = "auto";
      this.dropdown.style.right = "0";
      this.dropdown.style.transform = `translateX(${
        window.outerWidth - placeholderRightX - screenPadding
      }px)`;
    }
  }

  toggle() {
    if (this.classList.contains("tooltip--open")) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.classList.add("tooltip--open");
    this.handleDropdownPosition();
  }

  close() {
    this.classList.remove("tooltip--open");
  }

  setup() {
    this.placeholder = this.querySelector("[data-tooltip-placeholder]");
    this.dropdown = this.querySelector("[data-tooltip-dropdown]");

    /* don't know what it's fot but it doesn't work and doesn't do shit
    
    this.placeholder.addEventListener("mouseover", () =>
      this.handleDropdownPosition()
    );
    this.placeholder.addEventListener("touchstart", () => this.toggle()); */
  }
}

function dismissAllTooltips(event) {
  if (typeof event.target.closest !== "function") return;
  const currentTooltip = event.target.closest("carwow-tooltip");

  document.querySelectorAll(".tooltip--open").forEach((tooltip) => {
    if (tooltip === currentTooltip) return;

    tooltip.classList.remove("tooltip--open");
  });
}

customElements.define("wow-tooltip", Tooltip);
document.addEventListener("touchstart", (e) => dismissAllTooltips(e));
