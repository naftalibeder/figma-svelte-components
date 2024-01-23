<script lang="ts">
  import "../app.css";

  export let className = "";
</script>

<div class={`${className} font-small weight-bold`}>
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
