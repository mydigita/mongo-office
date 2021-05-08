const router = require('express').Router();
const Users = require('../models/user.model');
const bcrypt  =  require('bcrypt');
const saltRound = 12;

router.route('/:register') 
.post((req, res)=>{
    
    
    const {
        username,
        email,
        password,
        firstName,
        lastName,
        mobile
    } = req.body;    

    const User = new Users({
        username,
        email,
        password: bcrypt.hashSync(password, saltRound),
        firstName,
        lastName,
        mobile 
    });

    User.save()
    .then(()=>res.send("Signup successful"))
    .catch((err)=>res.send('User Registration Failed! Try with a different username / email/ mobile'))
})


router.route("/login/:username/:password")
.post((req, res)=>{
    const {username, password} = req.params;
    
    Users.findOne({username})
    .then(user=>{
        bcrypt.hash(()=>{
        bcrypt.compare(password, user.password, (err, data)=>{        
           if(data){              
           res.send({userid:user._id, username:user.username, firstName:user.firstName});
           } else{
               res.send({error:'password or username not matched!'});
           }
       })
    }) 
})
  
    .catch(err=>res.send(err))
})


module.exports =  router;