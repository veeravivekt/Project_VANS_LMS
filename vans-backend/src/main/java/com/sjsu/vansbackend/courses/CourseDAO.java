package com.sjsu.vansbackend.courses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CourseDAO {
    private Integer id;
    private String syllabus;
    private String professor;
}
