L.Control.Rose = L.Control.extend({

    options {
        arrow: 'default'
        position: 'bottomleft'
    },

    initialize: function (placeholder, options) {
        L.setOptions(this, options);

        //Find content container
        var content = this._contentContainer = L.DomUtil.get(placeholder);

        // Remove the content container from its original parent
        content.parentNode.removeChild(content);

        //Create rose container
        var container = this._container =
            L.DomUtil.create('div', 'leaflet-rose' + this.options.position);

        //Style and attach content container
        var L.DomUtil.addClass(content, 'leaflet-control');
        container.appendChild(content)
    },

    addTo: function (map) {
        var container = this._container;
        var content = this._contentContainer;

        //attach rose container to controls container
        var controlContainer = map._controlContainer;
        controlContainer.insertBefore(container, controlContainer.firstChild);

        this._map = map;

        return this;
    },

    removeFrom: function (map) {
        var container = this._container;
        var content = this._contentContainer;

        // remove rose container from controls container
        var controlContainer = map._controlContainer;
        controlContainer.removeChild(container);

        // disassociate the map object
        this._map = null;

        return this;
    }

});

L.control.rose = function(placeholder, options) {
    return new L.Control.Rose(placeholder, options);
};
