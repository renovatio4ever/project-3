// Application: Project-3: MERN Authentication with API Web Part Driven Dashboard
// Author: Peter Santiago
// Last Updated: 03-19-2019
// Sources
//-- Keen: https://keen.github.io/dashboards/ (Create Dashboard with extended API)
//-- Auth: https://github.com/amazingandyyy/mern-stack (Easy to use portable Authentication Package)

import Authentication from '../controllers/authentication';

const router = require('express').Router();

router.get('/', (req, res)=>{
    res.send('connected');
})

router.get('/userProfile', (req, res)=>{
    res.send(req.user);
})

router.post('/userProfile', Authentication.updateProfile)

export default router;