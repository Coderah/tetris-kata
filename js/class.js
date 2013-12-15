(function (exports) {
    exports.Class = (function () {

        /*!
         * JavaScript meaningfull Classic OOP Class Factory
         * @author  Andrea Giammarchi
         * @license Mit Style
         */

        /**
         * Public exposed Class function
         * @param   Object  the Class definition
         */
        function Class(definition) {

            // create the function via named declaration
            function Class() {}

            // find out if this is an extend
            var $extend = hasOwnProperty.call(definition, "extend");
            
            // temporary shortcut for inherited statics
            var $;

            // reassign the Class if there is a constructor ...
            if (hasOwnProperty.call(definition, "constructor")) {
                // wrapping it for faster execution
                Class = constructor(definition.constructor);
            }

            // assign inherited public static properties/methods, if defined in the extend definition
            if (
                $extend &&
                hasOwnProperty.call($ = definition.extend, "definition") &&
                hasOwnProperty.call($ = $.definition, "statics")
            ) {
                extend.call(Class, $.statics);
            }

            // assign public static properties/methods, if defined
            // eventually overwrite inherited statics
            if (hasOwnProperty.call(definition, "statics")) {
                extend.call(Class, definition.statics);
            }

            // assign the prototype accordingly with extend
            ($extend ?
                // chain the prototype extending it with the definition object
                extend.call(Class.prototype = create(definition.extend.prototype), definition) :
                
                Class.prototype = create(definition)
            )
                // be sure the constructor is the right one
                .constructor = Class
            ;

            // static public definition
            Class.definition = definition;

            // return the created class
            return Class;
        }

        // wrap the constructor via closure
        function constructor(constructor) {
            // creating a named declared Class function
            function Class() {
                // return in any case for dual behaviors (factories)
                return constructor.apply(this, arguments);
            }
            return Class;
        }

        // extend a gneric context via __proto__ object
        function extend(__proto__) {
            for (var key in __proto__) {
                if (hasOwnProperty.call(__proto__, key)) {
                    this[key] = __proto__[key];
                }
            }
            return this;
        }

        // trap the original Object.prototype.hasOwnProperty function
        // as shortcut and hoping nobody changed it before this file inclusion ...
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        
        // quick/fast Object.create emulator, if not in ES5
        var create = Object.create || (function () {
            function Object() {}
            return function (__proto__) {
                Object.prototype = __proto__;
                return new Object;
            };
        })();

        //* optional standard "for in" for Internet Explorer
        // it could be removed if we don't define "magic mathods" in definition objects
        // Internet Explorer does not enumerate properties/methods
        // with name present in the Object.prototype
        if (!({toString:null}).propertyIsEnumerable("toString")) {
            // if this happens, to make the extend consistent
            // we need to force Object.prototype names
            extend = (function ($extend) {
                function extend(__proto__) {
                    for (var i = length, key; i--;) {
                        if (hasOwnProperty.call(__proto__, key = split[i])) {
                            this[key] = __proto__[key];
                        }
                    }
                    // execute the original extend in any case for other properties/methods
                    return $extend.call(this, __proto__);
                }
                // constructor is not in the list since there is a re-assignment in any case
                var split = "hasOwnProperty.isPrototypeOf.propertyIsEnumerable.toLocaleString.toString.valueOf".split(".");
                var length = split.length;
                return extend;
            })(extend);
        }
        //*/

        // a Class is a Function and nothing else
        Class.prototype = Function.prototype;

        return Class;

    })();
})(typeof exports === 'undefined' ? window : exports); 