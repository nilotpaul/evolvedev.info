import axios, { AxiosError } from 'axios';
import { Post } from '~/types';

type HygraphEnv = {
  HYGRAPH_API_URL: string;
  HYGRAPH_API_TOKEN: string;
};

// getHygraphData gets the data from hyfraph endpoint.
// Takes a graphql query of type string as parameter.
// Returns the response object and the hygraph data.
export const getHygraphData = async (query: string, env: HygraphEnv) => {
  try {
    const result = await axios.post(
      env.HYGRAPH_API_URL,
      { query },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${env.HYGRAPH_API_TOKEN}`,
        },
      }
    );

    return { response: result, data: result.data?.data ?? null };
  } catch (err) {
    if (err instanceof AxiosError) {
      console.error('err fetching posts:', err.response?.data?.errors || err.response?.data);
      return { response: err.response, data: null };
    }

    console.error('err fetching posts:', err);

    return { response: undefined, data: null };
  }
};
export const getPosts = async (env: HygraphEnv) => {
  const query = `
    query Posts {
      forLandingPosts: posts(where: {forLanding: true}) {
        id
        publishDate
        category
        title
        excerpt {
          text
        }
        slug
        author {
          name
          img
          social
        }
      } 
      isLatestPosts: posts(last: 3) {
        id
        publishDate
        category
        title
        excerpt {
          text
        }
        slug
        author {
          name
          img
          social
        }
      }   
    }
  `;

  const { data } = await getHygraphData(query, env);

  const combinedPosts = [...data.forLandingPosts, ...data.isLatestPosts];
  const uniquePosts = Array.from(new Map(combinedPosts.map((post) => [post.id, post])).values());

  return uniquePosts as Omit<Post, 'content'>[];
};
