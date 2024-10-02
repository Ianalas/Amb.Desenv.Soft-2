package com.apirest.rest_api.service;
import org.springframework.stereotype.Service;

@Service
public class ContagemService {

    public int isCont(int[] numeros){
        int cont = 0;
        for (int i = 0; i < numeros.length ; i++) {
            int nota = numeros[i];
            if(nota >= 50){
                cont++;
            }
        }
        return cont;
    }
}
