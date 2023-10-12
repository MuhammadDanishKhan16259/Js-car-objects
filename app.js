var carVariants = {
    honda: {
        civic: {
            type: {
                image: "https://www.gari.pk/images/new/cars/2022-03/1585_1_33577.jpg",
                name: "Honda Civic Reborn",
                model: 2006,
                price: 1500000,
                colors: ["red", "black", "white"],
                doors: 4,
                wheels: 4,
            }
        },

        accord: {
            type: {
                image: "https://www.cnet.com/a/img/resize/8ed824e410b760de8aab88022c537bf00db5c6b7/hub/2022/11/09/34765dfd-4ef0-4f55-9c2a-80d943f97715/honda-accord-hybrid-2023-739229.jpg?auto=webp&width=1920",
                name: "Honda Accord",
                model: 2022,
                price: 28000,
                colors: ["silver", "black", "blue"],
                doors: 4,
                wheels: 4,
            }
        },


    },
    toyota: {
        camry: {
            type: {
                image: "https://media.ed.edmunds-media.com/toyota/camry/2024/oem/2024_toyota_camry_sedan_se-nightshade-edition_fq_oem_1_600.jpg",
                name: "Toyata Camry",
                model: 2022,
                price: 30000,
                colors: ["silver", "black", "blue"],
                doors: 4,
                wheels: 4
            }
        },
        corolla: {
            type: {
                image: "https://toyota-central.com/Assets/images/Vehicle/CorollaX/Exterior4.jpg",
                name: "Toyota Corolla",
                model: 2023,
                price: 25000,
                colors: ["red", "white", "black"],
                doors: 4,
                wheels: 4,
            }
        },

    },

}


var company = document.getElementById("company")
var brand = document.getElementById("brand")

var allCars = document.getElementById("allCars")
company.innerHTML = `<option value="">Select Company</option>`
brand.innerHTML = `<option value="">Select Company</option>`


for (var key in carVariants) {
    //  console.log(key);   
    company.innerHTML += `
 <option value="${key}">
 ${key.toUpperCase()}
 </option>
 `
    for (var key1 in carVariants[key]) {
        for (var key2 in carVariants[key][key1]) {
            var carData = carVariants[key][key1][key2]
            var colorsDiv = ""
            for (var i = 0; i < carData.colors.length; i++) {
                // console.log(carData.colors[i]);
                colorsDiv += `<div class="me-2" style="border:1px solid; width: 20px; height: 20px; border-radius: 10px; background-color:${carData.colors[i]}"></div>`
            }
            //  console.log(colorsDiv)
            // console.log( carVariants[key][key1][key2]);
            allCars.innerHTML += `
<div class="col mb-2">
<div class="card" >
<img src="${carData.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${carData.name || "unknown"}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${carData.model}</h6>
        <h2>Rs ${carData.price}</h2>

<div class="d-flex">

${colorsDiv}
</div>
    </div>
</div>
</div>
`
        }
    }

}
// for(key1 in carVariants[key]){
//     // console.log(key1);  
//  }
function onCompanyChange() {

    brand.innerHTML = "";
    brand.innerHTML = `<option value="">Select Company</option>`
    // console.log(company.value);
    for (var key in carVariants[company.value]) {
        // console.log(key);
        brand.innerHTML += `
        <option value="${key}">
        ${key.toUpperCase()}
        </option>
        `
    }
}

// function filterCars(){
//     console.log(company.value, brand.value)
// }


function filterCars() {
    // console.log(carVariants[company.value][brand.value].type)


    var carData = carVariants[company.value][brand.value].type
    var colorsDiv = ""
    for (var i = 0; i < carData.colors.length; i++) {
        colorsDiv += `<div class="me-2" style="border:1px solid; width: 20px; height: 20px; border-radius: 10px; background-color:${carData.colors[i]}"></div>`
    }
    allCars.innerHTML = `
    <div class="col mb-2">
    <div class="card" >
<img style="height: 600px" src="${carData.image}" class="card-img-top" alt="...">

        <div class="card-body">
            <h5 class="card-title">${carData.name || "unknown"}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${carData.model}</h6>
            <h2>Rs ${carData.price}</h2>
    
            <div class="d-flex">

            ${colorsDiv}
            </div>
        </div>
    </div>
    </div>
    `
}