// sequential case statements

function scoreRemarks(score) {
    let  remark = null;
    switch(score){
        case 10:
        case 20:
        case 30:
            remark = "Low"
            break
        case 40:
        case 50:
        case 60:
            remark = "Mid"
            break
        case 70:
        case 80:
        case 90:
            remark = "High"
            break
            default :
            remark = `This is default ${score}`
    }
    return remark
}
console.log(scoreRemarks(20));

let myObject = {
    name: "Flacko",
    age: 26,
    toDo: {
        code: "Job/Intern",
        personal: "Go to Oda after NSS, get the job/internship before"
    },
    skills: ["Frontend", "Backend", "Fullstack"]
}

console.log(myObject.skills[0])
console.log(myObject.toDo.code)
console.log(myObject.toDo.personal)
console.log(myObject["age"])

myObject.folk = {
    grandma: "Quaye",
    pops: "CN",
    moms: "Baby Ama"
}
myObject.folkAges = [66, 62, 45]

delete myObject.folkAges

console.log(myObject);

const myMusic = [
    {
        artist: "kendrick",
        albumTitle: "Damn",
        releaseYear: 2018,
        genre: "Hip Pop",
        formats: [
            "CD",
            "Streaming"
        ],
        gold : true
    }
]

console.log(myMusic[0].formats[0]);

myMusic.push({
    artist: "Drake",
    title: "Controller",
})

console.log(myMusic);