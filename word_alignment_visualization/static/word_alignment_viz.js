function show_word_alignments(element, originalSentence, translationSentence, alignments) {
    // Create the alignmentWidget container
    const alignmentWidgetDiv = document.createElement("div");
    alignmentWidgetDiv.className = "alignmentWidget";

    // Create the originalSentence container
    const originalSentenceDiv = document.createElement("div");
    originalSentenceDiv.className = "sentence originalSentence";

    // Create the translationSentence container
    const translationSentenceDiv = document.createElement("div");
    translationSentenceDiv.className = "sentence";

    // Create the SVG element for alignment lines
    const alignmentLinesSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    // alignmentLinesSvg.className = "alignmentLines";
    alignmentLinesSvg.setAttribute('class', 'alignmentLines');

    // Append the sub-elements to the alignmentWidget container
    alignmentWidgetDiv.appendChild(originalSentenceDiv);
    alignmentWidgetDiv.appendChild(translationSentenceDiv);
    alignmentWidgetDiv.appendChild(alignmentLinesSvg);

    // Append the alignmentWidget container to the main element
    element.appendChild(alignmentWidgetDiv);

    // Populate original sentence
    originalSentence.forEach(word => {
        const wordBox = document.createElement("div");
        wordBox.className = "word";
        wordBox.textContent = word;
        originalSentenceDiv.appendChild(wordBox);
    });

    // Populate translation sentence
    translationSentence.forEach(word => {
        const wordBox = document.createElement("div");
        wordBox.className = "word";
        wordBox.textContent = word;
        translationSentenceDiv.appendChild(wordBox);
    });

    // Draw lines for word alignment based on alignments list
    alignments.forEach(([srcIndex, tgtIndex]) => {
        const originalWordBox = originalSentenceDiv.children[srcIndex];
        const translationWordBox = translationSentenceDiv.children[tgtIndex];

        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", originalWordBox.offsetLeft + originalWordBox.offsetWidth / 2);
        line.setAttribute("y1", originalWordBox.offsetTop + originalWordBox.offsetHeight);
        line.setAttribute("x2", translationWordBox.offsetLeft + translationWordBox.offsetWidth / 2);
        line.setAttribute("y2", translationWordBox.offsetTop);

        line.setAttribute("stroke", "#007bff");

        alignmentLinesSvg.appendChild(line);

        // Add event listeners for hover effect
        const handleMouseover = () => {
            originalWordBox.style.backgroundColor = "#f0f0f0";
            translationWordBox.style.backgroundColor = "#f0f0f0";
            line.setAttribute("stroke", "#ff0000");
        };

        const handleMouseout = () => {
            originalWordBox.style.backgroundColor = "";
            translationWordBox.style.backgroundColor = "";
            line.setAttribute("stroke", "#007bff");
        };

        originalWordBox.addEventListener("mouseover", handleMouseover);
        originalWordBox.addEventListener("mouseout", handleMouseout);

        translationWordBox.addEventListener("mouseover", handleMouseover);
        translationWordBox.addEventListener("mouseout", handleMouseout);
    });
};