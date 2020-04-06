# BUnite
BUnite is a platform which aids the investors, innovators and source code contributors to communicate with each others to fulfill the agenda of giving the shape to innovative ideas for their implementation.

The prime goal behind developing this application is to improve the lifestyle of labour and improving the employement opportunities which can lead to a better economic development.

## Features
Bunite helps innovaters to post their ideas on a ubiquitous plaform,
where investors and project contributors are constantly looking for extension of project.
So, following features can help them to bridge their requirements
bilaterally considering the investors in mind :

(1) Home page of an application lists all projects currently under progress (generally looking for funds in most cases).
    The home page lets the user to like the project, which facilitates sentiment analysis for augmenting page ranking algorithm to set priorities of projects.
    Moreover, add button lets contributors to contribute by funding or involvement in project.
     
(2) Searching ideas - lets you filter several projects based on searched keywords, which are in currently under progress.

(3) posting innovative ideas - lets innovators to move their projects for its possible expansion in hope of receiving aid
    from investors / contributors.

Flow of application :

Register => Log In => Home Page => Select idea => project detail page. 

Register => Log In => Home Page => Searching Ideas =>  Select idea => project detail page.

Register => Log In => Home Page => posting innovative idea => Home Page (idea posted on home page).                            
                        
                         Home Page ==> \__ Like Project
                                        \__ contribute 
                                           \__ Investment Request
                                            \__ Project Contribution Request 
 
                                
## Missing Part
The current project includes the completely working prototype, however the project is not using the real database. We are going to use MongoDB Atlas for managing the data in backend. We have given a thought to use the combination of MEAN (MongoDB Atlas, Express.js, Angular, Node.js) stack for backend implementation.

## Prospective / imminent features

The main objective of any project is to make overall system to be loosely coupled 
to swap the functionalists whenever possible. However, MEAN defined as missing part ,can also
be swapped with highly scalable framework such as spring boot, where dynamic cloud configuration is
possible with cloud services such as GCP and Amazon AWS.

Moreover, EC2 containerized services provided by prominent service provider such as GCP and AWS
can serve the purpose for hosting backend databases such as MongoDB or HBase.

Moreover, the project recommendation system should rely on preferences of user and their activity
applying NLP modules. Similarly, the search functionality should also based on page ranking algorithm,
highly optimized to set priority for project to display based on keywords entered.

Therefore, recommendation system and search functionality needs on demand service
invocation , where serverless computing plays pivotal role. We can augment lamda functions
provided by Amazon AWS into our service architecture to make system highly manageable and flexible.  

## Installation
/* yet to complete */  

