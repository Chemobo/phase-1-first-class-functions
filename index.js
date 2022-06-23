const receivesAFunction = (callbackFunction) => {
    return callbackFunction();
}

const returnsANamedFunction = () => {
    function nameFunction() {
    }
    return nameFunction;
}

const returnsAnAnonymousFunction = () => {
    return () => {};
}
