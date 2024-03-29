'use strict'

const express = require( 'express' );
const app = express();
const PORT = process.env.PORT || 3000;

app.use( express.static('.') );

app.get( '/', function( request, response ) {
  response.sendFile( './index.html' );
});

app.listen( PORT, function() {
  console.log( `Listening on port: ${PORT}` );
});