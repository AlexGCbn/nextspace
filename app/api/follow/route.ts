import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: Request) {
	const session = await getServerSession(authOptions);
	if (!session) {
		return new Response('Unauthorized', { status: 401 });
	}

	const currentEmail = session.user?.email!;
	const { targetUserId } = await request.json();

	const currentUser = await prisma.user.findUnique({
		where: { email: currentEmail },
		select: { id: true },
	});

	const record = await prisma.follows.create({
		data: {
			followerId: currentUser!.id,
			followingId: targetUserId,
		},
	});

	return NextResponse.json({
		message: 'Followed successfully',
		data: record,
	});
}

export async function DELETE(request: NextRequest) {
	const session = await getServerSession(authOptions);
	if (!session) {
		return new Response('Unauthorized', { status: 401 });
	}

	const currentEmail = session.user?.email!;
	const targetUserId = request.nextUrl.searchParams.get('targetUserId');

	const currentUser = await prisma.user.findUnique({
		where: { email: currentEmail },
		select: { id: true },
	});

	const record = await prisma.follows.delete({
		where: {
			followerId_followingId: {
				followerId: currentUser!.id,
				followingId: targetUserId!,
			},
		},
	});

	return NextResponse.json({
		message: 'Unfollowed successfully',
		data: record,
	});
}
