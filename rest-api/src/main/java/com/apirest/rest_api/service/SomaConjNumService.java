package com.apirest.rest_api.service;
import org.springframework.stereotype.Service;

@Service
public class SomaConjNumService {

    public int isSomar(int[] numeros){
        int sum= 0;
        for (int i = 0; i < numeros.length; i++) {
            sum = sum + numeros[i];
        }
        return sum;
    }
}
