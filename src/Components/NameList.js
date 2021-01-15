import React from 'react';

const NameList = ({nameList=[]}) => {
  return (
    <>
    { nameList.map((data,index) => {
        if (data) {
          return (
            <div key={data}>
              <h1>{data}</h1>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default NameList