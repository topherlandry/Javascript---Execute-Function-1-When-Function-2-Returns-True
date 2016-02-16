<script type="text/javascript">

	function execute_function_1_when_function_2_returns_true( first_function_parementer, second_function_parementer, check_frequency_parameter ){

		if( typeof check_frequency_parameter == 'undefined' ) var check_frequency_parameter = 100;
	
		if( second_function_parementer() == true ) {
			
			first_function_parementer();
			
		}
		
		else {
			
			setTimeout( function(){
				           				
				execute_function_1_when_function_2_returns_true( first_function_parementer, second_function_parementer, check_frequency_parameter );
				
			}, check_frequency_parameter );
			
		}

	}
	
</script>
