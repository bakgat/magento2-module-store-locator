define([
    'ko',
    'smile-map',
    'smile-map-markers',
    'smile-storelocator-store-collection'
], function(ko, SmileMap, Markers, StoreCollection){

    return SmileMap.extend({

        defaults: {  },

        initialize: function () {
            this._super();
        },

        /**
         * Init the list of markers.
         * Markers are a collection of Stores.
         */
        initMarkers: function() {
            var markersList = new StoreCollection({items : this.markers});
            this.markers = markersList.getList();

            this.markers.forEach(function(marker) {
                marker.distance = ko.observable(0);
            });

            this.displayedMarkers = ko.observable(this.markers);
        }

    });
});
