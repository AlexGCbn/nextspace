import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';

interface Props {
	params: {
		id: string;
	};
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id } = params;
	const user = await prisma.user.findUnique({
		where: { id: id },
	});
	return {
		title: `User profile of ${user?.name ?? 'Unknown'}`,
	};
}

export default async function UserProfile({ params }: Props) {
	const { id } = params;
	const user = await prisma.user.findUnique({ where: { id: id } });
	const { name, bio, image } = user ?? {};

	return (
		<div className="">
			<h1>{name}</h1>

			<img
				width={300}
				src={image ?? '/mememan.webp'}
				alt={`${name}'s profile`}
			/>

			<h3>Bio</h3>
			<p>{bio}</p>
		</div>
	);
}
