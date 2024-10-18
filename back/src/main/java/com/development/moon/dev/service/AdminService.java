package com.development.moon.dev.service;

import com.development.moon.dev.model.Admin;

import java.util.List;

public interface AdminService {

    Admin save(Admin admin);

    Admin findById(Integer id);

    public List<Admin> findAll();
}
