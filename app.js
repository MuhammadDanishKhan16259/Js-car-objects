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
        
        yaris: {
            type: {
                image: "https://lahorirentacar.com/wp-content/uploads/2022/01/New-Model-Toyota-Yaris-2021-for-Rent-in-Lahore.png",
                name: "Toyota Yaris",
                model: 2022,
                price: 22000,
                colors: ["blue", "gray", "white"],
                doors: 4,
                wheels: 4,
            }
        },
    

        landCruiser: {
            type: {
                image: "https://cdn.bolnews.com/wp-content/uploads/2023/07/FotoJet-2023-07-12T172924.647.jpg",
                name: "Toyota Land Cruiser",
                model: 2022,
                price: 85000,
                colors: ["blue", "black", "white"],
                doors: 4,
                wheels: 4,
            }
        },

        highlander: {
            type: {
                image: "https://www.buyatoyota.com/assets/img/vehicle-info/Highlander/2023/hero_image_highlander.png",
                name: "Toyota Highlander",
                model: 2023,
                price: 38000,
                colors: ["red", "black", "white"],
                doors: 4,
                wheels: 4,
            }
        },
        supra: {
            type: {
                image: "https://images8.alphacoders.com/107/thumb-1920-1070993.jpg",
                name: "Toyota Supra",
                model: 2022,
                price: 55000,
                colors: ["yellow", "black", "red"],
                doors: 2,
                wheels: 4,
            }
        },
        teslaModelS: {
            type: {
                image: "https://mysterio.yahoo.com/mysterio/api/5060465963781036D7ACF9D3875338F6F60EAA3BAA4CE2F322FB69194FE20B7F/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USC20TSC021A0101.jpg",
                name: "Tesla Model S",
                model: 2023,
                price: 89999,
                colors: ["red", "blue", "gray"],
                doors: 4,
                wheels: 4,
            }
        },

        bmwM3: {
            type: {
                image: "https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf0jUi10tLhu1XzWVo7puMLWFmdkAj5DOPitppZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74gtZWNF1VgxNJ0%25lI2oub5imC2yRCzXeTt%25ViPRKVZVYVeHWh1DMzt4i%25eqVYDafaOojmztYRSJdw67aftxdTgDw1RSfWQlEW%25VxdSeZG4NuzWQdjc9NO3aeZQ6KownXRjcZwBL1Lrx6Kc%252ywQ4WwBKupCVFFe%252B3in2ZIjup2XH51zv63iprJ8VWGwXHi4TPgR9%25rJHFlMgPou4TJIsDoiL3FlTv0YPiyXIslGAT5tCrv0s9Ol%259E4GA0og8ZTNF9OALUPwnkIogOybMxrnvLUgChDWP5GybUEqY6e89ChbNmtstPoEqhk7NigMLNmqn1kHJDyk7m5VnbbYCn178z5GPtE5V1Pa12SfNwVKJZR19mspzweqKhN7DlMA84Fo1",
                name: "BMW M3",
                model: 2022,
                price: 79999,
                colors: ["black", "white", "gray"],
                doors: 4,
                wheels: 4,
            }
        },

    },

 
    // supra: {
    //     type: {
    //         image: "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/19supra-3qtr-1566985377.jpg",
    //         name: "Toyota Supra",
    //         model: 2022,
    //         price: 55000,
    //         colors: ["yellow", "black", "red"],
    //         doors: 2,
    //         wheels: 4,
    //     }
    // },


    

}


var company = document.getElementById("company")
var brand = document.getElementById("brand")

var allCars = document.getElementById("allCars")
company.innerHTML = `<option value="">Select Company</option>`
brand.innerHTML = `<option value="">Select Company</option>`


// for (var key in carVariants) {
//     //  console.log(key);   
//     company.innerHTML += `
//  <option value="${key}">
//  ${key.toUpperCase()}
//  </option>
//  `
//     for (var key1 in carVariants[key]) {
//         for (var key2 in carVariants[key][key1]) {
//             var carData = carVariants[key][key1][key2]
//             var colorsDiv = ""
//             for (var i = 0; i < carData.colors.length; i++) {
//                 // console.log(carData.colors[i]);
//                 colorsDiv += `<div class="me-2" style="border:1px solid; width: 20px; height: 20px; border-radius: 10px; background-color:${carData.colors[i]}"></div>`
//             }
//             //  console.log(colorsDiv)
//             // console.log( carVariants[key][key1][key2]);
//             allCars.innerHTML += `
// <div class="col-md-3 mb-2">
// <div class="card" >
// <img src="${carData.image}" class="card-img-top" alt="...">
//     <div class="card-body">
//         <h5 class="card-title">${carData.name || "unknown"}</h5>
//         <h6 class="card-subtitle mb-2 text-body-secondary">${carData.model}</h6>
//         <h2>Rs ${carData.price}</h2>

// <div class="d-flex">

// ${colorsDiv}
// </div>
//     </div>
// </div>
// </div>
// `
//         }
//     }

// }



//chatgpt

for (var key in carVariants) {
    //  console.log(key);   
    company.innerHTML += `
        <option value="${key}">
            ${key.toUpperCase()}
        </option>
    `
    for (var key1 in carVariants[key]) {
        for (var key2 in carVariants[key][key1]) {
            var carData = carVariants[key][key1][key2];
            var colorsDiv = "";

            if (carData.colors && Array.isArray(carData.colors)) {
                for (var i = 0; i < carData.colors.length; i++) {
                    colorsDiv += `<div class="me-2" style="border:1px solid; width: 20px; height: 20px; border-radius: 10px; background-color:${carData.colors[i]}"></div>`
                }
            }

            allCars.innerHTML += `
                <div class="col-md-3 mb-2">
                    <div class="card">
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
            `;
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

// Assuming you have a reference to the element with id "smitCarsLink"
var smitCarsLink = document.getElementById("smitCarsLink");

smitCarsLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Clear the selected options in the company and brand dropdowns (if any)
    company.value = "";
    brand.value = "";

    // Clear the content of the "allCars" element
    allCars.innerHTML = "";

    // Render all cars again
    for (var key in carVariants) {
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
                    colorsDiv += `<div class="me-2" style="border:1px solid; width: 20px; height: 20px; border-radius: 10px; background-color:${carData.colors[i]}"></div>`
                }
                allCars.innerHTML += `
                    <div class="col-md-3 mb-2">
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
});
