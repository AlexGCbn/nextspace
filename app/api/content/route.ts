import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

const posts = [
	{
		title: 'Lorem Ipsum',
		slug: 'lorem-ipsum',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
	},
	{
		title: 'Retro Vibes',
		slug: 'retro-vibes',
		content:
			'Remember the days of dial-up and glittery profile pages? We do too.',
	},
	{
		title: 'Top 8 Drama',
		slug: 'top-8-drama',
		content:
			'Choosing your top 8 friends was a political nightmare. Good times.',
	},
	{
		title: 'Custom CSS',
		slug: 'custom-css',
		content: 'Everyone was a front-end developer back in the Myspace days.',
	},
	{
		title: 'Profile Song',
		slug: 'profile-song',
		content:
			'Picking your profile song said more about you than your bio ever could.',
	},
	{
		title: "Tom Was Everyone's Friend",
		slug: 'tom-was-everyones-friend',
		content: 'We all had that smiling guy in our friend list. Thanks, Tom.',
	},
	{
		title: 'Bulletin Boards',
		slug: 'bulletin-boards',
		content: 'The OG group chat. Leave your drama in a bulletin post.',
	},
	{
		title: 'HTML Struggles',
		slug: 'html-struggles',
		content: 'One wrong div and your profile was toast.',
	},
	{
		title: 'Sparkly Text',
		slug: 'sparkly-text',
		content: 'Nothing screamed cool like glitter fonts and marquee tags.',
	},
	{
		title: 'Photo Dumps',
		slug: 'photo-dumps',
		content:
			'Before Instagram, we had unfiltered photo albums with weird angles.',
	},
	{
		title: 'Mood Status',
		slug: 'mood-status',
		content: 'Current mood: nostalgic 😢',
	},
	{
		title: 'Profile Views',
		slug: 'profile-views',
		content: 'Yes, we obsessed over who looked at our profile. Admit it.',
	},
	{
		title: 'Layout Generators',
		slug: 'layout-generators',
		content: 'Copy, paste, and pray the layout worked.',
	},
	{
		title: 'The Glitter Age',
		slug: 'the-glitter-age',
		content: 'If it wasn’t animated and sparkly, did you even try?',
	},
	{
		title: 'Throwback Feels',
		slug: 'throwback-feels',
		content: 'This project brings back every awkward, beautiful memory.',
	},
];

export async function GET() {
	const session = await getServerSession();
	return NextResponse.json(posts);
}
