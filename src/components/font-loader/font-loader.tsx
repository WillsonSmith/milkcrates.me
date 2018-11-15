import { Component, Prop, Element, State } from "@stencil/core";
import { classNames } from "../../helpers/utils";

@Component({
  tag: "font-loader",
  styleUrl: "font-loader.css",
  shadow: true
})
export class FontLoader {
  @Prop() name: string;
  @Prop() source: string;
  @State() loaded: boolean = false;
  @Element() fontLoaderElement: HTMLElement;

  componentWillLoad() {
    import("fontfaceonload").then(m => {
      const FontFaceOnload = m.default;
      FontFaceOnload(this.name, {
        success: () => {
          this.loaded = true;
        },
        error: function() {},
        timeout: 5000
      });
    });
  }

  render() {
    return (
      <span
        class={classNames(this.loaded && "fonts-loaded")}
        style={{ "--font-family": `"${this.name}"` }}
      >
        <slot />
      </span>
    );
  }
}
