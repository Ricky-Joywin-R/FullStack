package com.eventhub.ricky.model;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "venue")
public class Venue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int venue_id;

    @Column
    private String venue_name;

    @Column
    private String venue_location;
    
    @Column
    private int venue_price;

}