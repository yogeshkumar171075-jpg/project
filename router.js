/**
 * ARENA LOGS - Client-Side Router
 * Handles navigation between pages without full page reloads
 */

class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
        this.init();
    }

    /**
     * Register a route with its handler function
     * @param {string} path - Route path (e.g., '/home', '/teams')
     * @param {function} handler - Function to execute when route is accessed
     */
    addRoute(path, handler) {
        this.routes[path] = handler;
    }

    /**
     * Initialize router and set up event listeners
     */
    init() {
        // Handle browser back/forward buttons
        window.addEventListener('popstate', () => {
            this.loadRoute(window.location.pathname);
        });

        // Handle initial page load
        document.addEventListener('DOMContentLoaded', () => {
            // Check if splash screen should be shown
            if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
                if (localStorage.getItem('skipSplash') !== 'true') {
                    window.location.href = 'splash.html';
                    return;
                }
            }

            this.loadRoute(window.location.pathname);
        });

        // Intercept all link clicks
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-link]')) {
                e.preventDefault();
                const path = e.target.getAttribute('href');
                this.navigateTo(path);
            }
        });
    }

    /**
     * Navigate to a specific route
     * @param {string} path - Path to navigate to
     */
    navigateTo(path) {
        history.pushState(null, null, path);
        this.loadRoute(path);
    }

    /**
     * Load and execute route handler
     * @param {string} path - Path to load
     */
    async loadRoute(path) {
        // Normalize path
        if (path === '/' || path === '/index.html') {
            path = '/home';
        }

        // Check for dynamic routes (e.g., /matches/1)
        let handler = this.routes[path];
        let params = {};

        if (!handler) {
            // Try to match dynamic routes
            for (const route in this.routes) {
                const regex = this.pathToRegex(route);
                const match = path.match(regex);
                if (match) {
                    handler = this.routes[route];
                    params = this.extractParams(route, path);
                    break;
                }
            }
        }

        if (handler) {
            this.currentRoute = path;
            showLoading();
            try {
                await handler(params);
            } catch (error) {
                console.error('Route error:', error);
                this.show404();
            }
            hideLoading();
        } else {
            this.show404();
        }
    }

    /**
     * Convert route path to regex for dynamic matching
     * @param {string} path - Route path with :param syntax
     * @returns {RegExp} Regular expression for matching
     */
    pathToRegex(path) {
        return new RegExp('^' + path.replace(/:\w+/g, '([^/]+)') + '$');
    }

    /**
     * Extract parameters from dynamic route
     * @param {string} route - Route pattern
     * @param {string} path - Actual path
     * @returns {object} Parameters object
     */
    extractParams(route, path) {
        const keys = route.match(/:\w+/g) || [];
        const values = path.match(this.pathToRegex(route))?.slice(1) || [];
        const params = {};
        
        keys.forEach((key, i) => {
            params[key.substring(1)] = values[i];
        });
        
        return params;
    }

    /**
     * Show 404 error page
     */
    show404() {
        document.getElementById('app').innerHTML = `
            <div class="error-page">
                <div class="error-container">
                    <h1 class="error-code">404</h1>
                    <p class="error-message">PAGE NOT FOUND</p>
                    <p class="error-description">The requested resource could not be located in the database.</p>
                    <a href="/home" data-link class="error-button">RETURN TO HOME</a>
                </div>
            </div>
        `;
    }
}

// Loading overlay functions
function showLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) overlay.style.display = 'flex';
}

function hideLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) overlay.style.display = 'none';
}

// Create global router instance
const router = new Router();

// Export for use in other scripts
window.router = router;
