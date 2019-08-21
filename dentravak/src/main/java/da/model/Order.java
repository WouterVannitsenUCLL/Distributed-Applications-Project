package da.model;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;

import java.util.UUID;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name="SANDWICH_ORDER")
public class Order {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private UUID id;
    private UUID sandwichId;
    private String phoneNumber;
    @JsonProperty("breadType")
    private BreadType breadType;
    private LocalDateTime date;

    @PrePersist
    public void before() {
        if (this.date == null) {
            this.date = LocalDateTime.now();
        }
    }

    public Order() {}

    public UUID getId() { return this.id; }

    public UUID getSandwichId() { return this.sandwichId; }
    
    public String getPhoneNumber() { return this.phoneNumber; }

    public BreadType getBreadType() { return this.breadType; }

    public LocalDateTime getDate() { return this.date; }

    public void setId(UUID id) {
        this.id = id;
    }

    public void setSandwichId(UUID sandwichId) {
        this.sandwichId = sandwichId;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setBreadType(BreadType breadType) {
        this.breadType = breadType;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }
}