<script setup lang="ts">
import type { AdButtonCustomEvent } from "@agado/components";
import "@agado/components/design-tokens.css";
import { AdButton, AdLink } from "@agado/vue";

function handleLongPress(_event: AdButtonCustomEvent<void>) {
  console.log("Button pressed and held");
}
</script>

<template>
  <header>
    <h1>Vue Stencil POC</h1>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
  </header>

  <main>
    <ad-button
      variant="primary"
      label="Click me"
      @click="() => console.log('Button clicked')"
      @pressAndHold="handleLongPress"
    ></ad-button>

    <ad-link href="https://agado.dev" text="Agado" type="external"></ad-link>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: var(--vt-c-black-soft);
}

@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: center;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
