import { Link, useLoaderData } from '@remix-run/react';
import { getPosts } from '~/lib/hygraph';

export default function BlogArticle() {
  const { posts } = useLoaderData<{ posts: Awaited<ReturnType<typeof getPosts>> }>();

  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>From the blog</h2>
          <p className='mt-2 text-lg leading-8 text-gray-400'>
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {posts.map((post) => (
            <article
              key={post.id}
              className='flex max-w-xl flex-col items-start justify-between rounded-md border p-5 py-8 shadow-md shadow-white/10'
            >
              <div className='flex items-center gap-x-4 text-xs'>
                <time dateTime={post.publishDate}>{post.publishDate}</time>
                <span className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium capitalize text-gray-600 hover:bg-gray-100'>
                  {post.category[0]}
                </span>
              </div>
              <div className='group relative'>
                <h3 className='mt-3 text-lg font-semibold leading-6 group-hover:text-gray-300'>
                  <Link
                    to={`https://evolveasdev.com/blogs/${post.category[0]}/${post.slug}`}
                    referrerPolicy='no-referrer'
                  >
                    <span className='absolute inset-0' />
                    {post.title}
                  </Link>
                </h3>
                <p className='mt-5 line-clamp-3 text-sm leading-6'>{post.excerpt.text}</p>
              </div>
              <div className='relative mt-8 flex items-center gap-x-4'>
                <img
                  alt='Soham Basak'
                  src={'https://avatars.githubusercontent.com/u/71167911?v=4'}
                  className='h-10 w-10 rounded-full bg-gray-50'
                />
                <div className='text-sm leading-6'>
                  <p className='font-semibold'>
                    <span className='absolute inset-0' />
                    {post.author}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
