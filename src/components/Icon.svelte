<script lang="ts">
  import "../app.css";
  import type { IconKind } from "../types";

  export let className = "";
  export let kind: IconKind;
</script>

<div class={className}>
  {#if kind === "back"}
    <svg
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        d="m13.707 16 4.6465-4.6464-.7071-.7071-5.3536 5.3535 5.3536 5.3536.7071-.7071z"
        fill="#000"
        fill-rule="evenodd"
      />
    </svg>
  {:else if kind === "forward"}
    <svg
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        clip-rule="evenodd"
        d="m17.9394 16-4.6465-4.6464.7071-.7071 5.3536 5.3535-5.3536 5.3536-.7071-.7071z"
        fill="#000"
        fill-rule="evenodd"
      /></svg
    >
  {:else if kind === "minus"}
    <svg
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
      ><path d="m21.5 16.5h-11v-1h11z" fill="#000" /></svg
    >
  {:else if kind === "plus"}
    <svg
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
      ><path d="m15.5 15.5v-5h1v5h5v1h-5v5h-1v-5h-5v-1z" fill="#000" /></svg
    >
  {/if}
</div>

<style>
  div {
    width: var(--size-medium);
    height: var(--size-medium);
  }
</style>
