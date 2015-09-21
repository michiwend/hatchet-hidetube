function hidePlayer(){
    try {
        document.getElementById('hatchet-yt').style.visibility = "hidden";
    }
    catch(err) {
        return
    }
    console.log('YOUTUBE PLAYER HIDDEN');
    document.removeEventListener('DOMSubtreeModified', hidePlayer)
}

document.addEventListener('DOMSubtreeModified', hidePlayer);
