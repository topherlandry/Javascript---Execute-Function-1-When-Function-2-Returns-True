<h1>Execute Function 1 when Function 2 Returns True</h1>
By Cliff Simmons, http://cliffsimmons.com<br/>
<br/>
"Function 1 when Function 2 Returns True" or "execute_function_1_when_function_2_returns_true()" is a javascript function that can be used to execute one function (Function 1) when another function (Function 2) returns a boolean value of true. This function is especially handy for firing a custom function when certain DOM activity and changes arise<br/>
<br/>
<br/>
<br/>
<br/>
<h2>PARAMETERS</h2>
```
execute_function_1_when_function_2_returns_true( 
  first_function_parameter, 
  second_function_parameter, 
  check_frequency_parameter
);
``` 
**first_function_parameter** - required parameter of variable type 'function'<br/>
*The function that you would like to be executed when the function defined by the "second_function_parameter" has returned a boolean value of true.*<br/>
<br/>
**second_function_parameter** - required parameter of variable type 'function'<br/>
*The function that returns a boolean value of true or false based on the conditions that this function analyses.*<br/>
<br/>
**check_frequency_parameter** - optional parameter of variable type 'number'<br/>
*The number of milliseconds that must elapse between each recursive re-firing of the "execute_function_1_when_function_2_returns_true" function before its "second_function_parameter" returns a value of true. If "execute_function_1_when_function_2_returns_true" is called without "check_frequency_parameter" defined its parameter set, then the"check_frequency_parameter" will be set to 100 (milliseconds) by default.*<br/>
<br/>
<br/>
<br/>
<br/>
<h2>Example Usage A</h2>
Create an alert message when one or more video elements are present DOM.
```
execute_function_1_when_function_2_returns_true(
  function(){
    alert( 'One or more video elements are present.' );
  },
  function(){
    var result = false;
    var video_element = document.getElementsByTagName( 'video' );
    if( video_element.length > 0 ) result = true;
    return result;
  }
);
```
<br/>
<br/>
<br/>
<br/>
<h2>Example Usage B</h2>

Check the DOM every 5 seconds (5000 milleseconds) for the presence of one or more paragraph tags. Once one or more paragraph tags have been detected, an alert message will be created.

  execute_function_1_when_function_2_returns_true(
    function(){
      alert( 'One or more paragraph elements are present.' );
    },
    function(){
      var result = false;
      var video_element = document.getElementsByTagName( 'p' );
      if( video_element.length > 0 ) result = true;
      return result;
    },
    5000
  );
