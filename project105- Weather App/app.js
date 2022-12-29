const containerEl = document.querySelector(".container");
const detailsContainerEl = document.querySelector(".details-container");
const frontContainerEl = document.querySelector(".front-container");
const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const errorEl = document.querySelector("#error");
const arrowEl = document.querySelector(".arrow");

inputEl.addEventListener("keydown", (e) => {
    if (e.key == "Enter" && inputEl.value !== "") {
        requestApi(inputEl.value)
    }
})

function requestApi(city) {
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=571019376aa5e43c95907cb790330875`;
    fetchData();
}

function fetchData() {
    errorEl.textContent = "Getting weather details..."
    fetch(api).then((response) => (response.json())).then(result => weatherDetails(result));
}

function weatherDetails(infoEl) {
    console.log(infoEl)
    if (infoEl.cod == "404") {
        errorEl.textContent = `"${inputEl.value}" isn't valid city name`
    } else {
        const cityEl = document.getElementById("city").textContent = infoEl.name;
        const feelslikeEl = document.getElementById("feels-like").textContent = infoEl.main.feels_like;
        const humidityEl = document.getElementById("humidity").textContent = infoEl.main.humidity;
        const tempEl = document.getElementById("temp").textContent = infoEl.main.temp;
        const weatherEl = document.getElementById("weather").textContent = infoEl.weather[0].main;
        const imageEl = document.querySelector("img");
        const { id } = infoEl.weather[0];
        containerEl.classList.add("active")
        detailsContainerEl.classList.remove("deactive")
        frontContainerEl.classList.add("deactive")

        if (id == 800) {
            imageEl.src = "./Clear.svg";
        } else if (id >= 200 && id <= 232) {
            imageEl.src = "./Storm.svg";
        } else if (id >= 600 && id <= 622) {
            imageEl.src = "./Snow.svg";
        } else if (id >= 701 && id <= 781) {
            imageEl.src = "./Haze.svg";
        } else if (id >= 801 && id <= 804) {
            imageEl.src = "./Cloud.svg";
        } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
            imageEl.src = "./Rain.svg";
        }
    }
};

function onSuccess(location) {
    const { latitude, longitude } = location.coords;
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid={571019376aa5e43c95907cb790330875}`
};

function onError(error) {
    errorEl.textContent = error.message
};

buttonEl.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
        alert("Your browser not support geolocation api");
    }
});

arrowEl.addEventListener("click", () => {
    containerEl.classList.remove("active")
    detailsContainerEl.classList.add("deactive")
    frontContainerEl.classList.remove("deactive")
    inputEl.value = "";
})