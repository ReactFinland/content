const path = require("path");

function resolveRefs(context) {
  const ret = {};

  Object.keys(context).forEach(k => {
    v = context[k];

    if (Array.isArray(v)) {
      ret[k] = resolveArrayRefs(v);
    } else if (isObject(v)) {
      ret[k] = resolveRefs(v);
    } else {
      ret[k] = v.$ref ? resolveRef(v.$ref) : v;
    }
  });

  return ret;
}

//  https://stackoverflow.com/questions/8834126/how-to-efficiently-check-if-variable-is-array-or-object-in-nodejs-v8
function isObject(a) {
  return !!a && a.constructor === Object;
}

function resolveArrayRefs(array) {
  return array.map(v => (v.$ref ? resolveRef(v.$ref) : v));
}

function resolveRef(ref) {
  return require(path.resolve(__dirname, "src", ref));
}

module.exports = resolveRefs;
