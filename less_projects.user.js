// Hello World! example user script
// version 0.1 BETA!
// 2005-04-22
// Copyright (c) 2005, Mark Pilgrim
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
//
// --------------------------------------------------------------------
//
// This is a Greasemonkey user script.
//
// To install, you need Greasemonkey: https://addons.mozilla.org/en-US/firefox/addon/748
// Then restart Firefox and revisit this script.
// Under Tools, there will be a new menu item to "Install User Script".
// Accept the default configuration and install.
//
// To uninstall, go to Tools/Manage User Scripts,
// select "Hello World", and click Uninstall.
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          Less Projects Key Bindings
// @namespace     http://github.com/trobrock/less-projects-keybindings
// @description   A script to add key bindings to LessProjects
// @include       http://*.lessprojects.com/*
// ==/UserScript==

Array.prototype.include = function(item){
  for (var i in this) {
    if (this[i] == item) { return true; }
  }
  return false;
}

function fireEvent(obj,evt){
  var fireOnThis = obj;
  if( document.createEvent ) {
    var evObj = document.createEvent('MouseEvents');
    evObj.initEvent( evt, true, false );
    fireOnThis.dispatchEvent(evObj);
  } else if( document.createEventObject ) {
    fireOnThis.fireEvent('on'+evt);
  }
}

window.addEventListener("keydown", function(e) {
  var invalidNodes = ["INPUT", "TEXTAREA"];
  if (invalidNodes.include(e.target.nodeName)) { return false; }

  var keys = {
    'a': [65]
  };
  var keyPressed = function(key){
    return keys[key].include(e.keyCode);
  }

  if (keyPressed("a")) {
    fireEvent(document.getElementById("add_spec").children[0], 'click');
    setTimeout(function(){ document.getElementById("spec_name").focus(); }, 500);
  }
});
