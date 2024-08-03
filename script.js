const findGrade=()=> {
    const mark = parseInt(document.getElementById('mark').value);
    const result = document.getElementById('result');
    
    if (mark < 0 || mark > 100) {
        result.textContent = "Please enter a valid mark between 0 and 100.";
        return;
    }

    let grade;
    let status = mark >= 30 ? "Passed" : "Failed";

    if (mark >= 90) {
        grade = "A+";
    } else if (mark >= 80) {
        grade = "A";
    } else if (mark >= 70) {
        grade = "B+";
    } else if (mark >= 60) {
        grade = "B";
    } else if (mark >= 50) {
        grade = "C+";
    } else if (mark >= 40) {
        grade = "C";
    } else if (mark >= 30) {
        grade = "D+";
    } else if (mark >= 20) {
        grade = "D";
    } else {
        grade = "E";
    }

    result.textContent = "Grade: "+grade+ " - Status:" +status;
} 