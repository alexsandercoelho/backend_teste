app.post('/logout', function(req, res) {
    res.json({ auth: false, token: null });
})