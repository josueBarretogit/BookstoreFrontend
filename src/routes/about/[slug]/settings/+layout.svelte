<script lang="ts">
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

<h1>Settings</h1>

<div class="submenu">
  {#each data.sections as section}
    <h2>{section.title}</h2>
  {/each}
</div>

<slot />
