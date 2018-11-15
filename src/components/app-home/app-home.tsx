import { Component } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  render() {
    return (
      <div>
        <color-streaks />
        <div class="centered">
          <font-loader name="Toronto Subway">milkcrates.me</font-loader>
        </div>
      </div>
    );
  }
}
