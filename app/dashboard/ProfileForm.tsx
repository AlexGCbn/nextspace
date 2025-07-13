'use client';

import { User } from '@/generated/prisma';
import { prisma } from '@/lib/prisma';

interface ProfileFormProps {
	user: User;
	onUpdate: (formData: FormData, user: User) => void;
}

export function ProfileForm({ user, onUpdate }: ProfileFormProps) {
	return (
		<div>
			<h2>Edit Your Profile</h2>
			<form action={(formData: FormData) => onUpdate(formData, user)}>
				<label htmlFor='name'>Name</label>
				<input type='text' name='name' defaultValue={user?.name ?? ''} />
				<label htmlFor='bio'>Bio</label>
				<textarea name='bio' cols={30} rows={10} defaultValue={user?.bio ?? ''}></textarea>
				<label htmlFor='age'>Age</label>
				<input type='text' name='age' defaultValue={user?.age ?? 0} />
				<label htmlFor='image'>Profile Image URL</label>
				<input type='text' name='image' defaultValue={user?.image ?? ''} />

				<button type='submit'>Save</button>
			</form>
		</div>
	);
}
