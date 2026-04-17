<script lang="ts">
  import { onMount } from 'svelte';

  type LanguageOption = {
    label: string;
    currency: string;
  };

  let isOpen = false;

  const options: LanguageOption[] = [
    { label: 'English', currency: 'IDR' },
    { label: 'English', currency: 'USD' },
    { label: 'Indonesia', currency: 'IDR' }
  ];

  let selected: LanguageOption = options[0];

  let dropdownRef: HTMLDivElement;

  function toggle() {
    isOpen = !isOpen;
  }

  function select(option: LanguageOption) {
    selected = option;
    isOpen = false;
  }

  onMount(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef && !dropdownRef.contains(e.target as Node)) {
        isOpen = false;
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  });
</script>

<div class="dropdown" bind:this={dropdownRef}>
  <button
    class="trigger"
    on:click|stopPropagation={toggle}
    aria-haspopup="listbox"
    aria-expanded={isOpen}
  >
    {selected.label} ({selected.currency})
    <span class="arrow">▾</span>
  </button>

  {#if isOpen}
    <ul class="menu" role="listbox">
      {#each options as option}
        <li>
          <button
            type="button"
            class="option"
            on:click={() => select(option)}
          >
            {option.label} ({option.currency})
          </button>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .dropdown {
    position: relative;
  }

  .trigger {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 550;
    color: #444;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .menu {
    position: absolute;
    top: 110%;
    right: 0;
    background: #fff;
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 6px 0;
    min-width: 150px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    z-index: 100;
  }

  .menu li {
    list-style: none;
  }

  .option {
    width: 100%;
    padding: 8px 16px;
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
  }

  .option:hover {
    background: #f5f7fa;
  }
</style>