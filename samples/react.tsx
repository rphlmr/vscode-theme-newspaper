import React from 'react';

type FuncParam = {
	length: number;
  }
  
  /**
   * @param {number} length
   */
  function func(param: FuncParam) {
	  var text = 'string';
	  for (var i = 0; i < param.length; i++) {
		  text += i;
	  }
	  return {
		  "text": text,
		  "boolean": false
	  };
  }
  
  function Component({length}: {length: number}) {
	return (
	  <div>
		{func({length}).text}
	  </div>
	);
  }
  
  export function View(){
	return (
	  <div className="flex flex-col">
		<h1>Hello there</h1>
		<Component length={10} />
	  </div>
	);
  }