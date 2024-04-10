function fetchUserData(userId: number): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 42) {
                resolve('User: Madhukar');
            } else {
                reject(new Error('User not found'));
            }
        }, 5000);
    });
}


const userIdToFetch = 4; 
fetchUserData(userIdToFetch)
    .then((userData) => {
        console.log(`User data received: ${userData}`);
    })
    .catch((error) => {
        console.error(`Error fetching user data: ${error.message}`);
    });
