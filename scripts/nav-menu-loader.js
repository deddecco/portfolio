// header.js

document.addEventListener('DOMContentLoaded', function () {
    // Create the header element
    const header = document.createElement('header');

    // Create the container div
    const containerDiv = document.createElement('div');
    containerDiv.className = 'container-fluid';

    // Create the hamburger button
    const hamburgerButton = document.createElement('button');
    hamburgerButton.className = 'hamburger';
    hamburgerButton.textContent = '☰';

    // Create the row div
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row justify-content-center nav-links-container';

    // Array of navigation items
    const navItems = [
        {href: './html/index.html', text: 'Home'},
        {href: './html/about.html', text: 'About'},
        {href: './html/skills.html', text: 'Skills'},
        {href: './html/experience.html', text: 'Experience'},
        {href: './html/projects.html', text: 'Projects'},
        {href: './html/social.html', text: 'Social'},
        {href: './html/contact.html', text: 'Contact'}
    ];

    // Create navigation links
    navItems.forEach(item => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-12 col-md-auto btn';

        const link = document.createElement('a');
        link.href = item.href;
        link.className = 'btn w-100 nav-links';
        link.textContent = item.text;

        colDiv.appendChild(link);
        rowDiv.appendChild(colDiv);
    });

    // Assemble the header
    containerDiv.appendChild(hamburgerButton);
    containerDiv.appendChild(rowDiv);
    header.appendChild(containerDiv);

    // Insert the header at the beginning of the body
    document.body.insertBefore(header, document.body.firstChild);
});