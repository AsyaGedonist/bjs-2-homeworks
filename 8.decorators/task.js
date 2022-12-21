function cachingDecoratorNew(func) {
  let cache = {};
  
  return (...args) => {
    const hash = args.join(',');
    
    if (hash in cache){
      return ("Из кэша: " + cache[hash]);
    }

    const result = func(...args);
    cache[hash] = result;
    // keyCache.push(hash);

    
    if (Object.keys(cache).length > 5){
      indexCache = Object.keys(cache)[0];
      delete cache[indexCache];
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