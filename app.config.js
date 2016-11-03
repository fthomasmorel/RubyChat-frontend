var app = angular.module('RubyChat', ['ngRoute','ngResource']);

app.constant('configuration', {
  api: 'http://localhost:8080',
  baseUrl: '/web',
});
