const { default: mongoose } = require("mongoose");
const Professions = require("../Models/Professions");

main().then(() => {
    console.log("Connected!!");
}).catch(err => {
    console.log(err)
});

async function main() {
    await mongoose.connect('mongodb://localhost:27017/careercounseling', { useNewUrlParser: true, useUnifiedTopology: true });
}

const professionData=[
    {
        "name":"Software Engineer",
        "img_url":"https://media.istockphoto.com/id/1139938843/photo/programmer-controlling-the-statistics-of-the-site.jpg?b=1&s=612x612&w=0&k=20&c=Kc1UxC8rekuPauQk0D_Q1DkIeYwU73j4IaKcEHc_iQ4=",
        "description":"Software engineers design and develop computer programs and applications. Strong demand for skilled software engineers means that professionals can pursue many employment options in various industries.",
        "stream":"science"
      },
    {
        "name":"Doctor",
        "img_url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlyNddILqLUVDyjXHUxOvBPRdoY6-p9ahBsw&usqp=CAU",
        "description":"A doctor is a professional physician who seeks out various methods and implements them to restore the health of patients. It involves providing surgical, medicinal and therapeutic care to patients.",
        "stream":"science"
      },
    {
        "name":"Chartered Accountancy",
        "img_url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHasXNmGcVOeJ51f4jpG1PU-_A6SNbrKRqCg&usqp=CAU",
        "description":"Chartered Accountancy is a professional practice of accounting, auditing, taxation, and financial assessment for an individual or an organisation. Chartered Accountant is a designation given to an accounting professional who has received certification from a statutory body that he/she is qualified to take care of the matters related to accounting and taxation of a business enterprise.",
        "stream":"commerce"
      },
    {
        "name":"Archeologist",
        "img_url":"https://scx2.b-cdn.net/gfx/news/2021/chan-chan-was-a-citade.jpg",
        "description":"They research the invention of the first stone tool to the invention of wheels. In the career as archeologist, one needs to find and analyse objects and structures to inform our understanding of past economic, social, political, and intellectual life. Mostly excavators analyse or plan for research projects to answer questions and test hypotheses about past cultures. ",
        "stream":"arts"
      },
]


const uploadProfession=async()=>{
    await Professions.deleteMany({});

   await Professions.insertMany(professionData);
    console.log("uploaded")
}

uploadProfession().then(()=>{
    mongoose.connection.close();
});