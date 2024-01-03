document.getElementById('downloadButton').addEventListener('click', function () {
    var link = document.createElement('a');
    link.href = 'Onkar Dhillon - Resume.pdf';
    link.download = 'Onkar Dhillon - Resume.pdf';
    link.dispatchEvent(new MouseEvent('click'));
});


