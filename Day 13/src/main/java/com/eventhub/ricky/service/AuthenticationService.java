package com.eventhub.ricky.service;

import java.io.IOException;

import com.eventhub.ricky.dto.request.LoginRequest;
import com.eventhub.ricky.dto.request.RegisterRequest;
import com.eventhub.ricky.dto.response.LoginResponse;
import com.eventhub.ricky.dto.response.RegisterResponse;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

    void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException;
}
