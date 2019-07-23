export const getRate =(rate, callback)=>{
    fetch(`https://api.exchangeratesapi.io/latest?base=${rate}`)
   .then(
        (response)=> response.json()
        )
            .then(data => callback(data), callback)
    }

    /*
    {
    fetch(`https://api.exchangeratesapi.io/latest?base=${rate}`)
    .then(data=>callback( JSON.stringify(data)))
    .catch(error => console.error(error));
   /*.then(
        (response)=> response.json()) callback(response.json())
        ).
            .then(data => callback(data), callback)*/
/*
 await request.get(`https://api.exchangeratesapi.io/latest?base=${rate}`,(error, response, data))
    .then(data=>callback( JSON.stringify(data)))
    .catch(error => console.error(error));
   /*.then(
        (response)=> callback(response.json())
        )
    }
    */