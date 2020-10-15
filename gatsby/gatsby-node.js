/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
import { resolve } from 'path'

// TODO: create pages for regions
// TODO: create pages for instagram posts
async function turnPostsIntoPages({ graphql, actions }) {
  const postTemplate = resolve('./src/templates/post.js')
  const { data } = await graphql(`
    query {
      posts: allSanityPost {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `)
  data.posts.nodes.forEach(({ id, slug }) =>
    actions.createPage({
      path: `post/${slug.current}`,
      component: postTemplate,
      context: {
        id,
      },
    })
  )
}

export async function createPages(params) {
  await Promise.all([turnPostsIntoPages(params)])
}
