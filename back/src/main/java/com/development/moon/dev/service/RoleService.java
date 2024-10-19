package com.development.moon.dev.service;

import com.development.moon.dev.model.Role;

import java.util.List;

public interface RoleService {

    Role save(Role role);

    Role findById(Integer id);

    public List<Role> findAll();
}
