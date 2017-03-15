function execute_function_1_when_function_2_returns_true (functionOne, functionTwo) {
  if (functionTwo) {
    functionOne();
  else {
    setTimeout(function () {
      execute_function_1_when_function_2_returns_true(functionOne, functionTwo);
    }, 100);
  }
}
