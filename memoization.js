let cache = {};
function memoize(key, value) {
  if (key in cache) {
    console.log("cache is good");
    return cache[key];
  }
  cache[key] = value;
  return cache[key];
}

memoize('a',2)
memoize('a',3)
memoize('b',2)
memoize('c',2)

