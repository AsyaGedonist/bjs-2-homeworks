function cachingDecoratorNew(func) {
  let cache = [];
  let keyCache = [];
  
  return (...args) => {
    const hash = args.join(',');
    
    if (hash in cache){
      return ("Из кэша: " + cache[hash]);
    }

    const result = func(...args);
    cache[hash] = result;
    keyCache.push(hash);

    if (keyCache.length > 5){
      indexCache = keyCache[0];
      delete cache[indexCache];
      keyCache.shift();
    }

    return ("Вычисляем: " + result);
  }
}


function debounceDecoratorNew(func) {
  // Ваш код
}