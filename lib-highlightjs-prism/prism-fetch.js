const fileNames = ["1.cs"];

fileNames.forEach(fileName => {
    fetch(fileName)
        .then(response => response.text())
        .then(code => {
            const codeContainer = document.getElementById(`cs${fileName.charAt(0)}`);
            codeContainer.textContent = code;
            Prism.highlightElement(codeContainer);
        });
});