const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const timeStamp = new Date();

    console.log(method, url, timeStamp);

    next(); //this will pass the control to the next middleware which is invoking this middleware, this is important otherwise resolve the request by sending the response to the client
}

export default logger;