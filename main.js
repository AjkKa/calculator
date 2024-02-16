const display = document.querySelector("#result-value");
const keys = document.querySelectorAll("button");

keys.forEach(item => {
    item.addEventListener('click', function () {
        const inputValue = this.innerText;

        if (inputValue === "C") {
            display.innerText = "";
        }else if (inputValue === "Del") {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length -1);
        }else if (inputValue === "=") {
            let expression = display.innerText.trim();
            if (expression !== "") {
                let result = eval(expression);
                if (result !== undefined && isFinite(result)) {
                    display.innerText = result;
                }else{
                    display.innerText = "Tak Terhingga";
                }
            }
        }else{
            display.innerText += inputValue;
        }
    });
});