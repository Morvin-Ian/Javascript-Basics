const catch_error = () =>{
    let i = 1;
    while(i <= 5){
        try{
            if(i%2 !== 0){throw new Error ("Odd Number(s)!!");}
            console.log("Even number")}

        catch(error){console.error(error.stack);}
            finally{console.log("... last action")}
            i++;
    }
};

catch_error();