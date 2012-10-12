// To-Do:
// 		  1. Animate between tabs
//		  2. Create images for backgrounds and icons/buttons

var Ti = Titanium;
Ti.setBackgroundColor('#000');

var originalState = {opacity:0.6};
var selectedState = {opacity:0.4};
var y = 20;
//
// create base UI tab and root window
//
var tabGroup = Ti.UI.createTabGroup();

var win1 = Ti.UI.createWindow({  
    title:'Craig',
    //backgroundColor:'#fff'
	backgroundImage:'img/craig_bg2.jpg'
});
var win2 = Ti.UI.createWindow({  
    title:'Geoff',
    //backgroundColor:'#fff'
	backgroundImage:'img/craig_bg2.jpg'
});

var tab1 = Ti.UI.createTab({
	title:'Craig',
	icon:'KS_nav_views.png',
	window:win1
});

var tab2 = Ti.UI.createTab({
	title:'Geoff',
	icon:'KS_nav_views.png',
	window:win2
});
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.open();

// button 1
var button1 = Ti.UI.createButton({
	title:"Uh Oh",
	width:200,
	height:40,
	color:"#fff",
	backgroundColor:"#000",
	top:y,
	left:"50%",
	borderRadius: 5,
	borderWidth:1,
	opacity:originalState.opacity
});
button1.addEventListener('singletap', function(e){
	//Ti.API.info('singletap event fired');
	playClip('craig_uh_oh.mp3');
	this.opacity = selectedState.opacity;
});
button1.addEventListener('touchend', function(e){
	this.opacity = originalState.opacity;
});
y = y+button1.height+10;

// button 2
var button2 = Ti.UI.createButton({
	title:"Ooh la la",
	width:200,
	height:40,
	color:"#fff",
	backgroundColor:"#000",
	top:y,
	left:"50%",
	borderRadius: 5,
	borderWidth:1,
	opacity:originalState.opacity
});
button2.addEventListener('singletap', function(e){
	playClip('craig_ooh-la-la.mp3');
	this.opacity = selectedState.opacity;
});
button2.addEventListener('touchend', function(e){
	this.opacity = originalState.opacity;
});
y = y+button2.height+10;

// button 3
var button3 = Ti.UI.createButton({
	title:"Aye carumba",
	width:200,
	height:40,
	color:"#fff",
	backgroundColor:"#000",
	top:y,
	left:"50%",
	borderRadius: 5,
	borderWidth:1,
	opacity:originalState.opacity
});
button3.addEventListener('singletap', function(e){
	playClip('craig_aye-carumba.mp3');
	this.opacity = selectedState.opacity;
});
button3.addEventListener('touchend', function(e){
	this.opacity = originalState.opacity;
});
y = y+button3.height+10;

// button 4
var button4 = Ti.UI.createButton({
	title:"Tutsifruits",
	width:200,
	height:40,
	color:"#fff",
	backgroundColor:"#000",
	top:y,
	left:"50%",
	borderRadius: 5,
	borderWidth:1,
	opacity:originalState.opacity
});
button4.addEventListener('singletap', function(e){
	playClip('craig_tutsifruts.mp3');
	this.opacity = selectedState.opacity;
});
button4.addEventListener('touchend', function(e){
	this.opacity = originalState.opacity;
});
y = y+button4.height+10;

// button 5
var button5 = Ti.UI.createButton({
	title:"Bunny Hello",
	width:200,
	height:40,
	color:"#fff",
	backgroundColor:"#000",
	top:y,
	left:"50%",
	borderRadius: 5,
	borderWidth:1,
	opacity:originalState.opacity
});
button5.addEventListener('singletap', function(e){
	playClip('craig_bunny-hello.mp3');
	this.opacity = selectedState.opacity;
});
button5.addEventListener('touchend', function(e){
	this.opacity = originalState.opacity;
});

win1.add(button1);
win1.add(button2);
win1.add(button3);
win1.add(button4);
win1.add(button5);
win1.open();

// geoff peterson buttons
y = 20;
// button geoff1
var button_geoff1 = Ti.UI.createButton({
	title:"In your pants",
	width:200,
	height:40,
	color:"#fff",
	backgroundColor:"#000",
	top:y,
	left:"50%",
	borderRadius: 5,
	borderWidth:1,
	opacity:originalState.opacity
});
button_geoff1.addEventListener('singletap', function(e){
	playClip('geoff_in-your-pants.mp3');
	this.opacity = selectedState.opacity;
});
button_geoff1.addEventListener('touchend', function(e){
	this.opacity = originalState.opacity;
});
y = y+button_geoff1.height+10;

// button geoff2
var button_geoff2 = Ti.UI.createButton({
	title:"Oh Snap",
	width:200,
	height:40,
	color:"#fff",
	backgroundColor:"#000",
	top:y,
	left:"50%",
	borderRadius: 5,
	borderWidth:1,
	opacity:originalState.opacity
});
button_geoff2.addEventListener('singletap', function(e){
	playClip('geoff_oh-snap.mp3');
	this.opacity = selectedState.opacity;
});
button_geoff2.addEventListener('touchend', function(e){
	this.opacity = originalState.opacity;
});
y = y+button_geoff2.height+10;

// button geoff3
var button_geoff3 = Ti.UI.createButton({
	title:"Say What!",
	width:200,
	height:40,
	color:"#fff",
	backgroundColor:"#000",
	top:y,
	left:"50%",
	borderRadius: 5,
	borderWidth:1,
	opacity:originalState.opacity
});
button_geoff3.addEventListener('singletap', function(e){
	playClip('geoff_say-what.mp3');
	this.opacity = selectedState.opacity;
});
button_geoff3.addEventListener('touchend', function(e){
	this.opacity = originalState.opacity;
});
y = y+button_geoff3.height+10;

// button geoff4
var button_geoff4 = Ti.UI.createButton({
	title:"Fresh Tweets",
	width:200,
	height:40,
	color:"#fff",
	backgroundColor:"#000",
	top:y,
	left:"50%",
	borderRadius: 5,
	borderWidth:1,
	opacity:originalState.opacity
});
button_geoff4.addEventListener('singletap', function(e){
	playClip('geoff_fresh_tweets.mp3');
	this.opacity = selectedState.opacity;
});
button_geoff4.addEventListener('touchend', function(e){
	this.opacity = originalState.opacity;
});

win2.add(button_geoff1);
win2.add(button_geoff2);
win2.add(button_geoff3);
win2.add(button_geoff4);

// function to change sound clip
var playClip = function(clip){
	// setup audio player with default sound and options
	var audioPlayer = Ti.Media.createSound({
		url:"sounds/" + clip,
		looping:false
	});
	audioPlayer.play();
}