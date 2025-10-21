const profilePicInput = document.getElementById('profile-pic-input');
const profilePicImg = document.getElementById('profile-pic');

profilePicInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader()

    reader.onload = () => {
        profilePicImg.src = reader.result;
    };

    reader.readAsDataURL(file);
});



// const updateTime = () => setInterval(showTime, 5000);

function showTime() {
    let Time = Date.now();
    document.getElementById("display-current-time").innerText = `Current Time: ${Time}`;
    // updateTime();
}

showTime();



