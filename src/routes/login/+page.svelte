<script lang="ts">
  import type { ActionData, PageServerData } from "./$types";

  export let data: PageServerData;

  export let form: ActionData;
</script>

{#if form}
  un
{/if}

<form method="POST" action="?/login">
  <label>
    Email
    <input name="email" />
  </label>
  <label>
    Password
    <input name="password" type="password" />
  </label>
  <button>Log in</button>
</form>

{#if form?.success}
  <!-- this message is ephemeral; it exists because the page was rendered in
		   response to a form submission. it will vanish if the user reloads -->
  <p>Successfully logged in! Welcome back, {data.user}</p>
{/if}
