let agf = (() => {
  var _ref = babelHelpers.asyncGenerator.wrap(function* () {
    this;
    yield babelHelpers.asyncGenerator.await(1);
    yield 2;
    return 3;
  });

  return function agf() {
    return _ref.apply(this, arguments);
  };
})();
