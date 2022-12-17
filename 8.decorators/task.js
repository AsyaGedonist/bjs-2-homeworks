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


function debounceDecoratorNew(func, delay) {
  let timeoutId = null;

  function wrapper (...args) {
    wrapper.allCount++;
    if (timeoutId){
      clearTimeout(timeoutId);
    } else {
      func(...args);
      wrapper.count++;
    }
    timeoutId = setTimeout(()=> {        
      wrapper.count++;
      func(...args);
    }, delay);
  };
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}