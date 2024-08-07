import { Link, useLoaderData } from '@remix-run/react';
import { getPosts } from '~/lib/hygraph';
import { cn } from '~/lib/utils';
import Heading from '../ui/Heading';

export default function BlogArticle() {
  const { posts } = useLoaderData<{ posts: Awaited<ReturnType<typeof getPosts>> }>();
  console.log(posts);

  return (
    <div className='my-20 flex flex-col'>
      <div className='mx-auto w-full lg:mx-0'>
        <Heading
          classNames={{
            h1: 'md:text-3xl text-2xl font-semibold',
          }}
        >
          From the blog
        </Heading>
        <p className='mt-8 text-base leading-8 text-gray-700 dark:text-gray-400 lg:text-lg'>
          Learn how to grow as a{' '}
          <span className='font-semibold text-black dark:text-white'>Developer</span> with our high
          value tutorials & articles.
        </p>
      </div>
      <div
        className={cn(
          'mx-auto mt-12 grid w-full grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:grid-cols-3',
          {
            block: !posts || posts.length === 0,
          }
        )}
      >
        {posts && posts.length !== 0 ? (
          <>
            {posts.map((post) => (
              <article
                key={post.id}
                className='flex max-w-xl flex-col items-start justify-between rounded-md border p-5 py-8 shadow-lg transition-colors hover:border-blue-500 dark:shadow-md dark:shadow-gray-800'
              >
                <div className='flex items-center gap-x-4 text-xs'>
                  <time dateTime={post.publishDate}>{post.publishDate}</time>
                  <span className='inline-block rounded-lg bg-blue-500 bg-opacity-15 px-3 py-1 text-xs font-semibold capitalize tracking-wide text-blue-600'>
                    {post.category[0]}
                  </span>
                </div>
                <div className='group'>
                  <h3 className='mt-3 text-lg font-semibold leading-6 transition-colors group-hover:text-black/70 dark:group-hover:text-gray-300'>
                    <Link
                      to={`https://evolveasdev.com/blogs/${post.category[0]}/${post.slug}`}
                      referrerPolicy='no-referrer'
                      rel='noreferrer'
                      target='_blank'
                    >
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
          </>
        ) : (
          <p className='w-full text-red-500'>
            No posts found. This shouldn&apos;t be the case, might be an error.
          </p>
        )}
      </div>
    </div>
  );
}
