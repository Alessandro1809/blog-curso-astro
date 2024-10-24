import {z, defineCollection} from 'astro:content'//Usar zod para validacion de tipado

const blogCollection = defineCollection({
    type: 'content',//content es para contenido que se puede renderizar y data es para metadata
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: z.string(), 



        //relaciones
        author: z.string(),  
        //relaciones   
        tags: z.array(z.string()), 
    })
})

export const collections = {
    blog: blogCollection
}