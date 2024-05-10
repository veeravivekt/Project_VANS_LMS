package com.sjsu.vansbackend.announcements;

import com.sjsu.vansbackend.assignments.Assignment;
import com.sjsu.vansbackend.courses.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AnnouncementRepository extends JpaRepository<Announcement, Integer> {
}
