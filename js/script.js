const videoframediv = document.getElementById("videocontent");

// Fetch data from the API for Blogs
fetch("https://jh-fgnk.onrender.com/api/v1/blogs")
    .then((response) => response.json())
    .then((data) => {
        const fetchingData = data.blogsfinds;
        console.log(fetchingData);

        if (fetchingData.length > 0) {
            const firstItem = fetchingData[0]; // Access the first element

            // Create and populate the <iframe> for the YouTube video
            const videoIframe = document.createElement("iframe");
            videoIframe.width = "560";
            videoIframe.height = "500";
            videoIframe.src = `${fetchingData[0].url}?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&vq=hd1080`;
            videoIframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            videoIframe.loading = "lazy"; // Add lazy loading

            const div = document.createElement("div");
            div.classList.add("videoevent-div")
            // div.style.backgroundColor = "green"; // Set background color to transparent

            div.appendChild(videoIframe);
            videoframediv.appendChild(div);
        } else {
            console.log("No Data Found");
        }
    })
    .catch((error) => {
        console.log(error);
    });
