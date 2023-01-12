module.exports = [
    { from: '/my-test', to: '/business', type: 301 },
    { from: '/about-us', to: 'https://www.google.com', type: 301 },
    { from: '/latest/(.*)', to: 'https://www.google.com', type: 301 }
];