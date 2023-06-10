fetch("1.cs")
    .then(response => response.text())
    .then(code => {
        const codeContainer = document.getElementById("cs1");
        codeContainer.textContent = code;
        hljs.highlightElement(codeContainer);
    });