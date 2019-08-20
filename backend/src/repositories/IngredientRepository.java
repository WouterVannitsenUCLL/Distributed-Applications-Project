package repositories;

import model.Ingredient;
import org.springframework.data.repository.CrudRepository;
import java.util.UUID;

public interface IngredientRepository extends CrudRepository<Ingredient, UUID> {

}