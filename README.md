
Execute Function 1 when Function 2 Returns True
By Cliff Simmons, http://cliffsimmons.com

"Function 1 when Function 2 Returns True" or "execute_function_1_when_function_2_returns_true()" is a javascript function that can be used to execute one function (Function 1) when another function (Function 2) returns a boolean value of true. This function is especially handy for firing a custom function when certain DOM activity and changes arise





PARAMETERS

  execute_function_1_when_function_2_returns_true( 
    function_parameter, 
    files_parameter, 
    delay_parameter 
  );
  
function_parameter - required parameter of variable type 'function'
The function that you would like to be executed when the all files specified in the "files_parameter" have been successfully loaded.

files_parameter - required parameter of variable type 'array'
The array of files that you would like to be loaded before the function defined by the "function_parameter" is fired.

delay_parameter - optional parameter of variable type 'number'
The number of milliseconds by which to delay the firing of the "function_parameter" after the files specifid in the "files_parameter") have been successfully loaded. When the "execute_function_after_files_loaded()" is used, if the "delay_parameter" is not included the parameter set then the "delay_parameter" will default to 0; meaning that the "function_parameter" will fire immediately after the files in the "file_parameter" have been loaded.





EXAMPLE USAGE A
