package controller;

import model.Sandwich;
import repositores.SandwichRepository;

import org.springframework.web.bind.annotation.*;

@RestController
public class SandwichController {
    private SandwichRepository repository;

    public SandwichController(SandwichRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/sandwiches")
    public List<Sandwich> getAll() {
        return repository.findAll();
    }

    @RequestMapping(value = "/sandwiches", method = RequestMethod.POST)
    public Sandwich create(@RequestBody Sandwich sandwich) {
        return repository.save(sandwich);
    }

    @RequestMapping(value = "/sandwiches/{id}", method = RequestMethod.PUT) 
    public Sandwich updateSandwich(@PathVariable UUID id, @RequestBody Sandwich sandwich) {
        if (id.equals(sandwich.getId())) {
            return repository.save(sandwich);
        }
    }
}