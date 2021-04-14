const getData=()=> {
    fetch('./data.json'
    ,{
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        }
    })
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
}
useEffect (() => {
    getData()
},[]);