package com.sjsu.vansbackend.announcements;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AnnouncementDAO {
    private String subject;
    private String announcement;
    private Integer courseId;

    public Announcement asAnnouncement() {
        Announcement announcement = new Announcement();
        announcement.setSubject(this.getSubject());
        announcement.setAnnouncement(this.getAnnouncement());
        return announcement;
    }
}
