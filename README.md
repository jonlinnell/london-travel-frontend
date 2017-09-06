ll-travel is a web/digital signage app built for Loughborough University London, to provide public transport information for national rail services mainly to and from Loughborough, and London public transport.

## Installation

### CORS support for National Rail APIs

The package I'm using to convert data from National Rail's difficult SOAP API into a nice JSON format doesn't support CORS, which of course makes it rather useless for a client-side web app.

A CORS proxy is a simple solution, but this requires modifying the national-rail-darwin source to shim a CORS proxy into the HTTP request.

Each time yarn/npm install is run, you need to apply the shim:

```sh
cd misc/national-rail-darwin
./apply_shim.sh
```

Without this, National Rail queries will not work.