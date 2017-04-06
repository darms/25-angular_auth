'use strict';

// var angular = require('angular');
// angular.module('myMod', [
//   require('angular-animate'),
//   require('angular-mocks/ngMock'),
//   require('angular-mocks/ngAnimateMock')
// ]);

describe('Gallery Service', function() {

  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, authService, galleryService, $window, $httpBackend) => {
      this.$window = $window;
      this.$rootScope = $rootScope;
      this.authService = authService;
      this.galleryService = galleryService;
      this.$httpBackend = $httpBackend;
    });
  });

  describe('galleryService.createGallery', () => {
    it('should create a new gallery', () => {
      let galleryData = {
        name: 'example gallery',
        desc: 'example description'
      };

      let headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer test token'
      };

      this.$httpBackend.expectPOST('https://slugram-backend.herokuapp.com/api/gallery', galleryData, headers)
      .respond(200, {
        _id: '1234',
        username: 'testuser',
        name: galleryData.name,
        desc: galleryData.desc,
        pics: []
      });

      this.galleryService.createGallery(galleryData);
      this.$httpBackend.flush();
      this.$rootScope.$apply();
    });
  });

  // TODO: create another test for deleting a gallery
});