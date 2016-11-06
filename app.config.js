var app = angular.module('RubyChat', ['ngRoute','ngResource']);

app.constant('configuration', {
  /************************
   *      MODIFY HERE     *
   ************************/
  api: 'http://SERVER_ADDR/api',
  baseUrl: '/web',
});
