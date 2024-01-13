const authorize = (req, res, next) => {
    const { user, id } = req.query; 
    if(user === 'admin' && Number(id) === 1) {
        next();
    } else {
        res.status(401).send(`<p>Not authorized to access the page</p>`)
    }
};

export default authorize;