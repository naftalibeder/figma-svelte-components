<script lang="ts">
  import "../app.css";
  import type { InternalClass } from "../types";

  let _class: InternalClass = "";
  export { _class as class };

  export let size: "font-small" | "font-medium" | "font-large" = "font-small";
  export let weight: "weight-regular" | "weight-medium" | "weight-bold" =
    "weight-regular";
</script>

<div class="{size} {weight} {_class}">
  <slot />
</div>
