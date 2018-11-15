import { Component, Prop } from "@stencil/core";
import { classNames } from "../../../helpers/utils";

@Component({
  tag: "color-triangle",
  styleUrl: "color-triangle.css",
  shadow: true
})
export class ColorTriangle {
  @Prop() color: string;
  @Prop() size: string;
  @Prop() delayStep: number;
  @Prop() animated: boolean;

  render() {
    return (
      <div
        class={classNames(
          "ColorTriangle",
          this.animated && "ColorTriangle-animated"
        )}
        style={{
          "--streak-background-color": `#${this.color}`,
          "--triangle-size": this.size,
          "--animation-delay": `${this.delayStep * 150}ms`
        }}
      />
    );
  }
}
