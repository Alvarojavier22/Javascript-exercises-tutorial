
//fix this function:
function startCounting()
{
	let counter = 101;
	while(counter <= 101)
	{
		counter --;
		console.log(counter);
		if(counter == 0){
			break
		}
	}
	
	return counter;
}

startCounting();