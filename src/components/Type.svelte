<script lang="ts">
  import "../app.css";

  export let className = "";
  export let size: "font-small" | "font-medium" | "font-large" = "font-small";
  export let weight: "weight-regular" | "weight-medium" | "weight-bold" =
    "weight-regular";
</script>

<div class="{className} {size} {weight}">
  <slot />
</div>
