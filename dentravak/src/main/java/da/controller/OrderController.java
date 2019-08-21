package da.controller;

import da.model.Order;
import da.repositories.OrderRepository;

import java.lang.Iterable;
import org.springframework.web.bind.annotation.*;

@RestController
public class OrderController {
    private OrderRepository repository;

    public OrderController(OrderRepository repository) {
        this.repository = repository;
    }

    @RequestMapping("/orders")
    public Iterable<Order> getAll() {
        return repository.findAll();
    }

    @RequestMapping(path = "/orders", method = RequestMethod.POST)
    public Order create(@RequestBody Order order) {
        return repository.save(order);
    }
}