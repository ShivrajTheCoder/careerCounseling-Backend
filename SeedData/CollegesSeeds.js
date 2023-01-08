const { default: mongoose } = require("mongoose");
const Colleges = require("../Models/Colleges");

main().then(() => {
    console.log("Connected!!");
}).catch(err => {
    console.log(err)
});

async function main() {
    await mongoose.connect('mongodb://localhost:27017/careercounseling', { useNewUrlParser: true, useUnifiedTopology: true });
}

const collegeData = [
    {
        "name": "Graphic Era",
        "type": "Private",
        "description": "The Graphic Era Educational Society (GEES), established in 1993, is a non-profit organization that aims to mobilize world-class education and generate resources for providing and supporting quality education for all. The society recognizes the right of every individual to lead a life of dignity and self-respect in a just and equitable manner. Initially, Graphic Era Educational Society inaugurated its operations as Graphic Era Institute of Technology, which achieved the distinction of being the first self- financed educational institute in North India, offering engineering courses. The Institute was the culmination of the dream of its visionary founder, Prof. (Dr) Kamal Ghanshala, to change the destiny of thousands of youth by providing an excellent and holistic professional education. He had visualized an educational hub that would cater to the academic aspirations of innumerable young men and women and his vision took a concrete shape in the form of Graphic Era Institute.",
        "location": "Dehradun",
        "official_site":"https://www.geu.ac.in/content/geu/en.html",
        "coursesOffered": ["63ba2ab29d8cec43795bb38b", "63ba2ab29d8cec43795bb38c",
            "63ba2ab29d8cec43795bb38d", "63ba2ab29d8cec43795bb38e", "63ba2ab29d8cec43795bb38f"]
    },
    {
        "name": "Dehradun Institute of Technology",
        "type": "Private",
        "description": "DIT University was founded by Naveen Agarwal in 1998. In 2012, UGC conferred the Autonomous Status to DIT, further in 2013 the Uttarakhand State Government declared DIT as DIT University. DIT University has been established by Govt. of Uttarakhand vide Act No.10 of 2013 dated 15 February 2013 and is recognised by the UGC[4] under section 2(F) of the UGC Act, 1956. DIT University's campus is located on the foothills of Mussoorie. Dehradun is located 240 kilometres north-east of Delhi. The area of the campus is 25 acres out of which 23 acres is developed, the prominent buildings are Vedanta, Chanakya and Civil block. There is a 2 acre ground available for students, parking, and other facilities are also a available in DIT.",
        "location": "Dehradun",
        "official_site":"https://www.dituniversity.edu.in/",
        "coursesOffered": ["63ba2ab29d8cec43795bb38b", "63ba2ab29d8cec43795bb38c", "63ba2ab29d8cec43795bb38e", "63ba2ab29d8cec43795bb38f"]
    },
    {
        "name": "Delhi Technological University",
        "type": "Private",
        "description": "Formerly known as Delhi College of Engineering, Delhi Technological University (DTU) was established in 1941. The university is accredited by the NAAC with “A” grade and is also approved by the University Grant Commission (UGC). DTU ranked 36 for ‘Engineering’, 42 for ‘University’ and 54 for ‘Overall’ category by the NIRF 2021. DTU is counted amongst the oldest Engineering colleges in India. DTU currently offers more than 80 courses via its 17 departments. Out of these departments, University School of Management and Entrepreneurship (USME) was established recently and is also known as the DTU East Delhi Campus. Additionally, DTU formed Delhi School of Management (DSM) as a department under it to offer courses in the field of Management. All the UG, PG and doctoral programmes available in the field of Engineering, Design, Science and Management, among others, are offered together via DTU’s main campus, DSM and University School of Management & Entrepreneurship (USME).",
        "location": "Delhi",
        "official_site":"http://dtu.ac.in/",
        "coursesOffered": ["63ba2ab29d8cec43795bb38b", "63ba2ab29d8cec43795bb38c", "63ba2ab29d8cec43795bb38e"]
    },
    {
        "name": "IIT Bombay",
        "type": "Public",
        "description": "IIT Bombay was founded in 1958.[11] In 1961, the Parliament decreed IITs as Institutes of National Importance.[12] A committee formed by the Government of India recommended the establishment of four higher institutes of technology to set the direction for the development of technical education in the country in 1946. Planning began in 1957 and the first batch of 100 students was admitted in 1958.[12] Since its establishment in Powai, the institute has physically expanded to include more than 584 major buildings with a combined area of more than 2.2 square kilometers. ",
        "official_site":"https://www.iitb.ac.in/",
        "location": "Mumbai",
        "coursesOffered": ["63ba2ab29d8cec43795bb38c"]
    },
    {
        "name": "IIT Kharagpur",
        "type": "Public",
        "description": "Indian Institute of Technology Kharagpur (IIT Kharagpur) is a public institute of technology established by the Government of India in Kharagpur, West Bengal, India. Established in 1951, the institute is the first of the IITs to be established and is recognised as an Institute of National Importance. In 2019 it was awarded the status of Institute of Eminence by the Government of India.The institute was initially established to train engineers after India attained independence in 1947. However, over the years, the institute's academic capabilities diversified with offerings in management, law, architecture, humanities, etc. IIT Kharagpur has an 8.7-square-kilometre (2,100-acre) campus and has about 22,000 residents.",
        "location": "Kharagpur",
        "official_site":"http://www.iitkgp.ac.in/",
        "coursesOffered": ["63ba2ab29d8cec43795bb38c"]
    },
    {
        "name": "Doon Medical College",
        "type": "Public",
        "description": "Doon Medical College Dehradun is popular and is also famous as DMC Dehradun. Doon Medical College Dehradun was established in the year 2016. Doon Medical College Dehradun is affiliated with the H. N. B. Uttarakhand Medical Education University and approved by the National Medical Commission (NMC). The college has become synonymous with one of the Best Ayurvedic Colleges in Uttarakhand.",
        "location": "Dehradun",
        "official_site":"https://gdmcuk.com/",
        "coursesOffered": ["63ba2ab29d8cec43795bb38d"]
    },
]

const uploadColleges=async()=>{
    await Colleges.deleteMany({});

   await Colleges.insertMany(collegeData);
    console.log("uploaded")
}

uploadColleges().then(()=>{
    mongoose.connection.close();
});