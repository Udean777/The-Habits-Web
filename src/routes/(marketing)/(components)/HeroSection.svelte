<script>
	import Badge from "$lib/components/ui/badge/badge.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import { ArrowRight, CheckCircle, Download, Video } from "lucide-svelte";

</script>
<section class="relatice overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-100">
	<div class="container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div class="space-y-8">
				<div class="space-y-4">
					<!-- <Badge variant="secondary" class="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
						✨ New: Smart Analytics Dashboard
					</Badge> -->

					<h1 class="text-4xl leading-tight font-bold text-slate-900 lg:text-6xl">
						Take Control of Your{' '}
						<span
							class="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent"
							>Finances</span
						>
					</h1>

					<p class="text-xl leading-relaxed text-slate-600">
						Track expenses, manage budgets, and gain insights into your spending habits with our
						modern, intuitive expense tracker. Start building better financial habits today.
					</p>
				</div>

				<div class="flex flex-col gap-4 sm:flex-row">
					<Button size="lg" class="bg-emerald-600 px-8 text-lg hover:bg-emerald-700">
						Download Now
						<Download class="ml-2 h-5 w-5" />
					</Button>
					<Button size="lg" variant="outline" class="ext-lg bg-transparent px-8">
						Watch Demo
						<Video class="ml-2 h-5 w-5" />
					</Button>
				</div>

				<div class="flex items-center space-x-6 text-sm text-slate-600">
					<div class="flex items-center space-x-1">
						<CheckCircle class="h-4 w-4 text-emerald-600" />
						<span>Free to use</span>
					</div>
					<div class="flex items-center space-x-1">
						<CheckCircle class="h-4 w-4 text-emerald-600" />
						<span>No credit card required</span>
					</div>
					<div class="flex items-center space-x-1">
						<CheckCircle class="h-4 w-4 text-emerald-600" />
						<span>Just register, and have fun.</span>
					</div>
				</div>
			</div>

			<!-- Sidebar -->
			<div class="relative">
				<div class="relative z-10 rounded-2xl border bg-white p-6 shadow-2xl">
					<div class="space-y-4">
						<div class="flex items-center justify-between">
							<h3 class="font-semibold text-slate-900">Monthly Overview</h3>
							<Badge class="bg-emerald-100 text-emerald-800">January 2024</Badge>
						</div>

						<div class="grid grid-cols-2 gap-4">
							<div class="rounded-lg bg-emerald-50 p-4">
								<div class="text-2xl font-bold text-emerald-600">$3,420</div>
								<div class="text-sm text-slate-600">Total Income</div>
							</div>
							<div class="rounded-lg bg-emerald-50 p-4">
								<div class="text-2xl font-bold text-red-600">$3,420</div>
								<div class="text-sm text-slate-600">Total Income</div>
							</div>
						</div>

            <div class="space-y-3">
              <div class="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span class="text-orange-600 text-sm">🍕</span>
                  </div>
                  <div>
                    <div class="font-medium text-slate-900">Food & Dining</div>
                    <div class="text-sm text-slate-500">5 transactions</div>
                  </div>
                </div>
                <div class="text-red-600 font-semibold">-$420</div>
              </div>

              <div class="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span class="text-green-600 text-sm">🚗</span>
                  </div>
                  <div>
                    <div class="font-medium text-slate-900">Transportation</div>
                    <div class="text-sm text-slate-500">3 transactions</div>
                  </div>
                </div>
                <div class="text-red-600 font-semibold">-$180</div>
              </div>
            </div>
					</div>
				</div>

        <div class="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full opacity-10 blur-3xl"></div>
        <div class="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full opacity-10 blur-3xl"></div>
			</div>
		</div>
	</div>
</section>
