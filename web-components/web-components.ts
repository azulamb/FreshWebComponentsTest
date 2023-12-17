/// <reference path="./types.d.ts" />
import {} from "preact";
import type { JSXInternal } from "preact/src/jsx.d.ts";

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ["sample-component"]: JSXInternal.HTMLAttributes<SampleComponent>;
    }
  }
}
