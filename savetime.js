const express = require('express')
const app = express()

const PORT = 3000
app.listen(PORT, () => console.log(' listening at https://duyminh-bostrap.github.io/ '))

app.use(express.static('public'))
    
const fs = require('fs')

const saveData = (data, file) =>{
    const finished = (error) =>{

        if(error){
            console.error(error)
            return;
        }

    const jsonData = JSON.stringify(data, null, 2)
    fs.writeFile(file, jsonData, finished)
    }
}

saveData()