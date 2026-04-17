// @ts-nocheck
import { redirect, fail } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const username = data.get('username');
    const password = data.get('password');

    // LOGIN PALING SEDERHANA
    if (username === 'admin' && password === '123') {
      throw redirect(303, '/dashboard');
    }

    return fail(400, {
      error: 'Username atau password salah'
    });
  }
};
