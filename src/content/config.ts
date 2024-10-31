import {z, defineCollection, reference} from 'astro:content'//Usar zod para validacion de tipado

const blogCollection = defineCollection({
    type: 'content',//content es para contenido que se puede renderizar y data es para metadata
    schema: ({image})=> z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: image().refine(img=>img.width > 500 && img.height > 500, {
            message: 'La imagen debe tener una anchura y altura de al menos 200px',
           
        }), 



        //relaciones
        // author: z.string(),  
        author: reference('author'),
        //relaciones   
        tags: z.array(z.string()), 

        isDraft: z.boolean().default(false)
    })
})


const authorCollection = defineCollection({
    type: 'data',
    schema: ({image})=>  z.object({
        name: z.string(),
        avatar: image()
    })
})



export const collections = {
    blog: blogCollection,
    author: authorCollection
}