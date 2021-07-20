// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  releaseTagVersion: 'dev',
  runnerEnvironment: 'dev',
  production: false,
  gtag: 'UA-170465866-1',
  name: 'Local',
  api: 'https://api-staging.cleverea.com/api/flights',
  apiUser: 'https://api-staging.cleverea.com/api/users',
  apiMoto: 'https://api-staging.cleverea.com/api/moto',
  apiPmv: 'https://api-staging.cleverea.com/api/pmv',
  apiRenters: 'https://api-staging.cleverea.com/api/renters',
  apiPayments: 'https://api-staging.cleverea.com/api/payments',
  urlGateway: 'https://api-staging.cleverea.com/gateway',
  //urlGateway: 'http://localhost:8080/http://localhost:3000/gateway',
  apiClientId: 'XotEa9Ny9T4cFXvX2X0EZGjA',
  apiSecretKey: 'mc1FEjQsm1INTmdPOTPhVS75EUtc0awIPAoqPskkrVZF1H9w',
  s3BaseURLImages: 'https://images.cleverea.com',
  s3BaseURLDocs:
    'https://legal-public-docs-cleverea.s3-eu-west-1.amazonaws.com',
  s3BaseURLPublicImg:
    'https://public-images-web-cleverea.s3-eu-west-1.amazonaws.com',
  apiKeyGateway: 'ca03na188ame03u1d78620de67282882a84',
  landingBaseUrl: 'https://staging.cleverea.com',
  country: 'ES',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
