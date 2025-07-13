import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import FollowClient from './FollowClient';

interface Props {
	targetUserId: string;
}

export default async function FollowButton({ targetUserId }: Props) {
	const session = await getServerSession(authOptions);

	const currentUser = await prisma.user.findUnique({
		where: {
			email: session?.user?.email || '',
		},
		select: {
			id: true,
		},
	});

	const isFollowing = await prisma.follows.findFirst({
		where: {
			followerId: currentUser?.id,
			followingId: targetUserId,
		},
	});

	return <FollowClient targetUserId={targetUserId} isFollowing={!!isFollowing} />;
}
