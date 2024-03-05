package com.eventhub.ricky.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eventhub.ricky.model.Venue;


@Repository
public interface VenueRepository extends JpaRepository<Venue, Integer> {

}
