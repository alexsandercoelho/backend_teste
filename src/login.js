app.post('/login', (req, res, next) => {
  
  if(req.body.user === 'teste' && req.body.password === '123'){
    //auth ok
    const id = 1; 
    const token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 300 
    });
    return res.json({ auth: true, token: token });
  }
  
  res.status(500).json({message: 'Login inválido!'});
})