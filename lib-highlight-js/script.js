fetch("1.cs")
    .then(response => response.text())
    .then(code => {
        const codeContainer = document.getElementById("code-container1");
        codeContainer.textContent = code;
    });

fetch("2.cs")
    .then(response => response.text())
    .then(code => {
        const codeContainer = document.getElementById("code-container2");
        codeContainer.textContent = code;
        hljs.highlightAll();
    });