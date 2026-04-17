<script>
  const stories = [
    "Trip to Bali 🌴",
    "Exploring Japan 🇯🇵",
    "Backpacking Europe 🎒",
  ];
</script>

<h1>Travel Stories</h1>

<ul>
  {#each stories as story}
    <li>{story}</li>
  {/each}
</ul>
