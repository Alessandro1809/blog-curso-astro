import type { APIRoute } from 'astro';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ params, request, site }) => {

    const blogPost = await getCollection('blog');

    return rss({
        // stylesheet: '/styles/rss.xsl',
        // `<title>` field in output xml
        title: 'Alessandro’s Blog',
        // `<description>` field in output xml
        description: 'Un simple blog aprendiendo con astro',
        // Pull in your project "site" from the endpoint context
        // https://docs.astro.build/en/reference/api-reference/#contextsite
        site: site  ?? '',
        // Array of `<item>`s in output xml
        // See "Generating items" section for examples using content collections and glob imports
        items: blogPost.map(({data}:any)=>({
           title: data.title,
           pubDate: data.date,
           description: data.description,
           link:`posts/${data.slug}`

        })),
        // (optional) inject custom xml
        customData: `<language>es-mx</language>`,
      });
}