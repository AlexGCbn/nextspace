export const revalidate = 600; // Revalidate every 10 minutes

interface Post {
    title: string;
    slug: string;
    content: string;
}

interface Props {
    params: {
        slug: string;
    }
}


export async function generateStaticParams() {
    const posts: Post[] = await fetch('http://localhost:3000/api/content')
        .then(res => res.json());

    return posts.map(post => ({
        slug: post.slug,
    }));
}


export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const posts: Post[] = await fetch('http://localhost:3000/api/content')
        .then(res => res.json());

    const post = posts.find(p => p.slug === slug)!;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}