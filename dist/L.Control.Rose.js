L.Control.Rose = L.Control.extend({
	includes: L.Mixin.Events,
    
    options: {
        icon: 'default',
        iSize: 'small',
        position: 'bottomleft',
    },

    placeholder: '',

    initialize: function (placeholder, options) {
        L.setOptions(this, options);
        this.placeholder = placeholder;
       },

    onAdd: function (map) {
    	this._map = map;

        //Find content container
        var content = this._contentContainer = L.DomUtil.get(this.placeholder);

        // Remove the content container from its original parent
        content.parentNode.removeChild(content);

        //Create rose container
        var container = this._container =
            L.DomUtil.create('div', 'leaflet-rose');

        //attach content container
        container.appendChild(content)

        //insert image
        var arrow = this.options.icon;
        var s = this.options.iSize;
        var path = 'images/'+arrow+'.svg';
        var i = L.DomUtil.create('img', s, content);
        i.setAttribute('src', path);

        return container;
    }

});

L.control.rose = function (placeholder, options) {
    return new L.Control.Rose(placeholder, options);
};
