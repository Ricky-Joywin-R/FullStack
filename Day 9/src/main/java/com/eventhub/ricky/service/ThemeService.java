package com.eventhub.ricky.service;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eventhub.ricky.model.Theme;
import com.eventhub.ricky.repository.ThemeRepository;



@Service
public class ThemeService {
    @Autowired
    ThemeRepository trepo;

    // @SuppressWarnings("null")
    public String addTheme(Theme e) {
        trepo.save(e);
        return "Theme added Successfully";
    }

    // @SuppressWarnings("null")
    public String updateTheme(Theme e) {
        trepo.save(e);
        return "Theme updated succesfully";
    }

    public String deleteTheme(int id) {
        trepo.deleteById(id);
        return "deleted Successfully";
    }

    public List<Theme> showTheme() {
        return trepo.findAll();
    }
}