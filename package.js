Package.describe({
  name: 'cinn:roles',
  version: '0.0.2',
  summary: 'Simple roles authorization for meteor',
  git: 'https://github.com/cinn-labs/meteor-roles',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.4');
  api.export('Roles');
  api.use('meteor-base');
  api.use('tracker');
  api.use('ecmascript');
  api.addFiles('roles.common.js', ['client', 'server']);
  api.addFiles('roles.server.js', 'server');
  api.addFiles('roles.client.js', 'client');
});
