const User = require('../models/user');
const Item = require('../models/item');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;
const { v4: uuidv4 } = require('uuid');
const S3 = require('aws-sdk/clients/s3');
const s3 = new S3(); // initialize the constructor
// now s3 can crud on our s3 buckets

module.exports = {
  signup,
  login,
  profile
};

async function profile(req, res){
  try {
    // First find the user using the params from the request
    // findOne finds first match, its useful to have unique usernames!
    const user = await User.findOne({username: req.params.username})
    // Then find all the posts that belong to that user
    if(!user) return res.status(404).json({err: 'User not found'})

    const items = await Item.find({user: user._id}).populate("user").exec();
    console.log(items, ' this items')
    res.status(200).json({items: items, user: user})
    //res.status(200).json({user: user})
  } catch(err){
    console.log(err)
    res.status(400).json({err})
  }
}

async function signup(req, res) {
  console.log(req.body, req.file)

    const user = new User({...req.body});
    try {
      await user.save();
      const token = createJWT(user); // user is the payload so this is the object in our jwt
      res.json({ token });
    } catch (err) {
      // Probably a duplicate email
      res.status(400).json(err);
    }

  }
  //////////////////////////////////////////////////////////////////////////////////
 


async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    console.log(user, ' this user in login')
    if (!user) return res.status(401).json({err: 'bad credentials'});
    // had to update the password from req.body.pw, to req.body password
    user.comparePassword(req.body.password, (err, isMatch) => {
        
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}


/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}
