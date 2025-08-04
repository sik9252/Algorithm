function solution(cacheSize, cities) {
    if (cacheSize === 0) {
        return cities.length * 5;
    }
    
    var answer = 0;
    
    const lowerCities = cities.map((city) => city.toLowerCase());
    const cache = [];
    
    for (let i = 0; i < lowerCities.length; i++) {
        const currentCity = lowerCities[i];
        const currentCityIdxInCache = cache.indexOf(currentCity);
        
        // 캐시에 있는지 검사
        if (cache.includes(currentCity)) {
            // 1. 캐시 hit
            answer += 1;
            cache.splice(currentCityIdxInCache, 1);
            cache.push(currentCity);
        } else {
            // 2. 캐시 miss
            answer += 5;
            if (cache.length === cacheSize) {
                cache.shift();
            }
            cache.push(currentCity);
        }
    }
    
    return answer;
}