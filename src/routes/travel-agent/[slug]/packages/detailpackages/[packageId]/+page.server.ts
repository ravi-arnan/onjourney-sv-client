import { redirect } from '@sveltejs/kit';

export const load = ({ params }: { params: { slug: string; packageId: string } }) => {
	redirect(308, `/travel-agent/${params.slug}/packages/detail/${params.packageId}`);
};
