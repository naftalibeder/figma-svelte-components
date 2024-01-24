<script lang="ts">
  import "../app.css";
  import type { InternalClass } from "../types";

  let _class: InternalClass = "";
  export { _class as class };
</script>

<div class={_class}>
  <hr />
</div>

<style>
  div {
    padding: 2px 0px;
  }

  hr {
    width: 100%;
    border-color: transparent;
    border-top-color: var(--figma-color-border);
  }
</style>
