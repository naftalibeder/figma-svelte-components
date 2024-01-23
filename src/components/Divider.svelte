<script lang="ts">
  import "../app.css";

  export let className = "";
</script>

<div class={className}>
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
