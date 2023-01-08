const { default: mongoose } = require("mongoose");
const Courses = require("../Models/Courses");
main().then(() => {
    console.log("Connected!!");
}).catch(err => {
    console.log(err)
});

async function main() {
    await mongoose.connect('mongodb://localhost:27017/careercounseling', { useNewUrlParser: true, useUnifiedTopology: true });
}

const courseData=[
    {
        "name":"Bachelor of Arts",
        "stream":"arts",
        "description":"Bachelor of Arts (BA) is a 3 years undergraduate degree course that focuses on various disciplines like English, History, Political Science, Geography etc.",
        "duration":"3"
      },
    {
        "name":"Bachelor of Technology",
        "stream":"science",
        "description":"Bachelor of Technology (BTech) is a professional undergraduate engineering degree programme awarded to candidates after they complete four years of study in the field.",
        "duration":"4"
      },
    {
        "name":"Bachelor of Medicine and Surgery",
        "stream":"science",
        "description":"MBBS or Bachelor of Medicine and Bachelor of Surgery is also described as BMBS, which is an abbreviation of the Latin word, Medicinae Baccalaureus Baccalaureus Chirurgiae.",
        "duration":"5"
      },
    {
        "name":"Bachelor of Commerce",
        "stream":"science",
        "description":"BCom or Bachelor of Commerce course is a three-year UG degree course recognised by the Universities Grants Commission (UGC). Along with the full-time delivery mode, one can also pursue Distance BCom or Online BCom course.",
        "duration":"3"
      },
    {
        "name":"Bachelor of Arts",
        "stream":"arts",
        "description":"Bachelor of Arts also known as BA is a three years undergraduate programme. Aspirants who have passed 10+2 in any stream can take admission in this course. There are various BA specializations such as English, History, Hindi, Sociology, Political Science, Urdu, Economics, Tamil, Odia.",
        "duration":"3"
      },
    {
        "name":"Bachelor of Education",
        "stream":"arts",
        "description":"B.Ed full form is Bachelor of Education, it is a 2 year undergraduate program that is done after graduation. It prepares students for a career in education. Students with a Bachelor of Education (B.Ed.) can advance in a lucrative career as a teacher, school counsellor, or school administrator.",
        "duration":"2"
      },
]

const uploadCourses=async()=>{
    await Courses.deleteMany({});

   await Courses.insertMany(courseData);
    console.log("uploaded")
}

uploadCourses().then(()=>{
    mongoose.connection.close();
});