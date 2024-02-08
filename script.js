function getweather() {

    let number = document.getElementById("ip1").value;
console.log(number)
    fetch(`https://phonevalidation.abstractapi.com/v1/?api_key=b4da75bdd9f241b68e47aaf3d23e10c9&phone=${number}&aqi=yes`)
    .then(val =>val.json())
    .then(ans => {
  
    let data = `
<div class="col text-white">
<button id="bt2"><i class="bi bi-x"></i>
</button>
<h4>Mobile-Number : ${ans.format.international}</h4>
<h4>Carrier : ${ans.carrier}</h4>
<h4>Valid : ${ans.valid}</h4>
<h4>Type : ${ans.type}</h4>
<h4>Country-Name : ${ans.country.name}</h4>
<h4>Country-Code : ${ans.country.code}</h4>
<h4>Country-Prefix : ${ans.country.prefix}</h4>
<h4>Location : ${ans.location} </h4>

<h4>Local-Format : ${ans.format.local}</h4>

</div>`

        document.getElementById("div2").innerHTML = data;

        document.getElementById("bt2").addEventListener("click", () => {
            document.getElementById("div2").innerHTML = "";
        })


}).catch(err=>console.error(err))

}

