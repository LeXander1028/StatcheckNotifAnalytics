package com.jizas.statcheck.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jizas.statcheck.Entity.AnalyticsEntity;

@Repository
public interface AnalyticsRepository extends JpaRepository<AnalyticsEntity, Integer> {

    // Custom method to find analytics by RoomID
    List<AnalyticsEntity> findByRoomId(int roomId);
}