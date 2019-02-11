export function randomString(length = 8){
    const characters = "aAbBcBcDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789";
    let output = " ";
     for (let i = 0 ; i < length; i++){
         const randomizeIndex = Math.floor(Math.random() * characters.length);
         output += characters[randomizeIndex];
     }

    return output; 
}