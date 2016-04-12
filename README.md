# Ontology-Cards
Ontological Semantic Query in web browser (Chrome only)

Uses dbpedia owl specification to query the dbpedia graph

## Abstract
A wealth of semantic linked data is available a RDF . DBpedia alone contains several billions of triples. 

Here is a breakdown of instances in DBpedia.

| Class	Instances     | Instances per class |
| --------------------|---------------------|
| Resource (overall)	| 4,233,000           |
| Place	              | 735,000             |
| Person	            | 1,450,000           |
| Work	              | 411,000             |
| Species	            | 251,000             |
| Organisation	      | 241,000             |

And this data is accessible through SPARQL endpoints. Although different endpoints may use different vocabularies and ontologies, they all share a common interface to access and retrieve semantic data: the SPARQL query language. In addition to being a widely-adopted W3C standard, the advantages of SPARQL are its expressivity, and its scalability for large RDF stores thanks to highly optimized SPARQL engines (e.g., Virtuoso, Jena TDB). Its main drawback is that writing SPARQL queries is a tedious and error-prone task, and is largely unaccessible to most potential users of semantic data.

Thus it becomes important to develop intutive ways of accessing this data while hiding complexity of the SPARQL query language.

> Ontology-Cards is an exploratory search application to perform semantic query over the DBpedia graph. Currently it supports property conjunction and object comparision (if data type is 'typed-literal')

what it means is, you can ask a query like this:
![all river with country india and length greater than 2000](https://cloud.githubusercontent.com/assets/1690108/14444862/2f86f20e-0066-11e6-9252-33d2bb3b4c14.PNG)

The DBpedia ontology currently covers 685 classes which form a subsumption hierarchy and are described by 2,795 different properties. With Ontology cards you can get access to all thse classes, their properties and instances with controlled natular language query. Its a faceted query builder; at each query stage you will be provided with suggestions to refine your query until you have reached your final query string or you reach a dead end because of unavailable data.

See bellow to find what kind of queries are possible.

## Installation
clone it
```bash
git clone https://github.com/ashishact/Ontology-Cards.git
```
go to chrome://extensions/
Enable developer mode
click on load unpack extension and select the cloned folder

## How to use
- go to any site or a open a new tab and
- click on the browser extension icon (or)
- Hit the CTRL key (don't keep it pressed, just hit and release)



Ontology cards can be used in two ways:
- [Explorartory Search over DBpedia graph](#Explore)
- [Creating and viewing notes](#Notes)

## Explore
Once you are inside the UI type 'explore' in the commandline and press enter. The view will change to to explore view.
Here there are two ways you can do a search

1. [Instance Search](#Instance-Search)
2. [Class Search](#Class-Search)

### Instance search
- Type in any keyword you want to find, you will be given a list of suggestions (by default the first in the list will be selected as context)
  
  ![queen victoria](https://cloud.githubusercontent.com/assets/1690108/14445940/d31d6670-006e-11e6-956d-e01bf5c43898.PNG)

- If you want to change the context use the (up/down) arrow keys.
  
- Add a . (dot or fullstop) at the end of the query to view all its properties

  ![queen victoria properties](https://cloud.githubusercontent.com/assets/1690108/14446287/d4392e60-0071-11e6-8f75-1d9fa60c554d.PNG)
  

## Notes

