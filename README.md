# Ontology-Cards
Ontological Semantic Query in web browser (Chrome only)

Uses DBpedia Ontology to query the dbpedia graph

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

And this data is accessible through SPARQL endpoints through the [SPARQL](https://www.w3.org/TR/rdf-sparql-query/) query language. In addition to being a widely-adopted W3C standard, the advantages of SPARQL are its expressivity, and its scalability for large RDF stores thanks to highly optimized SPARQL engines (e.g., Virtuoso, Jena TDB). Its main drawback is that writing SPARQL queries is a tedious and error-prone task, and is largely unaccessible to most potential users of semantic data.

And so it becomes important to develop intutive ways of accessing this data while hiding complexity of the SPARQL query language.

> Ontology-Cards is an exploratory search application to perform semantic query over the DBpedia graph. Currently it supports property conjunction and object comparision (only if data type is 'typed-literal')

what it means is, you can ask a query like this:
![all river with country india and length greater than 2000](https://cloud.githubusercontent.com/assets/1690108/14444862/2f86f20e-0066-11e6-9252-33d2bb3b4c14.PNG)

The DBpedia ontology currently covers 685 classes and are described by 2,795 different properties. Ontology-Cards tries to access all these classes, their properties and instances with controlled natural language query. Its a faceted query builder; at each query stage it provides suggestions to refine the next terms of query until it reaches the final query string or it meets a deadend because of unavailable data.

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

<a name="Explore"></a>
## Explore
Once you are inside the UI type 'explore' in the commandline and press enter. The view will change to to explore view.
```bash
  explore (press enter)
```
Here there are two ways you can do a search

1. [Instance Search](#Instance-Search)
2. [Class Search](#Class-Search)

<a name="Instance-Search"></a>
### Instance search

Instance Search follows a template like this:
```bash
  Subject0. Predicate0. Object0(Subject1). Predicate1. Object1(Subject2)
```
Object at each stage becomes Subject for the next stage.

To start with

- Type in any keyword you want to find, you will be given a list of suggestions (by default the first in the list will be selected as context)
```bash
  queen victoria
```
  ![queen victoria](https://cloud.githubusercontent.com/assets/1690108/14445940/d31d6670-006e-11e6-956d-e01bf5c43898.PNG)

- If you want to change the context use the (up/down) arrow keys.
  
- Add a . (dot or fullstop) at the end of the query to view all its properties
```bash
  queen victoria.
```

  ![queen victoria properties](https://cloud.githubusercontent.com/assets/1690108/14446287/d4392e60-0071-11e6-8f75-1d9fa60c554d.PNG)
  

- Type in a property name to get to the next context
```bash
  queen victoria. father
```
  ![queen victoria father](https://cloud.githubusercontent.com/assets/1690108/14446403/6f9a4762-0073-11e6-8c4e-815756e7dfa6.PNG)
  
- And thus you have another entitity, you can repeat the whole thing again with adding dots between context. For example if you want to find how Queen victoria's paternal grandfather looked like you can type in the command like this:
```bash
  queen victoria. father. father. depiction
```
  ![queen victoria father father depiction](https://cloud.githubusercontent.com/assets/1690108/14446777/304ab598-0077-11e6-930f-5418bd63a40d.PNG)

<a name="Class-Search"></a>
### Class Search
- Use the "All" key word to do a class search
- Class based search follows a template like this
```bash
  Class predicate1 object1
    and predicate2 object2
    and predicate3 object3
    ...
```
- For example:
```bash
All Scientist with birthplace England and almaMater Cambridge and knownFor Math
```
will give the following result

  ![all scientist birthplace london almamater cambridge knownfor math](https://cloud.githubusercontent.com/assets/1690108/14447172/bc431196-007a-11e6-9c39-2a0c9e7d49c2.PNG)

- Caveat: You shouldn't write down all the tripples at once (Althought it will give some answer, it will not be precise)
- At each step you have to select the objects that are suggested before you can enter the next query. For example in the prevoius query you first have to write
```bash
All scientist with birthPlace London
```
- And wait for it to suggest what it understood by the term 'London'. After it has given some suggestions , you have to select one among them and then write 
```bast
  and almaMater Cambridge
```
- And then wait for suggestions for the term 'Cambridge' and when available select one of them. and so on...
- In case you have no idea what objects (e.g. Cambridge) to write; leave it blank and there will be some suggestions for it.

<a name="Cards"></a>
### Cards
Add more than one dots at the end of query to get a card. A card has a set of facts from wikipedia about the current entity. For example (Note the no of trailing dots)
```bash
  all species with phylum Cyanobacteria.......
```
Results will look like

  ![all species with phylum cyanobacteria](https://cloud.githubusercontent.com/assets/1690108/14451454/e49855b4-00a4-11e6-8fe4-59bff42345ef.png)
  
Or with the query
```bash
  all Film with director Tim Burton and starring Johnny Depp.......
```

  ![all film with director tim burton and starring johnny depp cards](https://cloud.githubusercontent.com/assets/1690108/14451531/7b8540ea-00a5-11e6-8bec-1d4e3cd27021.png)

Cards are generated from the Wikipedia page title and all links are preserved. So Holding CTRL and clicking on any bold green link will generate another card with the title linked with the text clicked on.


<a name="Notes"></a>
## Notes

