package com.apirest.rest_api.service;
import org.springframework.stereotype.Service;

@Service
public class NumPrimoService {

    public static String isPrimo(String number){
        int n = Integer.parseInt(number);
        int cont = 0;
        if(n>0){
            for(int i = 1; i <= n; i++){
                if(n % i == 0){
                    cont = cont + 1;
                }
            }
        }
        if(cont == 2){
            return "O número "+n+" é primo";
        }
        return "O número "+n+" não é primo";
    }
}

