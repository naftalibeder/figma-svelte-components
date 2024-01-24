<script lang="ts">
  import "../app.css";
  import { Icon } from "../components";
  import type { IconKind, InternalClass } from "../types";

  let _class: InternalClass = "";
  export { _class as class };

  export let kind: IconKind;
  export let onClick: () => void;
</script>

<div>
  <button class={_class} on:click={onClick}>
    <Icon {kind} />
  </button>
</div>

<style>
  button {
    all: unset;
    display: flex;
    flex: 0;
    align-items: flex-start;
    justify-content: flex-start;
    width: var(--size-medium);
    height: var(--size-medium);
    border-radius: var(--border-radius-small);
    cursor: pointer;
  }

  button:hover {
    background-color: var(--figma-color-bg-hover);
  }
</style>
