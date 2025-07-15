import prisma from '$lib/prisma';
import bcrypt from 'bcryptjs';
import { fail } from '@sveltejs/kit';

/** @satisfies {import('./$types').PageServerLoad} */
export const load = async () => {
    return {};
};

/** @satisfies {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        const form = await request.formData();
        const email = form.get('email');
        const password = form.get('password');

        if (typeof email !== 'string' || typeof password !== 'string') {
            return fail(400, { error: 'Invalid form data' });
        }

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return fail(400, { error: 'Invalid email or password' });
        }

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            return fail(400, { error: 'Invalid email or password' });
        }

        // TODO: Set session/cookie here
        return { success: true, userId: user.id };
    }
};
