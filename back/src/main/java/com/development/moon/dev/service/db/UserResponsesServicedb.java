package com.development.moon.dev.service.db;

import com.development.moon.dev.model.UserResponses;
import com.development.moon.dev.repository.UserResponsesRepository;
import com.development.moon.dev.service.UserResponsesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserResponsesServicedb implements UserResponsesService {

    @Autowired
    private UserResponsesRepository urs;
    @Override
    public UserResponses save(UserResponses ur) {
        return urs.save(ur);
    }

    @Override
    public UserResponses findById(Integer id) {
        return urs.findById(id).get();
    }

    @Override
    public List<UserResponses> findAll() {
        return urs.findAll();
    }
}
