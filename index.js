function receivesAFunction(cb) {
    return cb();
}

receivesAFunction();

function returnsANamedFunction() {
    return function hello() {};
}

function returnsAnAnonymousFunction() {
    return function() {};
}