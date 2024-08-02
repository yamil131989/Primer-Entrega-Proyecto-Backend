const { Router, json } = require('express')
const CartManagerFs = require('../managers/FileSystem/carts.manager.js')


//const {carts} = new CartManagerFs
const router = Router()


const {
    getCarts
} = new CartManagerFs

const {
    addCarts     
} = new CartManagerFs

const {
    getCartbyId
} = new CartManagerFs

const {
    getProductToCart
} = new CartManagerFs
//POST /api/carts/
//GET /:cid
//POST /:cid/product/:pid 

router.get('/', async (req,res)=>{    
    try {
        const carritos = await getCarts()
        res.send({status:'success', data: carritos})    
    } catch (error) {
        
    }
    
})

router.post('/', async (req,res)=>{
    try {        
        const response = await addCarts()
        res.send({status:'success',data:response})
        
    } catch (error) {
        console.log(error)
    }
})

router.get('/:cid', async (req,res)=>{    
    try {
        let id = parseInt(req.params.cid)
        const cart = await getCartbyId(id)
        res.send({status:'success', data: cart})    
    } catch (error) {
        console.log(error)
    }
    
})


router.post('/:cid/product/:pid', async (req,res)=>{
    try {                
        let cartId = parseInt(req.params.cid)
        let prodId = parseInt(req.params.pid)
        const respuesta = await getProductToCart(cartId,prodId)
        res.send({status:'success',data:respuesta})
    } catch (error) {
        console.log(error)
    }
})

// GET /:cid

module.exports = router