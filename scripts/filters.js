'use strict';

/* Filters */

angular.module('ngFilters', [])
.filter('mp4', function() {
    return function(m) {
        console.log('m', m);
        return m+'.mp4';
    };
})
.filter('webm', function() {
    return function(r) {
        console.log('r', r);
        return r+'.wemb';
    };
});