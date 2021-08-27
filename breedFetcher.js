const request =  require('request');


const url = "https://api.thecatapi.com/v1/breeds/search?q=sib";



request(url, (error, response, body) => {
    if (error) {
      console.log(error)
    }
    if (response ){
      console.log(response);
    }
    if(body){{
      console.log(body)
    }
    }
    let data =JSON.parse(body);
    console.log(data)
  });

  module.export