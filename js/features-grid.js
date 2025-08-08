const featuresData = [
    {
        icon: '🔧',
        title: 'Expert Validation',
        description: '6+ years of national lab experience in power distribution modeling. We know what makes models simulation-ready.'
    },
    {
        icon: '⚡',
        title: 'Rapid Turnaround',
        description: 'Get your models validated and repaired in weeks, not years. Our proven processes ensure quick delivery.'
    },
    {
        icon: '🎯',
        title: 'Custom Solutions',
        description: 'Every utility is unique. We tailor our approach to your specific data quality challenges and modeling standards.'
    },
    {
        icon: '📊',
        title: 'Detailed Reports',
        description: 'Comprehensive analysis reports showing exactly what was fixed, why, and recommendations for future maintenance.'
    },
    {
        icon: '🛡️',
        title: 'Data Security',
        description: 'Your grid data is handled with the highest security standards. All work done within secure, compliant environments.'
    },
    {
        icon: '🤝',
        title: 'Ongoing Support',
        description: 'We don\'t just fix and leave. Get ongoing support and training to maintain model quality internally.'
    }
];

// Hook into the .features-grid container
const featuresGrid = document.querySelector('#features .features-grid');

// Populate it
featuresData.forEach(feature => {
    const card = document.createElement('div');
    card.className = 'feature-card';

    card.innerHTML = `
    <div class="feature-icon">${feature.icon}</div>
    <h3>${feature.title}</h3>
    <p>${feature.description}</p>
  `;

    featuresGrid.appendChild(card);
});
