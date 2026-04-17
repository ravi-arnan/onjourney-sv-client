<script lang="ts">
// @ts-ignore
  import SearchIcon from '$lib/components/icons/SearchIcon.svelte';

  export let placeholder: string = 'Search destination or activities';
</script>

<div class="search">
  <SearchIcon />

  <input
    type="text"
    placeholder={placeholder}
    aria-label="Search"
  />
</div>

<style>
  .search {
    display: flex;
    align-items: center;
    gap: 10px;

    border: 1px solid #e2e2e2;
    border-radius: 9px;
    padding: 10px 16px;
    width: 100%;
    background-color: #fff;
  }

  /* focus */
  .search:focus-within {
    border-color: #3f9ef0;
    box-shadow: 0 0 0 1px rgba(63, 158, 240, 0.25);
  }

  .search input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 14px;
    background: transparent;
  }

  .search input::placeholder {
    color: #9e9e9e;
    font-weight: 400;
  }

</style>