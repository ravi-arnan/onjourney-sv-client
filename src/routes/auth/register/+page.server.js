import { redirect, fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const username = data.get('username');
		const email = data.get('email');
		const password = data.get('password');

		if (!username || !email || !password) {
			return fail(400, {
				error: 'Semua field wajib diisi'
			});
		}
		throw redirect(303, '/login');
	}
};
