package controller;

import model.Order;
import repositores.OrderRepository;

import org.springframework.web.bind.annotation.*;

@RestController
public class OrderController {
    private OrderRepository repository;

    public OrderController(OrderRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/orders")
    public List<Order> getAll() {
        return repository.findAll();
    }

    @RequestMapping(value = "/orders", method = RequestMethod.POST)
    public Order create(@RequestBody Order order) {
        return repository.save(order);
    }
}