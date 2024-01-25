<script lang="ts" generics="T extends string">
  import "../app.css";
  import type { InternalClass, SelectMenuItem } from "../types";
  import { Type } from ".";
  import { Icon } from ".";

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
  class={`container ${isPopupActive ? "popup-active" : ""} ${_class}`}
  on:click={() => {
    isPopupActive = !isPopupActive;
  }}
>
  {#if isPopupActive}
    <div class="popup">
      {#each items as item}
        <button
          class={`item ${item.subtitle ? "large" : ""}`}
          on:click={() => {
            selectedItemId = item.id;
            onChangeSelectedItem(item.id);
          }}
        >
          <div>
            <Type class="item-title" size={"font-small"}>
              {item.title}
            </Type>
            {#if item.subtitle}
              <Type class="item-subtitle" size={"font-small"}>
                {item.subtitle}
              </Type>
            {/if}
          </div>
          {#if item.id === selectedItemId}
            <Icon class="check" kind={"check"} />
          {/if}
        </button>
      {/each}
    </div>
  {:else}
    <div class="default-contents ignore-click">
      {#if !selectedItemId}
        <Type class="placeholder">{placeholder}</Type>
      {:else}
        <Type>{items.find((o) => o.id === selectedItemId)?.title ?? ""}</Type>
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
    outline: 1px var(--figma-color-border) solid;
    outline-offset: -1px;
    border-radius: var(--border-radius-small);
    box-sizing: border-box;
  }

  .container:hover,
  .container:active {
    outline-color: var(--figma-color-text-tertiary);
  }

  .container:focus:global(.popup-active) {
    outline: 0px;
  }

  .default-contents {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    padding-left: var(--size-xxsmall);
    white-space: nowrap;
  }

  :global(.placeholder) {
    color: var(--figma-color-text-tertiary);
  }

  .popup {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    display: grid;
    padding: 8px 0px;
    max-height: calc(var(--size-medium) * 6.5 - 8px);
    overflow-y: scroll;
    background-color: var(--figma-color-text);
    z-index: 2147483647;
  }

  :global(.popup) {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  :global(.popup::-webkit-scrollbar) {
    display: none;
  }

  .popup > .item {
    all: unset;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    height: var(--size-medium);
    padding-left: var(--size-xxsmall);
    white-space: nowrap;
  }

  .popup > .item.large {
    height: var(--size-large);
  }

  .popup > .item:hover {
    background-color: var(--figma-color-bg-selected-strong);
  }

  :global(.item-title) {
    color: var(--figma-color-bg);
  }

  :global(.item-subtitle) {
    color: var(--figma-color-border);
  }

  :global(.check) {
    color: var(--figma-color-bg);
  }
</style>
