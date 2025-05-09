function automailer(to){
    return function(sub){
        return function(msg){
            return to + sub + msg;
        }
    }
}
let email = automailer("abc@xyz.com ")("subject title ")("message body");
console.log(email);
