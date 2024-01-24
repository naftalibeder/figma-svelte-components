<script lang="ts">
  import "../app.css";
  import type { InternalClass } from "../types";

  let _class: InternalClass = "";
  export { _class as class };
</script>

<div class={`${_class} font-small weight-bold`}>
  <slot />
</div>

<style>
  div {
    display: flex;
    align-items: center;
    width: 100%;
    height: var(--size-medium);
  }
</style>
