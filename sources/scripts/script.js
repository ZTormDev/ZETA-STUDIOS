const logo = document.querySelector(".logo");

logo.addEventListener("click", function()
{
    window.location.href = "/";
})

const voxelandlogo = document.querySelector(".voxeland-logo");

voxelandlogo.addEventListener("click", function()
{
    var userLang = navigator.language || navigator.userLanguage;

    if (userLang.includes("es")) {
        window.location.href = '/es/games/voxeland';
    }
    else if (userLang.includes("en")) {
        window.location.href = '/en/games/voxeland';
    }
    else {
        window.location.href = '/en/games/voxeland';
    }
})


function viewTrailer()
{
    const trailer = document.querySelector('.youtube-trailer');
    const videoTrailer = document.querySelector('.video-trailer');

    trailer.style.display = "flex";
    videoTrailer.src = "https://www.youtube.com/embed/xXyBVbryR9M?autoplay=1";

}

function quitTrailer()
{
    const trailer = document.querySelector('.youtube-trailer');
    const videoTrailer = document.querySelector('.video-trailer');

    trailer.style.display = "none";
    videoTrailer.src = "https://www.youtube.com/embed/xXyBVbryR9M?autoplay=0";

}


const gameinfoTab = document.querySelector(".gameinfo-tab");
const supportTab = document.querySelector(".support-tab");
const socialmediaTab = document.querySelector(".socialmedia-tab");

const gameinfoDropdown = document.querySelector(".gameinfo-dropdown");
const supportDropdown = document.querySelector(".support-dropdown");
const socialmediaDropdown = document.querySelector(".socialmedia-dropdown");

isActiveInfo = false;
isActiveSupport = false;
isActiveSocial = false;

gameinfoTab.addEventListener('click', function () {
    

    if (isActiveInfo == false)
    {
        gameinfoDropdown.style.display = "flex";
        supportDropdown.style.display = "none";
        socialmediaDropdown.style.display = "none";
        isActiveSocial = false
        isActiveSupport = false
    }
    if (isActiveInfo == true)
    {
        gameinfoDropdown.style.display = "none";
        
    }

    isActiveInfo = !isActiveInfo

});

supportTab.addEventListener('click', function () {
    

    if (isActiveSupport == false)
    {
        supportDropdown.style.display = "flex";
        gameinfoDropdown.style.display = "none";
        socialmediaDropdown.style.display = "none";
        isActiveInfo = false
        isActiveSocial = false
    }
    if (isActiveSupport == true)
    {
        supportDropdown.style.display = "none";
        
    }

    isActiveSupport = !isActiveSupport

});

socialmediaTab.addEventListener('click', function () {
    

    if (isActiveSocial == false)
    {
        socialmediaDropdown.style.display = "flex";
        gameinfoDropdown.style.display = "none";
        supportDropdown.style.display = "none";
        isActiveSupport = false
        isActiveInfo = false
    }
    if (isActiveSocial == true)
    {
        socialmediaDropdown.style.display = "none";
        
    }

    isActiveSocial = !isActiveSocial

});

const closeTab = document.querySelector(".close-tab-mobile");
const mobileTab = document.querySelector(".tab-mobile");
const openTab = document.querySelector(".open-tab-mobile");

const openGameInfo = document.querySelector(".li-expand-gameInfo");
const openSupport = document.querySelector(".li-expand-support");
const openSocialMedia = document.querySelector(".li-expand-socialMedia");

const gameInfoExpand = document.querySelector(".gameInfo-expand");
const supportExpand = document.querySelector(".support-expand");
const socialMediaExpand = document.querySelector(".socialMedia-expand");

infoExpandBool = false
supportExpandBool = false
socialMediaExpandBool = false

closeTab.addEventListener("click", function() {

    mobileTab.style.transform = "translateX(100%)";

});

openTab.addEventListener("click", function() {

    mobileTab.style.transform = "translateX(0)";

});




openGameInfo.addEventListener("click", function() {

    if(infoExpandBool == true)
    {
        gameInfoExpand.style.display = "none"
    }
    if(infoExpandBool == false)
    {
        gameInfoExpand.style.display = "flex";
    }

    infoExpandBool = !infoExpandBool;
});

openSupport.addEventListener("click", function() {

    if(supportExpandBool == true)
    {
        supportExpand.style.display = "none"
    }
    if(supportExpandBool == false)
    {
        supportExpand.style.display = "flex";
    }

    supportExpandBool = !supportExpandBool;
});

openSocialMedia.addEventListener("click", function() {

    if(socialMediaExpandBool == true)
    {
        socialMediaExpand.style.display = "none"
    }
    if(socialMediaExpandBool == false)
    {
        socialMediaExpand.style.display = "flex";
    }

    socialMediaExpandBool = !socialMediaExpandBool;
});

function visitVoxeland() {
    window.location.href = "/en/games/voxeland";
}

function visitBloodletting() {
    window.location.href = "/en/games/bloodletting";
}

function visitSixtyseconds() {
    window.location.href = "/en/games/60-seconds";
}