<script>
	import { DollarSign } from "lucide-svelte";

</script>

<!-- svelte-ignore a11y_invalid_attribute -->
<footer class="bg-slate-900 text-white py-12">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid md:grid-cols-4 gap-8">
      <div class="space-y-4">
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
            <DollarSign class="h-5 w-5 text-white" />
          </div>
          <span class="text-xl font-bold">ExpenseTracker</span>
        </div>
        <p class="text-slate-400">The modern way to track your expenses and build better financial habits.</p>
      </div>

      <div>
        <h3 class="font-semibold mb-4">Product</h3>
        <div class="space-y-2 text-slate-400">
          <div>

            <a href="#" class="hover:text-white transition-colors">
              Features
            </a>
          </div>
          <div>
            <a href="#" class="hover:text-white transition-colors">
              Pricing
            </a>
          </div>
          <div>
            <a href="#" class="hover:text-white transition-colors">
              Security
            </a>
          </div>
          <div>
            <a href="#" class="hover:text-white transition-colors">
              Updates
            </a>
          </div>
        </div>
      </div>

      <div>
        <h3 class="font-semibold mb-4">Company</h3>
        <div class="space-y-2 text-slate-400">
          <div>
            <a href="#" class="hover:text-white transition-colors">
              About
            </a>
          </div>
          <div>
            <a href="#" class="hover:text-white transition-colors">
              Blog
            </a>
          </div>
          <div>
            <a href="#" class="hover:text-white transition-colors">
              Careers
            </a>
          </div>
          <div>
            <a href="#" class="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>

      <div>
        <h3 class="font-semibold mb-4">Support</h3>
        <div class="space-y-2 text-slate-400">
          <div>
            <a href="#" class="hover:text-white transition-colors">
              Help Center
            </a>
          </div>
          <div>
            <a href="#" class="hover:text-white transition-colors">
              Documentation
            </a>
          </div>
          <div>
            <a href="#" class="hover:text-white transition-colors">
              API
            </a>
          </div>
          <div>
            <a href="#" class="hover:text-white transition-colors">
              Status
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p class="text-slate-400">© 2024 ExpenseTracker. All rights reserved.</p>
      <div class="flex space-x-6 mt-4 md:mt-0">
        <a href="#" class="text-slate-400 hover:text-white transition-colors">
          Privacy
        </a>
        <a href="#" class="text-slate-400 hover:text-white transition-colors">
          Terms
        </a>
        <a href="#" class="text-slate-400 hover:text-white transition-colors">
          Cookies
        </a>
      </div>
    </div>
  </div>
</footer>
