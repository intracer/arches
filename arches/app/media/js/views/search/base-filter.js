define([
    'jquery',
    'backbone'
], function($, Backbone) {
    return Backbone.View.extend({
        // the various filters managed by this search filter widget
        filter: {},

        initialize: function(options) {
            $.extend(this, options);
        },

        // append your filters onto this object which ultimately is used in the URL
        // return true if filters are added
        appendFilters: function(queryStringObject) {
            return false;
        },

        // a function to drive the state of the ui based on
        // the filter object passed into the function
        // the filter objects should take the same form as this.filter
        restoreState: function(filter) {
            return;
        },

        // a function that clears the filter and restores
        // the ui to a clean and unfiltered state
        clear: function() {
            return;
        }
    });
});
