/* eslint-disable max-len */
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  restAPI: 'https://uni-ooi-giga-meter-backend-dev.azurewebsites.net/api/v1/',
  restAPIDev:
    'https://uni-ooi-giga-meter-backend-dev.azurewebsites.net/api/v1/',
  tokenDev:
    'xxxx',
  token:
    'xxxx',
  languages: [
    {
      name: 'En',
      label: 'English',
      code: 'en',
    },
    {
      name: 'Es',
      label: 'Español',
      code: 'es',
    },
    {
      name: 'Pt',
      label: 'Português',
      code: 'pt',
    },
  ],
  mode: 'dev',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
