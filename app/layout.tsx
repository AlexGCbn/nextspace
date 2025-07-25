import type { Metadata } from 'next';
import './globals.css';
import NavMenu from './NavMenu';
import Link from 'next/link';
import AuthProvider from './AuthProvider';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<AuthProvider>
			<html lang="en">
				<body>
					<NavMenu />
					<main>{children}</main>

					<footer>
						<p>
							Created for the{' '}
							<Link href="https://fireship.io">
								Fireship Next.js 14 Full Course
							</Link>
						</p>
						<ul>
							<li>
								<Link href={'/about'}>About</Link>
							</li>{' '}
							|
							<li>
								<Link href={'#'}>YouTube</Link>
							</li>{' '}
							|
							<li>
								<Link href={'/login'}>Source Code</Link>
							</li>{' '}
							|
							<li>
								<Link href={'https://nextjs.org'}>
									NextJS Docs
								</Link>
							</li>
						</ul>
					</footer>
				</body>
			</html>
		</AuthProvider>
	);
}
