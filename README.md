cellular-automata-patterns
==========================

This repo contains cellular automata pattern file collections.  It gives developers of CA apps and scripts an easy path to a large, high-quality set of patterns.

The patterns are unaltered from the source including any readme or supporting files and are updated daily.

Collections
-----------

* **conwaylife** - The pattern collection from LifeWiki.  It currently contains 2,200+ RLE pattern files.  They are mostly standard Conway's Game of Life ruleset B3/S23, but also contains other rules.  http://www.conwaylife.com/wiki/Category:Patterns

Contents
--------

`patterns` directory containing cellular automata pattern file collections.

`index.json` contains a listing of the contents of the `patterns` directory.  The root element is an array of directory objects for each pattern collection.  Directory objects have one property which is the name of the directory and its value is an array which is the contents of the directory.  The contents can be either directory objects or strings which are the filenames.

`schema.json` formally describes the format of `index.json` with JSON Schema.

Pull Requests
-------------

If you know of any pattern collections you would like to see included in this repo, please submit a pull request!