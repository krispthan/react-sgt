export function randomString(length = 8){
    const characters = "aAbBcBcDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789";
    let output = " ";
     for (let i = 0 ; i < length; i++){
         const randomizeIndex = Math.floor(Math.random() * characters.length);
         output += characters[randomizeIndex];
     }

    return output; 
}

export function formatPostData(data){
    const urlParams = new URLSearchParams();
    for (let [key, value] of Object.entries(data)){
            urlParams.append(key,value);
    }
    return urlParams;
}