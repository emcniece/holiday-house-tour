import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Map from './map/map';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Hero.name,
  User.name,
  Map.name
]);

export default commonModule;
