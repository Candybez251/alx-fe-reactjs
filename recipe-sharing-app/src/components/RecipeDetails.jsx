import { useRecipeStore } from '../recipeStore';
import { useParams } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
    const { recipeId } = useParams(); // Getting the recipe ID from the URL
    const recipe = useRecipeStore((state) =>
        state.recipes.find((recipe) => recipe.id === parseInt(recipeId))
    );

    if (!recipe) return <p>Recipe not found</p>;

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <EditRecipeForm recipe={recipe} />
            <DeleteRecipeButton recipeId={recipe.id} />
        </div>
    );
};

export default RecipeDetails;