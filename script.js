document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('gridContainer');
    const navLinksContainer = document.querySelector('.nav-links');
    const footer = document.querySelector('.footer');

    let activePageId = 'default';

    // Use the global window.dashboardData loaded from data.js
    const dashboardData = window.dashboardData || {};

    function initDashboard() {
        // Initialize Settings
        if (dashboardData.settings) {
            if (dashboardData.settings.footer_text) {
                footer.textContent = dashboardData.settings.footer_text;
            }
        }

        // Initial Render
        renderNavigation();
        renderCards();
    }

    // Start immediately since data is loaded synchronously via script tag
    initDashboard();

    // Render Navigation
    function renderNavigation() {
        navLinksContainer.innerHTML = '';

        if (dashboardData.pages) {
            // Ensure active page is still valid, else reset
            if (!dashboardData.pages.find(p => p.id === activePageId)) {
                activePageId = dashboardData.pages[0].id;
            }

            dashboardData.pages.forEach(page => {
                const link = document.createElement('a');
                link.href = '#';
                link.className = `nav-link ${page.id === activePageId ? 'active' : ''}`;
                link.textContent = page.name;
                link.onclick = (e) => {
                    e.preventDefault();
                    activePageId = page.id;
                    renderNavigation(); // Re-render to update active state
                    renderCards();
                };
                navLinksContainer.appendChild(link);
            });
        }
    }

    function renderCards() {
        gridContainer.innerHTML = '';

        if (dashboardData.systems) {
            dashboardData.systems.forEach(system => {
                // Filter by Page
                if (system.pages && !system.pages.includes(activePageId)) return;

                const cardEl = document.createElement('div');
                cardEl.className = 'flip-card';

                // Single Link Click Behavior
                if (system.links && system.links.length === 1) {
                    cardEl.style.cursor = 'pointer';
                    cardEl.onclick = (e) => {
                        // Prevent double-navigation if clicking the actual anchor tag
                        if (!e.target.closest('a')) {
                            window.open(system.links[0].url, '_blank');
                        }
                    };
                }

                // Handle Size
                if (system.size === '2x1') {
                    cardEl.style.gridColumn = 'span 2';
                    cardEl.style.width = '400px';
                } else if (system.size === '2x2') {
                    cardEl.style.gridColumn = 'span 2';
                    cardEl.style.gridRow = 'span 2';
                    cardEl.style.width = '400px';
                    cardEl.style.height = '300px';
                }

                // Front Face styles
                const frontBg = system.front_color || '#fff';
                // Back Face styles
                const backBg = system.back_color || '#333';

                // Image styling
                let imgStyle = '';
                if (system.image_size) {
                    const sizeVal = system.image_size.includes('%') || system.image_size.includes('px') ? system.image_size : system.image_size + '%';
                    imgStyle = `width: ${sizeVal}; height: ${sizeVal};`;
                }

                // Image Mode class
                const imgModeClass = system.image_mode || 'fit';

                let frontContent = '';
                // Resolve Icon Path
                let iconSrc = system.image;
                // Path logic removed - assuming local relative paths in data.js
                // if (iconSrc && !iconSrc.startsWith('http') && !iconSrc.startsWith('data:')) ...

                if (iconSrc) {
                    frontContent = `<img src="${iconSrc}" class="${imgModeClass}" style="${imgStyle}" alt="${system.name}" onerror="this.style.display='none'">`;
                }

                // Tags Logic
                let tagsHtml = '';
                if (system.tags && Array.isArray(system.tags) && system.tags.length > 0) {
                    const tagBadges = system.tags.map(tag => `<span class="tag-badge">${tag}</span>`).join('');
                    tagsHtml = `<div class="tags-container">${tagBadges}</div>`;
                }

                // Back Links Logic
                let linksContent = '';
                const links = system.links || [];

                if (links.length > 4) {
                    // Paginated Structure
                    const linkElements = links.map((l, i) =>
                        `<a href="${l.url}" target="_blank" class="paginated-link ${i < 4 ? 'visible' : ''}" data-index="${i}" onclick="event.stopPropagation();">${l.text}</a>`
                    ).join('');

                    linksContent = `
                    <div class="paginated-links" data-page="0">
                        <button class="link-nav prev" onclick="event.stopPropagation(); paginateLinks(this, -1);" disabled>‹</button>
                        <div class="links-container">
                            ${linkElements}
                        </div>
                        <button class="link-nav next" onclick="event.stopPropagation(); paginateLinks(this, 1);"${links.length <= 4 ? ' disabled' : ''}>›</button>
                    </div>`;
                } else {
                    // Standard List
                    linksContent = `<div class="element">` + links.map(l =>
                        `<a href="${l.url}" target="_blank" onclick="event.stopPropagation();">${l.text}</a>`
                    ).join('') + `</div>`;
                }

                // Inner HTML Structure
                cardEl.innerHTML = `
                <div class="flip-card-inner">
                    <div class="flip-card-front" style="background-color: ${frontBg}">
                         ${tagsHtml}
                         ${frontContent}
                    </div>
                    <div class="flip-card-back" style="background-color: ${backBg}">
                        ${linksContent}
                    </div>
                </div>
                `;

                gridContainer.appendChild(cardEl);
            });
        }
    }
});

// Global Pagination Function
window.paginateLinks = function (btn, dir) {
    const container = btn.closest('.paginated-links');
    const links = container.querySelectorAll('.paginated-link');
    let page = parseInt(container.dataset.page) || 0;
    const perPage = 4;
    const totalPages = Math.ceil(links.length / perPage);

    // Update page index
    page = Math.max(0, Math.min(totalPages - 1, page + dir));
    container.dataset.page = page;

    // Toggle visibility
    links.forEach((link, i) => {
        const start = page * perPage;
        const end = start + perPage;
        link.classList.toggle('visible', i >= start && i < end);
    });

    // Update button states
    container.querySelector('.prev').disabled = (page === 0);
    container.querySelector('.next').disabled = (page >= totalPages - 1);
};
