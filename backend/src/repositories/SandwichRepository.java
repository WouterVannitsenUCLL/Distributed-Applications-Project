package repositories;

import model.Sandwich;
import org.springframework.data.repository.CrudRepository;
import java.util.UUID;

public interface SandwichRepository extends CrudRepository<Sandwich, UUID> {

}