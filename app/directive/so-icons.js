'use strict';

module.exports = function() {
    return {
        restrict: 'EAC',
        template: require('./so-icons.html'),
        controller: ['$log', SocialIconsController],
        bindToController: true,
        controlelrAs: 'socialIconsCtrl',
        scope: {
            tester: '@'
        }
    };
};

function SocialIconsController() {
    this.icons = ['fb', 'twitter', 'instagram'];

};