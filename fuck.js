let b = document.getElementById("bar");

b.addEventListener("keyup",()=> {
    if(event.keyCode ===13){
        if (100 >= b.value && b.value >= 81 ) {
            alert("오늘의 기분은 매우 좋음");
           } else if (81 > b.value && b.value >= 61) {
            alert("오늘의 기분은 좋음");
            } else if(61 > b.value && b.value >= 41){
            alert("오늘의 기분은 보통");
            }else if(41 > b.value && b.value >= 21){
                alert("오늘의 기분은 나쁨");
            }else {
                alert("오늘의 기분은 매우 나쁨");
        }
    }
}
) 