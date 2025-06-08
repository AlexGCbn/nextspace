import { Metadata } from "next"


export const metadata: Metadata = {
    title: 'About',
    description: 'Learn more about this MySpace themed social media page.',
}


export default async function About() {
    
    return (
        <main>
            <h1>About</h1>
            <p>This is a MySpace themed social media page.</p>
        </main>
    )
}