import {component} from 'haunted';
import {html} from 'lit-html';

function classNames(...names) {
  return names.join(" ");
}


export default function ColorTriangle({color, size, delayStep, animated}) {

  return html`
    <style>
      :host {
        --animation-delay: 0;
      }

      .ColorTriangle {
        position: relative;
      }

      .ColorTriangle::before {
        border-style: solid;
        border-width: var(--triangle-size) var(--triangle-size) 0 0;
        border-color: var(--streak-background-color) transparent transparent
          transparent;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
      }

      @keyframes scale {
        0% {
          transform: scale(0);
        }
        100% {
          transform: scale(1);
        }
      }

      .ColorTriangle-animated {
        transform: scale(0);
        transform-origin: top left;
        animation: scale 150ms cubic-bezier(0.6, 0.82, 0.81, 0.72);
        animation-delay: var(--animation-delay);
        animation-fill-mode: forwards;
      }
    </style>

    <div
      class=${classNames('ColorTriangle', animated && 'ColorTriangle-animated')}
      style=${`
          --streak-background-color: #${color};
          --triangle-size: ${size};
          --animation-delay: ${delayStep * 150}ms;
        `}
    >
    </div>
  `;
}

ColorTriangle.observedAttributes = ['color', 'size', 'delay-step', 'animated'];

customElements.define('color-triangle', component(ColorTriangle));
