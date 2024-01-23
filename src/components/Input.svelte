<script lang="ts">
  import "../app.css";

  export let className = "";
  export let type: "text" = "text";
  export let value: string | undefined = undefined;
  export let placeholder: string | undefined = undefined;
  export let disabled: boolean = false;
</script>

<div class={className}>
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
    padding: var(--size-xxsmall) var(--size-xxxsmall);
    color: var(--figma-color-text);
    background-color: var(--figma-color-bg);
    border: 1px solid var(--figma-color-border);
    border-radius: var(--border-radius-small);
    outline: none;
  }

  input:hover,
  input:active {
    border-color: var(--figma-color-text-tertiary);
  }

  input:focus {
    border: 1px solid var(--figma-color-border-selected);
    outline-offset: -2px;
  }

  input::selection {
    color: var(--figma-color-bg);
    background-color: var(--figma-color-text-selected);
  }

  input::placeholder {
    color: var(--figma-color-text-tertiary);
    border: 1px solid transparent;
  }

  input:disabled {
    color: var(--figma-color-text-disabled);
  }
</style>
