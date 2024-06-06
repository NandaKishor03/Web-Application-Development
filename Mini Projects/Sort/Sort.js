function sortNumbers() {
    const input = document.getElementById('numbers').value;
    const numbers = input.split(',').map(Number);
    const sortedNumbers = numbers.sort((a,b) => a-b);
    document.getElementById('sorted').value = sortedNumbers.join(',');
    document.getElementById('numbers').value = "";
}