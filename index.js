var chercherJour = function(jour, tableau){
    for(var i=0; i<tableau.length; i++){
        if(tableau[i]["day"] === jour) return i
    }
}

var bars = document.querySelectorAll(".main .graphique div .bar")

var requestURL = 'data.json';
    var request = new XMLHttpRequest()
    request.open('GET', requestURL)
    request.responseType = 'json'
    request.send()
    request.onload = function() {
        var jour = request.response

        for(var i=0; i<bars.length; i++){
            var parent = bars[i].parentNode
            var indice = parent.querySelector("span").innerText
            var montant = document.createElement("div")
            montant.innerText = "$" + jour[chercherJour(indice, jour)]["amount"]
            montant.classList.add("montant")
            montant.classList.add("active")
    
            parent.insertBefore(montant, parent.firstChild)

                bars[i].addEventListener("mouseenter", function(){
                    this.parentNode.firstChild.classList.remove("active")
                })

                bars[i].addEventListener("mouseleave", function(){
                    this.parentNode.firstChild.classList.add("active")
                })
            }
    }


    
    
    
        
        // })


// for(var i=0; i<bars.length; i++){
//     console.log(i)
//     // bars[i].addEventListener("mouseenter", function(){
//         var parent = bars[i].parentNode
//         var indice = parent.querySelector("span").innerText

//         var requestURL = 'data.json';
//         var request = new XMLHttpRequest()
//         request.open('GET', requestURL)
//         request.responseType = 'json'
//         request.send()
//         request.onload = function() {
//             var jour = request.response

//             var montant = document.createElement("div")
//             montant.innerText = jour[chercherJour(indice, jour)]["amount"]
//             montant.classList.add("active")

//             parent.insertBefore(montant, parent.firstChild)
//         }
//     // })

//     // bars[i].addEventListener("mouseleave", function(){
//     //     var parent = this.parentNode
//     //     parent.removeChild(parent.firstChild)
//     // })
// }