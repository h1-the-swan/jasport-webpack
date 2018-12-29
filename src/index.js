require('./styles/index.scss');

// import PopperJs from 'popper.js';
import jquery from 'jquery';
var $ = jquery;
import 'bootstrap';


jquery(()=>{
	console.log('Hello jQuery + bootstrap 4!');
});

var projects = [
	{
		"name": "Visualizing Scholarly Influence",
		"img": require('./assets/images/citationvis_thumb.png'),
		"description": 
			`
			Visualizing Scholarly Influence <a href="http://scholar.eigenfactor.org/" target="_blank">Link</a>
			`
	},
];



projects.forEach(function(item) {
	var p = $('#project-item-template');
	p.find('img').attr('src', item.img);
	p.find('.project-name').html(item.name);
	p.find('.project-description').html(item.description);
	$('#projects').append(p.show());
});

