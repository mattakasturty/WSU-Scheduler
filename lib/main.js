var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var pageMod = require("sdk/page-mod");
var self = require("sdk/self");

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Mozilla",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});


function handleClick(state) {
	//TODO
}

tabs.on('ready', onOpen);


function onOpen(tab)
{
	var url = tab.url;
	var pattern = new RegExp("http://schedules.wsu.edu/List/Pullman/20153/.+");
	
	if(pattern.test(url))
	{
		var html = tab.url;
		console.log(html);
	}
}

pageMod.PageMod({
  include: "http://schedules.wsu.edu/List/Pullman/20153/*",
  contentScriptFile: self.data.url("changeHTML.js")
});
