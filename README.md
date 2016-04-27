#L.Control.Rose Leaflet Plugin

North arrows or Compass Roses are used to dispay the cardinal directions on a map or
are used simply as decorations.

This Leaflet plugin allows users to add a variety of svg norths arrow to their mapping applications

##Demo

Check out the demo [here](http://bradhamson.github.io/L.Control.Rose/#11/39.2846/-76.6200)

##Using the Plugin

First add the L.Control.Rose.css, L.Control.Rose.j, and copy the images 
directory from the dist directory

~~~~html
<link rel="stylesheet" href="dist/L.Control.Rose.css" />
<script src="dist/L.Control.Rose.js"></script>
~~~~

Then add a `div` for the north arrow somewhere in your app:

~~~~html
<div id="rose">
</div>
~~~~


 Create `L.Control.Rose` and add it to the map:

~~~~javascript
 var rose = L.control.rose('rose', {position:'bottomleft', icon:'default', iSize:'medium'});

 rose.addTo(map)
~~~~


##Options

For now this plugin uses svg files. There will be a switch from svg files to just svg code in the future.

Positions are inherited from L.Control

[default]: L.Control.Rose/demo/default.png "default"
[arrow]: L.Control.Rose/demo/arrow.png "arrow"
[circle]: L.Control.Rose/demo/circle.png "circle"
[inner]: L.Control.Rose/demo/inner.png "inner"
[hip]: L.Control.Rose/demo/hip.png "hip"


| icon     | ex                       |
| -------- | ------------------------ |
| default  | ![alt text][default]     |
| arrow    | ![alt text][arrow]       |
| circle   | ![alt text][circle]      |
| inner    | ![alt text][inner]       |
| hip      | ![alt text][hip]         |


| size   | value |
| ------ | ----- |
| large  | 100px |
| medium | 75px  |
| small  | 50px  |
| xsmall | 25px  |


#License

MIT