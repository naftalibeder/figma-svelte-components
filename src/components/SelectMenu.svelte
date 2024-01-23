<script lang="ts" generics="T extends string">
  import "../app.css";
  import type { SelectMenuItem } from "../types";

  export let className = "";
  export let items: SelectMenuItem<T>[];
  export let selectedItemId: string | undefined = undefined;
  export let placeholder: string | undefined = undefined;
  export let onChangeSelectedItem: (itemId: T) => void;
</script>

<div class={className}>
  <select
    class={"font-small"}
    value={selectedItemId ?? ""}
    on:change={(e) => {
      const itemId = e.target["value"];
      onChangeSelectedItem(itemId);
    }}
  >
    {#each items as item}
      <option value={item.id} class={"font-small"}>{item.label}</option>
    {/each}
  </select>
</div>

<style>
  select {
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

  select:hover,
  select:active {
    border-color: var(--figma-color-text-tertiary);
  }

  select:focus {
    border: 1px solid var(--figma-color-border-selected);
    outline-offset: -2px;
  }

  .placeholder {
    color: var(--figma-color-text-tertiary);
  }
</style>
