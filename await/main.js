window.onload = function(){
    var imageDiv = document.querySelector('.imgDiv');
    async function insertImg(url){
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.onerror = function () {
                reject("Unavailable url: " + url);
            };
            img.src = url;
            imageDiv.append(img);
        });
    }
    async function load(url){
        try {
            await insertImg(url);
        } catch (error) {
            console.log("Oops. Error: ", error);
        }
    }
    load('../EEE/img/img1.jpg');
    load('../EEE/img/img2.jpg');
    load('../EEE/img/img3.jpg');
    load('../EEE/img/jihiuhu.jpg');
};