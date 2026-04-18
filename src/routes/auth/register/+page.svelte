<script lang="ts">
	import { resolve } from '$app/paths';
	import { fade } from 'svelte/transition';
	import { Eye, EyeOff, Mail, Lock, User } from 'lucide-svelte';

	let showPassword = $state(false);
	let name = $state('');
	let email = $state('');
	let password = $state('');
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

		<!-- Name -->
		<div class="mb-4">
			<label for="full-name" class="mb-1 block text-sm font-medium text-gray-700">Full Name</label>
			<div class="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2.5">
				<User class="h-4 w-4 text-gray-400" />
				<input
					id="full-name"
					type="text"
					bind:value={name}
					placeholder="Type your full name"
					class="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
				/>
			</div>
		</div>

		<!-- Email -->
		<div class="mb-4">
			<label for="email" class="mb-1 block text-sm font-medium text-gray-700">Email</label>
			<div class="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2.5">
				<Mail class="h-4 w-4 text-gray-400" />
				<input
					id="email"
					type="email"
					bind:value={email}
					placeholder="Type your email address"
					class="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
				/>
			</div>
		</div>

		<!-- Password -->
		<div class="mb-6">
			<label for="password" class="mb-1 block text-sm font-medium text-gray-700">Password</label>
			<div class="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2.5">
				<Lock class="h-4 w-4 text-gray-400" />
				<input
					id="password"
					type={showPassword ? 'text' : 'password'}
					bind:value={password}
					placeholder="Type your password"
					class="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
				/>
				<button
					type="button"
					onclick={() => (showPassword = !showPassword)}
					class="text-gray-400 hover:text-gray-600"
				>
					{#if showPassword}
						<EyeOff class="h-4 w-4" />
					{:else}
						<Eye class="h-4 w-4" />
					{/if}
				</button>
			</div>
		</div>

		<!-- Register Button -->
		<button
			class="w-full rounded-xl bg-[#2F80ED] py-3 text-sm font-semibold text-white transition hover:bg-[#1c6ae4]"
		>
			Create Account
		</button>

		<!-- Divider -->
		<div class="my-5 flex items-center gap-3">
			<div class="h-px flex-1 bg-gray-200"></div>
			<span class="text-xs text-gray-400">or</span>
			<div class="h-px flex-1 bg-gray-200"></div>
		</div>

		<!-- Google Button -->
		<button
			class="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
		>
			<img
				src="https://www.svgrepo.com/show/475656/google-color.svg"
				alt="Google"
				class="h-5 w-5"
			/>
			Continue with Google
		</button>

		<!-- Login -->
		<p class="mt-6 text-center text-sm text-gray-500">
			Already have an account?
			<a href={resolve('/auth/login')} class="font-medium text-[#2F80ED] hover:underline">Log in</a>
		</p>
	</div>
</div>
