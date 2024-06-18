document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get("username");

    const text = `I see the player you mean.
    Congratulations, dear ${username}! You've reached a higher level now, soaring towards new horizons. Just like the player in the game, you've shown resilience and determination, never giving up on your dreams.

As we celebrate this milestone, let us reflect on the power of imagination. Your thoughts have become words on a screen, shaping the reality you wish to create. In this journey of education, words have served as a wonderful interface, flexible and captivating.

Now, you've proven that education knows no bounds, transcending the limits of perception.

As you embark on future adventures, remember that life is filled with infinite possibilities. Keep pushing boundaries, exploring new realms of knowledge, and never stop dreaming.

Congratulations once again, ${username}! May your graduation be a testament to your extraordinary abilities and the beginning of a remarkable journey filled with success and fulfillment.`;

    const usernameDisplay = document.getElementById("usernameDisplay");
    usernameDisplay.innerHTML = text.replace(/\n/g, "<br/>");
});

function storeName() {
    let flag = true;
    let username = document.getElementById("name").value.trim();
    if (username === "") {
        alert("Invalid name");
        flag = false;
    }
    if (flag === true) {
        const encodedUsername = encodeURIComponent(username);
        window.location.href = `speech.html?username=${encodedUsername}`;
    }
    return false; // Prevent form submission
}

function speechPage(flag) {
    if (flag === true) {
        const username = document.getElementById("name").value;
        window.location.href = `speech.html?username=${encodeURIComponent(username)}`;
    }
}