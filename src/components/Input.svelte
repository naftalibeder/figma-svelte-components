<script lang="ts">
  import "../app.css";
  import type { InternalClass } from "../types";

  let _class: InternalClass = "";
  export { _class as class };

  export let type: "text" = "text";
  export let value: string | undefined = undefined;
  export let placeholder: string | undefined = undefined;
  export let disabled: boolean = false;
</script>

<div class={_class}>
  {#if type === "text"}
    <input
      class={"font-small"}
      type="text"
      bind:value
      placeholder={placeholder ?? ""}
      {disabled}
      on:keydown
      on:input
      on:change
      on:focus
      on:blur
    />
  {/if}
</div>

<style>
  input {
    display: flex;
    width: 100%;
    height: var(--size-medium);
    padding: 0px var(--size-xxsmall);
    color: var(--figma-color-text);
    background-color: var(--figma-color-bg);
    outline: 1px var(--figma-color-border) solid;
    outline-offset: -1px;
    border-radius: var(--border-radius-small);
    border: 0px;
    box-sizing: border-box;
  }

  input:hover,
  input:active {
    outline-color: var(--figma-color-text-tertiary);
  }

  input:focus {
    outline-color: var(--figma-color-border-selected);
  }

  input::selection {
    color: var(--figma-color-bg);
    background-color: var(--figma-color-text-selected);
  }

  input::placeholder {
    color: var(--figma-color-text-tertiary);
    outline: 1px transparent solid;
  }

  input:disabled {
    color: var(--figma-color-text-disabled);
  }
</style>
