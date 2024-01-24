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

  const logClick = (name: string, ...args: any) => {
    console.log(`${name}:`, args);
  };
</script>

<div class="page">
  <div class="container">
    <p>Section</p>
    <Section>Hello, world.</Section>

    <div class="grid-divider" />

    <p>Type</p>
    <Type>Hello, world.</Type>

    <div class="grid-divider" />

    <p>Icon</p>
    <Icon kind={"plus"} />

    <div class="grid-divider" />

    <p>IconButton</p>
    <IconButton
      kind={"plus"}
      onClick={() => {
        logClick("IconButton");
      }}
    />

    <div class="grid-divider" />

    <p>Input</p>
    <Input
      value={undefined}
      placeholder={"Enter text"}
      on:input={(evt) => logClick(evt.target["value"])}
    />

    <div class="grid-divider" />

    <p>SelectMenu</p>
    <SelectMenu
      items={[
        { id: "item-1", label: "Item 1" },
        { id: "item-2", label: "Item 2" },
        { id: "item-3", label: "Item 3" },
      ]}
      selectedItemId={"item-1"}
      placeholder={"Choose one"}
      onChangeSelectedItem={(o) => {
        logClick("SelectMenu", o);
      }}
    />

    <div class="grid-divider" />

    <p>Divider</p>
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
    align-items: center;
    row-gap: 24px;
    width: 100%;
    max-width: 600px;
  }

  p {
    color: rgb(154, 154, 154);
  }

  .grid-divider {
    display: grid;
    grid-column: 1/3;
    border-top: 1px solid rgb(226, 226, 226);
  }
</style>
