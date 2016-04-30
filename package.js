Package.describe({
  name: 'roles',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.2');
  api.export('Roles');
  api.use('meteor-base');
  api.use('tracker');
  api.use('ecmascript');
  api.addFiles('roles.common.js', ['client', 'server']);
  api.addFiles('roles.server.js', 'server');
  api.addFiles('roles.client.js', 'client');
});


// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('roles');
//   api.mainModule('roles-tests.js');
// });
