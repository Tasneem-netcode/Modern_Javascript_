function CalculateGrade(){
    let marks = document.getElementById("marks").value;
    let grade = "";

    if(marks>=90){
        grade= "A (Excellent)";
    }else if(marks >= 75){
        grade = "B(good)";
    }else if (marks >= 50){
        grade= "C (Average)";
    }
    else if(marks >= 35){
        grade = "D (pass)";
    }
    else{
        grade = "F(fail)";
    }

    document.getElementById("result").innerText = "Your Grade:" +grade;
}