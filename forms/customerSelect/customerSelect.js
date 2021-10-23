let query= ""
let req=""
let results=[]
let pw="LucyiSgetting0lder69420"
let netID="ajw62691"


btn1.onclick=function(){
query="select * from customer;"
req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID +"&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) { 
    
        console.log(`req.responseText is a JSON string that looks like this: ${req.responseText}`)
        results = JSON.parse(req.responseText)
        
        console.log(`The parsed JSON string is converted to a JS object (an array of arrays): ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)

        if (results.length == 0)    
           lblMessage1.textContent = "There are no Customers in the database."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
           txt1.value = message
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        txt1.textContent = "Error code: " + req.status
}