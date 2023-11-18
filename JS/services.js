
$(document).ready(function() {
    $('#openPdfButton').click(function() {
        // Replace 'your-pdf-file.pdf' with the actual path to your PDF file.
        var pdfPath = 'tarrifCard.pdf';

        // Open the PDF in a new browser tab/window.
        window.open(pdfPath, '_blank');
    });
});

