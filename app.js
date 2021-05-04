console.log('Request data...')

const a = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data...')
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        reject(backendData)
    }, 2000)
})

a.then(data => {
    return b = new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 2000)
    })
})
    .then(clientData => {
        clientData.fromPromise = true
        return clientData
    })
    .then(data => {
        console.log('Modified', data)
    })
    .catch(err => console.log('Error: ', err))
    .finally(() => console.log('Finally!'))