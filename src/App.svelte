<script lang="ts">
  import "./app.css";
  import {
    Divider,
    Icon,
    IconButton,
    Input,
    Section,
    SelectMenu,
    Type,
  } from "./components";

  const logClick = (...args: any) => {
    console.log("Clicked", args);
  };
</script>

<div class="page">
  <div class="container">
    <div>Section</div>
    <Section>Hello, world.</Section>
    <div>Type</div>
    <Type>Hello, world.</Type>
    <div>Icon</div>
    <Icon kind={"plus"} />
    <div>IconButton</div>
    <IconButton kind={"plus"} onClick={logClick} />
    <div>Input</div>
    <Input value={undefined} placeholder={"Enter text"} />
    <div>SelectMenu</div>
    <SelectMenu
      items={[
        { id: "item-1", label: "Item 1" },
        { id: "item-2", label: "Item 2" },
        { id: "item-3", label: "Item 3" },
      ]}
      selectedItemId={"item-1"}
      placeholder={"Choose one"}
      onChangeSelectedItem={logClick}
    />
    <div>Divider</div>
    <Divider />
  </div>
</div>

<style>
  .page {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 32px;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    row-gap: 24px;
    width: 100%;
    max-width: 600px;
  }
</style>
