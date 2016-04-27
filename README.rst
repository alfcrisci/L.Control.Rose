=============================
L.Control.Rose Leaflet Plugin
=============================

North arrows or Compass Roses are used to dispay the cardinal directions on a map or
are used simply as decorations.

This Leaflet plugin allows users to add a variety of svg norths arrow to their mapping applications

----------------
Using the Plugin
----------------

First add a `div` for the north arrow somewhere in your app:

.. code-block:: html
<div id="rose">
</div>


 Create `L.Control.Rose` and add it to the map:

 .. code-block:: javascript
 var rose = L.control.rose('rose', {position:'bottomleft', icon:'default', iSize:'medium'});

 rose.addTo(map)
 

-------
Options
-------
More icons are coming soon. Additionally, there will be a switch from svg files to just svg code.

========     =======  ======
position     icon     iSize
========     =======  ======
top          default  xsmall
bottom       -------  small
right        -------  medium
left         -------  large
topright     -------  ------
topleft      -------  ------
bottomright  -------  ------
bottomleft   -------  ------
============ =======  ======

--------
License
--------
MIT