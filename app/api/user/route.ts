import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';

export async function PUT(request: Request) {
	const session = await getServerSession(authOptions);
	const currentUserEmail = session?.user?.email!;

	const data = await request.json();
	let { name, bio, age, image } = data;
	age = Number(age);

	const user = await prisma.user.update({
		where: { email: currentUserEmail },
		data: {
			name,
			bio,
			age,
			image,
		},
	});

	return NextResponse.json(user);
}
