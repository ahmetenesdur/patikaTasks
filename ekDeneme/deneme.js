var sports = ['basketball', 'football', 'tennis' ];
console.log(sports); // basketball, football, tennis
sports.splice(1,0,'baseball');
console.log(sports); // basketball, baseball, football, tennis

var sports = ['basketball', 'football', 'tennis' ];
console.log(sports); // basketball, football, tennis
sports.splice(1,1);
console.log(sports); // basketball, tennis

var sports = ['basketball', 'football', 'tennis' ];
console.log(sports[2]); // tennis
sports[2] = 'judo';
console.log(sports[2]); // judo