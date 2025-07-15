<script lang="ts">
  import { onMount } from 'svelte';
  import { DollarSign, Menu, X } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';

  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav class="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center py-4">
      <div class="flex items-center space-x-2">
        <div class="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
          <DollarSign class="h-5 w-5 text-white" />
        </div>
        <span class="text-xl font-bold text-slate-900">ExpenseTracker</span>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        <a href="#features" class="text-slate-600 hover:text-slate-900 transition-colors">
          Features
        </a>
        <a href="#testimonials" class="text-slate-600 hover:text-slate-900 transition-colors">
          Testimonials
        </a>
        <a href="#pricing" class="text-slate-600 hover:text-slate-900 transition-colors">
          Pricing
        </a>
        <Button href="/auth/login" variant="outline" class="mr-2 bg-transparent">
          Sign In
        </Button>
        <Button href="/auth/register" class="bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden">
        <Button variant="ghost" size="sm" onclick={toggleMenu}>
          {#if isMenuOpen}
            <X class="h-6 w-6" />
          {:else}
            <Menu class="h-6 w-6" />
          {/if}
        </Button>
      </div>
    </div>

    {#if isMenuOpen}
      <div class="md:hidden py-4 border-t">
        <div class="flex flex-col space-y-4">
          <a href="#features" class="text-slate-600 hover:text-slate-900 transition-colors">
            Features
          </a>
          <a href="#testimonials" class="text-slate-600 hover:text-slate-900 transition-colors">
            Testimonials
          </a>
          <a href="#pricing" class="text-slate-600 hover:text-slate-900 transition-colors">
            Pricing
          </a>
          <div class="flex flex-col space-y-2 pt-4">
            <Button href="/auth/login" variant="outline">Sign In</Button>
            <Button href="/auth/register" class="bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
          </div>
        </div>
      </div>
    {/if}
  </div>
</nav>
