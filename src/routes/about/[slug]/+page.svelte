<script lang="ts">
  import type { PageData } from "./$types";
  let a = 0;
  let b = 0;
  let total = 0;

  export let data: PageData;
  async function add() {
    const response = await fetch("/api/add", {
      method: "POST",
      body: JSON.stringify({ a, b }),
      headers: {
        "content-type": "application/json",
      },
    });

    total = await response.json();
  }
</script>

<h1>ABOUT ME</h1>

<h2>Data received : {data.title}</h2>
<h2>{data.content}</h2>

<input type="number" bind:value={a} /> +
<input type="number" bind:value={b} /> =
{total}

<button on:click={add}>Calculate</button>
<h1>PROFILE SETTINGS</h1>
