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
![all river with country india and length greater than 2000](https://cloud.githubusercontent.com/assets/1690108/14445364/1113076e-006a-11e6-9540-296d7322f83d.PNG)

The DBpedia ontology currently covers 685 classes which form a subsumption hierarchy and are described by 2,795 different properties. With Ontology cards you can get access to all thse classes, their properties and instances with controlled natular language query. Its a faceted query builder; at each query stage you will be provided with suggestions to refine your query until you have reached your final query string or you reach a dead end because of unavailable data.

See bellow to find what kind of queries are possible.

## Installation
clone it
```bash
git clone https://github.com/ashishact/Ontology-Cards.git
```
go to chrome://extensions/
click on load unpack extension and select the cloned folder

## How to use
1. go to any site or a open a new tab and
1. click on the browser extension icon (or)
2. Hit the CTRL key (don't keep it pressed, just hit and release)

