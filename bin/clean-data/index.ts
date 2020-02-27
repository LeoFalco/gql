import { cleanData } from "./clean-data";

cleanData().then(() => {

    console.log('ok')
    process.exit(0)
}).catch(err => {
    console.log(error)
    process.exit(1)
})