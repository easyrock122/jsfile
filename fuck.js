let b = document.getElementById("bar");

b.addEventListener("keyup",()=> {
    if(event.keyCode ===13){
        if (100 >= b.value && b.value >= 61 ) {
            alert("오늘의 기분은 좋음");
           } else if (61 > b.value && b.value >= 30) {
            alert("오늘의 기분은 보통");
            } else {
            alert("오늘의 기분은 나쁨");
        }
    }
}
) 