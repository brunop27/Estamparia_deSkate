const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.card-slide');
const maxItems = items.length;

const items2 = document.querySelectorAll('.c-i2');
const maxItems2 = items2.length;
let currentItem2 = 0


controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains("left-control");
        const secondSlide = control.classList.contains("secondSlide");
        if(secondSlide){
            if(isLeft){
                currentItem2 -= 1;
            }else{
                currentItem2 += 1;
            }
    
            if(currentItem2 >= maxItems2){
                currentItem2 = 0;
            }
    
            if(currentItem2 < 0){
                currentItem2 = maxItems2 - 1;
            }
    
            items2.forEach((item2) => item2.classList.remove("current-item2"));
    
            items2[currentItem2].scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
    
            items2[currentItem2].classList.add("current-item2");
        }else{
            if(isLeft){
                currentItem -= 1;
            }else{
                currentItem += 1;
            }
    
            if(currentItem >= maxItems){
                currentItem = 0;
            }
    
            if(currentItem < 0){
                currentItem = maxItems - 1;
            }
    
            items.forEach((item) => item.classList.remove("current-item"));
    
            items[currentItem].scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
    
            items[currentItem].classList.add("current-item");

        }

        

    });
});
