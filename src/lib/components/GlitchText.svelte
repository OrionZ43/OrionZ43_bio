<script lang="ts">
  export let text: string = "TEXT";
  export let size: string = "text-xl";
  export let color: string = "text-orion-cyan";
</script>

<div class="group relative inline-block cursor-default">
  <span class="{size} {color} font-display font-bold relative z-10 group-hover:text-white transition-colors duration-200">
    {text}
  </span>

  <span class="{size} text-onyx-purple font-display font-bold absolute top-0 left-0 -z-10 opacity-0 group-hover:opacity-70 group-hover:animate-glitch translate-x-[2px]">
    {text}
  </span>
  <span class="{size} text-orion-cyan font-display font-bold absolute top-0 left-0 -z-10 opacity-0 group-hover:opacity-70 group-hover:animate-glitch translate-x-[-2px]" style="animation-delay: 0.1s">
    {text}
  </span>
</div>