package com.sjsu.vansbackend.announcements;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Announcement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String subject;

    @Column(length = 10000)
    private String announcement;

    public Announcement(String subject, String announcement) {
        this.subject = subject;
        this.announcement = announcement;
    }

}
