import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class IdeasService {

	constructor() { }

	ideaList = [{
		'title':'Nano technology',
		'description':'The branch of technology that deals with dimensions and tolerances of less than 100 nanometers, especially the manipulation of individual atoms and molecules.',
		'author': 'Wikipaedia',
		'likes': 450,
		'favorite': false,
		'liked': true,
		'url': 'https://pbs.twimg.com/profile_images/2989018357/c506694736fcaf3b5670522331d8c140.jpeg'
	},{
		'title':'Intelligent Apps',
		'description':'I-Apps are pieces of software written for mobile devices based on artificial intelligence and machine learning technology, aimed at making everyday tasks easier.',
		'author': 'Wikipaedia',
		'likes': 140,
		'favorite': false,
		'liked': false,
		'url': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbJutDPqmTtnwPBi4Kf5P9heNirj9eXenlYTV-1lf07AmuwFsa&usqp=CAU'
	},{
		'title':'Internet of Things',
		'description':'IoT essentially is connecting many devices and creating a virtual network where everything works seamlessly via a single monitoring center of sorts.',
		'author': 'Wikipaedia',
		'likes': 373,
		'favorite': false,
		'liked': false,
		'url': 'https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1436293022/u3whadmsx2ynehwnyimo.jpg'
	},{
		'title':'Angular and React',
		'description':'Angular and React are JavaScript based Frameworks for creating modern web applications.',
		'author': 'Wikipaedia',
		'likes': 1120,
		'favorite': false,
		'liked': false,
		'url': 'https://www.iihglobal.com/wp-content/uploads/2019/12/AngularJS-Vs-ReactJS-256x256.jpg'
	},{
		'title':'Blockchain',
		'description':'Blockchain as a technology has far-reaching potential in everything from healthcare to elections to real estate to law enforcement.',
		'author': 'Wikipaedia',
		'likes': 853,
		'favorite': false,
		'liked': false,
		'url': 'https://objectcomputing.com/files/7915/5076/2304/bitcoin-logo.png'
	},{
		'title':'Artificial Intelligence',
		'description':'AI existed even before the internet was born, but it is now that the data processing and compute power backbone became strong enough to sustain an entire technology by itself.',
		'author': 'Wikipaedia',
		'likes': 853,
		'favorite': false,
		'liked': false,
		'url': 'https://xplain.co/wp-content/uploads/2019/10/artificial-intelligence-256x256.jpg'
	}];

	interests = [{
		'id': 1,
		'value': 'Machine Learning'
	},{
		'id': 2,
		'value': 'Data Science'
	},{
		'id': 3,
		'value': 'Banking'
	},{
		'id': 4,
		'value': 'Agriculture'
	},{
		'id': 5,
		'value': 'Startups'
	}];
}
