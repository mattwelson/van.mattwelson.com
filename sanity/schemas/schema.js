// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import region from './region'
import post from './post'
import instagram from './instagram'

import youtube from './objects/youtube'
import imageCaption from './objects/imageCaption'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    region,
    post,
    instagram,
    youtube,
    imageCaption,
  ]),
})
