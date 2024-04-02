package com.sjsu.vansbackend.userAuth.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateUserDAO {
    private String username;
    private String name;
}
