lib = {
   /**
    *   lib
    *   ~~~
    *   (c) 2015 albin
    *
    *   JavaScript library for small tasks.
    *
    *   List of functions:
    *       create(element[String])
    *           1. Returns Node Object.
    *           2. Creates element[String] as an Node Object.
    *
    *       hasClass(element[node object], class[String])
    *           1. Returns Boolean
    *           2. Returns true if the element[node object] has the class[String].
    *
    *       css(elements[Array], css[obj])
    *           1. Adds css[obj] code to every element of elements[Array].
    *
    *       s(child[string], parent[node object])
    *           1. Returns Node Object
    *           2. Selects the child[string] from the parent[node object].
    *
    *       sa(children[string], parent[node object])
    *           1. Returns NodeList
    *           2. Selects all children[string] from the parent[node object].
    *
    *       sn(child[string], nth[Integer], parent[node object]) 
    *           1. Returns Node Object
    *           2. Selects the nth[Integer]-child[String] from the parent[node object].
    *
    *       animate(element[node object], css[obj], duration[Integer], timing[string], end[function])
    *           1. Animates (CSS3 Animation) the element[node object] and moves towards the 
    *              properties of css[obj] in the set duration[Integer] time (milliseconds). 
    *           2. Runs the end[function] when the animation is done.
    *
    *       obj
    *           obj.size(object[obj])
    *               1. Returns Integer
    *               2. Returns the length of the object[obj].
    *
    *           obj.select(object[obj])
    *               1. Returns Array
    *               2. Returns an Array like: [[prop1, value1], [prop2, value2] ...
    *
    *       ready(function[Function])
    *           1. Runs the function[Function] as soon as the DOM is ready. 
    *
    *       ajax(object[obj])
    *           1. The object[obj] should contain these properties: 
    *               - method[String]
    *               - url[String]
    *               - optional: async[Boolean], default: 1
    *               - optional: post parameters, { "param1" : "value1", ... }
    *               - optional: onload[Function]
    *           
    */
   
    create : function (el){
        return document.createElement(el);
    },

    hasClass : function(el, match){
        if(el.getAttribute("class").indexOf(match) != -1){
            return true;
        }
        return false;
    },

    css : function(el, css){
        for(var i=0; i<el.length; i++){
            for (var prop in css) {
                el[i].style.setProperty(prop, css[prop]);
            }
        }
    },

    s : function(el, parent){ //select
        var parent = parent || document;
        return parent.querySelector(el);
    },

    sa : function(el, parent){ //select all
        var parent = parent || document;
        return parent.querySelectorAll(el);
    },

    sn : function(el, n, parent){ //select nth-element, is btw faster than css3's selector nth-child(n)
        var parent = parent || document;
        return parent.querySelectorAll(el)[n];
    },

    animate : function(el, change, duration, timing, end){
        var duration = duration || 200,
            timing = timing || "linear",
            transition = "";
        for (var prop in change) {
            transition += prop+" "+duration+"ms "+timing+", ";
        }
        el.style.webkitTransition = transition.substr(0,transition.length-2);
        if(end) el.addEventListener("webkitTransitionEnd", end());
        this.css([el],change);
    },

    obj : {
        size : function(o){
            k=0;
            for (var prop in o) k++;
            return k;
        },
        select : function(o){
            var arr = [];
            for (var prop in o) arr.push([prop, o[prop]]);
            return arr;
        }
    },

    ready : function(exec) {
        document.addEventListener('DOMContentLoaded', function(){
            exec();
        });
    },

    ajax : function(data){
        var req = new XMLHttpRequest();
        var async = data.async || true;

        req.open(data.method, data.url, data.async);

        if(data.onload){
            req.onload = function(){
                data.onload(this);
            }
        }

        if(data.params){
            var params = new FormData();
            for(var prop in data.params){
                params.append(prop, data.params[prop])
            }
            req.send(params);
        }
        else {
            req.send();
        }
    }
}