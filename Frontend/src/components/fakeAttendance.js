
export const attendance  = {
    labels:[
        "January",
        "February",
        "March",
        "April",
        "May"
    ],
    datasets:[{
        label:"Attendance",
        data: [100,84,85,83,87],
        borderColor:"#90323D",
    }]
}

export const marks = {
    labels:[
        "subject1",
        "subject2",
        "subject3",
        "subject4",
        "subject5",
        "subject6",
    ],
    datasets:[
        {
            label:"Marks",
            data:[90,70,85,87,78,94],
            backgroundColor:["#90323D"],
            borderWidth:1
        }
    ]
}

export const subjectWiseMarks = {
    labels:[],
    datasets:[
        {
            label:"Subject Name",
            data:[70,(100-70)],
            backgroundColor:[
                "#90323D",
                "#D9CAB3"
            ]
        }
    ]
}