let block = document.querySelector(".block1")
let arr = [
    {
        img: "img/search.png",
        text1: "Find best doctor’s",
        text2: "Find your doctor easily with a minimum of effort. We've kept everything organised for you.",
    },
    {
        img: "img/calendar.png",
        text1: "Get Appointment",
        text2: "Ask for an appointment of the doctor quickly with almost a single click. We take care of the rest.",
    },
    {
        img: "img/online-healthcare-app.png",
        text1: "Happy Consultations",
        text2: "Do consultations and  take the service based on your appointment. Get back to good health",
    }
];
for (let items of arr) {
    let block1 = document.createElement("div");
    block1.innerHTML = `<img src=${items.img} /> <h3>${items.text1}</h3> <p>${items.text2}</p>`;
    console.log(items);
    block.append(block1);
}

//slider
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});
let slider = document.querySelector(".swiper-wrapper")
let slide = [
    {
        img: "img/vector(9).png",
        name: "Find best doctor’s",
        t: "Find your doctor easily with a minimum of effort. We've kept everything organised for you.",
    },
    {
        img: "img/Vector(10).png",
        name: "Get Appointment",
        t: "Ask for an appointment of the doctor quickly with almost a single click. We take care of the rest.",
    },
    {
        img: "img/Group21.png",
        name: "Happy Consultations",
        t: "Do consultations and  take the service based on your appointment. Get back to good health",
    },
    {
        img: "img/Vector(10).png",
        name: "Get Appointment",
        t: "Ask for an appointment of the doctor quickly with almost a single click. We take care of the rest.",
    },
    {
        img: "img/vector(9).png",
        name: "Find best doctor’s",
        t: "Find your doctor easily with a minimum of effort. We've kept everything organised for you.",
    },
    {
        img: "img/Group21.png",
        name: "Happy Consultations",
        t: "Do consultations and  take the service based on your appointment. Get back to good health",
    },

];
for (let sliders of slide) {
    let swiper1 = document.createElement("div");
    swiper1.innerHTML = `<img src=${sliders.img} /> <h3>${sliders.name}</h3> <p>${sliders.t}</p>`;
    console.log(sliders);
    slider.append(swiper1);
}


//
let block3 = document.querySelector(".block3-user")
let link = "https://reqres.in/api/users?page=2";
let a = new XMLHttpRequest();
a.open("GET", link);

a.onload = function () {
    if (a.readyState === 4 && a.status === 200) {
        let json = JSON.parse(a.response);
        console.log(a.response);
        let jsdata = json.data
        console.log(jsdata);
        for (let item of jsdata) {
            let x = document.createElement("div")
            x.innerHTML = ` <img src=${item.avatar} /> <h2>${item.first_name}</h2> <h3>${item.last_name}</h3> <span>${item.email}</span>   <p>${item.id}</p>`;
            block3.append(x);

        }
    } else {
        console.error(a.response);
    }

};

a.send();
let block4 = document.querySelector(".block4")
let btn1 = document.querySelector(".btnclick");
btn1.addEventListener("click", function () {
    let b = [
        {
            img: "img/doctor-DRJDAU51(1).png",
            name: "Dr Amanda Linda ",
            t: "Dentist Specilist",
        },
        {
            img: "img/doctor-DRJDAU51(2).png",
            name: "Dr. Khalid Abbed",
            t: "Cancer Specilist",
        },
        {
            img: "img/doctor-DRJDAU51(3).png",
            name: "Dr. Anthony Fauci",
            t: "Neurology Specilist",
        },
        {
            img: "img/doctor-DRJDAU51.png",
            name: "Dr. Alisa Rahman",
            t: "Carddiologist Specilist",
        },
    ];
    for (let i of b) {
        let m = document.createElement("div");
        m.innerHTML = `<img src=${i.img} /> <h3>${i.name}</h3> <p>${i.t}</p>`;
        console.log(i);
        block4.append(m);
    }
  });

//block5-user
let blockcard = document.querySelector(".block5-user")
let arrcard = [
    {
        img: "img/Imagehere2(1).png",
        name:"Alan Zara dilan",
        addres: "New York, America, USA",
        text2: "Telehealth is fueled by digital technologies and DocTime telemedicine app has brought a great revolution in medical services specially an overpopulated country where virtual chamber can create at anywhere thoughout country",
    },
    {
        img: "img/Imagehere2(2).png",
        name:"Alex Maxwell",
        addres: "San Francisco, USA",
        text2: "I visited my PCP for abdominal pain. My doctor told me that I need to see Gastroenterologist. Earlier I used to call multiple offices to schedule an appointment that suites my time.",
    },
    {
        img: "img/Imagehere2(3).png",
        name:"Dr. Tasnim zara",
        addres: "Los Angeles, USA",
        text2: "HealthCare is enlightens my superpower each and every time...! I find DocTime a brand-able telemedicine platform with virtual waiting room, video consultation, e-prescription, beautifully planned user interface.Thank you :)",
    }
];
for (let card of arrcard) {
    let block5 = document.createElement("div");
    block5.innerHTML = `<img src=${card.img} /> <h3>${card.name}</h3> <span>${card.addres}</span> <p>${card.text2}</p>`;
    console.log(card);
    blockcard.append(block5);
}