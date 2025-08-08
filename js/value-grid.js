const valueData = [
    {
        number: '80%',
        text: 'Reduction in model preparation time'
    },
    {
        number: '$100K+',
        text: 'Average annual savings per utility'
    },
    {
        number: '95%',
        text: 'First-time powerflow success rate'
    },
    {
        number: '200hr',
        text: 'Typical turnaround for model validation'
    }
];

// Get the existing value-grid container
const valueGrid = document.querySelector('.value-grid');

// Populate the grid
valueData.forEach(item => {
    const valueItem = document.createElement('div');
    valueItem.className = 'value-item';

    valueItem.innerHTML = `
    <div class="value-number">${item.number}</div>
    <div class="value-text">${item.text}</div>
  `;

    valueGrid.appendChild(valueItem);
});
