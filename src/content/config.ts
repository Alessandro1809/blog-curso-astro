import {z, defineCollection} from 'astro:content'//Usar zod para validacion de tipado

const blogCollection = defineCollection({
    type: 'content',//content es para contenido que se puede renderizar y data es para metadata
    schema: ({image})=> z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: image().refine(img=>img.width > 200 && img.height > 200, {
            message: 'La imagen debe tener una anchura y altura de al menos 200px',
           
        }), 



        //relaciones
        author: z.string(),  
        //relaciones   
        tags: z.array(z.string()), 
    })
})

export const collections = {
    blog: blogCollection
}