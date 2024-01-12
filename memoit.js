const addTwo = (number) => {
	console.log('addTwo производит вычисление...');
	return number + 2;
};

const memoIt = (fn) => {
    const store={};
    return (param)=>{
    if (!store[param]){
      store[param] = fn(param);
    }
    return store[param];
    }
}

const memoAddTwo = memoIt(addTwo);