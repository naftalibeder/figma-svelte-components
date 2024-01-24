<script lang="ts" generics="T extends string">
  import "../app.css";
  import type { InternalClass, SelectMenuItem } from "../types";
  import { Type } from ".";
  import Icon from "./Icon.svelte";

  let _class: InternalClass = "";
  export { _class as class };

  export let items: SelectMenuItem<T>[];
  export let selectedItemId: string | undefined = undefined;
  export let placeholder: string | undefined = undefined;
  export let onChangeSelectedItem: (itemId: T) => void;

  let isPopupActive = false;

  const id = `${Math.random()}`;

  window.addEventListener("click", (evt: MouseEvent) => {
    if (evt.target["id"] === id) {
      return;
    }

    if (isPopupActive) {
      isPopupActive = false;
    }
  });
</script>

<button
  {id}
  class={`container ${_class}`}
  on:click={() => {
    isPopupActive = !isPopupActive;
  }}
>
  {#if isPopupActive}
    <div class="contents-active">
      {#each items as item}
        <button
          class="item"
          on:click={() => {
            selectedItemId = item.id;
          }}
        >
          <Type class="item-label">{item.label}</Type>
          {#if item.id === selectedItemId}
            <Icon class="check" kind={"check"} />
          {/if}
        </button>
      {/each}
    </div>
  {:else}
    <div class="contents-inactive ignore-click">
      {#if !selectedItemId}
        <Type class="placeholder">{placeholder}</Type>
      {:else}
        <Type>{items.find((o) => o.id === selectedItemId)?.label ?? ""}</Type>
      {/if}
      <Icon kind={"down"} />
    </div>
  {/if}
</button>

<style>
  .container {
    all: unset;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100%;
    height: var(--size-medium);
    color: var(--figma-color-text);
    background-color: var(--figma-color-bg);
    border: 1px solid var(--figma-color-border);
    border-radius: var(--border-radius-small);
    box-sizing: border-box;
    outline: none;
  }

  .container:hover,
  .container:active {
    border-color: var(--figma-color-text-tertiary);
  }

  .container:focus {
    border: 1px solid var(--figma-color-border-selected);
    outline-offset: -2px;
  }

  .contents-inactive {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    padding-left: var(--size-xxxsmall);
  }

  :global(.placeholder) {
    color: var(--figma-color-text-tertiary);
  }

  :global(.contents-active) {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    display: grid;
    background-color: var(--figma-color-text);
  }

  .item {
    all: unset;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    height: var(--size-medium);
    padding-left: var(--size-xxsmall);
  }

  .item:hover {
    background-color: var(--figma-color-bg-selected-strong);
  }

  :global(.item-label) {
    color: var(--figma-color-bg);
  }

  :global(.check) {
    color: var(--figma-color-bg);
  }
</style>
