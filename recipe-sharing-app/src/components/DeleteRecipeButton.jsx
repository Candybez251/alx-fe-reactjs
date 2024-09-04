// DeleteRecipeButton.jsx
import { useRecipeStore } from '../recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
    const navigate = useNavigate();

    const handleDelete = () => {
        deleteRecipe(recipeId); // Deletes the recipe
        navigate('/'); // Redirects to the home page or recipe list after deletion
    };

    return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;