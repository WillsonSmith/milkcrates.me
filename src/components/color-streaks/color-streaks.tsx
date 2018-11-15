import { Component } from "@stencil/core";

@Component({
  tag: "color-streaks",
  styleUrl: "color-streaks.css",
  shadow: true
})
export class ColorStreaks {
  colors: string[] = [
    "e74c3c",
    "e67e22",
    "f1c40f",
    "2ecc71",
    "3498db",
    "9b59b6",
    "5b3256"
  ];

  getSize(count) {
    const indexed = this.colors.length - count + 1;
    return (200 / this.colors.length) * indexed;
  }

  hostData() {
    return {
      "aria-hidden": "true"
    };
  }

  render() {
    return this.colors.reverse().map((color, index) => {
      const streak = (
        <color-triangle
          color={color}
          size={`${this.getSize(index)}px`}
          delayStep={index}
          animated
        />
      );
      return streak;
    });
  }
}
