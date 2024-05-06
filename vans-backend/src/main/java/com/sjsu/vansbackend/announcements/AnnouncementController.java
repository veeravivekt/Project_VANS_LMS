package com.sjsu.vansbackend.announcements;

import com.sjsu.vansbackend.courses.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/announcement")
public class AnnouncementController {

    @Autowired
    private AnnouncementService announcementService;
    @Autowired
    private CourseRepository courseRepository;

    @PostMapping("/add")
    public Announcement addAnnouncement(@RequestBody AnnouncementDAO announcementDAO) {
        Announcement announcement = announcementService.addAnnouncement(announcementDAO.asAnnouncement());
        courseRepository.findCourseById(announcementDAO.getCourseId()).ifPresent(course -> {
            course.getAnnouncement().add(announcement);
            courseRepository.save(course);
        });
        return announcement;
    }
}
