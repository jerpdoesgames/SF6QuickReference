const streamElementContents = `
    <iframe id="twitchPlayer"
    src="https://player.twitch.tv/?channel=jerp&muted=true&parent=jerp.tv"

    allowfullscreen>
    </iframe>
    <p>Leaving this stream open helps support Jerp, but you can <a href="#" onclick="headerStreamClose();" id="headerStreamClose" title="Clicking this hides the embed for Jerp's stream (and will save this setting for future sessions)">close it</a> if you'd like.</p>
`;

let headerClosed = localStorage.getItem("jerpHeaderStreamClosed");

function headerStreamOpen()
{
    headerClosed = 0;
    localStorage.setItem("jerpHeaderStreamClosed", "0");
    updateHeaderVis();
}

function headerStreamClose()
{
    headerClosed = 1;
    localStorage.setItem("jerpHeaderStreamClosed", "1");
    updateHeaderVis();
}

function updateHeaderVis()
{
    let headerStream = document.getElementById("headerStream");
    let headerStreamOpen = document.getElementById("headerStreamOpen");
    if (headerClosed === null || headerClosed == "0")
    {
        headerStream.style.display = "flex";
        headerStreamOpen.style.display = "none";
        headerStream.innerHTML = streamElementContents;
    }
    else
    {
        headerStream.style.display = "none";
        headerStreamOpen.style.display = "block";
        headerStream.innerHTML = "";
    }
}

function initializeHeaderStream()
{
    updateHeaderVis();
}