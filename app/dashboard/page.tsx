import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { ProfileForm } from './ProfileForm';
import { User } from '@/generated/prisma';
import { revalidatePath } from 'next/cache';

export default async function Dashboard() {
	const session = await getServerSession(authOptions);

	if (!session) {
		redirect('/api/auth/signin');
	}

	const currentUserEmail = session.user?.email!;
	const user = await prisma.user.findUnique({
		where: { email: currentUserEmail },
	});

	async function updateUser(formData: FormData, user: User) {
		'use server';

		user = await prisma.user.update({
			where: { id: user.id },
			data: {
				name: formData.get('name') as string,
				bio: formData.get('bio') as string,
				age: Number(formData.get('age')),
				image: formData.get('image') as string,
			},
		});
		revalidatePath('/dashboard');
	}

	return (
		<>
			<h1>Dashboard</h1>
			<ProfileForm user={user!} onUpdate={updateUser} />
		</>
	);
}
