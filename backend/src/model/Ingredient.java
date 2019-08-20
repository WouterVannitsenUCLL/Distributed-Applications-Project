package model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.UUID;

@Entity
public class Ingredient {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private UUID id;
    private String name;

    public Ingredient() {}

    public UUID getId() { return this.id; }

    public String getName() { return this.name; }
    
    public void setId(UUID id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }
}