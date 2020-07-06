const initialData = {
    Geography:{
        title:'Geography',
        questions :[
            {
                question:'is SA is a Country',
                answer:'No, its just a region',
                correctanswer: 'false'
            },
            {
                question:'Which US state is next to California:',
                answer:'New York',
                correctanswer: 'false' 
            }
        ]
    },
   JavaScript :{
        title:'JavaScript',
        questions :[
            {
                question:'What is Closure?',
                answer:'The combination of a function and the lexical environment within which that function was declared',
                correctanswer: 'true'
            },
            {
                question:'What is Variable?',
                answer:'Something that stores information',
                correctanswer: 'true' 
            }
        ]
    }
}

export const getData = () => {
    return initialData
}