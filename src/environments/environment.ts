// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBR2J8dHTvSjrTtuQPQdyzSLxP7nGZj7vg',
    authDomain: 'ng-fitness-tracker-3a6ba.firebaseapp.com',
    databaseURL: 'https://ng-fitness-tracker-3a6ba.firebaseio.com',
    projectId: 'ng-fitness-tracker-3a6ba',
    storageBucket: 'ng-fitness-tracker-3a6ba.appspot.com',
    messagingSenderId: '830910834031'
  }
};
