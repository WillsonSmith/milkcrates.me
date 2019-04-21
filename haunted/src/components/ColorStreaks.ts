import {component} from 'haunted';
import {html} from 'lit-html';

import './components/ColorTriangle';

function getSize(length: number, count: number): number {
  const indexed = length - count + 1;
  return (200 / length) * indexed;
}

export default function ColorStreaks() {
  const colors: string[] = [
    'e74c3c',
    'e67e22',
    'f1c40f',
    '2ecc71',
    '3498db',
    '9b59b6',
    '5b3256',
  ];

  const colorLength: number = colors.length;
  
  return html`
    <style>
    :host {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      pointer-events: none;
    }
    </style>

    ${
      colors.reverse().map((color, index) => {
        return html`
          <color-triangle
          color=${color}
          size=${getSize(colorLength, index) + 'px'}
          delay-step=${index}
          animated
        ></color-triangle>
        `;
      })
    }
  `;
}

customElements.define('color-streaks', component(ColorStreaks));
