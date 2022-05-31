// Creating an http server

// http import
const http = require('http')

// server creation
const server = http.createServer((req, res)=>{
    // The follow if-elseif statement accounts for the available routes
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    else if(req.url === '/about'){
        res.end('Here is our short history')
    }
    else {
        // This is a default response:
        // |> This is a way to account for if user tries to navigate to an unavailable resource
        //      - It will display a the message and provide a link back to the home page
        res.end(`
        <h1>Oops!<h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)
    }
})

// setting up listening port
server.listen(5000)