var app = angular.module('RubyChat', ['ngRoute','ngResource']);

app.constant('configuration', {
  api: 'http://SERVER_ADDR:9000/api',
  baseUrl: '/web',
});
