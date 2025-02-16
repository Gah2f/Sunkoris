const testimonials = [
    {
        name: "Alemu T.",
        location: "Bahir Dar, Ethiopia",
        rating: 4.5,
        comment: "Sunkoris transformed my learning journey! The courses are well-structured and easy to follow.",
        image: "./imgs/user.png"
    },
    {
        name: "Yessica Christy",
        location: "Shanxi, China",
        rating: 4.5,
        comment: "The interactive content and mentorship helped me gain real skills. Highly recommend!",
        image: "./imgs/user1.png"
    },
    {
        name: "Kim Young Jou",
        location: "Seoul, South Korea",
        rating: 4.5,
        comment: "Being able to learn at my own pace from anywhere in the world is a game-changer!",
        image: "./imgs/user2.png"
    },
    {
        name: "Michael Chen",
        location: "Singapore",
        rating: 5.0,
        comment: "I finally found an e-learning platform that provides structured and engaging lessons!",
        image: "./imgs/user3.png"
    },
    {
        name: "Sarah Williams",
        location: "London, UK",
        rating: 4.8,
        comment: "The mentorship and community support made a huge difference in my learning experience.",
        image: "./imgs/user4.jpeg"
    },
    {
        name: "Alex Rodriguez",
        location: "Madrid, Spain",
        rating: 4.7,
        comment: "I love the personalized learning paths! They keep me motivated and focused on my goals.",
        image: "./imgs/user5.jpeg"
    },
    {
        name: "Emma Thompson",
        location: "Sydney, Australia",
        rating: 4.9,
        comment: "The quizzes and assessments are super helpful in reinforcing what I’ve learned.",
        image: "./imgs/user6.jpeg"
    }
   
];

const swiper = new Swiper('.testimonialSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true, 
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
        
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
       
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});


function generateTestimonials() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    
    testimonials.forEach(testimonial => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        
        slide.innerHTML = `
            <div class="p-8 border-2 border-gray-200 rounded-2xl hover:border-red-500 transition-all">
                <div class="flex items-center justify-between mb-8">
                    <div class="flex items-center gap-4">
                        <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full">
                        <div>
                            <h4 class="font-medium text-lg">${testimonial.name}</h4>
                            <p class="text-gray-400">${testimonial.location}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="font-medium">${testimonial.rating}</span>
                        <img src="./imgs/star.png" alt="star" class="w-4 h-4">
                    </div>
                </div>
                <p class="text-gray-600">"${testimonial.comment}"</p>
            </div>
        `;
        
        swiperWrapper.appendChild(slide);
    });
}


document.addEventListener('DOMContentLoaded', generateTestimonials);