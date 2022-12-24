function sendMail(){
   var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
   }


   const servieID = "service_2wgpopi"
   const templateID = "template_smgy7pk"


   emailjs.send(servieID, templateID, params)
    .then(
        res =>{
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
            console.log("hahahahahahahahah")
            alert("Your message sent successfully!")
        }
    )


    .catch(err => console.log(err))

}





