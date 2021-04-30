const family = [
    { member: 'mother', id: 1, coffee: 'Latte' },
    { member: 'father', id: 2, coffee: 'Espresso' },
    { member: 'son', id: 3, coffee: 'Cortado' }
]

const getCoffee = (member) => {
    const coffeePromise = fetch('https://api.sampleapis.com/coffee/hot');
    return coffeePromise
        .then(data => data.json())
        .then(list => {
            const coffee = list.find(res => res.title === member.coffee);
            return {
                ...member, coffee
            }
        })
}

const getFamilyMember = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const member = family.find(res => res.id === id);
            if (member) {
                resolve(member);
            } else {
                reject(Error('Член семьи не найден'))
            }
        }, 1500)
    })
}

getFamilyMember(4)
    .then(data => getCoffee(data))
    .then(newMember => console.log(newMember))
    .catch(err => console.log(err))