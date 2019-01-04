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
		"name": "Visualizing scholarly influence",
		"img": require('./assets/images/citationvis_thumb.png'),
		"description": 
		`
		The scholarly literature is a vast store of formalized human knowledge, interconnected by citations between publications. 
		Looking at these citations is one way to measure the influence of scholarly research. 
		<a href="http://scholar.eigenfactor.org/" target="_blank">Scholar.eigenfactor.org</a> 
		is a collection of tools I built to use citations to measure and visualize the influence of collections of papers. 
		These collections can represent, for example, individual scholars, or journals, academic departments, or fields of study.
		`
	},
	{
		"name": "Analyzing large citation networks",
		"img": require('./assets/images/infomap_diagram_thumb.jpg'),
		"description": 
		`
		Community detection, or clustering, algorithms can reveal patterns and relationships in complex citation networks. These algorithms are computationally difficult, however, and with the continually increasing number of publications, the challenge is to adapt these algorithms to very large networks. Using several parallel processing techniques, I am able to perform <a href="http://www.mapequation.org/code.html" target="_blank">Infomap</a> clustering on networks with hundreds of millions of publications and over 1 billion citation links.
		`
	},
	{
		"name": "Mathematical Jargon: Calculating differences between fields",
		"img": require('./assets/images/dendrogram_mathjargon_thumb.jpg'),
		"description": 
		`
		We analyze the mathematical language used in hundreds of thousands of scientific papers, comparing the use of math across different disciplines. 
		By comparing the distributions of mathematical symbols and terms across fields, we quantify the "jargon barriers" between these fields—the difficulty any two fileds might have communicating based on how different their use of mathematical language is. 
		We find that characterizing fields by their use of mathematical language causes them to group in intuitive ways, and we explore how this approach could be used for recommendations in the scholarly literature, and for helping to bridge knowledge gaps in science.
		`
	},
	{
		"name": "Predictors of permanent housing for homeless families",
		"img": require('./assets/images/sankey_thumb.png'),
		"description": 
		`
		As a <a href="https://escience.washington.edu/dssg/" target="_blank">Data Science for Social Good</a> 
		summer fellow at the University of Washington's eScience Institute, 
		I worked on a team collaborating with the Bill and Melinda Gates Foundation 
		and other organizations to help understand and address the 
		<a href="http://escience.washington.edu/research-project/predictors-of-permanent-housing-for-homeless-families/" target="_blank">
		problem of family homelessness in western Washington state.
		</a> 
		Our contributions included analyzing data, building models, and creating interactive visualizations.
		`
	},
	{
		"name": "Commitments in written communication",
		"img": require('./assets/images/cortana_commitments.png'),
		"description": 
		`
		As an intern at Microsoft Research, I worked on a project to help Microsoft's 
		personal digital assistant, Cortana, identify when people make commitments in their outgoing emails, 
		and understand what kinds of commitments they make.
		`
	},
];



projects.forEach(function(item) {
	var p = $('#project-item-template').clone();
	p.find('img').attr('src', item.img);
	p.find('.project-name').html(item.name);
	p.find('.project-description').html(item.description);
	$('#projects').append(p.show());
});

$('#headshot').find('img').attr('src', require('./assets/images/jason_headshot_ischool_11-9-2018_1-748_lo.jpg'));
// hide for now
// $('#headshot').hide()
