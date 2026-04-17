<!-- Footer.svelte -->
<footer class="border-t border-gray-100 bg-white ">
  <div class="max-w-6xl mx-auto px-6 py-10">
    <div class="grid grid-cols-4 gap-8 mb-8">
      <div>
        <p class="text-sm font-light text-gray-400 mb-5">Support</p>
        <div class="flex flex-col gap-3 text-sm font-light text-gray-900 mb-4">
        {#each ['Help Center','Safety Information','Cancellation Options','COVID-19 Regulations'] as link}
          <a href={`/support/${link.toLowerCase().replace(/\s+/g, '-')}`} class="block text-xs text-gray-700 hover:text-blue-500 transition-colors mb-4">{link}</a>
        {/each}
        </div>
      </div>
      <div>
        <p class="text-sm font-light text-gray-400 mb-5">Partnership</p>
        <div class="flex flex-col gap-3  text-sm font-light text-gray-900 mb-4">
        {#each ['Join as Travel Agent','Local Transport','Community Forum'] as link}
          <a href={`/partnership/${link.toLowerCase().replace(/\s+/g, '-')}`} class="block text-xs text-gray-700 hover:text-blue-500 transition-colors mb-4">{link}</a>
        {/each}
        </div>
      </div>
      <div>
        <p class="text-sm font-light text-gray-400 mb-5">About</p>
        <div class="flex flex-col gap-3 text-sm font-light text-gray-900 mb-4">
        {#each ['Blog','New Features','Careers','Investor'] as link}
          <a href={`/about/${link.toLowerCase().replace(/\s+/g, '-')}`} class="block text-xs text-gray-700 hover:text-blue-500 transition-colors mb-4">{link}</a>
        {/each}
        </div>
      </div>
      <div>
  <p class="text-sm font-light text-gray-400 mb-4">Download Apps</p>
  

  <div class="flex gap-3">
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
      class="h-9 cursor-pointer"
      alt="Google Play"
    />
    <img 
      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
      class="h-9 cursor-pointer"
      alt="App Store"
    />
  </div>

      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-gray-100 pt-5 flex items-center justify-between">
      <div class="flex items-center gap-5 text-xs font-light text-gray-600">
        <span>© 2025 On-Journey</span>
        <a href="/privacy" class="hover:text-blue-500 transition-colors">Privacy Policy</a>
        <a href="/terms" class="hover:text-blue-500 transition-colors">Terms & Conditions</a>
      </div>
      <div class="flex items-center gap-3">
      <!-- LinkedIn (replace Twitter) -->
<a href="https://linkedin.com" aria-label="Follow us on LinkedIn"
   class="w-7 h-7 flex items-center justify-center text-black hover:text-[#2097f5] transition-all">
  <svg class="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.14.919-2.063 2.063-2.063 1.14 0 2.064.923 2.064 2.063 0 1.139-.924 2.065-2.064 2.065zM7.119 20.452H3.556V9h3.563v11.452z"/>
  </svg>
</a>

<!-- Facebook -->
<a href="https://facebook.com" aria-label="Follow us on Facebook"
   class="w-7 h-7 flex items-center justify-center text-black hover:text-[#2097f5] transition-all">
  <svg class="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
</a>

<!-- Instagram -->
<a href="https://instagram.com" aria-label="Follow us on Instagram"
   class="w-7 h-7 flex items-center justify-center text-black hover:text-[#2097f5] transition-all">
  <svg class="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
</a>
      </div>
    </div>
  </div>
</footer>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap');
  
  footer {
    font-family: 'Roboto', sans-serif;
  }
</style>