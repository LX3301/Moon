package com.development.moon.dev.service.db;

import com.development.moon.dev.model.Admin;
import com.development.moon.dev.repository.AdminRepository;
import com.development.moon.dev.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminServicedb implements AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Override
    public Admin save(Admin admin) {
        return adminRepository.save(admin);
    }

    @Override
    public Admin findById(Integer id) {
        return adminRepository.findById(id).get();
    }

    @Override
    public List<Admin> findAll() {
        return adminRepository.findAll();
    }
}
