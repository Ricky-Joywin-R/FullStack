package com.eventhub.ricky.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.eventhub.ricky.model.Venue;
import com.eventhub.ricky.service.impl.VenueService;

import io.swagger.v3.oas.annotations.tags.Tag;



@RestController
@Tag(name = "Venue Controller")
public class VenueController {
    @Autowired
    VenueService service;

    @GetMapping("/showVenue")
    public List<Venue> showVDetails() {
        return service.showVenues();
    }

    @PutMapping("/updateVenue")
    public String updateVenue(@RequestBody Venue e) {
        return service.updateVenue(e);
    }

    @DeleteMapping("/deleteVenue/{id}")
    public String deleteEvents(@PathVariable int id) {
        return service.deleteVenue(id);
    }

    @PostMapping("/addVenue")
    public String addEvents(@RequestBody Venue e) {
        return service.addVenue(e);
    }
}
