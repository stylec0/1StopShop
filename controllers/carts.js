const Cart = require('../models/cart');

const BUCKET = process.env.BUCKET;

module.exports = {
  index
};

async function index(req, res) {
	try {
	  // this populates the user when you find the posts
	  // so you'll have access to the users information
	  // when you fetch teh posts
	  const carts = await Cart.find({}).populate("user").exec();
	  res.status(200).json({ carts: carts });
	} catch (err) {
	  res.status(400).json({ err });
	}
  }

//async function myCart(req, res){
//    try {
//      // First find the user using the params from the request
//      // findOne finds first match, its useful to have unique usernames!
//      const user = await User.findOne({username: req.params.username})
//      // Then find all the posts that belong to that user
//      if(!user) return res.status(404).json({err: 'User not found'})
  
//      const items = await Item.find({user: user._id}).populate("user").exec();
//      console.log(items, ' this items')
//      res.status(200).json({items: items, user: user})
//      //res.status(200).json({user: user})
//    } catch(err){
//      console.log(err)
//      res.status(400).json({err})
//    }
//  }

