package da.controller;

import da.model.Sandwich;
import da.repositories.SandwichRepository;

import java.util.UUID;
import java.lang.Iterable;
import org.springframework.web.bind.annotation.*;

@RestController
public class SandwichController {
    private SandwichRepository repository;

    public SandwichController(SandwichRepository repository) {
        this.repository = repository;
    }

    @RequestMapping("/sandwiches")
    public Iterable<Sandwich> getAll() {
        return repository.findAll();
    }

    @RequestMapping(value = "/sandwiches", method = RequestMethod.POST)
    public Sandwich create(@RequestBody Sandwich sandwich) {
        return repository.save(sandwich);
    }

    @RequestMapping(value = "/sandwiches/{id}", method = RequestMethod.PUT) 
    public Sandwich updateSandwich(@PathVariable UUID id, @RequestBody Sandwich sandwich) {
        if (!id.equals(sandwich.getId())) throw new IllegalArgumentException("Wrong paramters!");
        return repository.save(sandwich);
    }
}