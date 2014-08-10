Sometimes you want to alternate between a fixed and normal flow for elements. Think of a sidebar that scrolls with the page from when it’s at the top of our screen and stops just before it would otherwise overlap our footer.

As easy as this might soon it can be a bit confusing to do. Let me show you how.

The CSS property `position: sticky;` would be all we need, but it is a feature still [in development]][1]. So until we can rely on that here's a solution with [jQuery Waypoints][2].

## The concept


Let’s say you are working to make your sidebar sticky. We need to add 




1. Change the element to the sticky stickyDefine a waypoint for the sticky element (use the 'sticky' shortcut method that the plugin provides)
2.  Define a waypoint for the element that should stop the sticky element
3.  Adjust the second waypoint with the offset.top for the element minus the height of the sticky element.

Essentially, jQuery Waypoints makes it easier to run a function when an element is where you want it in the viewport. What we want is to change the styles on our element to `position: fixed` when it is at the top of the viewport. When the 

Here's <a href="http://jsfiddle.net/oskarrough/SFyCj/" target="_blank">a working example</a>.



But check the example, I've made sure there are lots of comments.

 [1]: http://updates.html5rocks.com/2012/08/Stick-your-landings-position-sticky-lands-in-WebKit
 [2]: http://imakewebthings.com/jquery-waypoints/