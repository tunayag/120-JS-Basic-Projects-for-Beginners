const testimonials = [
    {
        name: "TUNAHAN TATAR",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero ex, laudantium eum cumque sint",

        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },

    {
        name: "ZEYNEP TATAR",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero ex, laudantium eum cumque",

        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },

    {
        name: "ADEM TATAR",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero ex, laudantium eum cumque sint sunt",

        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

    },
]



const imageEl = document.querySelector(".image-container");
const textEl = document.querySelector(".user-text");
const nameEl = document.querySelector(".user-name");
let idx = 0;

updateTestimonial()

function updateTestimonial() {
    const { name, text, imageUrl } = testimonials[idx]
    imageEl.src = imageUrl;
    textEl.textContent = text;
    nameEl.textContent = name;
    idx++;

    if (idx === testimonials.length) {
        idx = 0
    }

    setTimeout(() => {
        updateTestimonial()
    }, 1000);
}