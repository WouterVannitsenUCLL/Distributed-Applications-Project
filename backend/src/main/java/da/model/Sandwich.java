package da.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.UUID;
import java.math.BigDecimal;

@Entity
public class Sandwich {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private UUID id;
    private String name;
    private String ingredients;
    private BigDecimal price;

    public Sandwich() {}

    public UUID getId() { return this.id; }
    
    public String getName() { return this.name; }

    public String getIngredients() { return this.ingredients; }

    public BigDecimal getPrice() { return this.price; }

    public void setId(UUID id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }
}