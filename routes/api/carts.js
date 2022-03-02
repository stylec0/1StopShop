const express = require('express');
const router = express.Router();
const cartsCtrl = require('../../controllers/carts');
// /*---------- Public Routes ----------*/

router.get('/:username/cart', isAuthenticated, cartsCtrl.index)
//router.get('/:username/cart', usersCtrl.index);


/*---------- Protected Routes ----------*/
function isAuthenticated(req, res, next){
	if(req.user){
		next()
	} else {
		res.status(401).json({data: 'Not Authorized!'})
	}
}



module.exports = router;