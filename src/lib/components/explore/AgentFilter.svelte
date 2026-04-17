<script>
  import { BriefcaseBusiness, Globe, Flag } from "lucide-svelte";
</script>

<section class="w-full border-b border-gray-100 bg-white">
  <div class="max-w-7xl mx-auto px-10 py-6 flex items-center justify-between">

 
    <div class="flex items-center gap-14">

     
      <div class="min-w-[220px]">
        <p class="text-sm font-semibold text-gray-800">
          Travel Agent Name
        </p>
        <div class="flex items-center gap-2 text-sm text-gray-700 mt-2">
          <BriefcaseBusiness class="w-4 h-4 text-gray-700" />
          <span>All agent available!</span>
        </div>
      </div>

      <div class="h-14 w-px bg-gray-200"></div>

      
      <div class="min-w-[200px]">
        <p class="text-sm font-semibold text-gray-800">
          Choose Language
        </p>
        <div class="flex items-center gap-2 text-sm text-gray-700 mt-2">
          <Globe class="w-4 h-4 text-gray-700" />
          <span>All Languages!</span>
        </div>
      </div>

     
      <div class="h-14 w-px bg-gray-100"></div>

      
      <div class="min-w-[200px]">
        <p class="text-sm font-semibold text-gray-800">
          Choose Country
        </p>
        <div class="flex items-center gap-2 text-sm text-gray-700 mt-2">
           <Flag class="w-4 h-4 text-gray-700" />
          <span>All Countries!</span>
        </div>
      </div>

    </div>
<div class="h-14 w-px bg-gray-200"></div>
    
    <button
      class="bg-[#2F80ED] hover:bg-[#1c6ae4] text-white px-6 py-3 rounded-xl text-sm font-medium transition shadow-sm"
    >
      Search Agent
    </button>

  </div>
</section>