package com.development.moon.dev.repository;

import com.development.moon.dev.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface AdminRepository extends JpaRepository<Admin, Integer> {
}
