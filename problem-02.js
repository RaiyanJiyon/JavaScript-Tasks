function sendNotification(email) {
    if (!email.includes('@')) {
        return 'Invalid Email'
    }
    const [emailName, domainName] = email.split('@');
    return `${emailName} sent you an email from ${domainName}`;
};

console.log(sendNotification('zihad@gmail.com'));
console.log(sendNotification('farhan34@yahoo.com'));
console.log(sendNotification('nadim.naem5@outlook.com'));
console.log(sendNotification('fahim234.hotmail.com'));
console.log(sendNotification('sadia8icloud.com'));