package com.eventhub.ricky.service;


import java.security.Principal;

import com.eventhub.ricky.dto.request.PasswordRequest;

public interface UserService {

    void forgotPassword(PasswordRequest request, Principal principal);

}
