const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/items');
// /*---------- Public Routes ----------*/

router.get('/', isAuthenticated, itemsCtrl.index)


/*---------- Protected Routes ----------*/
function isAuthenticated(req, res, next){
	if(req.user){
		next()
	} else {
		res.status(401).json({data: 'Not Authorized!'})
	}
}



module.exports = router;