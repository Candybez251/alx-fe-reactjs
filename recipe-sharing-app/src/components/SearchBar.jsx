// SearchBar.jsx
import React from 'react';
import { useRecipeStore } from '../recipeStore';

const SearchBar = () => {
    const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
    const filterRecipes = useRecipeStore((state) => state.filterRecipes);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        filterRecipes();
    };

    return (
        <input
            type="text"
            placeholder="Search recipes..."
            onChange={handleSearch}
            className="search-bar" // Add a class for styling if needed
        />
    );
};

export default SearchBar;