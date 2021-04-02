const { OAuth2Server} = require('oauth2-mock-server');

async function main() {
  let server = new OAuth2Server();
  
  // Generate a new RSA key and add it to the keystore
  await server.issuer.keys.generateRSA();
  
  // Start the server
  await server.start(8080, 'localhost');
  console.log('Issuer URL:', server.issuer.url); // -> http://localhost:8080

  // Tratamento do Payload
  server.issuer.on('beforeSigning', (token, _req) => {
    token.payload.sub = 'andre.salvadeo'
    token.payload.email = 'teste@teste.com.br';
    token.payload.name = 'André Salvadeo';
    token.payload.given_name = "André"
    token.payload.family_name = "Salvadeo"
  });

  // Stop the server
  //await server.stop();
}

main();