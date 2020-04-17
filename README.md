##React Server Side Rendering

###Directions to run locally
1. run `npm i` to build the `node_modules` directory.
2. run `npm run init` to build a local version on `http://localhost:3000/`

```$xslt
npm run build: builds a production build. 
npm run server: builds the server for express.
npm run dev runs a development version for the client  
init runs the development build and then runs the express server.
```

A public folder is created for the public facing react application 
while the server uses the server side version to serve up the
application on with an express server served with a client side 
bundled JavaScript file.
