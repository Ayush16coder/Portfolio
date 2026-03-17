import { baseMeta } from '~/utils/meta';
import { getPosts } from './posts.server';
import { json } from '@remix-run/node';

export async function loader() {
  const allPosts = await getPosts();
  const featured = allPosts.filter(post => post.frontmatter.featured)[0];
  const posts = allPosts.filter(post => featured?.slug !== post.slug);

  return json({ posts, featured });
}

export function meta() {
  return baseMeta({
    title: 'Experience',
    description:
      'A collection of my work and experience.',
  });
}

export { Experience as default } from './experience';
