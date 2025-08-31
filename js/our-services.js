const servicesData = [
    {
        iconTitle: '🔍 Model Validation & Diagnosis',
        features: [
            'Comprehensive model health check',
            'Connectivity and topology analysis',
            'Equipment parameter validation',
            'Load flow readiness assessment',
            'Detailed diagnostic report'
        ],
        price: 'Starting at $2,500',
        buttonText: 'Request Quote',
        buttonLink: '#contact',
        promotionText: 'Limited Time — 2 Free Feeders'
    },
    {
        iconTitle: '⚡ Complete Model Repair',
        features: [
            'Full model validation service',
            'Automated repair where possible',
            'Manual correction of complex issues',
            'Powerflow verification',
            'Before/after comparison report'
        ],
        price: 'Starting at $5,000',
        buttonText: 'Request Quote',
        buttonLink: '#contact',
        promotionText: 'Limited Time — 1 Free Feeder'
    },
    {
        iconTitle: '🔧 Custom Automation Tools',
        features: [
            'Utility-specific validation rules',
            'Automated repair workflows',
            'Integration with existing systems',
            'Staff training and documentation',
            'Ongoing support and updates'
        ],
        price: 'Custom Pricing',
        buttonText: 'Discuss Project',
        buttonLink: '#contact',
        promotionText: 'Limited Time — 5 hours of free consulting'
    }
];

// Select the container
const servicesGrid = document.querySelector('.services-grid');

// Populate service cards
servicesData.forEach(service => {
    const card = document.createElement('div');

    // Build the features list
    const featureList = service.features.map(item => `<li>${item}</li>`).join('');

    card.innerHTML = `
    ${service.promotionText ? `<div class="promo-bar">${service.promotionText}</div>` : ''}
    <div class=service-card>
        <h3>${service.iconTitle}</h3>
        <ul>${featureList}</ul>
        <div class="price">${service.price}</div>
        <a href="${service.buttonLink}" class="btn-primary">${service.buttonText}</a>
    </div>
  `;

    servicesGrid.appendChild(card);
});
