var first=1;
var z=0;
var y = "";
var message="Welcome to the Machine...";
var active=1;
var status=1;
var i = 0;
var c="";
var ossi=true;
var hello=">Hello and welcome to my webpage! My name is Kalpesh Krishna .Have fun on this machine. It is a little rusty, but useful :)";
var aboutme=">I am a student of IIT Bombay currently in my first year. I'm pursuing a B.Tech degree in Electrical Engineering. I am originally from Pune, Maharashtra. I'm popularly known as \"KK\". I wish to open a chocolate factory to fulfil my childhood fantasies!! :)";
var interests=">I have a vast variety of interests and love to explore new things. I love Astronomy,Speed Mathematics, Programming and other tech stuff, Poker,Reading, Football, and my awesome Rubiks cube. I enjoy Acting ,Film Making, listening to Rock Music, Quizzing, Puzzle solving. I also hold a Black Belt in Karate so beware!!";
var contactme=">You could contact me through Facebook or Gmail.\n My Email ID is kalpeshk2011@gmail.com \n The link to my facebook account is <a href=\"https://www.facebook.com/kalpesh.krishna.9\"><u>here.</u></a>";
var current=hello;
function onContentLoad()
{
	typeText();
	tid = setTimeout(mycode, 1);
}
function mycode() {
	if (i<message.length)
	{
		c=c.concat(message.charAt(i));
		i++;
		document.getElementById("p1").innerHTML=c;
		if (status==1) {
			var x = Math.ceil(c.length*6/message.length);
			for (var j=1;j<=x;j++)
			{
				document.getElementById("bulb"+j).src="Images/on.png";
			}

		}
		else
			for (var j=1;j<=6;j++)
			{
				document.getElementById("bulb"+j).src="Images/on.png";
			}
			tid = setTimeout(mycode, 300);
		}
		else
		{
			var c1="";
			if (ossi)
				c1="|";
			else
				c1="";
			ossi=!ossi;
			document.getElementById("p2").innerHTML=c1;
/*for (var j=1;j<=6;j++)
{
document.getElementById("bulb"+j).src="Images/off.png";
}*/
tid = setTimeout(mycode, 500);
}
}
function abortTimer() {
	clearTimeout(tid);
}
function moveHome()
{
	if (status==0 && active!=1)
	{
		for (var j=1;j<=4;j++)
			document.getElementById("switch"+j).src="Images/soff.png";
		document.getElementById("switch1").src="Images/son.png";
		status=1;
		active=1;
		current=hello;
		slideText();
	}
}
function moveAboutMe()
{
	if (status==0 && active!=2)
	{
		for (var j=1;j<=4;j++)
			document.getElementById("switch"+j).src="Images/soff.png";
		document.getElementById("switch2").src="Images/son.png";
		status=1;
		active=2;
		current=aboutme;
		slideText();
	}
}
function moveInterests()
{
	if (status==0 && active!=3)
	{
		for (var j=1;j<=4;j++)
			document.getElementById("switch"+j).src="Images/soff.png";
		document.getElementById("switch3").src="Images/son.png";
		status=1;
		active=3;
		current=interests;
		slideText();
	}
}
function moveContactMe()
{
	if (status==0 && active!=4)
	{
		for (var j=1;j<=4;j++)
			document.getElementById("switch"+j).src="Images/soff.png";
		document.getElementById("switch4").src="Images/son.png";
		status=1;
		active=4;
		current=contactme;
		slideText();
	}

}
function slideText()
{
	document.getElementById("gear").src="Images/gear.gif";
	typeText();
}

function typeText()
{
	y=0;
	tid2=setTimeout(type1(),1);
}

function type1()
{

	if (z<current.length)
	{
		y=y+current.charAt(z);
		z++;
		document.getElementById("maintext").innerHTML=y;
		if (z%2==0 && current.charAt(z)!='.' && current.charAt(z-1)!='.' && current.charAt(z)!='!' && current.charAt(z-1)!='!'&& current.charAt(z)!=',' && current.charAt(z-1)!=',')
		{
			var ad=new Audio("Audio/typewriter-key-1.mp3");
			ad.play();
		}
		if (first==0) {
			var d = new Date();
			var n = d.getSeconds();
			var bin="";
			while(n!=0)
			{
				var digit=n%2;
				bin=digit+bin;
				n=Math.floor(n/2);
			}
			for (var j=1;j<=6-bin.length;j++)
				bin="0"+bin;
			for (var j=1;j<=6;j++)
			{
				if (bin.charAt(j-1)=='0')
					document.getElementById("bulb"+j).src="Images/off.png";
				else
					document.getElementById("bulb"+j).src="Images/on.png";
			}
		}

		tid2=setTimeout(type1,90);
	}
	else
	{
		document.getElementById("gear").src="Images/gearstatic.png";
		z=0;
		status=0;
		first=0;
	}

}
function abortTimer() {
	document.getElementById("gear").src="Images/gearstatic.png";
	z=0;
	status=0;
	first=0;
	document.getElementById("maintext").innerHTML=current;

	clearTimeout(tid2);
}
