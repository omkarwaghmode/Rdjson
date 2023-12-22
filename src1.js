const api_url ="https://s3.amazonaws.com/open-to-cors/assignment.json"
fetch(api_url).then((data)=>{
    return data.json();
}).then((objdata)=> {
    console.log(objdata.products);
    let prop = Object.keys(objdata);
    let val = Object.values(objdata);
        let b1 = Object.values(val[1]);
        console.log(b1);
        let tabledata="";
        b1.sort((a,b)=> b.popularity - a.popularity);
        
        b1.map((values)=>{
            tabledata+=`
                    <tr>
                    <td>${values.title}</td>
                    <td>${values.price}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>${values.popularity}</td>
                    </tr>
                    
                    `;
        });
        document.getElementById("data-output").innerHTML=tabledata;

})
