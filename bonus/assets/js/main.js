let userKm;
let userAge;
let check;
const priceForKm = 0.21;
const buttonTicket = document.getElementById('ticket');



buttonTicket.addEventListener('click', 
    function () {
        userKm = document.getElementById('user_km').value;
        userAge = document.getElementById('user_age').value;

        if (userAge > 65) {
            check = (userKm * priceForKm) * 0.6;
        } else if (userAge < 18) {
            check = (userKm * priceForKm) * 0.8;
        } else {
            check = userKm * priceForKm;
        }
        
        document.getElementById('price_ticket').innerHTML = "Prezzo Biglietto: €" + check.toFixed(2);
    }
)



