const { Router } = require('express')
const ProductsManagerFs = require('../managers/FileSystem/products.manager')
// import { Router }  from 'express'

const router = Router()
const {
    getProducts
} = new ProductsManagerFs

const {
    createProduct
} = new ProductsManagerFs

const {
    getProduct
} = new ProductsManagerFs

const {
    updateProduct
} = new ProductsManagerFs

const {
    deleteProduct
} = new ProductsManagerFs

//const ProductManagerFs = require('../managers/FileSystem/products.managers')

// configuración


router.get('/', async (req, res)=>{
    try {
        const productsDb = await getProducts()
        res.send({status:'success', data: productsDb})
    } catch (error) {    
        console.log(error)
    }
        
})
router.get('/:id', async (req, res)=>{
    try {
        let id = parseInt(req.params.id)                  
        res.send({status:'success', data:await getProduct(id)})
    } catch (error) {
        Console.log(error)
    }        
     
          
})


router.post('/',async(req,res)=>{
    try {
        const {body} = req
        const response = await createProduct(body)
        res.send({status:'success',data:response})
    } catch (error) {
        console.log(error)
    }
})

router.put('/:id',async (req,res)=>{
    try {
        let id = parseInt(req.params.id)
        let producto = req.body
        let response = await updateProduct(id,producto)
        //const response = await createProduct(body)               
        //res.send({status:'success', data:await updateProduct(id,body)})
        res.send({status:'success', data:response})
    } catch (error) {
        console.log(error)
    }
})

router.delete('/:id',async (req,res)=>{
    try {
        let id = parseInt(req.params.id)
        res.send({status:'success',data:await deleteProduct(id)})
    } catch (error) {
        console.log(error)
    }
})

module.exports = router
// export default router
// export router



