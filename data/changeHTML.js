
var body = document.body.innerHTML;

var rows = document.getElementsByTagName("td");

var pattern = new RegExp("^[A-Z] [A-Z]*");

for each( var item in rows)
{
	if(pattern.test(item.innerHTML))
	{
		item.innerHTML = "<a href='http://www.google.com/#q="+ item.innerHTML[0]+"+"+ item.innerHTML.substr(2,item.innerHTML.length-1) + "+Rate+My+Professor+WSU'>" + item.innerHTML + "</a>";
	}
}