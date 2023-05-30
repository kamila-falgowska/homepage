{
    const welcome = () => {
        console.log("Cześć!");
    }
    
    const onChangeBackgroundClick = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".js-themeName");
        
        body.classList.toggle("body--beige");
        themeName.innerText = body.classList.contains("body--beige") ? "biały" : "beżowy";
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", onChangeBackgroundClick);

        welcome ();
    };

    init();
    
}