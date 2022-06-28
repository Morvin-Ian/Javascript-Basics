import { details } from "./db.js"

details.forEach(detail => {
    console.log(detail);
})


const filtered_dets = details.filter(det => {
    return det.userId == 1;
}) 
console.log(filtered_dets);


const mapped_det = details.map(det =>{
    return det.id;
})
console.log(mapped_det)

const redeuced_det = mapped_det.reduce((sum, det) => {
    return sum + det;
})
console.log(redeuced_det);