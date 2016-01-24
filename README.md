# lib.js
A *very*, *very*, *very* small JavaScript library for small tasks. No support for older browsers.

File size minified: ~1.05 KB
File size gzipped: ~554 bytes

# Documentation
    create(element[String])
        1. Returns Node Object.
        2. Creates element[String] as an Node Object.

    hasClass(element[node object], class[String])
        1. Returns Boolean
        2. Returns true if the element[node object] has the class[String].

    css(elements[Array], css[obj])
        1. Adds css[obj] code to every element of elements[Array].

    s(child[string], parent[node object])
        1. Returns Node Object
        2. Selects the child[string] from the parent[node object].

    sa(children[string], parent[node object])
        1. Returns NodeList
        2. Selects all children[string] from the parent[node object].

    sn(child[string], nth[Integer], parent[node object]) 
        1. Returns Node Object
        2. Selects the nth[Integer]-child[String] from the parent[node object].

    animate(element[node object], css[obj], duration[Integer], timing[string], end[function])
        1. Animates (CSS3 Animation) the element[node object] and moves towards the 
           properties of css[obj] in the set duration[Integer] time (milliseconds). 
        2. Runs the end[function] when the animation is done.

    obj
        obj.size(object[obj])
            1. Returns Integer
            2. Returns the length of the object[obj].

        obj.select(object[obj])
            1. Returns Array
            2. Returns an Array like: [[prop1, value1], [prop2, value2] ...

    ready(function[Function])
        1. Runs the function[Function] as soon as the DOM is ready. 

    ajax(object[obj])
        1. The object[obj] should contain these properties: 
            - method[String]
            - url[String]
            - optional: async[Boolean], default: 1
            - optional: post parameters, { "param1" : "value1", ... }
            - optional: onload[Function]
