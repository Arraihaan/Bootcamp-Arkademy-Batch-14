const Biodata = (name, age) => {
    return {
        name: name,
        age: age,
        address: 'Jl. Jati Kusuma No 03 RT 01 RW 13, Klampok, Banjarnegara, Jawa Tengah',
        hobbies: [
            'Ngegame',
            'Ngoding',
            'Nguli Desain'
        ],
        is_married: false,
        list_school: [{
                name: 'SMKN 1 Bawang',
                year_in: 2017,
                year_out: 2020,
                major: 'Software Enginerring'
            }
        ],
        skills: [{
                skill_name: 'Android Development',
                level: 'Intermediate'
            },
            {
                skill_name: 'UI/UX Design',
                level: 'Intermediate'
            }
        ],
        interest_in_coding: true
    }
}

const getMyBiodata = Biodata('Hermawan Genta Arraihaan', 17)
console.log(getMyBiodata);