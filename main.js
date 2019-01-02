function calculateGrade() {

    var grade= document.getElementById("grade").value
    var name= document.getElementById("name").value
    var subject= document.getElementById("subject").value
    
    if (grade<=100 && grade>=90) {
        grd="A"
        
    } else if (grade<=89 && grade>=80) {
        grd= ("B");
    }
       else if (grade<=79 && grade>=70) {
        grd= ("C");
    }else if (grade<=69 && grade>=65) {
        grd=("D");
    } else {
        grd=("E");
    }
    
    msg= name +" grade in "+ subject+ " is " + grd
    alert (msg )
}