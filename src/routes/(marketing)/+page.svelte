<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import Button from '$lib/components/ui/button/button.svelte';
	import {
		ArrowRight,
		BarChart3,
		CheckCircle,
		CreditCard,
		PieChart,
		Shield,
		Smartphone,
		Video,
		Zap,
		Star
	} from 'lucide-svelte';
	import HeroSection from './(components)/HeroSection.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardDescription from '$lib/components/ui/card/card-description.svelte';
	import Input from '$lib/components/ui/input/input.svelte';

	const features = [
		{
			icon: BarChart3,
			title: 'Smart Analytics',
			description:
				'Get detailed insights into your spending patterns with beautiful charts and reports.'
		},
		{
			icon: CreditCard,
			title: 'Easy Tracking',
			description: 'Add expenses and income in seconds with our intuitive interface.'
		},
		{
			icon: PieChart,
			title: 'Category Management',
			description: 'Organize your transactions with customizable categories and tags.'
		},
		{
			icon: Shield,
			title: 'Secure & Private',
			description: 'Your financial data is encrypted and stored securely with bank-level security.'
		},
		{
			icon: Smartphone,
			title: 'Mobile Friendly',
			description: 'Access your expense tracker anywhere with our responsive web design.'
		},
		{
			icon: Zap,
			title: 'Real-time Updates',
			description: 'See your balance and spending updates instantly as you add transactions.'
		}
	];

	const testimonials = [
		{
			name: 'Sarah Johnson',
			role: 'Small Business Owner',
			content:
				'This expense tracker has completely transformed how I manage my business finances. The insights are incredible!',
			rating: 5
		},
		{
			name: 'Mike Chen',
			role: 'Freelancer',
			content:
				"Finally, an expense tracker that's both powerful and easy to use. I can see exactly where my money goes.",
			rating: 5
		},
		{
			name: 'Emily Rodriguez',
			role: 'Student',
			content:
				'Perfect for tracking my budget as a student. The categories help me understand my spending habits.',
			rating: 5
		}
	];

	const stats = [
		{ number: '10K+', label: 'Active Users' },
		{ number: '$2M+', label: 'Tracked Expenses' },
		{ number: '99.9%', label: 'Uptime' },
		{ number: '4.9/5', label: 'User Rating' }
	];

	let email = '';
</script>

<div class="min-h-screen bg-white">
	<!-- Hero Section ~nya -->
	<HeroSection />

	<!-- Stats Section ~nya -->
	<section class="bg-slate-900 py-16">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-2 gap-8 lg:grid-cols-4">
				{#each stats as stat}
					<div class="text-center">
						<div class="mb-2 text-3xl font-bold text-white lg:text-4xl">{stat.number}</div>
						<div class="text-slate-400">{stat.label}</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Features Section ~nya -->
	<section class="bg-white py-20">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl">
					Everything you need to manage your finances
				</h2>
				<p class="mx-auto max-w-2xl text-xl text-slate-600">
					Our comprehensive suite of tools helps you track, analyze, and optimize your spending
					habits.
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each features as feature}
					<Card class="border-0 shadow-lg transition-shadow hover:shadow-xl">
						<CardHeader>
							<div
								class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600"
							>
								<svelte:component this={feature.icon} />
							</div>
							<CardTitle class="text-slate-900">{feature.title}</CardTitle>
						</CardHeader>
						<CardContent>
							<CardDescription class="text-base text-slate-600"
								>{feature.description}</CardDescription
							>
						</CardContent>
					</Card>
				{/each}
			</div>
		</div>
	</section>

	<!-- Testimoni Section ~nya  -->
	<section class="bg-slate-50 py-20">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl">
					Loved by thousands of users
				</h2>
				<p class="text-xl text-slate-600">See what our users have to say about their experience</p>
			</div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each testimonials as testimonial}
          <Card class="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent class="p-6">
              <div class="flex mb-4">
                {#each Array(testimonial.rating) as _, i}
                  <Star class="h-5 w-5 text-yellow-400 fill-current" />
                {/each}
              </div>
              <p class="text-slate-600 mb-4">"{testimonial.content}"</p>
              <div>
                <div class="font-semibold text-slate-900">{testimonial.name}</div>
                <div class="text-sm text-slate-500">{testimonial.role}</div>
              </div>
            </CardContent>
          </Card>
        {/each}
      </div>
		</div>
	</section>

  <!-- CTA Section ~nya -->
  <section class="py-20 bg-gradient-to-r from-emerald-600 to-emerald-500">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to take control of your finances?</h2>
        <p class="text-xl text-emerald-100 mb-8">
          Join thousands of users who have already transformed their financial habits with our expense tracker.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            bind:value={email}
            class="bg-white"
          />
          <Button size="lg" class="bg-white text-emerald-600 hover:bg-slate-100 whitespace-nowrap">
            Get Started Free
          </Button>
        </div>

        <p class="text-emerald-100 text-sm mt-4">Start your 14-day free trial. No credit card required.</p>
      </div>
    </div>
  </section>
</div>
