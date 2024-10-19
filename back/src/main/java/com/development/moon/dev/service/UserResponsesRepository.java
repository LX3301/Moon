package com.development.moon.dev.service;


import com.development.moon.dev.model.UserResponses;

import java.util.List;


public interface UserResponsesRepository {

    UserResponses save(UserResponses ur);

    UserResponses findById(Integer id);

    public List<UserResponses> findAll();
}
