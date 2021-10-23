customerDelete.onshow=function(){
     // get all the pet data from the database when program loads
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw  + "&database=" + netID + "&query=" + query)
    if (req.status == 200) { 
    if (req.status == 200) { //transit worked.
      allCustomerData = JSON.parse(req.responseText)  // parse data in an array
        console.log(allCustomerData)
    } else {
        // transit error
        txt2 = `Error: ${req.status}`
    }  
}


DeleteCustomersbtn.onclick=function(){
    let customerNameDel = inpt1.value
    
    // make sure the pet name is in the database before you try to 
    // delete it
    let found = false
    for (i = 0; i < allCustomerData.length; i++) {
        if (customerNameDel == allCustomerData[i][1]){
            found = true
            break // if found the item in the database jump out of loop
        }
    }
    if (found == false) 
       txt2.textContent = "That pet name is not in the database."
    else if (found == true) {
      query = "DELETE FROM customers WHERE customerName = '" + customerNameDel + "'"
      alert(query)
      
   req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw  + "&database=" + netID + "&query=" + query)
      if (req.status == 200) //transit worked.
            if (req.responseText == 500)    // means the insert succeeded
                txt2.textContent = `You have successfully deleted the customer named ${customerNameDel}`
            else
                txt2.textContent = `There was a problem deleting ${customerNameDel} from the database.`
      else  // transit error
        txt2.textContent = `Error: ${req.status}`
    } // found is true
} // end event handler

}
