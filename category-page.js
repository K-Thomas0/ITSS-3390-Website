// Category page initialization
function initializeCategoryPage(category) {
    const recipesContainer = document.getElementById('recipesContainer');
    const searchInput = document.getElementById('headerSearchInput');
    const noResults = document.getElementById('noResults');
    const trendingRecipes = document.getElementById('trendingRecipes');
    const classicRecipes = document.getElementById('classicRecipes');
    
    let searchTerm = '';
    
    // Filter recipes by category
    function filterRecipes() {
        let filtered = recipes.filter(recipe => recipe.category === category);
        
        // Filter by search term
        if (searchTerm && searchTerm.trim()) {
            const term = searchTerm.toLowerCase().trim();
            filtered = filtered.filter(recipe => {
                // Search in title
                const titleMatch = recipe.title.toLowerCase().includes(term);
                
                // Search in description
                const descriptionMatch = recipe.description 
                    ? recipe.description.toLowerCase().includes(term)
                    : false;
                
                // Search in ingredients
                const ingredientsMatch = recipe.ingredients && Array.isArray(recipe.ingredients)
                    ? recipe.ingredients.some(ing => ing.toLowerCase().includes(term))
                    : false;
                
                // Search in instructions
                const instructionsText = Array.isArray(recipe.instructions) 
                    ? recipe.instructions.join(' ').toLowerCase()
                    : (recipe.instructions ? recipe.instructions.toLowerCase() : '');
                const instructionsMatch = instructionsText.includes(term);
                
                // Search in category
                const categoryMatch = recipe.category ? recipe.category.toLowerCase().includes(term) : false;
                
                return titleMatch || descriptionMatch || ingredientsMatch || instructionsMatch || categoryMatch;
            });
        }
        
        displayRecipes(filtered);
    }
    
    // Display recipes - use optimized version with document fragment
    function displayRecipes(recipesToShow) {
        if (recipesToShow.length === 0) {
            recipesContainer.style.display = 'none';
            noResults.style.display = 'block';
            return;
        }
        
        recipesContainer.style.display = 'grid';
        noResults.style.display = 'none';
        recipesContainer.innerHTML = '';
        
        // Use document fragment for better performance
        const fragment = document.createDocumentFragment();
        recipesToShow.forEach(recipe => {
            // Use createRecipeCard from script.js if available, otherwise fallback
            const card = (typeof createRecipeCard === 'function') 
                ? createRecipeCard(recipe, false)
                : createRecipeCardFallback(recipe);
            fragment.appendChild(card);
        });
        recipesContainer.appendChild(fragment);
    }
    
    // Fallback createRecipeCard if script.js not loaded (shouldn't happen, but safety)
    function createRecipeCardFallback(recipe) {
        if (typeof window.createRecipeCard === 'function') {
            return window.createRecipeCard(recipe, false);
        }
        // Minimal fallback
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.textContent = recipe.title || 'Untitled Recipe';
        return card;
    }
    
    // Get category page URL
    function getCategoryPage(category) {
        const categoryPages = {
            breakfast: 'breakfast.html',
            lunch: 'lunch.html',
            dinner: 'dinner.html',
            snacks: 'snacks.html',
            desserts: 'desserts.html'
        };
        return categoryPages[category] || 'index.html';
    }
    
    // Debounce function for search optimization
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Search input handler with debouncing for better performance
    if (searchInput) {
        const debouncedFilter = debounce(() => {
            filterRecipes();
        }, 300);
        
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value;
            debouncedFilter();
        });
    }
    
    // Search button handler
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            searchTerm = searchInput.value;
            filterRecipes();
        });
    }
    
    // Subscribe form handler
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = subscribeForm.querySelector('input[type="email"]').value;
            alert(`Thanks for subscribing! We'll send recipes to ${email}`);
            subscribeForm.reset();
        });
    }
    
    // Initialize - use functions from script.js if available
    filterRecipes();
    
    // Use displayTrendingRecipes from script.js if available
    if (typeof displayTrendingRecipes === 'function') {
        displayTrendingRecipes();
    } else if (typeof window.displayTrendingRecipes === 'function') {
        window.displayTrendingRecipes();
    }
    
    // Use displayClassicRecipes from script.js if available
    if (typeof displayClassicRecipes === 'function') {
        displayClassicRecipes();
    } else if (typeof window.displayClassicRecipes === 'function') {
        window.displayClassicRecipes();
    }
}

