//Click E In Navbar To Change
$(document).ready(function() {
    $("#home").click(function() {
        $(".home").show();
        $(".partner").show();
    });
    $("#price").click(function() {
        $(".home").hide();
        $(".popular").hide();
        $(".recruit").hide();
        $(".news").hide();
        $(".partner").hide();
    });
    $("#office").click(function() {
        $(".home").hide();
        $(".popular").hide();
        $(".recruit").hide();
        $(".news").hide();
        $(".partner").hide();
    });
    $("#popular").click(function() {
        $(".popular").show();
        $(".intro").hide();
        $(".recruit").hide();
        $(".partner").hide();
    });
    $("#service").click(function() {
        $(".home").hide();
        $(".popular").hide();
        $(".recruit").hide();
        $(".news").hide();
        $(".partner").hide();
    });
    $("#news").click(function() {
        $(".home").hide();
        $(".popular").hide();
        $(".recruit").hide();
        $(".news").show();
        $(".partner").hide();
    });
    $("#contact").click(function() {
        $(".home").hide();
        $(".popular").hide();
        $(".recruit").hide();
        $(".news").hide();
        $(".partner").hide();
    });
    $("#recruit").click(function() {
        $(".home").hide();
        $(".popular").hide();
        $(".recruit").show();
        $(".news").hide();
        $(".partner").hide();
    });
    
});

/*Display Menu*/
let menu = document.getElementById('menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

/*Scroll-top Btn*/
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    if (window.scrollY > 260) {
        document.getElementById('scroll-top').classList.add('active');
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }
}

document.getElementById('scroll-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

/*Display Images*/
let image = document.getElementById('img');
let images = ['./IMG/car_img.jpg', './IMG/car_img2.jpg', './IMG/car_img3.jpg', './IMG/car_img4.jpg'];
let index = 0;
setInterval(function() {
    index++;
    if (index == images.length)
        index = 0;
    image.src = images[index];
}, 2000)
    
//Display Recruit
let reitm = document.getElementsByClassName('recruit_items');
let rew2 = document.getElementsByClassName('recruit_wrap_2');
for (let i = 0; i < reitm.length; i++) {
    reitm[i].onclick = function() {
        for (let j = 0; j < rew2.length; j++) {
            if (j == i) {
                document.querySelector('.recruit_wrap').classList.add('active');
                rew2[j].className = 'recruit_wrap_2 active';
                break;
            }
        }
        document.getElementById('recruit').onclick = function() {
            document.querySelector('.recruit_wrap').classList.remove('active');
            rew2[i].className = 'recruit_wrap_2';
        }
    }
}

/*Display Pages*/
let btn = document.getElementsByClassName('btn');
for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
        for (let j = 0; j < btn.length; j++) {
            if (j == i) {
                btn[i].className = 'btn active',
                    document.querySelector('.loader-container').classList.remove('fade-out'),
                    document.querySelector('header').classList.add('active');
            } else {
                btn[j].className = 'btn';
            }

        }
    }
}



/*Display loading*/
function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 2500)
}

window.onload = fadeOut();


//Display News
let video = document.getElementById('news-images_id');
let videos_array = ['https://www.youtube.com/embed/rcJP52uHSVU', 'https://www.youtube.com/embed/pKY8qs2d4RI', 'https://www.youtube.com/embed/uqFJCkqjqn8', 'https://www.youtube.com/embed/JroUsUKpyuo', 'https://www.youtube.com/embed/Zabv-ddGQr8'];
let count = 0;
let button = document.getElementsByClassName('dot-items');
let back_button = document.querySelector('.back-button');
let next_button = document.querySelector('.next-button');

for (let i = 0; i < button.length; i++) {
    button[i].onclick = function() {
        for (let j = 0; j < button.length; j++) {
            if (j == i) {
                count = i;
                button[i].classList.add('changeColor');
                if (count > 0 && count < videos_array.length) {
                    Object.assign(next_button.style, {
                        display: 'block',
                    })
                    Object.assign(back_button.style, {
                        display: 'block',
                    })
                }
                video.src = videos_array[i];
            } else {
                button[j].classList.remove('changeColor');
            }
        }

    }

}

next_button.onclick = () => {
    if (count == videos_array.length - 1) {
        Object.assign(next_button.style, {
            display: 'none',
        })
        Object.assign(back_button.style, {
            display: 'block',
        })
    } 
    else 
    {
        button[count].classList.remove('changeColor');

        count++;

        button[count].classList.add('changeColor');
        Object.assign(back_button.style, {
            display: 'block',
        })
        video.src = videos_array[count];
    }
}

back_button.onclick = () => {
    if (count == 0) {
        Object.assign(back_button.style, {
            display: 'none',
        })
        Object.assign(next_button.style, {
            display: 'block',
        })
    } 
    else 
    {
        button[count].classList.remove('changeColor');
        count--;
        button[count].classList.add('changeColor');
        Object.assign(next_button.style, {
            display: 'block',
        })
        video.src = videos_array[count];
    }
}