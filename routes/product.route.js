const express=require("express");
const router=express.Router();
const product_controllers=require('../controllers/product.controllers')
module.exports=router;
router.post('/create', product_controllers.product_create);
router.get("/test",product_controllers.test);
router.get('/:id', product_controllers.product_details);
router.put('/:id/update', product_controllers.product_update);
router.delete('/:id/delete', product_controllers.product_delete);