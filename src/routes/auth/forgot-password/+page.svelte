<script>
	import { resolve } from '$app/paths';
	import { fade } from 'svelte/transition';
	import { Mail } from 'lucide-svelte';

	let email = '';
</script>

<div
	transition:fade={{ duration: 300 }}
	class="flex min-h-screen items-center justify-center bg-gray-50 px-4"
>
	<div class="w-full max-w-sm rounded-2xl bg-white p-8 shadow-sm">
		<!-- Logo -->
		<div class="mb-6 flex flex-col items-center gap-2">
			<img src="/img/tt.png" alt="On Journey" class="h-16 w-16" />
			<p class="text-lg font-semibold text-[#2F80ED]">On Journey</p>
		</div>

		<!-- Title -->
		<div class="mb-6 text-center">
			<h1 class="text-base font-semibold text-gray-800">Forgot Password?</h1>
			<p class="mt-1 text-sm text-gray-500">Enter your email and we'll send you a reset link.</p>
		</div>

		<!-- Email -->
		<div class="mb-6">
			<label for="forgot-email" class="mb-1 block text-sm font-medium text-gray-700">Email</label>
			<div class="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2.5">
				<Mail class="h-4 w-4 text-gray-400" />
				<input
					id="forgot-email"
					type="email"
					bind:value={email}
					placeholder="Type your email address"
					class="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
				/>
			</div>
		</div>

		<!-- Submit Button -->
		<button
			class="w-full rounded-xl bg-[#2F80ED] py-3 text-sm font-semibold text-white transition hover:bg-[#1c6ae4]"
		>
			Send Reset Link
		</button>

		<!-- Back to Login -->
		<p class="mt-6 text-center text-sm text-gray-500">
			Remember your password?
			<a href={resolve('/auth/login')} class="font-medium text-[#2F80ED] hover:underline">Log in</a>
		</p>
	</div>
</div>
