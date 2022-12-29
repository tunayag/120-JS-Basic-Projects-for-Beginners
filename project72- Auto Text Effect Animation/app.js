const containerEl = document.querySelector(".container");

let characterIdx = 0;
let careerIdx = 0;
updateJob();

function updateJob() {

    characterIdx++
    const jobs = ["mechanical engineer", "freelancer", "personal trainer"]
    const randomNum = Math.floor(Math.random() * jobs.length);
    const jobText = jobs[randomNum];

    containerEl.innerHTML = `<h1>I am a ${jobs[careerIdx].slice(0, characterIdx)}</h1>`

    if (characterIdx === jobs[careerIdx].length) {
        characterIdx = 0
        careerIdx++
    }

    setTimeout(updateJob, 100)

    if (careerIdx === jobs.length) {
        careerIdx = 0
    }
}

/* WITH WEIRD WAY :)

const containerEl = document.querySelector(".container");

let characterIdx = 0;

function updateJob() {

    const jobs = ["mechanical engineer", "freelancer", "personal trainer"]
    const randomNum = Math.floor(Math.random() * jobs.length);
    const jobText = jobs[randomNum];

    containerEl.innerHTML = `<h1>I am a ${jobText.slice(0, characterIdx)}</h1>`

    if (characterIdx === jobText.length) {
        characterIdx = 0
    }

    characterIdx++;

    setTimeout(updateJob, 250)


}
updateJob(); */