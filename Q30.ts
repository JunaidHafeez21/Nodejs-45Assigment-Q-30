//30.Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?


let employes: string[] =["admin", "junaid hafeez", "sharukh hafeez", "nabeel hafeez", "hasnain raza"];
for(let i=0; i<employes.length; i++){
    if(employes[i] == "admin"){
        console.log("Hello admin, would you like to see a status report?")
    }
    else{
        console.log(`Hello ${employes[i]}`)
    }
}